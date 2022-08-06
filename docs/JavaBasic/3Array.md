---
title: 3Array
date: 2022-07-26 07:25:36
permalink: /pages/f2a8b1/
categories:
  - JavaBasic
tags:
  - 
---
# Array

## 前言

[a[i\][j] 和 a[j][i] 还有这些旁门左道？！](https://mp.weixin.qq.com/s?__biz=MzU0MzQ5MDA0Mw==&mid=2247489899&idx=1&sn=7646d24134d58bbd9abccb38efd5b4d7&chksm=fb0bf3ffcc7c7ae978923cbc0a699a30351ee5563b3143a1b7ff51a13442438d52afbfb0aae5&mpshare=1&scene=1&srcid=0417JMxfA4wIjhBbCFVTWD2C&sharer_sharetime=1587111637324&sharer_shareid=5cc2777764c85c1d841997739b5bb6f4&key=a1183f4560d3e24eefcaa9229a8597d92ab844a4dc10f2d6c65ba012d683960ca94040388509c9c2575f559a33a0cd06c1c6a11deac279ca3518e8b9ab579fcd074a1c3aa8ccf955aa672b86d05e7517&ascene=1&uin=MzEzNTMxNzU5NQ%3D%3D&devicetype=Windows+10+x64&version=62090070&lang=zh_CN&exportkey=AXHQMn9p8d%2BoCuPNgwlPxRw%3D&pass_ticket=N3Qgh%2BqPWsg8OSVAn15rWrc2yIvceNPD50kvW0Q8VaP%2FdX0qUUs8K2fGlgLqZQdF)

本文以一个简单的程序开头——数组赋值：

```Java
int LEN = 10000;
int[][] arr = new int[LEN][LEN];

for (int i = 0; i < LEN; i++) {
    for (int j = 0; j < LEN; j++) {
        arr[i][j] = 1;
    }
}
```

> 示例中虽然采用了Java，但是熟悉其他编程语言的同学可以自行脑补成自己熟悉的语言，如C/C++、Go、Python之类的，这里的知识点不限制在语言层级。

我们在使用这种for循环的时候，是否会习惯性地使用arr[i][j]的这种写法? 其实很多开源代码、技术书籍示例中都是如此。你是否还考虑过还有如下这种写法，即将 arr[i][j] 替换成 arr[j][i] ：

```Java
int LEN = 10000;
int[][] arr = new int[LEN][LEN];

for (int i = 0; i < LEN; i++) {
    for (int j = 0; j < LEN; j++) {
        arr[j][i] = 1;
    }
}
```

两段代码功能完全一样，究竟有何区别？两者性能会有数十倍或者数百倍之差。

有些同学看到这里，直接祭出IDE，运行试了一下，发现第一段代码的性能最优，所以很快地得出了a[i][j]最优的结论。不过也会有同学会运行出第二段代码性能更优的结果，即a[j][i]最优。这到底是怎么回事呢？

## 两种最基本的存放方式

从语言本身看，这个问题的要点在于语言怎样实现矩阵 `arr[M][N] `的存放。有两种最基本的存放方式：一种是第1下标优先存放；另一种是第2下标优先存放。也就是一般所说的行优先（Row-major）和列优先（Column-major）。

举个例子，对于下面的数组：

![img](assets/640-1587112691833.webp)

可以有两种存储方式：左为列优先，右为行优先。

![img](assets/640-1587112691834.webp)

行优先存储，顾名思义，就是一行的数据存放在一起，然后逐行存放。

列优先存储，就是每一列的数据是存储在一起的，一列一列地存放在内存中。

这两种存储方法，对于编写遍历二维矩阵的循环语句，还是有一定影响的。**比如，如果是按行优先存储的，那么在遍历时，一行一行的读取数据，肯定比一列一列地读取整个数组，要方便许多（前者连续访问内存，有利于CPU高速缓存，后者不联系访问内存，会引起频繁更新高速缓存）**。

行优先（Row-major）或者列优先（Column-major）没有好坏，但其直接涉及到对内存中数据的最佳存储访问方式。因为在内存使用上，程序访问的内存地址之间连续性越好，程序的访问效率就越高；相应地，程序访问的内存地址之间连续性越差。所以，我们应该尽量

* 在行优先机制的编译器，比如C/C++、Objective-C（for C-style arrays）、Pascal等等上，采用行优先的数据存储方式；
* 在列优先机制的编译器，比如Fortune、Matlab、R等等上，采用列优先的数据存储方式。但这种思想渗透到编程中之后，代码的质量就会提高一个档次。

## 伊利夫向量Iliffe

这里没有提到市场占有率很高的Java语言，那么它们属于行优先还是列优先呢？

答案：两者都不是。

密集数组存储的一个典型替代方案是使用伊利夫向量（Iliffe vector），它通常将元素存储在连续的同一行中(如同Row-major顺序)，但不存储行本身。

什么是Iliffe向量？在计算机编程中，Iliffe向量是一种用于实现多维数组的数据结构。n维数组的Iliffe向量(其中n≥2)由  指向(n - 1)维数组的指针的向量(或1维数组)组成  。它们通常用于避免在对数组元素执行地址计算时执行昂贵的乘法操作。它们还可用于实现交错数组，如三角形数组、三角形矩阵和其他各种不规则形状的数组。数据结构以John K. Iliffe命名。

它们的缺点包括需要多个链接指针来访问一个元素，以及需要额外的工作来确定n维数组中的下一行，以允许优化编译器预取它。在CPU明显快于主存的系统中，这两个问题都是延迟的来源。

在Java、Python(多维列表)、Ruby、Visual Basic . net、Perl、PHP、JavaScript、Objective-C(当使用NSArray时，不是一个Row-magor C-Style的数组)、Swift和Atlas Autocode等语言中的多维数组被实现为Iliffe向量。利用Iliffe向量实现OLAP产品全息的稀疏多维阵列。

回到开头，如果使用Java语言运行文中开头的2段代码，哪个更叫高效呢？请在留言区留下你的答案和思考。
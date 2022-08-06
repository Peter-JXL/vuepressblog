---
title: 2DataType
date: 2022-07-26 07:25:34
permalink: /pages/ba28fb/
categories:
  - JavaBasic
tags:
  - 
---
# 数据类型

## [为什么 Java 中“1000\==1000”为false，而”100==100“为true？](https://mp.weixin.qq.com/s?__biz=MzIxMjE5MTE1Nw==&mid=2653211871&idx=2&sn=1bd2b487c36f1b537ed8b849bd4dfd76&chksm=8c99be05bbee3713c3fa2217e493948ebc2d6d37008b4a99bd5a4501ccbbee251f6cc21fc334&mpshare=1&scene=1&srcid=0910qPLVIga4QnySgndVqVpy&sharer_sharetime=1599725144054&sharer_shareid=5cc2777764c85c1d841997739b5bb6f4&key=ad479a0dc78b18f314b75646df0b2486353e2c8f7bbb47aa5b96698a4f43ca6ae94874e9e2360150fe0be9713c77ca5dd284a520b51133aa79bcfdc3c03ba10e374d85b7473c0d0ba7e61690b6fd72c76be3f859fbda989e64d52fa4b9734e8ec4d2db293d62be9bd193762e2b16aace432805de5d6a400f2133b17a255f54ba&ascene=1&uin=MzEzNTMxNzU5NQ%3D%3D&devicetype=Windows+10+x64&version=62090529&lang=zh_CN&exportkey=AYg79Bbcz43Os%2FZtVVJdVyA%3D&pass_ticket=ILCP%2F1aOSoxdBvYoh6UFyiqayEopSbUerx2rk7gbt3%2FfZ1hmRfSGhIOyj2a989NM&wx_header=0)

来自： 码农网

译文链接：http://www.codeceo.com/article/why-java-1000-100.html

英文原文：https://dzone.com/articles/why-1000-1000-returns-false-but-100-100-returns-tr

**为什么 Java 中“1000\==1000”为false，而”100==100“为true？** 这是一个挺有意思的讨论话题。

**如果你运行下面的代码：**

```Java
Integer a = 1000, b = 1000;  
System.out.println(a == b);//1
Integer c = 100, d = 100;  
System.out.println(c == d);//2
```

你会得到

```
false
true
```

基本知识：我们知道，如果两个引用指向同一个对象，用==表示它们是相等的。如果两个引用指向不同的对象，用==表示它们是不相等的，即使它们的内容相同。

因此，后面一条语句也应该是false 。

这就是它有趣的地方了。如果你看去看 Integer.java 类，你会发现有一个内部私有类，IntegerCache.java，它缓存了从-128到127之间的所有的整数对象。

所以事情就成了，所有的小整数在内部缓存，然后当我们声明类似——

```Java
Integer c = 100;
```

的时候，它实际上在内部做的是：

```Java
Integer i = Integer.valueOf(100);
```

现在，如果我们去看valueOf()方法，我们可以看到

```Java
public static Integer valueOf(int i) {
      if (i >= IntegerCache.low && i
          return IntegerCache.cache[i + (-IntegerCache.low)];
      return new Integer(i);
    }
```

如果值的范围在-128到127之间，它就从高速缓存返回实例。

所以…

```Java
Integer c = 100, d = 100;
```

指向了同一个对象。

这就是为什么我们写

```Java
System.out.println(c == d);
```

我们可以得到true。

现在你可能会问，为什么这里需要缓存？

合乎逻辑的理由是，在此范围内的“小”整数使用率比大整数要高，因此，使用相同的底层对象是有价值的，可以减少潜在的内存占用。

然而，通过反射API你会误用此功能。

运行下面的代码，享受它的魅力吧

```Java
public static void main(String[] args) throws NoSuchFieldException, IllegalAccessException {

      Class cache = Integer.class.getDeclaredClasses()[0]; //1
      Field myCache = cache.getDeclaredField("cache"); //2
      myCache.setAccessible(true);//3

      Integer[] newCache = (Integer[]) myCache.get(cache); //4
      newCache[132] = newCache[133]; //5

      int a = 2;
      int b = a + a;
      System.out.printf("%d + %d = %d", a, a, b); //
    }
```
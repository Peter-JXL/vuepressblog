# 概述
## 1.1 计算机网络在信息时代的作用

* 计算机网络已由一种通信基础设施发展成为一种重要的信息服务基础设施。
* 计算机网络已经像水、电、煤气这些基础设施一样，成为我们生活中不可或缺的一部分

下面我们来看看来自中国互联网信息中心 CNNIC的调查数据。我们可以访问CNNAC的官方网站，[中国互联网络信息中心](https://www.cnnic.net.cn/)下载《中国互联网发展研究报告》

在制作本课程时，我们下载到的是2019年2月发布的第43次中国互联网发展状况统计报告。我们来看看其中的一些相关数据，这是我国网民规模和互联网普及率,从2008年到2018年这10年的发展情况，我国网民规模从2008年的2.98亿增长到2018年的8.29亿，互联网普及率从2008年的22.6%增长到2018年的59.6%

![image.png](assets/image-20220112204824-3ruvgk9.png)


这是我国手机网民规模及其占网民比例，从2008年到2018年这10年的发展情况。我国手机网民规模从2008年的1.18亿增长到2018年的8.17亿。网民中使用手机上网的比例由2008年的39.5%增长到2018年的98.6%，

![image.png](assets/image-20220112204854-6o6k44m.png)



这是我国网民平均每周上网时长从2011年到2018年这8年的发展情况，我国网民平均每周上网时长从2011年的18.7个小时增长到2018年的27.6个小时，平均每天的上网时长为4个小时.

![image.png](assets/image-20220112204929-q7hvm87.png)


这是2017年12月到2018年12月，我国网民各类互联网应用的使用率,由高到低依次为即时通信、搜索引擎、网络新闻、网络视频、网络购物、网上支付、网络音乐、网络游戏、网络文学、网上银行、旅行预订、网上订外卖、网络直播、微博、网约专车或快车，网约出租车、在线教育、互联网理财、短视频

相信同学们一定使用过上述这些类别的互联网应用，即便不是全部类别都使用过，那也不可能是全部都没有使用过。我们来听听互联网支付温顿瑟夫是怎么说的。YOU CAN'T ESCAPE FROM CONTACT WITH THE INTERNET，SO WHY NOT GET TO KNOW IT AND USE IT？没错，既然我们无法避免接触计算机网络，那么为何不去了解它并使用它？

![image.png](assets/image-20220112205009-szntr65.png)




## 1.2  因特网概述

1. 网络、互连网（互联网）和因特网
2.  因特网发展的三个阶段
3. 因特网的标准化工作
4. 因特网的组成



我们首先介绍网络、互联网（互连网）因特网的基本概念，

* 网络（Network）是由若干结点（Node）和连接这些结点的链路（Link）组成的。例如下图所示，笔记本电脑是一个结点，台式电脑是一个结点，网络打印机是一个结点，而将他们互联起来的交换机也是一个结点。当然了，结点之间的互联还需要使用链路，可以是有线链路，也可以是无线链路。在本例中4个结点和三段电路就构成了一个简单的网络
* 多个网络还可以通过路由器互连起来，这样就构成了一个覆盖范围更大的网络，即互联网（或互连网）。因此，互联网是"网络的网络（Network of Networks）"。
* 我们几乎每天都在使用的因特网（Internet）是世界上最大的互联网，它的用户数以亿计，互联的网络数以百万计。在我们今后的课程中，因特网常常用一朵云，表示连接在因特网上的计算机称为主机，而因特网内部的细节，也就是路由器是怎样把许多网络连接起来的，往往省略不用给出。

![image.png](assets/image-20211207200556-4h566yo.png)
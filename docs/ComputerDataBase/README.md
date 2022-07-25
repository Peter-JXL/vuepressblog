#  什么是数据库？
  
> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 https://mp.weixin.qq.com/s/Bc6L-nDK66sEEN66w-eDhg

这是《如何学习 SQL》的第 2 篇文章，想知道写作初衷的可以看这里：[为什么要学习 SQL？](http://mp.weixin.qq.com/s?__biz=MzAxMTMwNTMxMQ==&mid=2649245117&idx=1&sn=29996a47e87a4219d5a206457cc9b987&chksm=835fcd8db428449b2a38fe1e6b77b5d5c39e17d02f9f3bd82c9eadf0af7be6f8c626e3997753&scene=21#wechat_redirect)



你可能会问：**我的数据就存储在自己电脑里面的 excel 表里里，还要数据库干嘛？**

Excle 的数据的确很方便，但是对于企业来说就不一样了。一个公司里面可能有成千上万的 Excel 表格，还在不同的电脑上，而他们的员工和客户需要实时看到企业给他们提供的所有数据，这种文件管理的方法就很麻烦，总不能每分钟都把一个新的巨大无比的 Excel 文件发给所有客户呀。

数据库呢，就是存储数据的地方，就像冰箱是存储食物的地方一样。正是因为有了数据库后，所有人可以直接在这个系统上查找数据和修改数据。例如你每天使用余额宝查看自己的账户收益，就是从后台数据库读取数据后给你的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/PnRVMhXvfFIwlJILh1nK2XZ47C6icET1EMVMI8VYREeALxsFQY0JG5pLW2cuMSECty0DgQ4bNagCXWiaRAS3PIww/640?wx_fmt=jpeg)

再比如，在电影中九头蛇组织将反人类的大招压到了 “洞察计划” 上。超级古董级计算机存储了索拉博士的大脑，并开发了一种算法，称为索拉算法，该算法能从神盾局的数据库中读取过去世界的数据，预测每个人的未来。

数据库的英文名称叫 DB (Database)，那么数据库里面有什么东东呢？

其实，数据库通常包含一个或多个表组成。如果你用过 Excel，就会知道 Excel 是一张一张的二维表。每个表都是由列和行组成的，其中每一列都用名字来标识出来。同样的，数据库里存放的也是一张一张的表，只不过各个表之间是有联系的。所以，简单来说：

**数据库 = 多张表 + 各表之间的关系**

其实数据库是逻辑上的概念，它是一堆互相关联的数据，放在物理实体上，是一堆写在磁盘上的文件，文件中有数据。这些最基础的数据组成了表 (table)。

**那么如何学会数据库呢？**学会数据库你需要掌握以下两点：

**1）数据库表的结构**

**2）各表之间的关系**

我们接下来分别来看看这两个知识点。

**1. 数据库表的结构**

表的结构是指要了解数据库每张表长什么样。

数据库中每个表由一个名字标识。表包含带有列名的列，和记录数据的行。我们举个具体的例子就一目了然了。下面是 “[猴子数据分析社群会员](http://mp.weixin.qq.com/s?__biz=MzAxMTMwNTMxMQ==&mid=2649244411&idx=1&sn=4d8ce5dd0b0b4c6d70094c301f1f20e8&chksm=835fcacbb42843dd7d1414a47f17470fafebfc8bb77fb6b105d5e83450d5d6b15111723056ec&scene=21#wechat_redirect)” 表（表名），记录了每个会员的闯关进度信息。

![](https://mmbiz.qpic.cn/mmbiz_jpg/PnRVMhXvfFIwlJILh1nK2XZ47C6icET1EajueBHaPkZrlaqjkUYsiaV5QTWic0ibZobgmEQKglWLgyrGcnRAlV2VHg/640?wx_fmt=jpeg)

上面的表中每一列都有一个名字来标识出该列，行里记录着数据。其中，用 “会员 ID” 用来唯一标识用户，'闯关进度' 用来记录每个会员学习到哪一关了。

你可能会问了，为啥要有个用户 id 来表示数据的唯一性呢，用姓名也可以呀？

其实，姓名是无法唯一确定出一个用户的，注意到下面表中有两个会员都叫 “经纬”，这样就无法通过姓名来唯一确定用户了。所以，**数据库的表里都会加一个 ID 的字段用来表示数据的唯一性**。

![](https://mmbiz.qpic.cn/mmbiz_jpg/PnRVMhXvfFIwlJILh1nK2XZ47C6icET1E0mD2k9IpFbuRfN7gkuFrIVIgwzmNRJXQb8ZyUcLCvqKUicVSue8vOkg/640?wx_fmt=jpeg)

**ID 是数据库中重要的概念，叫做唯一标识符或者主键，用来表示数据的唯一性**。其实，在生活中我们也会使用 ID 来标识数据的唯一性唯一标识，最典型的例子就是国家用身份证来唯一标识一个人，即使你有个双胞胎兄弟，只要你两的身份证号不一样，你们就是两个人。你看，在电视剧《人名的名义》中反贪局就是靠身份证号来查相关贪污犯的。

![](https://mmbiz.qpic.cn/mmbiz_gif/PnRVMhXvfFIwlJILh1nK2XZ47C6icET1EzicLlStaUtcb4hCuiaQgDVG5ibaWK3G1IMJrtFNebKO3JVVUYDPxLyTXw/640?wx_fmt=gif)

同样的，数据库中的 ID 也是这个作用，唯一标识一条数据，只不过在数据库中我们把这样唯一标识数据的 ID 叫做主键。ID 不会有现实的业务意义，就是一串单纯的数字，每张表只能有一个主键。

**2. 各表之间的关系**

什么是联系呢？你是你爸爸的儿子，你是你的儿子的爸爸。这就是生活中的联系。其实，数据之间也是有联系的。**数据库里各个表之间如何建立联系呢？**

数据库是表的集合，一个数据库中可以放多张，表与表之间能互相联系。我们看下面两张表（数据分析社群会员表，教育背景表），你能告诉我它们之间有什么联系吗？

下面是表 1：数据分析社群会员

![](https://mmbiz.qpic.cn/mmbiz_jpg/PnRVMhXvfFIwlJILh1nK2XZ47C6icET1Eu3H4pBMiaibL6vSYeazLdBbORMpmP7VdJkqASevrcC1jNUicD9k7YF7rA/640?wx_fmt=jpeg)

下面是表 2：教育背景

![](https://mmbiz.qpic.cn/mmbiz_jpg/PnRVMhXvfFIwlJILh1nK2XZ47C6icET1EOdC10Zl3BM96EnjrFISiazIYlfaReo0Ah0VHTNzbyXek7kIkMicsPkSA/640?wx_fmt=jpeg)

这两张表通过**会员 ID** 关联起来，为了更清楚的看到这两个表的关系，下面的图中我用相同颜色代表同一个会员的信息。例如在会员表里姓名是猴子的会员 ID 是 1，那么我想知道该会员的教育背景，我就可以在教育背景这个表里去查找 “ **会员 ID**” 值是 1 的行，最后发现这行数据的教育背景 ID 是 2，对应的就找到该会员的教育背景信息了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/PnRVMhXvfFIwlJILh1nK2XZ47C6icET1EibdQDahVF9gu3YqaOhhO6EqibE5TXYq3cS8sDkD1XSibwwSrdsOBZJJcQ/640?wx_fmt=jpeg)

通过上面的例子你应该对表之间的联系有了大概了解。现在，我们回过头来具体看下：各个表是如何建立联系的。
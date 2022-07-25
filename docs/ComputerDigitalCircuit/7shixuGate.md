# 时序逻辑电路

## 概述

输出方程  状态方程，次态方程

驱动方程（激励方程） 存储电路的输入信号

同步时序电路、异步时序电路   

米利型 穆尔型  穆尔型 输出仅取决于存储电路的状态

时序电路是在有限个状态间转换，也称状态机state machine SM


## 时序逻辑电路的分析方法

同步时序逻辑电路的分析方法

写出驱动方程

写出状态方程

写出输出方程



各种图

状态转换表  类似真值表  假定一个初始状态，然后写出输出

将该状态当成初始，写出输出 检查有没漏的



状态转换图

以圆圈的内容表示当前状态

箭头表示转换的方向。通常将输入变量写在斜线上、输出写在斜线下



状态机流程图

类似算法流程图


时序图


异步时序逻辑电路的分析方法



## 若干常用的时序逻辑电路

移位寄存器，可实现串行-并行转换、数值运算以及数据处理



计数器

分类


# 时钟
## [时钟频率是个什么概念？？ - 知乎](https://www.zhihu.com/question/29685396)

时钟都是通过振荡器产生的。

振荡器有很多种，根据不同的时钟需求会使用不同的振荡器。

原始时钟信号一般会通过晶体振荡器产生。晶体振荡器的特点是根据晶体特性存在一个谐振频率，而且品质因子Q（目标频率能量占总能量的比值）非常高。这能够产生一个噪声非常小、震荡频率非常精确的时钟信号。

对于精度要求不那么高的时钟，也有使用LC振荡器生成的，不过很少见。

次级时钟信号可以通过将主时钟信号输入分频/倍频电路得到，比如锁相环。

锁相环的核心是鉴相器和压控振荡器。鉴相器比较输入时钟信号和输出时钟信号的相位差别，并将相位信号转化为电压信号，然后这个电压信号通过压控振荡器变为输出时钟信号。由于反馈回路的存在，输入和输出时钟会保持一个固定的相位差，这意味着两者频率完全相同。

通过在鉴相器输入端加入分频器，可以实现非整数倍倍频和分频电路。

还有一类通过外部输入信号产生时钟的电路——CDR（clock data recovery）。

因为外部输入的信号使用的是外部的时钟，和本地时钟存在同步问题，所以无法直接使用本地时钟采样。如果没有外部时钟输入，就必须从输入的信号中还原出外部时钟，这就是CDR电路。

CDR的基础结构和锁相环挺相似的，但是在滤波和鉴相电路上做了修改以保证输出时钟的稳定性，具体就不展开了。

上面这些没有电路基础大概看不懂吧……需要时钟的理由稍微简单一点……

任何电路都是有延迟的，从输入信号输入到电路完成计算输出结果是需要时间的。但是麻烦的是这个时间对于所有电路都是不一样的，所以我们不知道究竟要等多久上一个电路才算是完成了运算，可以读取输出了。对于人来说这个问题还不大，我们只要多等等保证算完了就好了，但是对于电路来说就麻烦了：每一级电路都需要上一级电路的输出结果作为输入，可是要等多久上一级才能完成计算？就算我知道上一级的计算需要10ns时间，但是我该从哪里开始计时？用什么进行计时？

于是电路设计师们不得不加入了非常复杂的“握手信号”来控制数据读取，简单的说就是前一级电路在完成运算之后向下一级发送一个“可以读取了”的信号，下一级收到这个信号之后才能读取；下一级读取完毕之后再发一个“我读完了”的信号返回上一级，上一级才能开始下一个运算。

这不仅浪费了大量的电路在握手上，还极大地加大了设计难度。

为了解决这个问题，工程师们设计了“同步电路”。同步电路加入了时钟信号，所有电路模块的读取与输出都受到时钟信号的控制。

比如一个电路模块，每次计算需要至多100ns的时间，而电路的时钟周期是50ns。那么我就知道这个电路至多需要两个周期的时间就能完成运算。为了冗余安全，我将这个模块设计为每三个时钟周期进行一次运算，它的下一级电路也每隔三个周期执行一次读取即可。

有了时钟信号，我只需要对每个电路设计“隔几个周期进行读/写”即可，不再需要在所有模块之间都设计握手信号，这极大地降低了设计难度。

指令执行周期指的是一条CPU指令，需要多少个CPU时钟周期（一个时钟周期内时钟信号震荡一次）完成。

典型RISC架构一条指令至少需要4个周期：

一个周期读取指令

一个周期读取执行指令所需的数据

一个周期执行指令

一个周期写入执行结果

可以看到这四个步骤是不同的电路模块负责的，在其中一个模块工作时，其他模块是空闲的。为了不浪费其他模块的时间，处理器采用了流水线结构，4条指令并行处理：

首先读取第一条指令。

第一条指令读取数据的时候，第二条开始读取指令。

第一条指令执行的时候，第二条开始读取数据，第三条开始读取指令。

第一条写入结果的时候，第二条开始执行，第三条开始读取数据，第四条开始读取指令。

第二条写入结果的时候，第三条开始执行，第四条开始读取数据，第五条开始读取指令。

……

实际上的处理器架构和指令都会更加复杂，所以需要更多的时钟周期才能处理。

比如最丧心病狂的NetBurst架构Prescott核心，使用了31级流水线，一条指令需要整整31个时钟周期，真是走火入魔了……

同步数字系统都需要“时钟” （Clock），其实我觉得台湾的翻译 “时脉 ”更贴切。

时钟就是一种信号，它给数字系统中每一个时序逻辑指定一个开始工作的时间点。

我们可以假想一条流水生产线：每一个加工步骤的工人在完成对一个部件的加工后， 如果啥也不管就直接扔给下一步骤的工人，同时下一步骤完成加工比前一工位慢；那么可以想见 ，部件就在比较慢的这个工位上堆积起来， 越堆越多， 最后造成生产线的阻塞。

所以为了保持流水线流畅不阻塞的运转，我们需要找出最慢的工位， 并把最慢工位处理一个部件需要的时间作为 “时钟周期”，然后由工长通过哨音，每隔一个时钟周期吹响一次哨子，工人们只在哨子吹响的时候才把部件传递给下一工位，这样就可以保证流水线不再发生阻塞。

时钟频率就是时钟周期的倒数，也就是上面例子中，每秒钟工长吹响哨子的次数。
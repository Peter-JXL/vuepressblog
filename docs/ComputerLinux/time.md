# Time命令


这里我们要学习的 time 命令是用来测量 Linux 程序执行时间的命令，而不是用来显示系统时间的命令。不是吧，这也太分裂了吧，那显示系统时间的命令是什么呢？是 date，马上百度一下，你就清楚了。

Linux 手册中是这样介绍 time 命令的：“time a simple command or give resource usage”，即测量命令的执行时间，或者给出系统资源的使用情况。

## 

	time 的简单用法

如果你想查看一条命令（比如 ls）到底执行了多长时间，我们可以这样做：

```
[roc@roclinux ~]$ time ls
program  public_html  repo  rocscm
 
real    0m0.002s
user    0m0.002s
sys 0m0.000s
```

看到没有，执行时间一下子就统计出来了。但输出内容中有三个统计时间，real、user 和 sys，它们都代表什么含义呢？哪个才是 ls 命令的执行时间呢？下面我们就一起来看看这三个统计时间。

(1) real：从进程 ls 开始执行到完成所耗费的 CPU 总时间。该时间包括 ls 进程执行时实际使用的 CPU 时间，ls 进程耗费在阻塞上的时间（如等待完成 I/O 操作）和其他进程所耗费的时间（Linux 是多进程系统，ls 在执行过程中，可能会有别的进程抢占 CPU）。

(2) user：进程 ls 执行用户态代码所耗费的 CPU 时间。该时间仅指 ls 进程执行时实际使用的 CPU 时间，而不包括其他进程所使用的时间和本进程阻塞的时间。

(3) sys：进程 ls 在内核态运行所耗费的 CPU 时间，即执行内核系统调用所耗费的 CPU 时间。

现在，我们应该对这三个时间非常清楚了吧。ls 命令的真正执行时间是多少？答案就是 user+sys 的时间，但一般情况下，real=user+sys，因而我们就使用 real 的时间作为 ls 的执行时间了（注意，这里会有几个坑，我们将在后面进行介绍）。

好了，time 的最基本用法介绍完毕，就这么简单。

## 

	消失的时间

上面说 real 时间中会有几个坑，下面我们就来详细地看一看。

情景一：

```
[roc@roclinux ~]$ time sudo find / -name php.ini
 
real    0m0.193s
user    0m0.076s
sys 0m0.115s
```

咦，是我数学不好，还是命令执行出错了呢？为什么 0.193s(real)>0.076s(user)+0.115s(sys)，而不是相等呢？哈哈，同学，你挺细心的嘛。这既不是你的数学不好，也不是命令执行出错，而是我们对命令执行时间的理解有几个误区。

误区一：`real_time=user_time+sys_time`

如果你认为上面的等式一定成立的话，那么请你再理解一下前面关于 real、user 和 sys 的介绍。在前面的表述中，real time 是包含了其他进程的执行时间和进程阻塞时间的，而 usr time+sys time 显然是不包括其他进程的执行时间和进程阻塞时间的。因此，real_time>user_time+sys_time 是非常有可能的。

误区二：`real_time>user_time+sys_time`

根据上面的分析，这个关系式应该是成立的吧？嘿嘿，不一定哟。一般来说，在单核 CPU 系统中，这个关系式是成立的，但如果我们的系统是多核 CPU 的话，而有些程序是能够同时利用到多核 CPU 的计算能力的，在这种情况下这个关系式就不成立了。

程序利用多核 CPU 的计算能力，可以并行地处理多项事务。就像一件工作，原来是一个 CPU 核去做，现在是两个 CPU 核并行做，那么完成同样工作所花费的总时间是 user_time+sys_time，而两个人并行做却能够在更短的时间内完成，耗时为 real_time。因此，这种情况下，便出现了 real_time<user_time+sys_time 的情况。

误区三：`real_time<user_time+sys_time`

多核情况下，real_time<user_time+sys_time 是成立的，那单核呢？显然是 real_time>user_time+sys_time。

上面的三个误区有点绕，但结论很重要，就是 real_time 和 user_time+sys_time 的大小关系不是恒久不变的，你需要了解你的 Linux 服务器，是单核，还是多核，这样才能正确地确定它们的关系。

情景二：

```
[roc@roclinux ~]$ time sudo find / -name mysql.sh
/etc/profile.d/mysql.sh
 
real    0m6.776s
user    0m1.101s
sys 0m1.363s
```

我们执行 find/-name mysql.sh 搜索文件的命令，显示的命令耗时是 6.776 秒。

如果我们再执行一次完全相同的命令：

```
[roc@roclinux ~]$ time sudo find / -name mysql.sh
/etc/profile.d/mysql.sh
 
real    0m3.059s
user    0m1.189s
sys 0m1.435s
```

咦，怎么 real 的时间缩减到了 3.059 秒了，生生少了 3 秒多钟，这又是怎么回事呢？为什么同样的命令在第二次执行时快这么多呢？

这个现象跟 Linux 操作系统的运行原理有关，find 命令在第一次执行后，系统会对一些文件做缓存，在第二次执行时，就正好使用到了这些缓存中的数据，因此执行速度就变快了很多。

看过这个示例后，如果仍有同学不问青红皂白地抱怨 time 命令的计时误差大，那可真是冤枉 time 啦。

time 的 man 手册中说，它不仅可以测量运行时间，还可以测量内存、I/O 等的使用情况，但为什么上面示例中的 time 命令的结果中却没有显示出这些信息呢？难道是 man 手册出现了错误？

NO，NO，NO（重要的事情要说三遍），其实上面使用的 time 真的是“巧妇难为无米之炊”，我们之前所用的 time 命令是 Bash 的内置命令，功能比较弱；而更强大的 time 命令隐藏在 /usr/bin/ 目录下，这个命令才是世外高人。

如果我们在 /user/bin/ 中并没有找到传说中那个强大的 time 命令，那么应该是没有安装 time 这个工具，安装方法也很简单：

```
[root@roclinux ~]# yum install time
```
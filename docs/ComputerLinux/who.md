---
title: who
date: 2022-07-25 22:37:31
permalink: /pages/6b0c38/
categories:
  - ComputerLinux
tags:
  - 
---
# who 命令


[linux中whoami命令的作用是,linux whoami命令参数及用法详解(linux查看登陆用户名)_非奇莫属的博客-CSDN博客](https://blog.csdn.net/weixin_34270668/article/details/116588083)


命 令:whoami 或者 who am i

 功能说明：先似乎用户名称。

 语　　法：whoami [--help][--version]

 补充说明：显示自身的用户名称，本指令相当于执行"id -un"指令。

 whoami 命令显示登录名。与使用命令 who 并指定 am i 不同，whoami 命令在有 root [用户权限](https://so.csdn.net/so/search?q=%E7%94%A8%E6%88%B7%E6%9D%83%E9%99%90&spm=1001.2101.3001.7020)时也有效，因为它不检查 /etc/utmp 文件。

 该命令只出现在windows系列中的 windows 2000中。

 参　　数：

 --help 　在线帮助。

 --version 　显示版本信息。

 附:whoami 与who am i 的区别

 who这个命令重点是用来查看当前有哪些用户登录到了本台机器上。

 who -m的作用和who am i的作用是一样的。

 who -q用来显示当前登录用户的个数。

 who am i 显示的是实际用户的用户名，即用户登陆的时候的用户ID。此命令相当于who -m。

 who am i显示的是“登录用户”的用户名。

 用Linux的术语来解释就是：(实际用户=uid，即user id。有效用户=euid，即effective user id)

 whoami 显示的是有效用户ID.

 whoami显示的是当前“操作用户”的用户名。

 先看看这三个命令的输出信息：

 [zzvips@zzvips ~]$ whoami

 zzvips

 [zzvips@zzvips ~]$ who am i

 zzvips pts/3 2011-07-25 13:17 (:0.0)

 [zzvips@zzvips ~]$ who

 zzvips :0 2011-07-25 09:54

 zzvips pts/0 2011-07-25 09:55 (:0.0)

 zzvips pts/1 2011-07-25 09:57 (:0.0)

 zzvips pts/3 2011-07-25 13:17 (:0.0)

 当我用sudo su(或者sudo su -)更换到root用户之后，你再看看：

 [zzvips@zzvips ~]$ sudo su

 [root@zzvips zzvips]# whoami

 root

 [root@zzvips zzvips]# who am i

 zzvips pts/3 2011-07-25 13:17 (:0.0)

 [root@zzvips zzvips]# who

 zzvips :0 2011-07-25 09:54
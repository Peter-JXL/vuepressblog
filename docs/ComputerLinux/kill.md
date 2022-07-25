# Kill 命令

[Linux killall 命令 | 菜鸟教程](https://www.runoob.com/linux/linux-comm-killall.html)


Linux killall  用于杀死一个进程，与 kill 不同的是它会杀死指定名字的所有进程。

kill 命令杀死指定进程 PID，需要配合 ps 使用，而 killall 直接对进程对名字进行操作，更加方便。

### 语法

```
  killall [选项]  name
```

 **参数说明** ：

* name ： 进程名

选项包含如下几个参数：

* -e | --exact ： 进程需要和名字完全相符
* -I | --ignore-case ：忽略大小写
* -g | --process-group ：结束进程组
* -i | --interactive ：结束之前询问
* -l | --list ：列出所有的信号名称
* -q | --quite ：进程没有结束时，不输出任何信息
* -r | --regexp ：将进程名模式解释为扩展的正则表达式。
* -s | --signal ：发送指定信号
* -u | --user ：结束指定用户的进程
* -v | --verbose ：显示详细执行过程
* -w | --wait ：等待所有的进程都结束
* -V |--version ：显示版本信息
* --help ：显示帮助信息

### 实例

```
# killall -9 php-fpm          //结束所有的 php-fpm 进程
```
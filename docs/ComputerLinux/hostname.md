# HostName命令


[hostname及hostnamectl区别_不忘初心fight的博客-CSDN博客_hostnamectl](https://blog.csdn.net/weixin_41831919/article/details/102767618)

临时修改主机名：hostname 临时主机名

永久修改主机名：hostnamectl 永久主机名    是对/etc/hostname文件的内容进行修改

```bash
[root@client ~]# hostname
client
[root@client ~]# hostname master
[root@client ~]# hostname
master
[root@client ~]# hostnamectl set-hostname client
[root@client ~]# hostname
client
[root@client ~]# cat /etc/hostname
client
```

若是不生效，在不生效的情况下可以选择手动更改hostname所在的文件

修改/etc/sysconfig/network文件，添加或修改:

            NETWORKING=yes

            HOSTNAME=主机名

执行reboot即可。

hostnamectl 查看linux虚拟机信息

```bash
[root@localhost ~]# hostnamectl
   Static hostname: n/a
Transient hostname: hello.hostname
         Icon name: computer-vm
           Chassis: vm
        Machine ID: b4ffb57ff9244fc8b0caf9e4dd397d86
           Boot ID: 66c004e580264e0cb54d733e11e8cfab
    Virtualization: vmware
  Operating System: CentOS Linux 7 (Core)
       CPE OS Name: cpe:/o:centos:centos:7
            Kernel: Linux 3.10.0-957.21.3.el7.x86_64
      Architecture: x86-64
```

Linux主机名分为静态主机名（static hostname）、临时主机名（transient hostname）以及pretty 主机名（理解为：优雅的主机名）

静态主机名用于系统启动时设置内核参数；存储于/etc/hostname中

临时主机名默认从网络配置中获取，如果静态主机名生效，则临时主机名没用

pretty主机名对字符几乎没有限制，可以设置为你喜欢的任意主机名

/etc/hostname文件没有主机名的时候，在系统启动的时候，内核会将transient初始化为localhost.localdomain

**hostnamectl set-hostname master**

只改变了static和transient(内核动态维护的，一定会改变)，而pretty却没设置成功。这是因为这里给出的主机名"name2"是一个符合主机名标准的名称。如果指定一个非标准的主机名，例如包含特殊符号，那么也会设置pretty。

```bash
[root@localhost ~]# hostnamectl  --pretty

[root@localhost ~]#  hostnamectl set-hostname "master master"
[root@localhost ~]# hostname
mastermaster
[root@localhost ~]# hostnamectl
   Static hostname: mastermaster
   Pretty hostname: master master
         Icon name: computer-vm
           Chassis: vm
        Machine ID: b4ffb57ff9244fc8b0caf9e4dd397d86
           Boot ID: 66c004e580264e0cb54d733e11e8cfab
    Virtualization: vmware
  Operating System: CentOS Linux 7 (Core)
       CPE OS Name: cpe:/o:centos:centos:7
            Kernel: Linux 3.10.0-957.21.3.el7.x86_64
      Architecture: x86-64
```
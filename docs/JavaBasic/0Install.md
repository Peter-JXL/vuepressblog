# 安装
## 下载

这个直接去官网下载，比较安全: [Java Downloads | Oracle](https://www.oracle.com/java/technologies/downloads/)  

或者在官网里一步步找到下载页面：http://www.oracle.com/

下载后一路点击 next 安装。**建议使用默认的安装路径**。默认的一般在 C 盘，C:\Program Files\Java 里，无论你选择安装在哪，都要记录安装路径，我的安装在 C:\Program Files\Java


## 配置环境变量



### 为什么要配置环境变量

我们通过一个具体的应用场景来理解：想要运行一个软件，我们必须知道其启动程序在磁盘上的位置（安装目录）。即使是桌面上的图片，其实是只是一个快捷方式，其还是指向软件在磁盘上的位置。我们可以在软件图标上右键，可以看到有个选项是“打开文件所在的位置”，打开后就是软件的安装目录。

![image](assets/image-20220724215731-xgz7acy.png)



同样的，在命令行输入一个命令，计算机需要知道命令所在位置，否则会提示没有此命令。我们以打开记事本为例

* 按下win + R键 打开 “运行”
* 当我们输入 “notepad” 打开记事本程序时，操作系统会去环境变量已保存的路径中查找是否存在 notepad 程序。
* 如果没有配置好环境变量，我们就必须告诉操作系统绝对路径：”C:\Windows\notepad”。否则，计算机不知道notepad.exe 文件在哪里


在初次安装 Java 后，为了更加方便使用Java，我们需要配置其变量，不然每次都要打开Java的安装目录去执行命令，很麻烦。通常情况我们需要配置以下三个变量（简单了解下作用即可）：

* JAVA_HOME：指向 JDK 的安装目录，作用是一些基于 Java 开发的工具会用到，比如 tomcat,Eclipse，如果不用这些工具不需要配置。
* Path：指向 JDK 安装目录下的 bin 目录，作用是指定命令搜索路径，bin 目录下有编译、启动（javac/java）等命令，为了任何目录位置下都可以直接输入命令，而不用输入长长的路径了。如果配置了 Java _HOME ，直接把 %JAVA_HOME%/bin 追加到 PATH 中即可。
* CLASSPATH：在于告诉 Java 执行环境，在哪些目录下可以找到我们所要执行的 Java 程序所需要的类或者包。不过在 JDK1.5 之后的版本完全可以不用设置 classpath 环境变量就能正常运行程序。


### 打开环境变量配置页面

首先打开环境变量配置的页面。

打开方法一：按下快捷键 Win+Pause，然后点击高级系统设置

![image.png](assets/image-20211014130606-4tppcfr.png "win7下的页面")



![image](assets/image-20220724211215-k6wwoyx.png "win10下的页面")


打开方法二：在桌面--我的电脑图标上--右键，选择属性

![image](assets/Java-20220724215154-a99im3b.png)



选择环境变量

![image.png](assets/image-20211014130611-3334c65.png)


### 配置 Java_HOME 变量

---

在系统变量里新建一个变量，变量名为 Java_HOME, 变量值输入你安装路径下 JDK 的目录，例如我安装在 C 盘的目录。如果你安装在其他盘的其他目录，也只需要将 JDK 的目录输入变量值即可

![image.png](assets/image-20211014130633-4shmu56.png)


### 编辑 Path 变量

---

**编辑系统的 Path 变量，也可以双击进入编辑**

![image.png](assets/image-20211014130647-fyjxrxi.png "win10下的页面")

点击新建，然后在输入框里输入 %JAVA_HOME%\bin ，然后回车即可保存新建的值

再次点击新建，在输入框里输入 %JAVA_HOME%\jre\bin ，然后回车即可保存新建的值。如图

![image](assets/image-20220724214206-mnvmtit.png)






而win7的配置环境变量的步骤和win10不同。

**这个图是win7编辑系统变量时，所有都在一行里编辑，每个变量值用分号`；`分割**

![image.png](assets/image-20211014130722-wajzgkp.png "win7下的页面")

我们点击编辑后，在变量值里的最后（可以将鼠标点到变量值的输入框里，然后按下键盘的END键，或者用方向键去到最后），在最后一行里添加这个值   `;%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;`

> 注意：
>
> 1. 在win7，编辑变量都是在一行里编辑的，所有变量连成一串，用分号分割
> 2. 但在 win10 里，各变量的值都是分开显示的，一行一个变量，方便我们编辑。实际上path变量值的内容，还是各个变量用分号拼接起来的，我们可以打开cmd查看当前path变量的值（这里我省略了其他无关的内容）：
>
>     ```js
>     C:\Users\peterjxl>echo %path%
>     C:\Program Files\Java\jdk1.8.0_281\bin;C:\Program Files\Java\jdk1.8.0_281\jre\bin;
>     ```



### 配置CLASSPATH 变量

---

在系统环境变量新建

变量名 CLASSPATH    

变量值 `.;%JAVA_HOME%lib;%JAVA_HOME%lib\tools.jar`

**(ps:   注意前面有个小数点 “.” 和分号；  这个是告诉 JDK，搜索 CLASS 时先查找当前目录的 CLASS 文件 )**

![](assets/20190420100626826.png)





## 检查是否配置成功

运行 cmd。按下 win+R ，输入 cmd，也可以在菜单搜索。

![image.png](assets/image-20211014130810-2r2dkzr.png)


分别输入 Java -version，javac。

这样将会分别输出版本信息，和 javac 的用法。

![image.png](assets/image-20211014130826-n291pal.png)


## 卸载Java

和普通软件的卸载类似


卸载完后可以顺手删除之前配置的环境变量。


## 参考博客

Javac 不是内部或外部程序 ：[https://jingyan.baidu.com/article/1612d500968640e20e1eeebb.html](https://jingyan.baidu.com/article/1612d500968640e20e1eeebb.html)

在 Oracle 官网里一步步找到下载页面，安装，配置：[https://www.cnblogs.com/smyhvae/p/3788534.html](https://www.cnblogs.com/smyhvae/p/3788534.html)

[Java 配置 ----JDK 开发环境搭建及环境变量配置 - 千古壹号 - 博客园](https://www.cnblogs.com/qianguyihao/p/3788534.html)

[我们为什么要配置环境变量_Just do it!-CSDN 博客](https://blog.csdn.net/u013201439/article/details/55657634)
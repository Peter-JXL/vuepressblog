# HelloWorld

一个`.java`文件只能包含一个`public`类，但可以包含多个非`public`类。如果有`public`类，文件名必须和`public`类的名字相同。

```JAVA
public class HelloWorld{
    public static void main(String[] args){
	// Display message Welcome to ]ava ! on the console
        System.out.println("Hello World!");
    }
}
```



* 第 1 行定义了一个类。每个 Java 程序至少应该有一个类。每个类都有一个名宇。按照惯例，类名都是以大写字母开头的
* 第 2 行定义主方法（ main method)。程序是从 main 方法开始执行的。一个类可以包含几个方法。main 方法是程序开始执行的人口。
* Java 中的每条语句都以分号（ ；）结束，也称为语句结束符（statement terminator)
* 保留字（reserved word) 或关键字（keyword) 对编译器而言都是有特定含义的，所以不能在程序中用于其他目的。例如，当编译器看到字 class 时，它知道 class 后面的字就是这个类的名字。这个程序中的其他保留字还有 Public、static 和 void。
* 第 3 行是注释（comment), 它标注该程序是干什么的，以及它是如何构建的。注释帮助程序员进行相互沟通以及理解程序。注释不是程序设计语句，所以编译器编译程序时是忽略注释的。在 Java 中，在单行上用两个斜杠（// )引导注释，称为行注释（line comment );   在一 行或多行用/\*和 \*/ 括住注释，称为块注释（bock comment)。当编译器看到 // 时，就会忽略本行 // 之后的所有文本。当看到 / * 时，它会搜索接下来的\*/，并忽略掉 /* 与 */ 之间的文本。
* 程序中的一对花括号将程序的一些组成部分组合起来，形成一个块（ block)。在 Java中，每个块以左花括号（ 0 开始，以右花括号（})结束。每个类都有一个将该类的数据和方法放在一起的类块（ class block)。每个方法都有一个将该方法中的语句放在一起的方法块(method block)。块是可以嵌套的，即一个块可以放到另一个块内。例如本例中，方法块就在类块中。
* Java 是区分大小写的。如果在程序中将 main 替换成 Main



《Java语言程序设计-基础篇》：((20211017113550-tb2ukqd '1.8 创建、编译和执行 Java 程序'))



## 使用命令行编译 Java 程序


首先在一个目录里新建一个文本文档，改后缀名为. Java

![](assets/20190420101531592.png)

输入代码，注意类的名字要和文件名一样，例如都是 HelloWorld。如果不一致将出错。

```java
public class HelloWorld{
  public static void main(String[] args){
    System.out.println("Hello World!");
  }
}
```

运行 cmd，cd 到该目录，如果在 Java 文件在 D 盘，则先输入 D:，然后一步步输入目录，注意 tab 键可以补全，例如你输入 AJ，然后按 tab，就会帮你补全为 AJava。

![](assets/20190420102003817.png)

然后输入 javac HelloWorld，按 tab，补全为 HelloWorld.java；

这时候会生成 HelloWorld.class；

	

然后输入 Java + 文件名，不包括后缀。回车，运行成功

![](assets/20190420102210603.png)

编译过程：

javac：编译 java 文件；使用方法: javac Hello.java ，如果不出错的话，在与 Hello.java 同一目录下会生成一个 Hello.class 文件，这个 class 文件是操作系统能够使用和运行的文件。

java： 运行.class 文件；使用方法：java Hello, 如果不出错的话，会执行 Hello.class 文件。注意：这里的 Hello 后面不需要扩展名。

![](assets/041339524368671.jpg)



一般情况下，我们都不会在命令行下面运行、调试程序，因为它太不方便了


## 找不到或无法加载主类

Java 命令行运行java程序，出现“找不到或无法加载主类 ”的解决办法：

1.由于是在运行阶段出现的问题，那么可能是环境变量配置不当的问题，即可能是classpath路径配置错误，而导致.class文件无法加载。那么此时你可以检查是否配置好classpath路径，一般来说classpath路径配置如下：

**.;** %java_home%\lib;%java_home%\lib\tools.jar； （注意前面的 . 以及 ； 缺一不可）

**其中.表示当前路径，；表示分隔符。**




如果你试过了很多次，classpath也配置对了，依旧出现这个错误，注意你使用的测试代码，是否在某一个包名的下面；

```JAVA
package HelloWorld;
 
public class TestPlusPlus {
	public static void main(String args[]) {
		int a = 2;
		int b = a ++ + ++ a;
		System.out.printf("a的值为: %d\nb的值为: %d\n",a,b);
	}
}
```

解决办法：

1.去掉 ”package  HelloWorld;“ 重新用javac 编译TestPlusPlus.java,再运行javaTestPlusPlus就可以了。

2.新建一个包名一样的文件夹，在本例中，为建立一个HelloWorld的文件夹，把TestPlusPlus.java文件移到该目录下。然后在HelloWorld文件夹的平级下，打开DOS命令窗口，运行javacHelloWorld/TestPlusPlus.java编译程序，

运行javaHelloWorld/TestPlusPlus(或者javaHelloWorld.TestPlusPlus也可以)，则可以运行含有包名的java程序。

注意:包名不要含有'.'(点),' '(空格)等特殊符号，这样的话命令行无法判断包名与java程序名的分割点在哪里，从而还是找到或者无法加载主类。

**原理说明：java程序运行class文件,对于有包名的类,java把包名当成文件夹处理."包名+类名"相当于"文件夹目录+类名"来寻找类。**





[使用java命令运行class文件提示“错误：找不到或无法加载主类“的问题分析 - 大C - 博客园](https://www.cnblogs.com/wangxiaoha/p/6293340.html)

其实原因很简单，我们忽略了2个细节。

1.java指令默认在寻找class文件的地址是通过CLASSPATH环境变量中指定的目录中寻找的。

2.我们忽略了package的影响。

第一个问题好解决：我们直接在CLASSPATH环境变量中加入“.;”即可。“.”的意思是搜索当前目录

第二个问题看下面分析：

看下面两个类

![](assets/225724-20170117140959583-1225450275-20210314153726-ytb95wy.png "类A")  



![](assets/225724-20170117141103083-1849076331-20210314153726-gsqcc7r.png "类B")

类A和类B的唯一差别就是没有定义包名。

我们的工程路径是D:\HelloWorld,在HelloWorld文件夹中建立一个src文件夹，类B的源代码文件就放在src中。用javac编译完以后

会在src文件夹中生成NewsManager.class,如下

![](assets/225724-20170117142111661-1270200130-20210314153726-5d5o2vv.png)

执行如下：

![](assets/225724-20170117142742583-304001907-20210314153726-05ojt43.png)

现在我们再把源代码换成类A




![](assets/225724-20170117143622114-421601783-20210314153726-g90i3zb.png)

为什么加入了package后就不对了呢？

类A中package的路径是org.will.app.main。按照java规定，我们应该按照package定义的路径来存放源文件，类A应该放入：

src\org\will\app\main下，如下：

![](assets/225724-20170117145449896-1166084108-20210314153726-uw418id.png)

然后我们编译执行：

![](assets/225724-20170117145736067-1569724432-20210314153726-ly9nqv9.png)

依然有问题，为什么，其实大家再回去看看java的书籍就会发现，一个类的全名应该是包名+类名。类A的全名：org.will.app.main.NewsManager

好的，再试试：

![](assets/225724-20170117151526442-718152037-20210314153726-fxox9na.png)

还是不对。为什么？

仔细看上面的图，我们在main目录下让java命令去执行org.will.app.main.NewsManager,其实它会以为类的路径是：

D:\HelloWorld\src\org\will\app\main\org\will\app\main\NewsManager，大家看到了吧，路径重复了。

所以，我们应该这样执行：

![](assets/225724-20170117152039255-1308747487-20210314153726-6io4b93.png)

成功！

总结：

一、java执行class文件是根据CLASSPATH指定的地方来找，不是我们理解当前目录。如果希望它查询当前目录，需要在CLASSPATH中加入“.;”,代表当前目录。

二、java执行class文件对package的路径是强依赖的。它在执行的时候会严格以当前用户路径为基础，按照package指定的包路径转化为文件路径去搜索class文件。各位同学以后注意就OK啦。至于网上说的要在CLASSPATH要加各种包等等都是泛泛而谈，真正静下心分析这个问题的资料不多。很多都没有说到点子上，会误导人的。
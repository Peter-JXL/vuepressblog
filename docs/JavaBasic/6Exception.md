# Exception

| 类                  | 可能引起异常的原因                                                         |
| --------------------- | ---------------------------------------------------------------------------- |
| LinkageError        | 一个类对另一个类有某种依赖性，但是在编译前者后，后者进行了修改，变得不兼容 |
| virtualMachineError | Java虚拟机崩溃，或者运行所必需的资源已经耗尽                               |

---

异常（exception）是用Exception类表示的，它描述的是由程序和外部环境所引起的错误，这些错误能被程序捕获和处理。表12—2列出Exception类的子类的一些例子。

表12—2 Exception类的子类的例子

| 类                     | 可能引起异常的原因                                                                                                                                                                                  |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ClassNotFoundException | 试图使用一个不存在的类。例如，如果试图使用命令java来运行一个不存在的类，或者程序要调用三个类文件而只能找到两个，都会发生这种异常                                                                    |
| IOException            | 同输入/输出相关的操作，例如，无效的输入、读文件时超过文件尾、打开一个不存在的文件等。IOException的子类的例子有InterruptedIOException.  EOFException (EOF是End Of File的缩写)和FileNotFoundException |

---

运行时异常（runtime exception）是用RuntimeException类表示的，它描述的是程序设计错误，例如，错误的类型转换、访问一个越界数组或数值错误。运行时异常通常是由Java虚拟机抛出的。表12—3列出RuntimeException的子类的一些例子。

表12—3 RuntimeException类的子类的例子类

| 类                        | 可能引起异常的原因                                         |
| --------------------------- | ------------------------------------------------------------ |
| ArithmeticException       | 一个整数除以0。注意，浮点数的算术运算不抛出异常。参见附录E |
| NullPointerException      | 试图通过一个nul1引用变量访问一个对象                       |
| IndexOutOfBoundsException | 数组的下标超出范围                                         |
| IllegalArgumentException  | 传递给方法的参数非法或不合适                               |

**RuntimeException， Error以及它们的子类都称为免检异常（unchecked exception）。所有其他异常都称为必检异常（ checked exception），意思是指编译器会强制程序员检查并通过try—catch块处理它们，或者在方法头进行声明**。在方法头声明一个异常将在12.4节中讨论到。

在大多数情况下，免检异常都会反映出程序设计上不可恢复的逻辑错误。例如，如果通过一个引用变量访问一个对象之前并未将一个对象赋值给它，就会抛出Nul1PointerException异常；如果访问一个数组的越界元素，就会抛出IndexOutOfBoundsException异常。这些都是程序中必须纠正的逻辑错误。免检异常可能在程序的任何一个地方出现。为避免过多地使用try—catch块， Java语言不强制要求编写代码捕获或声明免检异常。

---



## 12.4 更多知识

要点提示：异常的处理器是通过从当前的方法开始，沿着方法调用链，按照异常的反向传播方向找到的。

异常处理模型基于三种操作：声明一个异常、抛出一个异常和捕获一个异常
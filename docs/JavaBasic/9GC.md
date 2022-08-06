---
title: 9GC
date: 2022-07-26 07:25:36
permalink: /pages/0ff7eb/
categories:
  - JavaBasic
tags:
  - 
---
# HashSet
> 本文由 [简悦 SimpRead](http://ksria.com/simpread/) 转码， 原文地址 https://blog.csdn.net/veryitman/article/details/6894447

大家都说 Java 很简单，的确 Java 入门不难，但是要想深入了解 Java 那不是一朝一夕能够做到的！

学习 Java 最重要的一点是要学习其设计思想和设计理念，比如集合框架、IO 框架的设计等。

通过一个实例谈谈 HashSet 与 hashCode、equals 的使用，以及在使用时的注意事项。

设计一个 Person 类，如下：

```java
package mark.zhang;
 
public class Person {
 
	private String name;
	private int age;
 
	public Person(String name, int age) {
		super();
		this.name = name;
		this.age = age;
	}
 
	public String getName() {
		return name;
	}
 
	public int getAge() {
		return age;
	}
 
	public void setName(String name) {
		this.name = name;
	}
 
	public void setAge(int age) {
		this.age = age;
	}
 
	@Override
	public String toString() {
		return "age=" + age + ", name=" + name;
	}
 
}
```

这个类很简单，两个成员变量以及 set、get 方法，注意这里没有重写 equals、hashCode 方法。为了在打印的时候方便看出结果，重写 toString 方法。

测试类也照样很简单，如下：

```java
public class TestPerson {
 
	public static void main(String[] args) {
		Set<Person> set = new HashSet<Person>();
		Person p1 = new Person("喜洋洋", 25);
		Person p2 = new Person("懒洋洋", 26);
		Person p3 = new Person("灰太郎", 27);
		set.add(p1);
		set.add(p2);
		set.add(p3);
		System.out.println(set.size() + " 个动画人物!");
 
		for (Person person : set) {
			System.out.println(person);
		}
	}
}
```

输出结果，如下所示：

```
3 个动画人物!
age=27, name=灰太郎
age=26, name=懒洋洋
age=25, name=喜洋洋
```

ok，看懂上面的程序很简单，只要你不是初学 Java 的话！但是今天的主题不是只讨论这段代码的难易程度。

如果在代码中删除一个 “人”，很简单，只需要调用 remove 方法即可，如下所示：

```java
set.remove(p2);
```

这个时候，我需要修改 Person 这个类，重写父类 Object 的两个方法，equals、hashCode，修改之后的代码：

```java
package mark.zhang;
 
public class Person {
 
	private String name;
	private int age;
 
	public Person(String name, int age) {
		super();
		this.name = name;
		this.age = age;
	}
 
	public String getName() {
		return name;
	}
 
	public int getAge() {
		return age;
	}
 
	public void setName(String name) {
		this.name = name;
	}
 
	public void setAge(int age) {
		this.age = age;
	}
 
	@Override
	public String toString() {
		return "age=" + age + ", name=" + name;
	}
 
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + age;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}
 
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Person other = (Person) obj;
		if (age != other.age)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}
 
}
```

在测试类中，开始这样子做：

```java
public class TestPerson {
 
	public static void main(String[] args) {
		Set<Person> set = new HashSet<Person>();
		Person p1 = new Person("喜洋洋", 25);
		Person p2 = new Person("懒洋洋", 26);
		Person p3 = new Person("灰太郎", 27);
		set.add(p1);
		set.add(p2);
		set.add(p3);
		System.out.println(set.size() + " 个动画人物!");
		// 删除一个对象
		set.remove(p2);
		System.out.println("删除之后，" + set.size() + " 个动画人物!");
		for (Person person : set) {
			System.out.println(person);
		}
	}
}
```

打印结果：

```
3 个动画人物!
删除之后，2 个动画人物!
age=27, name=灰太郎
age=25, name=喜洋洋
```

成功删除一个对象，再次修改测试类的代码：

```java
public class TestPerson {
 
	public static void main(String[] args) {
		Set<Person> set = new HashSet<Person>();
		Person p1 = new Person("喜洋洋", 25);
		Person p2 = new Person("懒洋洋", 26);
		Person p3 = new Person("灰太郎", 27);
		set.add(p1);
		set.add(p2);
		set.add(p3);
		System.out.println(set.size() + " 个动画人物!");
		// 修改对象属性
		p2.setName("美人鱼");
		// 删除一个对象
		set.remove(p2);
		System.out.println("删除之后，" + set.size() + " 个动画人物!");
		for (Person person : set) {
			System.out.println(person);
		}
	}
}
```

打印结果：

```
3 个动画人物!
删除之后，3 个动画人物!
age=26, name=美人鱼
age=27, name=灰太郎
age=25, name=喜洋洋
```

这次怪了，明明删除一个了，怎么还是有三个呢？你会发现，的确删除一个 “懒洋洋”，但是 “美人鱼” 没有被删除！

如果你在 Person 类中，不重写 hashCode 方法，不会有这种现象发生！

这里说明一个问题：**添加到集合的类，不要轻易去修改该类对象的属性，否则 remove () 方法无效。同理 contains () 方法也会无效。**

如果有兴趣的话，可以看看其源码，可以看出这与 hashCode () 方法有很大关系！

**再说一个容易让人误解的问题：**

Collection 接口的子接口 List 和 Set，Set （包括其子类）无序不可重复，List （包括其子类）有序可重复，所谓有序无序是相对于 add 的程序执行顺序来说的。

换句话说，对于上面的 List、Set 以及其子类等，如果 equals 为 true 的话，就算是重复的对象。这里的 equals 比较的是内容，不是对象地址。
只不过，对于 Set 来说不可以添加重复对象，对于 List 来说可以添加重复对象！

对于添加对象到 Set 集合中，从源码可以看出其流程是这样子的：

**将对象放入到集合中时，首先判断要放入对象的 hashcode 值与集合中的任意一个元素的 hashcode 值是否相等，如果不相等直接将该对象放入集合中。
如果 hashcode 值相等，然后再通过 equals 方法判断要放入对象与集合中的任意一个对象是否相等，如果 equals 判断不相等，直接将该元素放入到集合中，否则不放入。**

举个例子，注意：Person 要重写 hashCode、equals 方法：

```java
public static void main(String[] args) {
		LinkedList<Person> list = new LinkedList<Person>();
		Set<Person> set = new HashSet<Person>();
		Person p1 = new Person("喜喜", 3);
		Person p2 = new Person("喜喜", 3);
		System.out.println("stu1 == stu2 : " + (p1 == p2));
		System.out.println("stu1.equals(stu2) : " + p1.equals(p2));
		// list可以重复
		list.add(p1);
		list.add(p2);
		System.out.println("list size:" + list.size());
		// set 不可以重复
		set.add(p1);
		set.add(p2);
		System.out.println("set size:" + set.size());
	}
```

打印结果：

```java
stu1 == stu2 : false
stu1.equals(stu2) : true
list size:2
set size:1
```

感谢下面两篇博客，我只是在它们的基础之上添枝加叶。

再次感谢：

[hashCode 与 equals 的区别与联系](http://blog.csdn.net/afgasdg/article/details/6889383)

[Java 集合 HashSet 的 hashcode 方法引起的内存泄漏问题](http://blog.csdn.net/shixing_11/article/details/5652935)
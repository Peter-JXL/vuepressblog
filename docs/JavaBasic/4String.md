# String

## 中文字符串长度

java中：

1字符=2字节，1字节=8位

英文和数字占一个字节，中文占一个字符，也就是两个字节

在计算的字符串长度的时候，若有汉字，直接用String.length()方法是没法计算出准确的长度，如：

```java
public static void main(String[] args) {
	String userName = "大中国zxc";
	int length = userName.length();
	//int length = length(userName);
	System.out.println(length);
}
```

计算结果为6，是错误的

正确代码如下：

```java
public class LengthTest {
	public static void main(String[] args) {
		String userName = "大中国zxc";
		int length = length(userName);
		System.out.println(length);
	}
	public static int length(String value) {
		int valueLength = 0;
		String chinese = "[\u0391-\uFFE5]";
		/* 获取字段值的长度，如果含中文字符，则每个中文字符长度为2，否则为1 */
		for (int i = 0; i < value.length(); i++) {
			/* 获取一个字符 */
			String temp = value.substring(i, i + 1);
			/* 判断是否为中文字符 */
			if (temp.matches(chinese)) {
				/* 中文字符长度为2 */
				valueLength += 2;
			} else {
				/* 其他字符长度为1 */
				valueLength += 1;
			}
		}
		return valueLength;
	}
}
```

计算结果为9，上例中代码可以通用，在开发中如需计算字符串长度，可以参考使用




## 字符串比较


应该使用 equals 方法比较。

```JAVA
sl.compareTo(s2)
```

如果 s1与 s2相等，那么该方法返回值 0;

如果按字典顺序（即以 Unicode 码的顺序）s1小于 s2, 那么方法返回值小于 0;

如果按字典顺序 sl大于 S2,方法返回值大于 0。

可以理解为s1-s2，  数学中用于比较两个数的大小也经常是用这个方法
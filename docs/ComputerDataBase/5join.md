---
title: 5join
date: 2022-07-26 07:09:45
permalink: /pages/aca1a4/
categories:
  - ComputerDataBase
tags:
  - 
---
# Join用法
[sql(join on 和where的执行顺序） - higirle - 博客园](https://www.cnblogs.com/Jessy/p/3525419.html)



[sql(join on 和where的执行顺序）

](https://www.cnblogs.com/Jessy/p/3525419.html)

left join :左连接，返回左表中所有的记录以及右表中连接字段相等的记录。

right join :右连接，返回右表中所有的记录以及左表中连接字段相等的记录。

inner join: 内连接，又叫等值连接，只返回两个表中连接字段相等的行。

full join:外连接，返回两个表中的行：left join + right join。

cross join:结果是笛卡尔积，就是第一个表的行数乘以第二个表的行数。

关键字: on

数据库在通过连接两张或多张表来返回记录时，都会生成一张中间的临时表，然后再将这张临时表返回给用户。

在使用left jion时，on和where条件的区别如下：

1、 on条件是在生成临时表时使用的条件，它不管on中的条件是否为真，都会返回左边表中的记录。

2、where条件是在临时表生成好后，再对临时表进行过滤的条件。这时已经没有left join的含义（必须返回左边表的记录）了，条件不为真的就全部过滤掉。

假设有两张表：

表1：tab2

| id | size |
| ---- | ------ |
| 1  | 10   |
| 2  | 20   |
| 3  | 30   |

表2：tab2

| size | name |
| ------ | ------ |
| 10   | AAA  |
| 20   | BBB  |
| 20   | CCC  |

两条SQL:
1、select * form tab1 left join tab2 on (tab1.size = tab2.size) where tab2.name=’AAA’
2、select * form tab1 left join tab2 on (tab1.size = tab2.size and tab2.name=’AAA’)

第一条SQL的过程： 

![image](assets/image-20220726071423-eeupg9w.png)<br /><br />



第二条SQL的过程

![image](assets/image-20220726071436-xl9xlid.png)


其实以上结果的关键原因就是left join,right join,full join的特殊性，不管on上的条件是否为真都会返回left或right表中的记录，full则具有left和right的特性的并集。 而inner jion没这个特殊性，则条件放在on中和where中，返回的结果集是相同的。
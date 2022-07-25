# 基础语法

# 总结

语句的执行顺序：from--where--group by--having--select--order by

子句的书写顺序：select--from--where--group by--having--order by

常见的数据库

* 关系数据库

  * 桌面数据库：Access，Paradox，FoxPro，dBase
  * C/S数据库：sqlserver，MySQL，Oracle，Sybase
* 非关系数据库

  * NoSQL(NoSQL = Not Only SQL )，意即"不仅仅是SQL"。
  * Redis、Memchache、MongoDb

# 语句及其种类

DDL data definition language，数据定义语言：Create、drop、alter

DML data manipulation Language数据操纵语言select、insert、update、delete

DCL data control Language   数据控制语言commit  提交、rollback 回滚、grant  授权、revoke  撤销权利

# 书写规则

分号；结尾

不区分关键字的大小写，表名和列名同样如此，但是插入到列表中的数据是区分大小写的

常数的书写方式是固定的：字符串和日期要用单引号，数字就不用

用半角空格或者换行来分割

# 表的创建

表名和列名只能有 英文，数字，下划线

## 创建数据库

```sql
create database <数据库名称>
```

## 创建表

```sql
create table <表名>(
  <列名>  <数据类型>  <该列的约束>，
  <列名>  <数据类型>  <该列的约束>，
  ….
  <列名>  <数据类型>  <该列的约束>，
  <该表的约束1>…  <该表的约束2>  
)；

--外键
create table orders(
  orderid int primary key,
  custid references custmoers(custid)
)


--检查约束
create table orders(
  orderid int primary key,
  custid references custmoers(custid),
  num int check(quantity > 0)
)


--MYSQL 添加约束  第一种：创建表的时候
create table table_name(
  列名1  数据类型 (int) primary key auto_increment,
  列名2 数据类型  not null,
  列名3 数据类型   unique,
  列名4 数据类型  default '值',
  constraint  索引名 foreign key(外键列)  references 主键表(主键列)
  on delete cascade | on delete set null
)




--1.主键约束
添加:alter table table_name add primary key (字段)
删除:alter table table_name drop primary key
--2.非空约束
添加:alter table table_name modify 列名 数据类型 not null 
删除:alter table table_name modify 列名 数据类型 null
--3.唯一约束
添加:alter table table_name add unique 约束名（字段）
删除:alter table table_name drop key 约束名
--4.自动增长
添加:alter table table_name modify 列名 int  auto_increment
删除:alter table table_name modify 列名 int  
--5.外键约束
添加:alter table table_name add constraint 约束名 foreign key(外键列) 
references 主键表（主键列）

删除:
第一步:删除外键
第二步:删除索引
alter table table_name drop foreign key 约束名

alter  table table_name drop  index 索引名
[^1]: 
约束名和索引名一样
6.默认值
添加:alter table table_name alter 列名  set default '值'
删除:alter table table_name alter 列名  drop default


```

数据类型

* 数字型
* 字符型 char（定长，长度不够时用空格补足，定长性能快） 和varchar（变长字符串，不会用空格补足）

  * char
  * nchar char的 特殊形式，用来支持多字节或Unicode（不同实现的细节不同）
  * nvachar text的特殊形式，用来支持多字节或Unicode字符（不同实现的细节不同）
  * text 变长文本
* 日期型
* 二进制型：最不具有兼容性，最少使用
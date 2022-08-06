---
title: 6with
date: 2022-07-26 07:09:45
permalink: /pages/04df34/
categories:
  - ComputerDataBase
tags:
  - 
---
# With

## [SQL With As 用法 - 一佳一 - 博客园](https://www.cnblogs.com/linyijia/p/11238992.html)

## 一．WITH AS的含义

WITH AS短语，也叫做子查询部分（subquery factoring），可以定义一个SQL片断，该SQL片断会被整个SQL语句用到。可以使SQL语句的可读性更高，也可以在UNION ALL的不同部分，作为提供数据的部分。

对于UNION ALL，使用WITH AS定义了一个UNION ALL语句，当该片断被调用2次以上，优化器会自动将该WITH AS短语所获取的数据放入一个Temp表中。而提示meterialize则是强制将WITH AS短语的数据放入一个全局临时表中。很多查询通过该方式都可以提高速度。

## 二．使用方法

先看下面一个嵌套的查询语句：

select * from person.StateProvince where CountryRegionCode in
(select CountryRegionCode from person.CountryRegion where Name like 'C%')
上面的查询语句使用了一个子查询。虽然这条SQL语句并不复杂，但如果嵌套的层次过多，会使SQL语句非常难以阅读和维护。因此，也可以使用表变量的方式来解决这个问题，SQL语句如下：

declare @t table(CountryRegionCode nvarchar(3))
insert into @t(CountryRegionCode)  (select CountryRegionCode from person.CountryRegion where Name like 'C%')

select * from person.StateProvince where CountryRegionCode
in (select * from @t)
虽然上面的SQL语句要比第一种方式更复杂，但却将子查询放在了表变量@t中，这样做将使SQL语句更容易维护，但又会带来另一个问题，就是性能的损失。由于表变量实际上使用了临时表，从而增加了额外的I/O开销，因此，表变量的方式并不太适合数据量大且频繁查询的情况。为此，在SQL Server 2005中提供了另外一种解决方案，这就是公用表表达式（CTE），使用CTE，可以使SQL语句的可维护性，同时，CTE要比表变量的效率高得多。

下面是CTE的语法：

[ WITH <common_table_expression> [ ,n ] ]
<common_table_expression>::=
expression_name [ ( column_name [ ,n ] ) ]
AS
( CTE_query_definition )
现在使用CTE来解决上面的问题，SQL语句如下：

复制代码
复制代码
with
cr as
(
select CountryRegionCode from person.CountryRegion where Name like 'C%'
)

select * from person.StateProvince where CountryRegionCode in (select * from cr)
复制代码
复制代码
其中cr是一个公用表表达式，该表达式在使用上与表变量类似，只是SQL Server 2005在处理公用表表达式的方式上有所不同。

在使用CTE时应注意如下几点：

1. CTE后面必须直接跟使用CTE的SQL语句（如select、insert、update等），否则，CTE将失效。如下面的SQL语句将无法正常使用CTE：

复制代码
复制代码
with
cr as
(
select CountryRegionCode from person.CountryRegion where Name like 'C%'
)
select * from person.CountryRegion  -- 应将这条SQL语句去掉
-- 使用CTE的SQL语句应紧跟在相关的CTE后面 --
select * from person.StateProvince where CountryRegionCode in (select * from cr)
复制代码
复制代码
2. CTE后面也可以跟其他的CTE，但只能使用一个with，多个CTE中间用逗号（,）分隔，如下面的SQL语句所示：

复制代码
复制代码
with
cte1 as
(
select * from table1 where name like 'abc%'
),
cte2 as
(
select * from table2 where id > 20
),
cte3 as
(
select * from table3 where price < 100
)
select a.* from cte1 a, cte2 b, cte3 c where a.id = b.id and a.id = c.id
复制代码
复制代码
3. 如果CTE的表达式名称与某个数据表或视图重名，则紧跟在该CTE后面的SQL语句使用的仍然是CTE，当然，后面的SQL语句使用的就是数据表或视图了，如下面的SQL语句所示：

复制代码
复制代码
--  table1是一个实际存在的表

with
table1 as
(
select * from persons where age < 30
)
select * from table1  --  使用了名为table1的公共表表达式
select * from table1  --  使用了名为table1的数据表
复制代码
复制代码
4. CTE 可以引用自身，也可以引用在同一 WITH 子句中预先定义的 CTE。不允许前向引用。

复制代码
复制代码
--使用递归公用表表达式显示递归的多个级别
WITH DirectReports(ManagerID, EmployeeID, EmployeeLevel) AS
(
SELECT ManagerID, EmployeeID, 0 AS EmployeeLevel
FROM HumanResources.Employee
WHERE ManagerID IS NULL
UNION ALL
SELECT e.ManagerID, e.EmployeeID, EmployeeLevel + 1
FROM HumanResources.Employee e
INNER JOIN DirectReports d
ON e.ManagerID = d.EmployeeID
)
SELECT ManagerID, EmployeeID, EmployeeLevel
FROM DirectReports ;

--使用递归公用表表达式显示递归的两个级别
WITH DirectReports(ManagerID, EmployeeID, EmployeeLevel) AS
(
SELECT ManagerID, EmployeeID, 0 AS EmployeeLevel
FROM HumanResources.Employee
WHERE ManagerID IS NULL
UNION ALL
SELECT e.ManagerID, e.EmployeeID, EmployeeLevel + 1
FROM HumanResources.Employee e
INNER JOIN DirectReports d
ON e.ManagerID = d.EmployeeID
)
SELECT ManagerID, EmployeeID, EmployeeLevel
FROM DirectReports
WHERE EmployeeLevel <= 2

--使用递归公用表表达式显示层次列表
WITH DirectReports(Name, Title, EmployeeID, EmployeeLevel, Sort)
AS (SELECT CONVERT(varchar(255), c.FirstName + ' ' + c.LastName),
e.Title,
e.EmployeeID,
1,
CONVERT(varchar(255), c.FirstName + ' ' + c.LastName)
FROM HumanResources.Employee AS e
JOIN Person.Contact AS c ON e.ContactID = c.ContactID
WHERE e.ManagerID IS NULL
UNION ALL
SELECT CONVERT(varchar(255), REPLICATE ('| ' , EmployeeLevel) +
c.FirstName + ' ' + c.LastName),
e.Title,
e.EmployeeID,
EmployeeLevel + 1,
CONVERT (varchar(255), RTRIM(Sort) + '| ' + FirstName + ' ' +
LastName)
FROM HumanResources.Employee as e
JOIN Person.Contact AS c ON e.ContactID = c.ContactID
JOIN DirectReports AS d ON e.ManagerID = d.EmployeeID
)
SELECT EmployeeID, Name, Title, EmployeeLevel
FROM DirectReports
ORDER BY Sort

--使用 MAXRECURSION 取消一条语句
--可以使用 MAXRECURSION 来防止不合理的递归 CTE 进入无限循环。以下示例特意创建了一个无限循环，然后使用 MAXRECURSION 提示将递归级别限制为两级
WITH cte (EmployeeID, ManagerID, Title) as
(
SELECT EmployeeID, ManagerID, Title
FROM HumanResources.Employee
WHERE ManagerID IS NOT NULL
UNION ALL
SELECT cte.EmployeeID, cte.ManagerID, cte.Title
FROM cte
JOIN  HumanResources.Employee AS e
ON cte.ManagerID = e.EmployeeID
)
--Uses MAXRECURSION to limit the recursive levels to 2
SELECT EmployeeID, ManagerID, Title
FROM cte
OPTION (MAXRECURSION 2)
--在更正代码错误之后，就不再需要 MAXRECURSION。以下示例显示了更正后的代码
WITH cte (EmployeeID, ManagerID, Title)
AS
(
SELECT EmployeeID, ManagerID, Title
FROM HumanResources.Employee
WHERE ManagerID IS NOT NULL
UNION ALL
SELECT  e.EmployeeID, e.ManagerID, e.Title
FROM HumanResources.Employee AS e
JOIN cte ON e.ManagerID = cte.EmployeeID
)
SELECT EmployeeID, ManagerID, Title
FROM cte
复制代码
复制代码

5. 不能在 CTE_query_definition 中使用以下子句：

　　（1）COMPUTE 或 COMPUTE BY

　　（2）ORDER BY（除非指定了 TOP 子句）

　　（3）INTO

　　（4）带有查询提示的 OPTION 子句

　　（5）FOR XML

　　（6）FOR BROWSE

6. 如果将 CTE 用在属于批处理的一部分的语句中，那么在它之前的语句必须以分号结尾，如下面的SQL所示：

复制代码
复制代码
declare @s nvarchar(3)
set @s = 'C%'
;  -- 必须加分号
with
t_tree as
(
select CountryRegionCode from person.CountryRegion where Name like @s
)
select * from person.StateProvince where CountryRegionCode in (select * from t_tree)
复制代码
复制代码


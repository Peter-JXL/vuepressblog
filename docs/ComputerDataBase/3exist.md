# Exist用法
## exists原理

语法： EXISTS subquery

参数： subquery 是一个受限的 SELECT 语句 (不允许有 COMPUTE 子句和 INTO 关键字)。

结果类型： Boolean 如果子查询包含行，则返回 TRUE ，否则返回 FLASE 。

EXISTS 用于检查子查询是否至少会返回一行数据，该子查询实际上并不返回任何数据，而是返回值 True 或 False

EXISTS 指定一个子查询，检测行的存在。

强调的是是否返回结果集，不要求知道返回什么，比如：

```sql
 select name from student where sex = 'm' and mark exists (select 1 from grade) ,
```

只要  exists 引导的子句有结果集返回，那么 exists 这个条件就算成立了，注意返回的字段始终为 1，如果改成

```sql
select 2 from grade where ...
```

那么返回的字段就是 2，这个数字没有意义。所以 exists 子句不在乎返回什么，而是在乎是不是有结果集返回。
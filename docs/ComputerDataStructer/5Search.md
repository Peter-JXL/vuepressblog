---
title: 5Search
date: 2022-07-25 22:46:48
permalink: /pages/c2cfd9/
categories:
  - ComputerDataStructer
tags:
  - 
---
# 1顺序查找

输入格式
第一行:元素个数n
第二行：依次输入n个元素的值
第三行：输入要查找的关键字key的值

输出格式
输出分两种情形：
1.如果key值存在，则输出其在表中的位置x(表位置从1开始),格式为The element position is x.
2.如果key值不存在输出："The element is not exist."

输入样例
6
1 3 5 7 9 10
5

输出样例
The element position is 3.

```c
#include"malloc.h" /* malloc()等 */


typedef int ElemType;
typedef struct /*静态查找表的顺序存储结构 */
{
	ElemType *elem; /* 数据元素存储空间基址，建表时按实际长度分配，0号单元留空 */
	int length; /* 表长度 */
}SSTable;

void Creat_Seq(SSTable &ST,int n)
{ /* 操作结果: 构造一个含n个数据元素的静态顺序查找表ST(数据来自数组r) */
	int i,temp;
	ST.elem=(ElemType *)malloc((n+1) * sizeof(ElemType)); /* 动态生成n个数据元素空间(0号单元不用) */
	if(!(ST).elem)
	{
		printf("ERROR\n");
		exit(0);
	} /*内存分配失败结束程序*/
	for(i=1;i<=n;i++)
	{
		scanf("%d",&temp);
		*(ST.elem+i)=temp; /* 依次赋值给ST */
	}
	ST.length=n;
}

int Search_Seq(SSTable &ST,ElemType key)
{ /* 在顺序表ST中顺序查找其关键字等于key的数据元素。若找到，则函数值为 */
 /* 该元素在表中的位置，否则为0。算法9.1 */

}

main()
{
	SSTable ST;
	int loc,key;
	int n;
	scanf("%d",&n);
	Creat_Seq(ST,n);
	//printf("Please input the key value：");
	scanf("%d",&key);
	loc = Search_Seq(ST,key);
	if(loc!=0)
		printf("The element position is %d.\n",loc);
	else
		printf("The element is not exist.\n");
}
```






## 2二分查找

编写Search_Bin函数，实现在一个递增有序数组ST中
采用折半查找法确定元素位置的算法.

输入格式
第一行:元素个数n
第二行：依次输入n个元素的值（有序）
第三行：输入要查找的关键字key的值

输出格式
输出分两种情形：
1.如果key值存在，则输出其在表中的位置x(表位置从0开始),格式为The element position is x.
2.如果key值不存在输出："The element is not exist."

输入样例
6
1 3 5 7 9 10
5

输出样例
The element position is 2.


```c
#include "iostream"
#include <malloc.h>

using namespace std;

typedef int ElemType;
typedef struct /*静态查找表的顺序存储结构 */
{
    ElemType *elem; /* 数据元素存储空间基址，建表时按实际长度分配，0号单元留空 */
    int length; /* 表长度 */
}SSTable;

void Creat_Seq(SSTable &ST,int n)
{
    int i,temp;
    ST.elem=(ElemType *)malloc((n+1) * sizeof(ElemType));
    if(!(ST).elem)
    {
        printf("ERROR\n");
        exit(0);  /*内存分配失败结束程序*/
    }
    for(i=1; i<=n; i++)
    {
        cin>>temp;
        *(ST.elem+i)=temp;
    }
    ST.length=n;
}

int Search_Bin(SSTable &ST,ElemType key)
{ /* 在顺序表ST中查找其关键字等于key的数据元素。若找到，则函数值为 该元素在表中的位置，否则为0。算法9.1 */

    int low=1, high=ST.length;
    while (low < high){
        int mid = (low+high)/2;
        if(ST.elem[mid] == key)
            return mid;
        else if(ST.elem[mid] < key)
            low = mid+1;   //注意low要加1，不然如果low和high刚好相邻的话，会死循环
        else
            high = mid-1;
    }
    return 0;

}

int main()
{
    SSTable ST;
    int loc,key;
    int num;

    cout<<"Please input the number of SSTable: ";
    cin >> num;

    cout<<"Please input SSTable: ";
    Creat_Seq(ST, num);


    cout<<"Please input the key value: ";
    cin>>key;


    loc = Search_Bin(ST,key);
    if(loc!=0)
        printf("The element position is %d.\n",loc);
    else
        printf("The element is not exist.\n");
}
```





## 3哈希查找

使用哈希函数：H(k)=3*k MOD length，并采用开放定址法处理冲突。

试对输入的关键字序列构造哈希表，哈希表长度为length，求等概率情况下查找成功的平均查找长度，并设计构造哈希表的完整的算法。本题给出部分代码，请补全Hash函数和解决冲突的collison函数

第一行：输入哈希表的长度；
第二行：输入关键字序列，用空格分隔，-1结束(-1不作为关键字)。

输出格式
第一行：输出哈希表里的数据，未使用的单元用X表示；
第二行：输出平均查找长度,格式为"Average search length="。

输入样例
11
22 41 53 46 30 13 1 67 -1

输出样例
22 X 41 30 1 53 46 13 67 X X
Average search length=2.000000
---
title: 1LinerList
date: 2022-07-25 22:46:50
permalink: /pages/4538f2/
categories:
  - ComputerDataStructer
tags:
  - 
---
# 线性表基本操作

## 题目要求

测试样例格式说明：

根据菜单操作：
1、输入1，表示要实现插入操作，紧跟着要输入插入的位置和元素，用空格分开
2、输入2，表示要实现删除操作，紧跟着要输入删除的位置
3、输入3，表示要输出顺序表的所有元素
4、输入0，表示程序结束

输入样例
1
1 2
1
1 3
2
1
3
0

输出样例
A Sequence List Has Created.
1:Insert element
2:Delete element
3:Load all elements
0:Exit
Please choose:
The Element 2 is Successfully Inserted!
1:Insert element
2:Delete element
3:Load all elements
0:Exit
Please choose:
The Element 3 is Successfully Inserted!
1:Insert element
2:Delete element
3:Load all elements
0:Exit
Please choose:
The Element 3 is Successfully Deleted!
1:Insert element
2:Delete element
3:Load all elements
0:Exit
Please choose:
The List is: 2
1:Insert element
2:Delete element
3:Load all elements
0:Exit
Please choose:



## 待填充代码

注意：主要参考《数据结构（C语言版） --严蔚敏》讲解的算法

```c
int InitList_Sq(SqList &L)
{
// 算法2.3，构造一个空的线性表L，该线性表预定义大小为LIST_INIT_SIZE
// 请补全代码

}

int Load_Sq(SqList &L)
{
// 输出顺序表中的所有元素
	int i;
	if(_________________________) printf("The List is empty!");  // 请填空
	else
	{
		printf("The List is: ");
		for(_________________________) printf("%d ",_________________________);  // 请填空
	}
	printf("\n");
	return OK;
}

int ListInsert_Sq(SqList &L,int i,int e)
{
// 算法2.4，在顺序线性表L中第i个位置之前插入新的元素e
// i的合法值为1≤i≤L.length +1
// 请补全代码

}

int ListDelete_Sq(SqList &L,int i, int &e)
{
// 算法2.5,在顺序线性表L中删除第i个位置的元素，并用e返回其值
// i的合法值为1≤i≤L.length
// 请补全代码

}

int main()
{
	SqList T;
	int a, i;
	ElemType e, x;
	if(_________________________)    // 判断顺序表是否创建成功
	{
		printf("A Sequence List Has Created.\n");
	}
	while(1)
	{
		printf("1:Insert element\n2:Delete element\n3:Load all elements\n0:Exit\nPlease choose:\n");
		scanf("%d",&a);
		switch(a)
		{
			case 1: scanf("%d%d",&i,&x);
					if(_________________________) printf("Insert Error!\n"); // 判断i值是否合法，请填空
					else printf("The Element %d is Successfully Inserted!\n", x);
					break;
			case 2: scanf("%d",&i);
					if(_________________________) printf("Delete Error!\n"); // 判断i值是否合法，请填空
					else printf("The Element %d is Successfully Deleted!\n", e);
					break;
			case 3: Load_Sq(T);
					break;
			case 0: return 1;
		}
	}
}
```



## 分析


关键和难点在于元素的插入和删除

关于插入：例如在第i个位置插入，则该位置处于数组T的第T[i-1]个位置；需要从T[i-1]开始，到数组T[length-1]，即最后一个元素都往后挪：

```java
for (int j = T.length-1; j>i-1; j--){
	T[j+1] = T[j]
}
```

注意：要对i的合法性进行校验，不能小于1，同时不能大于T.length+1。

如果数组快满了，要对数组进行扩容

插入后数组长度+1


关于删除：例如删除第i个位置的元素，则该位置处于数组T的第T[i-1]个位置，需要将T[i-1]后面元素全部往前面挪

注意：要对i的合法性进行校验，不能小于1，同时不能大于T.length。

```java
for ( int j = i-1; j<T.length-1; j++){
	T[j] = T[j+1]
}
```

删除后数组长度-1




## 源代码

```java
#include<stdio.h>
#include<malloc.h>
#define OK 1
#define ERROR 0
#define LIST_INIT_SIZE 100
#define LISTINCREMENT 10
#define ElemType int

typedef struct {
    int *elem;
    int length;
    int listSize;
} SqList;

int InitList_Sq(SqList &L)
{
// 算法2.3，构造一个空的线性表L，该线性表预定义大小为LIST_INIT_SIZE
// 请补全代码
    L.elem = (ElemType *) malloc(LIST_INIT_SIZE * sizeof (ElemType));
    if( !L.elem ){
        return ERROR;
    }

    L.length = 0;
    L.listSize = LIST_INIT_SIZE;
    return OK;
}

int Load_Sq(SqList &L)
{
// 输出顺序表中的所有元素
    int i;
    if( 0 == L.length ) printf("The List is empty!");  // 请填空
    else
    {
        printf("The List is: ");
        for(i = 0; i < L.length; i++) printf("%d ",L.elem[i]);  // 请填空
    }
    printf("\n");
    return OK;
}

int ListInsert_Sq(SqList &L,int i,int e)
{
// 算法2.4，在顺序线性表L中第i个位置之前插入新的元素e
// i的合法值为1≤i≤L.length +1
// 请补全代码
    if( i < 1 || i > L.length + 1){
        return  ERROR;
    }

    if(L.length == L.listSize){
        ElemType *newBase;
        newBase = (ElemType *) realloc(L.elem, (L.listSize + LISTINCREMENT) * sizeof (ElemType));
        if(!newBase){
            printf("newBase realloc failed! ");
            return ERROR;
        }
        L.elem = newBase;
        L.listSize += LISTINCREMENT;
    }

    for(int j = L.length - 1; j >= i-1; j--){
        L.elem[j+1] = L.elem[j];
    }
    L.elem[i -1 ] = e;
    L.length ++;
    return OK;
}

int ListDelete_Sq(SqList &L,int i, int &e)
{
// 算法2.5,在顺序线性表L中删除第i个位置的元素，并用e返回其值
// i的合法值为1≤i≤L.length
// 请补全代码
    if(i < 1 || i > L.length){
        return ERROR;
    }

    e = L.elem[i-1];
    for(int j = i - 1; j < L.length -1; j++){
        L.elem[j] = L.elem[j+1];
    }
    L.length --;
    return OK;
}

int main()
{
    SqList T;
    int a, i;
    ElemType e, x;
    if(InitList_Sq(T))    // 判断顺序表是否创建成功
    {
        printf("A Sequence List Has Created.\n");
    }
    while(1)
    {
        printf("1:Insert element\n2:Delete element\n3:Load all elements\n0:Exit\nPlease choose:\n");
        scanf("%d",&a);
        switch(a)
        {
            case 1: scanf("%d%d",&i,&x);
                if( !ListInsert_Sq(T, i, x)) printf("Insert Error!\n"); // 判断i值是否合法，请填空
                else printf("The Element %d is Successfully Inserted!\n", x);
                break;
            case 2: scanf("%d",&i);
                if( !ListDelete_Sq(T, i, e)) printf("Delete Error!\n"); // 判断i值是否合法，请填空
                else printf("The Element %d is Successfully Deleted!\n", e);
                break;
            case 3: Load_Sq(T);
                break;
            case 0: return 1;
        }
    }
}
```



# 合并顺序表

## 题目要求

编写算法，将两个非递减有序顺序表A和B合并成一个新的非递减有序顺序表C。

输入格式
第一行：顺序表A的元素个数
第二行：顺序表A的各元素（非递减），用空格分开
第三行：顺序表B的元素个数
第四行：顺序表B的各元素（非递减），用空格分开
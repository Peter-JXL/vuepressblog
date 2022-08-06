---
title: 3StringKMP
date: 2022-07-25 22:46:48
permalink: /pages/61006a/
categories:
  - ComputerDataStructer
tags:
  - 
---
## 1计算next值

输入格式
第一行：输入n，表示有n个需计算NEXT值的字符串
第二行至n+1行：每行输入一个字符串

输出格式
第1至第n行：通过计算每相应行的字符串得出的NEXT值

输入样例
4
abcdefg
aaaaab
abaabcac
aaabaaab

输出样例
NEXT J is:0111111
NEXT J is:012345
NEXT J is:01122312
NEXT J is:01231234




```c
//录入多个字符串计算并验证NEXT值，输入0结束。
#include "stdio.h"
#include "stdlib.h"
#include "iostream"
#define  MAXSTRLEN  255                   // 用户可在255以内定义最大串长
typedef unsigned char SString[MAXSTRLEN+1];	// 0号单元存放串的长度

void get_next(SString T,int next[])
{
 //求模式串T的next函数值并存入数组next   请补全代码
    int i=1, j=0;
    next[1]=0;
    while(i<T[0])
    {
        if (  j==0||T[i]==T[j]  )
        {
            i++;  j++;
            next[i]=j;
        }
        else j=next[j];
    }

}
int main()
{
    int next[MAXSTRLEN];
    SString S;
    int n,j;
    char ch;
    scanf("%d",&n);    // 指定要验证NEXT值的字符串个数
    ch=getchar();           //吸收转行符
    for(int i=0; i<n; i++)
    {
        ch=getchar();
        for(j=1; j<=MAXSTRLEN&&(ch!='\n'); j++)  // 录入字符串
        {
            S[j]=ch;
            ch=getchar();
        }


        S[0]=j-1;    // S[0]用于存储字符串中字符个数
        get_next(S,next);
        printf("NEXT J is:");
        for(j=1; j<=S[0]; j++)
            printf("%d",next[j]);
        printf("\n");
    }
}

```




用java实现：数组首字符不存放字符串长度

```java
package com.peterjxl.string;

import java.util.Scanner;

public class KMP {

    public static void getNext(char[] T, int[] next){
        int i = 0, j = -1;
        next[0] = -1;
        while ( T.length -1 > i){

            if( -1 == j || T[i] == T[j]){
                ++i;
                ++j;
                next[i] = j;
            }else {
                j = next[j];
            }
        }
    }

    public static int KMP(char[] S, char[] T){
        int[] next = new int[T.length];
        getNext(T, next);
        int i=0, j=0;
        while (S.length > i && T.length > j){
            if(-1 == j || S[i] == T[j]){
                i++;
                j++;
            }else {
                j = next[j];
            }
        }
        if(T.length == j)
            return i-j;
        else
            return -1;
    }

    public static void main(String[] args) {
        String S, T;
        Scanner input = new Scanner(System.in);
        S = input.nextLine();
        T = input.nextLine();
        System.out.println(KMP(S.toCharArray(), T.toCharArray()));
    }
}

```



## 2KMP算法

```c
输入格式
第一行：输入n，表示有n对字符串需要匹配
第二行：输入第1个主串
第三行：输入第1个模式串
第四行：输入第2个主串
第五行：输入第2个模式串
……
倒数二行：输入第n个主串
最后一行：输入第n个模式串


输出格式
第一至第n行：输出每相应模式串的匹配值


输入样例
4
oadhifgoarhglkdsa
oar
abcdefg
dec
algeojflas
ojf
jfaweiof
of


输出样例
8
0
5
7*/
```




```c
// 用KMP算法对主串和模式串进行模式匹配。本题目给出部分代码，请补全内容。
#include "stdio.h"
#include "stdlib.h"
#include "iostream"
#define TRUE  1
#define FALSE  0
#define OK  1
#define ERROR  0
#define INFEASLBLE  -1
#define OVERFLOW  -2
#define MAXSTRLEN  255 	//用户可在255以内定义最大串长
typedef unsigned char SString[MAXSTRLEN+1];	//0号单元存放串的长度

/*没有问题，解析一下：
如果你想定义个无符号的字符数组，可以这样写：unsigned char a[100]
如果把大小定义为常量，就是
#define MAX_LEN 100
unsigned char a[MAX_LEN]

注意，上面的表达式中，如果移除变量名字，那么剩余的部分就是类型的定义，
换个方式，如果用指针的形式可能好看一些：unsigned char (*x)[MAX_LEN]

加了typedef 以后是：typdef unsigned char a[MAX_LEN]
意思是定义类型unsigned char [MAX_LEN]为a的形式，
后面用 a x;意思就是unsigned char x[MAX_LEN];
*/

void get_next(SString T,int next[])
{
// 算法4.7
// 求模式串T的next函数值并存入数组next
    // 请补全代码
    int i=1,j=0;
    next[1]=0;
    while (i<T[0])
    {
        if( j==0||T[i]==T[j] )
        {
            i++;
            j++;
            next [i]=j;
        }
        else
            j=next[j];
    }
}

int Index_KMP(SString S,SString T,int pos)
{
// 算法4.6
// 利用模式串T的next函数求T在主串S中第pos个字符之后的位置
// KMP算法。请补全代码

   int next[MAXSTRLEN],i=pos,j=1;
   get_next(T,next);
//   printf("S[0]=%d\n",S[i]);
//   printf("T[0]=%d\n",T[0]);
//   printf("T[1]=%c\n",T[1]);
    while(i<=S[0]&&j<=T[0])
    {
        if(j==0 ||S[i]==T[j] )  //  以123   3  为例S[0] =3,是整数   T[1]='3',是字符
        {
            i++;  j++;
        }
        else
            j=next[j];
    }
    if(j>T[0])
        return i-T[0];
    else
        return 0;
}

int  main()
{

    SString T,S;
    int i,n,pos;
    char ch;
    scanf("%d",&n);    // 指定n对需进行模式匹配的字符串
    ch=getchar();
    for(int j=0; j<n; j++)
    {
        ch=getchar();
        for( i=1; i<=MAXSTRLEN&&(ch!='\n'); i++)  // 录入主串
        {
            S[i]=ch;
            ch=getchar();
        }
        S[0]=i-1;    // S[0]用于存储主串中字符个数
        ch=getchar();
        for( i=1; i<=MAXSTRLEN&&(ch!='\n'); i++)  // 录入模式串
        {
            T[i]=ch;
            ch=getchar();
        }
        T[0]=i-1;    // T[0]用于存储模式串中字符个数
        pos=Index_KMP(S,T,0);    // 请填空
        printf("%d\n",pos);
    }
}

```
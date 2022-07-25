# 1顺序栈的基本操作

输入格式
测试样例格式说明：
根据菜单操作：
1、输入1，表示要实现Push操作，紧跟着输入要Push的元素
2、输入2，表示要实现Pop操作
3、输入3，返回栈顶元素
4、输入4，返回栈的元素个数
5、输入5，表示从栈顶到栈底输出栈的所有元素
6、输入0，表示程序结束
输入样例
1
2

1
4

1
6

5
3
4

2
5

2
2
2
0



```c
#include <iostream>
#include <malloc.h>

using namespace std;

#define OK 1
#define ERROR 0
#define STACK_INIT_SIZE 100 // 存储空间初始分配量
#define STACKINCREMENT 10 // 存储空间分配增量

typedef int SElemType; // 定义栈元素类型
typedef int Status; // Status是函数的类型,其值是函数结果状态代码，如OK等

struct SqStack{
    SElemType *base;  // 在栈构造之前和销毁之后，base的值为NULL
    SElemType *top;  // 栈顶指针, 指向下一个可用空间
    int stacksize;  // 当前已分配的存储空间，以元素为单位
};

Status InitStack(SqStack &S){
    S.base = (SElemType *) malloc(sizeof (STACK_INIT_SIZE));
    if(nullptr == S.base)
        return ERROR;

    S.top = S.base;
    S.stacksize = STACK_INIT_SIZE;
    return OK;
}


Status Push(SqStack &S, SElemType &e){
    if(S.top - S.base >= S.stacksize){
        S.base=(SElemType *)realloc(S.base, (S.stacksize + STACKINCREMENT) * sizeof(SElemType));
        if(nullptr == S.base)
            return ERROR;
        S.top = S.base + S.stacksize;
        S.stacksize += STACKINCREMENT;
    }

    *S.top = e;
    S.top++;
    return OK;
}

Status Pop(SqStack &S, SElemType &e){
    if(S.top == S.base ){
        return ERROR;
    }

    e = * --S.top;
    return OK;
}


Status GetTop(SqStack &S, SElemType &e){
    if(S.base == S.top)
        return ERROR;
    e = *(S.top - 1);
    return OK;
}


int StackLength(SqStack &S){
    return S.top - S.base;
}

Status StackTraverse(SqStack &S){
    if(S.base == S.top){
        cout<<"The Stack is Empty!";
        return OK;
    }else{
        SElemType *p = S.top - 1;
        while (p - S.base >= 0){
            printf("%d ", *p);
            p--;
        }
        printf("\n");
        return OK;
    }
}


int main(){
    int a;
    SqStack S;
    SElemType x, e;
    if( InitStack(S) )    // 判断顺序表是否创建成功，请填空
    {
        printf("A Stack Has Created.\n");
    }
    while(true)
    {
        printf("1:Push \n2:Pop \n3:Get the Top \n4:Return the Length of the Stack\n5:Load the Stack\n0:Exit\nPlease choose:\n");
        scanf("%d",&a);
        switch(a)
        {
            case 1:
                scanf("%d", &x);
                if(  !Push(S,x)  ) printf("Push Error!\n"); // 判断Push是否合法，请填空
                else printf("The Element %d is Successfully Pushed!\n", x);
                break;
            case 2:
                if(  !Pop(S,e) ) printf("Pop Error!\n"); // 判断Pop是否合法，请填空
                else printf("The Element %d is Successfully Poped!\n", e);
                break;
            case 3:
                if(!GetTop(S,e))printf("Get Top Error!\n"); // 判断Get Top是否合法，请填空
                else printf("The Top Element is %d!\n", e);
                break;
            case 4:
                printf("The Length of the Stack is %d!\n",StackLength(S)); //请填空
                break;
            case 5:
                StackTraverse (S);//请填空
                break;
            case 0:
                return 1;
        }
    }
}
```




# 2循环队列的基本操作

输入格式
测试样例格式说明：
根据菜单操作：
1、输入1，表示要实现入队操作，紧跟着输入要入队的元素
2、输入2，表示要实现出队操作
3、输入3，返回队头元素
4、输入4，返回队列的元素个数
5、输入5，表示从队头到队尾输出队的所有元素
6、输入0，表示程序结束

输入样例
1
1

1
2

1
3

5

2

3

5
0

```c
#include<stdio.h>
#include<malloc.h>
#include<iostream>
#define OK 1
#define ERROR 0
#define ElemType int
#define MAXQSIZE 100 // 最大队列长度(对于循环队列，最大队列长度要减1)
using namespace std;

typedef int Status; // Status是函数的类型,其值是函数结果状态代码，如OK等
typedef int QElemType;

typedef struct {
    QElemType *base;  // 初始化的动态分配存储空间
    int front;  // 头指针,若队列不空,指向队列头元素
    int rear;  // 尾指针,若队列不空,指向队列尾元素的下一个位置
}SqQueue;


Status InitQueue(SqQueue &Q){
    Q.base = (QElemType *) malloc(MAXQSIZE * sizeof (QElemType));
    if(nullptr == Q.base){
        return ERROR;
    }
    Q.front = Q.rear = 0;
    return OK;
}

Status EnQueue(SqQueue &Q, QElemType &e){
    // 判断队列是否满了
    if ( (Q.rear + 1)%MAXQSIZE == Q.front  ){
        printf("The Queue is overflow!");
        return ERROR;
    } else{
        Q.base[Q.rear] = e;
        Q.rear = (Q.rear + 1) % MAXQSIZE;
        return OK;
    }

}

Status DeQueue(SqQueue &Q, QElemType &e){
    if(Q.rear == Q.front){
        return ERROR;
    } else {
        e = Q.base[Q.front];
        Q.front = (Q.front + 1) % MAXQSIZE;
        return OK;
    }

}

Status GetHead(SqQueue &Q, QElemType &e){
    if (Q.rear == Q.front)
        return ERROR;

    e = Q.base[Q.front];
    return OK;
}

int QueueLength(SqQueue &Q){
    return (Q.rear - Q.front + MAXQSIZE) % MAXQSIZE;
}

void QueueTraverse(SqQueue &Q){
    if(Q.front == Q.rear){
        printf("The Queue is Empty!\n");
        return;
    } else{
        printf("The Queue is: ");
        for(int i = Q.front; i!=Q.rear; i=(i+1)%MAXQSIZE)
            printf("%d ", Q.base[i]);
        printf("\n");
        return;
    }

}

int main()
{
    SqQueue S;
    if(  InitQueue (S) )    // 判断顺序表是否创建成功，请填空
        cout<<"A Queue Has Created.\n";

    while(true)
    {
        cout<<"1:Enter \n2:Delete \n3:Get the Front \n4:Return the Length of the Queue\n5:Load the Queue\n0:Exit\nPlease choose:\n";
        int input;
        cin >> input;
        QElemType x, e;
        switch(input)
        {
            case 1:
                cin>>x;
                if(  !EnQueue(S,x)) cout<<"Enter Error!\n"; // 判断入队是否合法，请填空
                else cout<<"The Element "<< x <<" is Successfully Entered!\n";
                break;
            case 2:
                if( !DeQueue(S,e)) cout<<"Delete Error!\n"; // 判断出队是否合法，请填空
                else cout<<"The Element "<< e <<" is Successfully Deleted!\n";
                break;
            case 3:
                if( !GetHead(S,e) )cout<<"Get Head Error!\n"; // 判断Get Head是否合法，请填空
                else cout<<"The Head of the Queue is "<< e << "!\n";
                break;
            case 4:
                cout<<"The Length of the Queue is "<< QueueLength(S) << " !\n";  //请填空
                break;
            case 5:
                QueueTraverse(S);//请填空
                break;
            case 0:
                return 1;
        }
    }
}

```



# 3栈的应用——进制转换

利用顺序栈的基本操作算法，编写满足下列要求的数制转换程序：
对于输入的任意一个非负十进制整数，打印输出与其等值的八进制数。

输入格式  第一行：输入一个非负的十进制整数

输出格式   第一行：与输入等值的八进制数

输入样例  15

输出样例 17


```c
#include<stdio.h>
#include<malloc.h>
#define OK 1
#define ERROR 0
#define ElemType int
#define STACK_INIT_SIZE 100 // 存储空间初始分配量
#define STACKINCREMENT 10 // 存储空间分配增量

typedef struct {
    ElemType *base;
    ElemType *top;
    int stacksize;
}SqStack;

void InitStack(SqStack &S){
    S.base = (ElemType *) malloc(STACK_INIT_SIZE * sizeof (ElemType));
    S.top = S.base;
    S.stacksize = STACK_INIT_SIZE;
}

int Push (SqStack &S, ElemType e){
    if(S.top - S.base == S.stacksize){
        S.base = (ElemType *) realloc(S.base, (S.stacksize + STACKINCREMENT) * sizeof(ElemType));
        S.top = S.base + S.stacksize;
        S.stacksize += STACKINCREMENT;
    }
    *S.top = e;
    S.top++;
    return OK;
}

int Pop(SqStack &S, ElemType &e){
    if(S.top == S.base ){
        return ERROR;
    }else{
        e = *(S.top-1);
        S.top--;
        return OK;
    }
}

void StackTraverse(SqStack &S){
    if(S.base == S.top){
        printf("The Stack is Empty!");
        return ;
    }else{
        ElemType *p = S.top - 1;
        while (p - S.base >= 0){
            printf("%d ", *p);
            p--;
        }
        printf("\n");
        return ;
    }
}

void Translate(SqStack &S, int num){
    int oct = 8;
    while (num != 0){
        Push(S, num%oct);
        num = num /oct;  // 例如15/8 = 1.875   100/8=12.5  该步骤相当于等到除数
    }
    StackTraverse(S);
}

int main()
{
    SqStack S;
    InitStack(S);

    int num;
    scanf("%d", &num);
    Translate(S, num);
    return 0;
}

```




# 4行编辑程序
## 1二叉树的构建及遍历操作

构造二叉链表表示的二叉树：按先序次序输入二叉树中结点的值（一个字符），'#'字符表示空树，构造二叉链表表示的二叉树T；再输出三种遍历序列

输入格式
第一行：输入一棵二叉树的先序遍历序列

输出格式
第一行：二叉树的先序遍历序列
第二行：二叉树的中序遍历序列
第三行：二叉树的后序遍历序列

输入样例
AB##C##

输出样例
ABC
BAC
BCA

```c
#include<cstdio>
#include<malloc.h>
using namespace std;
#define OK 1
#define ERROR 0
#define  MAXSTRLEN  255

typedef char  ElemType;
typedef struct BiTNode{
    ElemType data;
    struct BiTNode *lchild,*rchild;//左右孩子指针
} BiTNode,*BiTree;

void CreateBiTree(BiTree &T) {  // 算法6.4
    // 按先序次序输入二叉树中结点的值（一个字符），’#’字符表示空树，
    // 构造二叉链表表示的二叉树T。
    char ch;
    scanf("%c",&ch);
    if (ch=='#') T = nullptr;
    else {
        if (!(T = (BiTNode *)malloc(sizeof(BiTNode))))
            return;
        T->data = ch; // 生成根结点
        CreateBiTree(T->lchild);   // 构造左子树
        CreateBiTree(T->rchild);  // 构造右子树
    }
} // CreateBiTree


void PreOrderTraverse( BiTree T) {
    // 前序遍历二叉树T的递归算法，对每个数据元素调用函数Visit。
    //补全代码,可用多个语句
    if(T){
        printf("%c", T->data);
        PreOrderTraverse(T->lchild);
        PreOrderTraverse(T->rchild);
    }

} // PreOrderTraverse

void InOrderTraverse( BiTree T ) {
    // 中序遍历二叉树T的递归算法，对每个数据元素调用函数Visit。
    if(T){
        InOrderTraverse(T->lchild);
        printf("%c", T->data);
        InOrderTraverse(T->rchild);
    }
} // InOrderTraverse

void PostOrderTraverse( BiTree T ) {
    // 后序遍历二叉树T的递归算法，对每个数据元素调用函数Visit。
    if(T){
        PostOrderTraverse(T->lchild);
        PostOrderTraverse(T->rchild);
        printf("%c", T->data);
    }

} // PostOrderTraverse


int main()   //主函数
{
    BiTree  T;
    CreateBiTree(T);
    PreOrderTraverse(T);
    printf("\n");
    InOrderTraverse(T);
    printf("\n");
    PreOrderTraverse(T);
}//main
```






## 2实现二叉排序树的各种算法(1)

实现二叉排序树的各种算法(1)

用函数实现如下二叉排序树算法：
（1）插入新结点
（2）前序、中序、后序遍历二叉树
（3）中序遍历的非递归算法
（4）层次遍历二叉树
（5）在二叉树中查找给定关键字(函数返回值为成功1,失败0)

输入格式
第一行：准备建树的结点个数n
第二行：输入n个整数，用空格分隔
第三行：输入待查找的关键字
第四行：输入待查找的关键字
第五行：输入待插入的关键字

输出格式
第一行：二叉树的先序遍历序列
第二行：二叉树的中序遍历序列
第三行：二叉树的后序遍历序列
第四行：查找结果
第五行：查找结果
第六行~第八行：插入新结点后的二叉树的先、中、序遍历序列
第九行：插入新结点后的二叉树的中序遍历序列(非递归算法)
第十行：插入新结点后的二叉树的层次遍历序列

输入样例
7
40 20 60 18 50 56 90
18 待查找的关键字
35 待查找的关键字
30 待插入的关键字

输出样例
40 20 18 60 50 56 90
18 20 40 50 56 60 90
18 20 56 50 90 60 40
1
0
40 20 18 30 60 50 56 90
18 20 30 40 50 56 60 90
18 30 20 56 50 90 60 40
18 20 30 40 50 56 60 90
40 20 60 18 30 50 90 56

```java
#include <iostream>
using namespace std;

#define stack_INIT_SIZE 100
#define Queue_INIT_SIZE 100

typedef int TreeElemtype;


//Tree
typedef struct Node{
    int data;
    struct Node *lchild, *rchild;
}Node, *BiTree;

typedef BiTree SElemType;
typedef BiTree QElemType;

//Stack
typedef struct Stack{
    SElemType *base;
    SElemType *top;
    int stacksize;
}Stack;

//Queue
typedef struct Queue{
    int front;
    int rear;
    QElemType *base;
}Queue;


// Stack Operation
void InitStack(Stack &S){
    S.base = (SElemType *) malloc( stack_INIT_SIZE * sizeof (SElemType));
    S.top = S.base;
    S.stacksize = 100;
}

void Push(Stack &S, SElemType data){
    if(S.stacksize == S.top - S.base ){
        printf("The Stack is  full!\n");
        return;
    }
    *S.top = data;
    S.top++;
}

void Pop(Stack &S, SElemType &data){
    if (S.top == S.base){
        printf("The Stack is  empty!\n");
        return;
    }
    S.top--;
    data = *S.top;
}

bool StackIsEmpty(Stack &S){
    return S.top == S.base;
}


// Queue Operation
void InitQueue(Queue &Q){
    Q.base = (QElemType *) malloc( Queue_INIT_SIZE * sizeof (QElemType ));
    Q.front = Q.rear = 0;
}

void EnQueue(Queue &Q, QElemType data){
    if( (Q.rear + 1)%Queue_INIT_SIZE == Q.front  ){
        printf("The Queue is  empty!\n");
        return;
    }
    Q.base[Q.rear] = data;
    Q.rear = (Q.rear + 1) % Queue_INIT_SIZE;
}

void DeDqueue(Queue &Q, QElemType &data){
    if(Q.front == Q.rear){
        printf("The Queue is  empty!\n");
        return;
    }
    data = Q.base[Q.front];
    Q.front = (Q.front + 1) %Queue_INIT_SIZE;
}

bool QueueIsEmpty(Queue &Q){
    return Q.rear == Q.front;
}



// Tree Operation
bool searchBiTree(BiTree T, int ch){
    BiTree pointer = T;
    while(pointer){
        if(pointer->data == ch)
            return true;
        else{
            pointer = (pointer->data < ch)?pointer->rchild:pointer->lchild;
        }
    }
    return false;
}

void InsertBiTree(BiTree &T, int ch){
    BiTree pointer = T, pointerPre;  //pointer用于遍历到最后一个结点 ；pointerPre用于指向其前一个，用于insert。
    //遍历到要insert的位置前，并检查是否有重复值
    while (pointer){
        if(pointer->data == ch){
            printf("Have a repeated value!");
            exit(0);
        }
        pointerPre = pointer;
        pointer = (pointer->data < ch)?pointer->rchild:pointer->lchild;
    }
    pointer = (BiTree) malloc(sizeof (Node));
    pointer->data = ch;
    pointer->lchild = pointer->rchild = nullptr;

    if(nullptr == T){
        T = pointer;
        return;
    }

    if(pointerPre->data < ch)
        pointerPre->rchild = pointer;
    else
        pointerPre->lchild = pointer;
}

void CreateBiTree(BiTree &T, int num){
    int ch;
    for(int i = 0; i < num; i++){
        cin >> ch;
        InsertBiTree(T, ch);
    }
}

void PreOrderTraversal(BiTree T){
    if(T){
        printf("%d ", T->data);
        PreOrderTraversal(T->lchild);
        PreOrderTraversal(T->rchild);
    }
}

void InOrderTraversal(BiTree T){
    if(T){
        InOrderTraversal(T->lchild);
        printf("%d ", T->data);
        InOrderTraversal(T->rchild);
    }
}

void PostOrderTraversal(BiTree T){
    if(T){
        PostOrderTraversal(T->lchild);
        PostOrderTraversal(T->rchild);
        printf("%d ", T->data);
    }
}

void InOrderTraversalNotInRecursion(BiTree T){
    Stack S;
    InitStack(S);
    BiTree p = T;
    while (nullptr != p || !StackIsEmpty(S)){
        while (nullptr != p){
            Push(S,p);
            p=p->lchild;
        }
        Pop(S, p);
        printf("%d ", p->data);
        p = p->rchild;
    }
}

void LevelTraversal(BiTree &T){
    Queue Q;
    InitQueue(Q);
    BiTree p = T;
    EnQueue(Q, p);
    while (!QueueIsEmpty(Q)){
        DeDqueue(Q, p);
        printf("%d ", p->data);
        if(nullptr != p->lchild)
            EnQueue(Q, p->lchild);
        if(nullptr != p->rchild)
            EnQueue(Q, p->rchild);
    }
}


int main(){
    int num;
    BiTree T= nullptr;

    cout<<"输入第一行：准备建树的结点个数n："; cin>>num;
    cout<<"输入第二行：输入n个整数，用空格分隔：";
    CreateBiTree(T, num);

    int keyValue1, keyValue2,insertValue;
    cout<<"输入第三行：输入待查找的关键字：";cin>>keyValue1;
    cout<<"输入第四行：输入待查找的关键字：";cin>>keyValue2;
    cout<<"输入第五行：输入待插入的关键字：";cin>>insertValue;

    cout<<endl;
    cout<<"输出第一行：二叉树的先序遍历序列："; PreOrderTraversal(T);cout<<endl;
    cout<<"输出第二行：二叉树的中序遍历序列："; InOrderTraversal(T); cout<<endl;
    cout<<"输出第三行：二叉树的后序遍历序列："; PostOrderTraversal(T); cout<<endl;
    cout<<"输出第四行：查找结果："<< searchBiTree(T, keyValue1) << endl;
    cout<<"输出第五行：查找结果："<< searchBiTree(T, keyValue2) << endl;
    InsertBiTree(T, insertValue );
    cout<<"输出第六行：插入新结点后的二叉树的先序遍历序列："; PreOrderTraversal(T);cout<<endl;
    cout<<"输出第七行：插入新结点后的二叉树的中序遍历序列："; InOrderTraversal(T); cout<<endl;
    cout<<"输出第八行：插入新结点后的二叉树的后序遍历序列："; PostOrderTraversal(T); cout<<endl;
    cout<<"输出第九行：插入新结点后二叉树的中序遍历序列(非递归)："; InOrderTraversalNotInRecursion(T);  cout<<endl;
    cout<<"输出第十行：插入新结点后的二叉树的层次遍历序列：";      LevelTraversal(T);             cout<<endl;

}
```





## 3实现二叉排序树的各种算法(2)

用函数实现如下二叉排序树算法：
（1） 插入新结点
（2） 前序、中序、后序遍历二叉树
（3） 中序遍历的非递归算法
（4） 层次遍历二叉树
（5） 在二叉树中查找给定关键字(函数返回值为成功1,失败0)
（6） 交换各结点的左右子树
（7） 求二叉树的深度
（8） 叶子结点数

输入格式
第一行：准备建树的结点个数n
第二行：输入n个整数，用空格分隔
第三行：输入待查找的关键字
第四行：输入待查找的关键字
第五行：输入待插入的关键字

输出格式
第一行：二叉树的先序遍历序列
第二行：二叉树的中序遍历序列
第三行：二叉树的后序遍历序列
第四行：查找结果
第五行：查找结果
第六行\~第八行：插入新结点后的二叉树的先、中、序遍历序列
第九行：插入新结点后的二叉树的中序遍历序列(非递归算法)
第十行：插入新结点后的二叉树的层次遍历序列
第十一行\~第十三行：第一次交换各结点的左右子树后的先、中、后序遍历序列
第十四行~第十六行：第二次交换各结点的左右子树后的先、中、后序遍历序列
第十七行：二叉树的深度
第十八行：叶子结点数

输入样例
7
40 20 60 18 50 56 90
18
35
30

输出样例
40 20 18 60 50 56 90
18 20 40 50 56 60 90
18 20 56 50 90 60 40
1
0

第六行\~第八行：插入新结点后的二叉树的先、中、序遍历序列
第九行：插入新结点后的二叉树的中序遍历序列(非递归算法)
第十行：插入新结点后的二叉树的层次遍历序列
40 20 18 30 60 50 56 90
18 20 30 40 50 56 60 90
18 30 20 56 50 90 60 40
18 20 30 40 50 56 60 90
40 20 60 18 30 50 90 56

第十一行\~第十三行：第一次交换各结点的左右子树后的先、中、后序遍历序列
40 60 90 50 56 20 30 18
90 60 56 50 40 30 20 18
90 56 50 60 30 18 20 40

第十四行~第十六行：第二次交换各结点的左右子树后的先、中、后序遍历序列
40 20 18 30 60 50 56 90
18 20 30 40 50 56 60 90
18 30 20 56 50 90 60 40

第十七行：二叉树的深度
第十八行：叶子结点数
4
4

```c
#include<iostream>
using namespace std;
#define STACK_INIT_SIZE 100
#define QueueInitSize 100

typedef int TreeElement;

typedef struct Node{
    TreeElement data;
    struct Node *lchild, *rchild;
}Node, *BiTree;

typedef BiTree QueueElement;
typedef BiTree StackElement;

typedef struct Stack{
    StackElement *base;
    StackElement *top;
    int stackSize;
}Stack;

typedef struct Queue{
    QueueElement *base;
    int front;
    int rear;
};


// Stack Operation -----------------------------------------------------
void InitStack(Stack &S){
    S.base = (StackElement*) malloc (sizeof (StackElement) * STACK_INIT_SIZE);
    S.top = S.base;
    S.stackSize = STACK_INIT_SIZE;
}

void Push(Stack &S, StackElement data){
    *S.top = data;
    S.top++;
}

void Pop(Stack &S, StackElement &data){
    S.top--;
    data = *S.top;
}

bool StackIsEmpty(Stack &S){
    return S.top == S.base;
}

// Queue Operation
void InitQueue(Queue &Q){
    Q.base = (QueueElement *) malloc( QueueInitSize * sizeof (QueueElement));
    Q.front = Q.rear = 0;
}

void EnQueue(Queue &Q, QueueElement data){
    Q.base[Q.rear] = data;
    Q.rear = (Q.rear + 1)%QueueInitSize;
}

void DeQueue(Queue &Q, QueueElement &data){
    data = Q.base[Q.front];
    Q.front = (Q.front + 1)%QueueInitSize;
}

bool QueueIsEmpty(Queue Q){
    return Q.rear == Q.front;
}

// Tree Operation ------------------------------------------------------------------
void InsertBiTre(BiTree &T, TreeElement data){
    Node *newNode = T, *newNodePre;
    while (nullptr != newNode){
        if(newNode->data == data){
            cout<<"有重复值！";
            return;
        }
        newNodePre = newNode;
        newNode = (newNode->data < data)? newNode->rchild: newNode->lchild;
    }


    newNode = (Node *) malloc(sizeof (Node));
    newNode->data = data;
    newNode->lchild = newNode->rchild = nullptr;
    if(nullptr == T){
        T = newNode;
        return;
    }
    if(newNode->data < newNodePre->data){
        newNodePre->lchild = newNode;
    }else{
        newNodePre->rchild = newNode;
    }
}


//创建二叉排序树
void CreateBiTree(BiTree &T, int num){
    int data;
    for (int i = 0; i < num; ++i) {
        cin>>data;
        InsertBiTre(T, data);
    }
}

void PreOrderTraverse(BiTree &T){
    if(T){
        printf("%d ",T->data);
        PreOrderTraverse(T->lchild);
        PreOrderTraverse(T->rchild);
    }
}

void InOrderTraverse(BiTree &T){
    if(T){
        InOrderTraverse(T->lchild);
        printf("%d ",T->data);
        InOrderTraverse(T->rchild);
    }
}

void InOrderTraversalNotInRecursion(BiTree T){
    Stack S;
    InitStack(S);
    BiTree p = T;
    while (nullptr != p || !StackIsEmpty(S)){
        while (nullptr != p){
            Push(S,p);
            p=p->lchild;
        }
        Pop(S, p);
        printf("%d ", p->data);
        p = p->rchild;
    }
}

void PostOrderTraverse(BiTree &T){
    if(T){
        PostOrderTraverse(T->lchild);
        PostOrderTraverse(T->rchild);
        printf("%d ",T->data);
    }
}

bool SearchBiTree(BiTree T, TreeElement key){
    BiTree pointer = T;
    while (nullptr != pointer){
        if(pointer->data == key){
            return true;
        }
        pointer = (pointer->data < key)? pointer->rchild: pointer->lchild;
    }
    return false;
}

void LevelTraversal(BiTree &T){
    Queue Q;
    InitQueue(Q);
    BiTree pointer = T;
    EnQueue(Q, pointer);
    while (!QueueIsEmpty(Q)){
        DeQueue(Q, pointer);
        printf("%d ", pointer->data);
        if(nullptr != pointer->lchild) EnQueue(Q,pointer->lchild);
        if(nullptr != pointer->rchild) EnQueue(Q,pointer->rchild);
    }
}

void Exchange(BiTree &T){
    BiTree temp;
    if(T){
         temp = T->lchild;
         T->lchild = T->rchild;
         T->rchild = temp;
         Exchange(T->lchild);
         Exchange(T->rchild);
     }
}

int Depth(BiTree T){
    int depth, depthLeft, depthRight;
    if(!T)
        depth = 0;
    else{
        depthLeft = Depth(T->lchild);
        depthRight = Depth(T->rchild);
        depth = (depthLeft>depthRight? depthLeft: depthRight) + 1;
    }
    return depth;
}

void IeafNum(BiTree T, int &num){
    if(T){
        if(T->lchild == nullptr && T->rchild == nullptr)
            num++;
        IeafNum(T->lchild, num);
        IeafNum(T->rchild, num);
    }
}

int main()
{
    int num;
    BiTree  T = nullptr;
    TreeElement findKey, findKey2, insertKey;
    cout<<"输入第一行：准备建树的结点个数n："; cin>>num;
    cout<<"输入第二行：输入n个整数，用空格分隔：";CreateBiTree(T, num);
    cout<<"输入第三行：输入待查找的关键字："; cin>>findKey;
    cout<<"输入第四行：输入待查找的关键字："; cin>>findKey2;
    cout<<"输入第五行：输入待插入的关键字："; cin>>insertKey;


    cout<<"输出第一行：二叉树的先序遍历序列："; PreOrderTraverse(T);  cout<<endl;
    cout<<"输出第二行：二叉树的中序遍历序列："; InOrderTraverse(T);   cout<<endl;
    cout<<"输出第三行：二叉树的后序遍历序列："; PostOrderTraverse(T); cout<<endl;
    cout<<"输出第四行：查找结果：";  cout<<SearchBiTree(T, findKey) <<endl;
    cout<<"输出第五行：查找结果：";  cout<<SearchBiTree(T, findKey2)<<endl;

    InsertBiTre(T, insertKey);
    cout<<"输出第六行：插入新结点后二叉树的先序遍历序列："; PreOrderTraverse(T);  cout<<endl;
    cout<<"输出第七行：插入新结点后二叉树的中序遍历序列："; InOrderTraverse(T);   cout<<endl;
    cout<<"输出第八行：插入新结点后二叉树的后序遍历序列："; PostOrderTraverse(T); cout<<endl;
    cout<<"输出第九行：新结点二叉树的中序遍历序列(非递归)：";  InOrderTraversalNotInRecursion(T); cout<<endl;
    cout<<"输出第十行：插入新结点后的二叉树的层次遍历序列：";  LevelTraversal(T); cout<<endl;

    Exchange(T);
    cout<<"输出第十一行：第一次交换各结点的左右子树后的先序遍历序列："; PreOrderTraverse(T);  cout<<endl;
    cout<<"输出第十二行：第一次交换各结点的左右子树后的中序遍历序列："; InOrderTraverse(T);   cout<<endl;
    cout<<"输出第十三行：第一次交换各结点的左右子树后的后序遍历序列："; PostOrderTraverse(T); cout<<endl;

    Exchange(T);
    cout<<"输出第十四行：第二次交换各结点的左右子树后的先序遍历序列："; PreOrderTraverse(T);  cout<<endl;
    cout<<"输出第十五行：第二次交换各结点的左右子树后的中序遍历序列："; InOrderTraverse(T);   cout<<endl;
    cout<<"输出第十六行：第二次交换各结点的左右子树后的后序遍历序列："; PostOrderTraverse(T); cout<<endl;

    int iNum = 0;
    cout<<"输出第十七行：二叉树的深度：";  cout<<Depth(T)<<endl;
    cout<<"输出第十八行：叶子结点数：";  IeafNum(T, iNum); cout<<iNum<<endl;
}
```
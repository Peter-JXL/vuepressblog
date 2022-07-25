## 排序
[堆排序的时间复杂度分析_只愿不违本心的博客-CSDN博客_堆的时间复杂度](https://blog.csdn.net/qq_34228570/article/details/80024306)


堆排序包括两个阶段，初始化建堆和重建堆。所以堆排序的时间复杂度由这两方面组成，下面分别进行分析。先post一个实现代码，便于分析。

```c
#include <stdio.h>

void swap(int *a, int *b);
void adjustHeap(int param1,int j, int inNums[]);
void  HeapSort(int nums, int inNums[]);
//大根堆进行调整
void adjustHeap(int param1, int j, int inNums[])
{
    int temp=inNums[param1];
    for (int k=param1*2+1;k<j;k=k*2+1)
    {
        //如果右边值大于左边值，指向右边
        if (k+1<j && inNums[k]< inNums[k+1])
        {
            k++;
        }
        //如果子节点大于父节点，将子节点值赋给父节点,并以新的子节点作为父节点（不用进行交换）
        if (inNums[k]>temp)
        {
            inNums[param1]=inNums[k];
            param1=k;
        }
        else
            break;
    }
        //put the value in the final position
    inNums[param1]=temp;
}
//堆排序主要算法
void HeapSort(int nums,int inNums[])
{
    //1.构建大顶堆
    for (int i=nums/2-1;i>=0;i--)
    {
                //put the value in the final position
        adjustHeap(i,nums,inNums);
    }
    //2.调整堆结构+交换堆顶元素与末尾元素
    for (int j=nums-1;j>0;j--)
    {
                //堆顶元素和末尾元素进行交换
        int temp=inNums[0];
        inNums[0]=inNums[j];
        inNums[j]=temp;

        adjustHeap(0,j,inNums);//重新对堆进行调整
    }
}
int main() {
    int data[] = { 6,5,8,4,7,9,1,3,2};
    int len = sizeof(data) / sizeof(int);
    HeapSort(len,data);
    return 0;
}
```

## 一.初始化建堆

　　初始化建堆只需要对二叉树的非叶子节点调用adjusthead()函数，由下至上，由右至左选取非叶子节点来调用adjusthead()函数。那么倒数第二层的最右边的非叶子节点就是最后一个非叶子结点。
 　　假设高度为k，则从倒数第二层右边的节点开始，这一层的节点都要执行子节点比较然后交换（如果顺序是对的就不用交换）；倒数第三层呢，则会选择其子节点进行比较和交换，如果没交换就可以不用再执行下去了。如果交换了，那么又要选择一支子树进行比较和交换；高层也是这样逐渐递归。
 　　那么总的时间计算为：s = 2^( i - 1 ) * ( k - i )；其中 i 表示第几层，2^( i - 1) 表示该层上有多少个元素，( k - i) 表示子树上要下调比较的次数。
 　　S = 2^(k-2) * 1 + 2^(k-3) *2…..+2* (k-2)+2^(0)*(k-1) ===> 因为叶子层不用交换，所以i从 k-1 开始到 1；
 　　S = 2^k -k -1；又因为k为完全二叉树的深度，而log(n) =k，把此式带入；
 　　得到： **S = n - log(n) -1** ，所以[时间复杂度](https://so.csdn.net/so/search?q=%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6&spm=1001.2101.3001.7020)为：O(n)

## 二.排序重建堆

```c
在取出堆顶点放到对应位置并把原堆的最后一个节点填充到堆顶点之后，需要对堆进行重建，只需要对堆的顶点调用adjustheap()函数。
　　每次重建意味着有一个节点出堆，所以需要将堆的容量减一。adjustheap()函数的时间复杂度k=log(n)，k为堆的层数。所以在每次重建时，随着堆的容量的减小，层数会下降，函数时间复杂度会变化。重建堆一共需要n-1次循环，每次循环的比较次数为log(i)，则相加为：log2+log3+…+log(n-1)+log(n)≈log(n!)。可以证明log(n!)和nlog(n)是同阶函数：
　　∵(n/2)n/2≤n!≤nn,∵(n/2)n/2≤n!≤nn,
　　∴n/4log(n)=n/2log(n1/2)≤n/2log(n/2)≤log(n!)≤nlog(n)∴n/4log⁡(n)=n/2log⁡(n1/2)≤n/2log⁡(n/2)≤log⁡(n!)≤nlog⁡(n)
　　所以时间复杂度为O(nlogn)
```




## 三.总结

　　初始化建堆的时间复杂度为O(n)，排序重建堆的时间复杂度为nlog(n)，所以总的时间复杂度为O(n+nlogn)=O(nlogn)。另外堆排序的比较次数和序列的初始状态有关，但只是在序列初始状态为堆的情况下比较次数显著减少，在序列有序或逆序的情况下比较次数不会发生明显变化。
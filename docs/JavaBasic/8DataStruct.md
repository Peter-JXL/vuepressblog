---
title: 8DataStruct
date: 2022-07-26 07:25:36
permalink: /pages/1d1113/
categories:
  - JavaBasic
tags:
  - 
---
# LinkList

[LinkedList 的作者说他自己都不用 LinkedList？](https://mp.weixin.qq.com/s/VviqCFkSY5mBvXwIPX243w)

今天在网上冲浪，看到有文章说 LinkedList 的作者说他自己都不用 LinkedList，我就特意去翻了翻他的推特，发现他确实说过这话！

![图片](assets/640-20211123224057-fmii3ps)

可能这就是大佬吧，我造轮子，但是我不用！或者这就是传说中的厨子不吃自己做的菜？

不扯了，言归正传。其实我个人觉得大佬说好像是事实，因为在业务上好像都用不到 LinkedList ，大多数场景下都是用 ArrayList 比较合适，我细数了下自己平日里的使用情况，真的都是 ArrayList 。

说到这，可能有人不同意了，说我可是看过面试题的，LinkedList 可是有它的优势的！

这题我也看过，没记错的话应该是：说说 ArrayList 和 LinkedList 的之间区别？

我觉得这题可谓之为“八股文前三甲”，其实这题映射过来也就是关于数组与链表的比较。

只要你在网上看过这道面试题，你看到的答案必然是：

* 数组的随机访问快，插入和删除慢
* 链表的插入删除快，随机访问慢
* 频繁增删的情况下，用链表比较合适
* 在随机查找多的情况下，用数组比较合适

问题就出在链表的频繁增删这一点。如果单从增加查这三个方法的时间复杂度来看，确实如此，没有错。

但是，在平时的使用上来说，这个说法就完全不成立！你想想，如果你要在链表中删除某个元素，你首先得找到它啊！这个链表的查找可耗时的呀！

所以在实际使用的时候，如果你有频繁的增删，也不应该用链表。

不信？我们来做个实验看看咯。

```

public class YesArrayLinkedBattle {
    private static final int COUNT = 100000;

    static List<Integer> fillList(List<Integer> list) {
        for (int i = 0; i < COUNT; i++) {
            list.add(i); //将list填满，假装我们在数据库里得到这么多数据
        }
        return list;
    }
    static void randomAdd(List<Integer> list, String listType) {
        long t1 = System.currentTimeMillis();
        for (int i = 0; i < COUNT; i++) {
            list.add(ThreadLocalRandom.current().nextInt(0,COUNT), i);
        }
        long t2 = System.currentTimeMillis();
        System.out.println(listType +"随机位置插入" + COUNT + "次耗时：" + (t2-t1));
    }

    public static void main(String[] args) {

        randomAdd(fillList(new ArrayList<>(COUNT)), "数组");

        randomAdd(fillList(new LinkedList<>()), "链表");

    }
}
```

这个实验很粗暴简单，但也很直观，分别对被填满数据的 ArrayList 和 LinkedList 执行 10 万次随机的插入操作，然后分别统计耗时。

执行结果如下：

![图片](assets/640-20211123224057-doxz15h)是吧，在随机插入的情况下，链表不占优势反而大弱于数组！

所以说对于链表的插入操作，不能只关注其插入的时间复杂度，也要算上查找到前节点的开销，因此不能武断地说：`频繁增删的情况下，用链表比较合适`

当然，如果数据量很小的话，其实两者都是差不多的，比如长度都为 100 ，执行 100 次，则耗时如下：

![图片](assets/640-20211123224057-6ff9viz)

长度都为 1000 ，执行 1000 次，则耗时如下：

![图片](assets/640-20211123224057-9knwhfv)

所以，在数据量不大且操作次数不多的情况其实不必过于纠结到底用哪个。但在数据量较大且对时延敏感的情况下，建议还是做好测试，不能平白的根据一些“网上结论”而下定论。

好了，暂时扯到这。记住下次去面试别直接八股文硬上，咱们要多点质疑，加点个人思考，这样会让人觉得你更有东西。
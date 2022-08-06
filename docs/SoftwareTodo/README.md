---
title: README
date: 2022-07-26 07:46:01
permalink: /pages/6a5a63/
categories:
  - SoftwareTodo
tags:
  - 
---
# Listary
[希望可以关闭在空白桌面双击出现listary菜单功能](https://discussion.listary.com/t/listary/2837)

![](assets/39429690e6e9f784f6913c15ee0a032793bac2a1_2_582x499-1582622630153.png)



## [Listary 官方文档中文版 - 知乎](https://zhuanlan.zhihu.com/p/24897629)

**Listary 是 Windows 上的一款革命性的搜索和应用启动软件。**

翻译：**CNife**

在这里查看[英文文档](http://www.listary.com/docs)。

抱歉，出了点问题，后面的部分丢失了，下午补上。

## 上手指南

### 下载安装

在[这里](http://www.listary.com/download)下载最新版本的 Listary 。比起便捷版本，强烈建议使用安装版本，更新更加容易。

安装后，会进入快速上手的教程，建议 Listary 的新手跟着教程走一遍。在此之后，也可以通过右键系统托盘中的 Listary 图标进入教程。

![](assets/v2-ebd9b5241543a1e0b8449cb65b92861db-20211218094058-2hbabth.png)

### 即打即搜

点击观看 Youtube 视频：[即打即搜－Listary](https://youtu.be/9Yo-Asib2Sg)

在 **Windows 资源管理器**中，不需要按下任何快捷键，直接**输入关键词**就可以启动 Listary 搜索。

Listary 使用类似 Google 的关键词搜索方式，使用空格分开多个关键词。例如，如果你想搜索 ListaryDemoVideo.mp4 ，可以输入 listary demo、demo listary 或者  listary video 等。更多搜索方式，参见 高级搜索表达式。

![](assets/v2-e87b92aaa165eade2513b9571bd49011b-20211218094057-ejxpona.png)

### 启动应用

无论何时何地，都可以**连按两次 Ctrl 键**来启动 Listary ，搜索你的应用和文件。

当搜索词中**没有空格**的时候，Listary 会将应用程序列在前排；如果只搜索文件，只需键入**一个空格**即可。

![](assets/v2-c224564666256753be88995e6813db16b-20211218094057-skc5ldq.png)

### Listary 的两种模式

你可能注意到了，Listary 有两种模式。当用即打即搜启动搜索时，Listary 出现在  *资源管理器的右下角* ，这是  **文件管理器模式** ；当用 Ctrl X 2 的快捷键启动时，Listary 出现在 *屏幕的正中间* ，这是 **启动器模式** 。

* **文件管理器模式** ：这个模式只可用于搜索文件，Listary 搜索框出现在当前的文件管理器窗口中（如，Windows 资源管理器），搜索到的文件夹将在这个窗口中打开。启动应用、网络搜索等功能将被 *禁用* 。
* **启动器模式** ：这个模式中，所有功能都会启用。Listary 搜索框出现在屏幕正中间，文件夹将在新的文件管理器窗口中打开。

### 基本快捷键

* 在文件管理器中直接输入：启动 Listary 搜索；
* 连按两次 Ctrl 键：在任何地方启动 Listary 搜索；
* Esc：隐藏 Listary 搜索框，或取消动作；
* ↓ 键 或 Ctrl + N：选择下一项；
* ↑ 键 或 Ctrl + P：选择上一项；
* → 键 或 Ctrl + O：打开选中项的动作菜单。

### 网络搜索

输入 gg php tutorial ，即可使用 Google 搜索 php tutorial 。在 Listary 设置－关键字－Web 中查看支持的搜索引擎，也可添加你自己的网址。

该功能仅可在**启动器**模式中使用。

### 快速切换

点击观看 Youtube 视频 ：[快速切换 - Listary](https://youtu.be/9T9-OtRVeUw)

### 动作菜单

点击观看 Youtube 视频：[动作菜单－Listary](https://youtu.be/e_gzDH-7ZLA)

### 鼠标操作

Listary 主要是用来配合键盘操作的，但配合鼠标操作同样十分方便。**双击资源管理器或桌面上的空白区域** 即可弹出 Listary 快捷菜单。

![](assets/v2-81e19ca8892feca0a272ee9053167d95b-20211218094057-20bw2g8.png)

## 高级搜索表达式

### 指定上层文件夹名称

你可以让 Listary 只列出**上层文件夹名称**中包含特定关键词的结果，当搜索结果过多时，可使用该方法来快速缩小搜索范围。

这是 [Listary 专业版](http://www.listary.com/pro) 的功能。

#### 用法

在一个关键词后加上 \ 符号，即表明该关键词是上层文件夹路径的一部分。这个表达式可出现在搜索词中的 **任何地方** 。

#### 例子

**在 Windows 文件夹中搜索 notepad.exe：**

* win\note
* win\ note
* note win\

**在 My Documents 文件夹中搜索 Photo.jpg：**

* photo doc\
* photo doc\my\
* my\doc\photo

**在 D:\ 盘中搜索 Photo.jpg：**

* d:\photo
* photo d:\

### 搜索过滤

搜索过滤让你可以在指定的文件夹内按指定扩展名搜索文件或文件夹。

#### 用法

在过滤词后加上 : 即可使用搜索过滤，可用于搜索词的 **任何地方** 。可在 Listary 选项－搜索中添加自定义过滤词。

#### 默认搜索过滤词

* folder：文件夹
* file：文件
* doc：文档
* pic：图片
* audio：音频
* video：视频

#### 例子

搜索名称中带有 game 的文件夹：

* folder:game
* game folder:

## 3. 快捷键

### 3.1 启动 Listary 的快捷键

* Ctrl X 2：建议，所有 Windows 版本都可以使用
* Win + F：Windows 10（有冲突）
* Win + G：Windows 8
* Win + S：Windows 7 / XP

可在 Listary 选项－快捷键 中修改。

### 3.2 搜索结果快捷键

可使用下列快捷键定位搜索结果，在 Listary 选项－快捷键 中修改。

* ↓ 键 或 Ctrl + N：选择下一项；
* ↑ 键 或 Ctrl + P：选择上一项；
* → 键 或 Ctrl + O：打开选中项的动作菜单。
* Esc：隐藏 Listary 搜索框，或取消动作；
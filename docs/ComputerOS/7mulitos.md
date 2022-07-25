# 第7章　多媒体操作系统

数字电影、视频剪辑和音乐正在日益成为用计算机表示信息和进行消遣娱乐的常用方式。音频和视频文件可以保存在磁盘上，并且在需要的时候进行回放。音频和视频文件的特征与传统的文本文件存在很大的差异，而目前的文件系统却是为文本文件设计的。因此，需要设计新型的文件系统来处理音频和视频文件。不仅如此，保存与回放音频和视频同样给调度程序以及操作系统的其他部分提出了新的要求。本章中，我们将研究这些问题以及它们与设计用来处理多媒体信息的操作系统之间的关系。

数字电影通常归于多媒体名下，多媒体的字面含义是一种以上的媒体。在这样的定义下，本书就是一部多媒体作品，毕竟它包含了两种媒体：文本和图像（插图）。然而，大多数人使用"多媒体"这一术语时所指的是包含两种或更多种连续媒体的文档，连续媒体也就是必须能够在某一时间间隔内回放的媒体。本书中，我们将在这样的意义下使用多媒体这一术语。

另一个有些模糊的术语是"视频"。在技术意义上，视频只是一部电影的图像部分（相对的是声音部分）。实际上，摄像机和电视机通常有两个连接器，一个标为"视频"，一个标为"音频"，因为这两个信号是分开的。然而，"数字视频"这一术语通常指的是完整的作品，既包含图像也包含声音。后面我们将使用"电影"这一术语指完整的作品。注意，在这种意义下一部电影不一定是好莱坞以超过一架波音747的代价制作的长达两小时的大片，一段通过因特网从CNN主页下载的30秒长的新闻剪辑在这一定义下也是一部电影。当我们提到非常短的电影时，也将其称为"视频剪辑"。

## 7.1　多媒体简介

---

在讨论多媒体技术之前，了解其目前和将来的用法可能有助于对问题的理解。在一台计算机上，多媒体通常意味着从数字通用光盘（Digital

Versatile

Disk，DVD）播放一段预先录好的电影。DVD是一种光盘，它使用与CD-ROM相同的120

mm聚碳酸脂（塑料）盘片，但是记录密度更高，容量在5GB到17GB之间（取决于记录格式）。

有两个候选者正在竞争成为DVD的后继者。一个是Blu-ray（蓝光）格式，其单层格式容量有25GB（双层格式有50GB）。另一个是HD

DVD格式，其单层格式容量有15GB（双层格式30GB）。每一种格式都由一个不同的计算机和电影公司的财团支持。显然，电子与娱乐产业非常怀念在20世纪70年代到80年代Betamax与VHS的"格式大战"，因此他们决定重现这场战争。毋庸置疑，当消费者等着看哪家最终胜出时，这两个系统的普及也会因为这次"格式大战"而推迟好几年。

另一种多媒体的使用是从Internet上下载视频短片。许多网页都有可以点击下载短片的栏目。像YouTube一样的Web站点有成千上万可供欣赏的视频短片。随着有线电视与ADSL（非对称数字用户环线）的普及，更快的发布技术会占据市场，Internet中的视频短片将会像火箭升天一样猛增。

另一个必须支持多媒体的领域是视频本身的制作。目前有许多多媒体编辑系统，这些系统需要在不仅支持传统作业而且还支持多媒体的操作系统上运行，以获得最好的性能。

多媒体还在另一个领域中发挥着越来越重要的作用，这就是计算机游戏。计算机游戏经常要运行短暂的视频剪辑来描述某种活动。这些视频剪辑通常很短，但是数量非常多，并且还要根据用户采取的某些行动动态地选择正确的视频剪辑。计算机游戏正变得越来越复杂。当然，游戏本身也会生成大量的动画，不过，处理程序生成的视频与播放一段电影是不相同的。

最后，多媒体世界的圣杯是视频点播（video on

demand），这意味着消费者能够在家中使用电视遥控器（或鼠标）选择电影，并且立刻将其在电视机（或计算机显示器）上显示出来。视频点播要求有特殊的基础设施才能使用。图7-1所示为两种可能的视频点播基础设施，每种都包含三个基本的组件：一个或多个视频服务器、一个分布式网络以及一个在每个房间中用来对信号进行解码的机顶盒。视频服务器（video

server）是一台功能强大的计算机，在其文件系统中存放着许多电影，并且可以按照点播请求回放这些电影。大型机有时用来作为视频服务器，因为大型机连接1000个大容量的磁盘是一件轻而易举的事情；而在个人计算机上连接1000个容量不太大的磁盘也是一件很困难的事情。在本章后续各节中，有许多材料是关于视频服务器及其操作系统的。

![](assets/Image00230-20210822112059-fcyotjr.jpeg)

图　7-1　视频点播使用不同的本地分布技术：a)ADSL；b)有线电视

用户和视频服务器之间的分布式网络必须能够高速实时地传输数据。这种网络的设计十分有趣也十分复杂，但是这超出了本书的范围。我们不想更多地讨论分布式网络，只想说明分布式网络总是使用光纤从视频服务器连接到客户居住的居民点的汇接盒。ADSL系统是由电话公司经营的，在ADSL系统中，现有的双绞电话线提供了最后一公里的数据传输。有线电视是由有线电视公司经营的，在有线电视系统中，现有的有线电视电缆用于信号的本地分送。ADSL的优点是为每个用户提供了专用数据通道，因此带宽有保证，但是由于现有电话线的局限其带宽比较低（只有几Mb/s）。有线电视使用高带宽的同轴电缆，带宽可以达到几Gb/s，但是许多用户必须共享相同的电缆，从而导致竞争，对于每个用户来说带宽没有保证。不过，为了与有线电视竞争，电话公司正在为住户铺设光缆，这样，光缆上的ADSL将比电视电缆有更大的带宽。

系统的最后一部分是机顶盒（set-top

box），这是ADSL或电视电缆终结的地方。机顶盒实际上就是普通的计算机，只不过其中包含特殊的芯片用于视频解码和解压缩。机顶盒最少要包含CPU、RAM、ROM、与ADSL或电视电缆的接口，以及用于跟电视机连接的端子。

机顶盒的替代品是使用客户现有的PC机并且在显示器上显示电影。十分有趣的是，大多数客户可能都已经拥有一台计算机，为什么还要考虑机顶盒呢，这是因为视频点播的运营商认为人们更愿意在起居室中看电影，而起居室中通常放有电视机，很少有计算机。从技术角度看，使用个人计算机代替机顶盒更有道理，因为计算机的功能更加强大，拥有大容量的磁盘，并且拥有更高分辨率的显示器。不管采用的是机顶盒还是个人计算机，在解码并显示电影的用户端，我们通常都要区分视频服务器和客户机进程。然而，以系统设计的观点，客户机进程是在机顶盒上运行还是在PC机上运行并没有太大的关系。对于桌面视频编辑系统而言，所有的进程都运行在相同的计算机上，但是我们将继续使用服务器和客户这样的术语，以便搞清楚哪个进程正在做什么事情。

回到多媒体本身，要想成功地处理多媒体则必须很好地理解它所具有的两个关键特征：

1)多媒体使用极高的数据率。

2)多媒体要求实时回放。

高数据率来自视觉与听觉信息的本性。眼睛和耳朵每秒可以处理巨大数量的信息，必须以这样的速率为眼睛和耳朵提供信息才能产生可以接受的观察体验。图7-2列举了几种数字多媒体源和某些常见硬件设备的数据率。在本章后面我们将讨论这些编码格式。需要注意的是，多媒体需要的数据率越高，则越需要进行压缩，并且需要的存储量也就越大。例如，一部未压缩的2小时长的HDTV电影将填满一个570GB的文件。存放1000部这种电影的视频服务器需要570TB的磁盘空间，按照目前的标准这可是难以想象的数量。还需要注意的是，没有数据压缩，目前的硬件不可能跟上这样的数据率。我们将在本章后面讨论视频压缩。

![](assets/Image00231-20210822112059-9g5kewo.jpeg)

图　7-2　某些多媒体和高性能I/O设备的数据率（1 Mbps=10^6^

位/秒，1　GB=2^30^ 字节）

多媒体对系统提出的第二个要求是需要实时数据传输。数字电影的视频部分每秒包含某一数目的帧。北美、南美和日本采用的NTSC制式每秒包含30帧（对纯粹主义者而言是29.97帧），世界上其他大部分地区采用的PAL和SECAM制式每秒包含25帧（对纯粹主义者而言是25.00帧）。帧必须分别以33.3ms或40ms的精确时间间隔传输，否则电影看起来将会有起伏。

NTSC代表美国国家电视标准委员会（National Television Standards

Committee），但是当彩色电视发明时将彩色引入该标准的拙劣方法产生了业界的一个笑话，戏称NTSC代表决不复现相同的颜色（Never

Twice the Same Color）。PAL代表相位交错排列（Phase Alternating

Line），它是技术上最好的制式。SECAM代表顺序与存储彩色（SEquentiel

Couleur Avec

Memoire），该制式被法国采用，意在保护法国的电视制造商免受国外竞争。SECAM还被东欧国家所采用。
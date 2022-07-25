# wget命令


[Linux wget命令_书香水墨的博客-CSDN博客_wget命令详解](https://blog.csdn.net/qq_27870421/article/details/91951402)


#### `一、wget命令`

> [wget](https://so.csdn.net/so/search?q=wget&spm=1001.2101.3001.7020)命令用来从指定的URL下载文件。wget非常稳定，它在带宽很窄的情况下和不稳定网络中有很强的适应性，如果是由于网络的原因下载失败，wget会不断的尝试，直到整个文件下载完毕。如果是服务器打断下载过程，它会再次联到服务器上从停止的地方继续下载。这对从那些限定了链接时间的服务器上下载大文件非常有用。

=1.1 语法=

```shell
wget(选项)(参数)
1
```

=1.2 选项=

| 选项          | 描述                                                      |
| :-------------- | :---------------------------------------------------------- |
| -a<日志文件>  | 在指定的日志文件中记录资料的执行过程；                    |
| -A<后缀名>    | 指定要下载文件的后缀名，多个后缀名之间使用逗号进行分隔；  |
| -b            | 进行后台的方式运行wget；                                  |
| -B<连接地址>  | 设置参考的连接地址的基地地址；                            |
| -c            | 继续执行上次终端的任务；                                  |
| -C<标志>      | 设置服务器数据块功能标志on为激活，off为关闭，默认值为on； |
| -d            | 调试模式运行指令；                                        |
| -D<域名列表>  | 设置顺着的域名列表，域名之间用“，”分隔；                |
| -e<指令>      | 作为文件“.wgetrc”中的一部分执行指定的指令；             |
| -h            | 显示指令帮助信息；                                        |
| -i<文件>      | 从指定文件获取要下载的URL地址；                           |
| -l<目录列表>  | 设置顺着的目录列表，多个目录用“，”分隔；                |
| -L            | 仅顺着关联的连接；                                        |
| -r            | 递归下载方式；                                            |
| -nc           | 文件存在时，下载文件不覆盖原有文件；                      |
| -nv           | 下载时只显示更新和出错信息，不显示指令的详细执行过程；    |
| -q            | 不显示指令执行过程；                                      |
| -nh           | 不查询主机名称；                                          |
| -v            | 显示详细执行过程；                                        |
| -V            | 显示版本信息；                                            |
| –passive-ftp | 使用被动模式PASV连接FTP服务器；                           |
| –follow-ftp  | 从HTML文件中下载FTP连接文件。                             |

=1.3 参数=

```shell
URL：指定要下载文件的URL地址
1
```

#### `二、示列`

```shell
wget http://test.com/testfile.zip ->下载指定文件到当前文件夹
wget -O wordpress.zip http://test.com/download ->指定保存名字
wget --limit-rate=300k http://www.linuxde.net/testfile.zip ->限制下载速度
wget -c http://www.linuxde.net/testfile.zip ->断点续传
wget -b http://www.linuxde.net/testfile.zip ->后台下载

# 设置使用指定浏览器下载（伪装下载）
wget --user-agent="Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/10.0.648.204 Safari/534.16" http://www.linuxde.net/testfile.zip

wget --spider url ->测试下载
wget --tries=40 URL ->设置重试次数为40
wget -i filelist.txt ->从filelist.txt获取下载地址

# 镜像网站
# --miror开户镜像下载。
# -p下载所有为了html页面显示正常的文件。
# --convert-links下载后，转换成本地的链接。
# -P ./LOCAL保存所有文件和目录到本地指定目录
wget --mirror -p --convert-links -P ./LOCAL URL

wget --reject=gif ur ->下载一个网站，但你不希望下载图片，可以使用这条命令
wget -o download.log URL ->把下载信息存入日志文件
wget -Q5m -i filelist.txt ->限制总下载文件大小
wget -r -A.pdf url ->下载指定格式文件

# FTP下载
wget ftp-url
wget --ftp-user=USERNAME --ftp-password=PASSWORD url
```




## [wget设置代理_小样จุ๊บ的博客-CSDN博客_wget 设置代理](https://blog.csdn.net/weixin_44076273/article/details/108473825)

改 wgetrc 文件

```bash
vi /etc/wgetrc
```

找到这段改成自己的然后保存退出
 ![在这里插入图片描述](assets/20200908175008392-20220414222754-yurcc6z.png)



2022-5-8 晚上下载openssl的时候报错

```shell
[root@iZbp1gg5s200edtvvtwh8wZ opt]# wget https://www.openssl.org/source/old/1.1.0/openssl-1.1.0f.tar.gz
--2022-05-07 22:52:59--  https://www.openssl.org/source/old/1.1.0/openssl-1.1.0f.tar.gz
Resolving www.openssl.org (www.openssl.org)... 23.199.80.209, 2600:1417:e800:189::c1e, 2600:1417:e800:182::c1e
Connecting to www.openssl.org (www.openssl.org)|23.199.80.209|:443... connected.
ERROR: cannot verify www.openssl.org's certificate, issued by ‘/C=US/O=Let's Encrypt/CN=R3’:
  Issued certificate has expired.
To connect to www.openssl.org insecurely, use `--no-check-certificate'.

```


## [科普: 使用no-check-certificate参数的危害及避免方法-国外便宜VPS](http://www.367783.net/hosting/7016.html)



前几天[南琴浪大佬](https://t.me/SometimesNaiveReporter/624)给科普了`--no-check-certificate`滥用额危害，这里将内容按照自己的理解扩展了下。 欢迎各位在评论区补充！


原文

今天在群里谈到了 `wget --no-check-certificate` 。 **这个参数会让你在 wget 进行对 https 站点的请求时不再检查证书。**



隐患

* 这个参数所带来的隐患就是：例如现在很多教程或脚本的分享站(包括许多各路大佬的站点)为了省事都使用了这个参数，而埋下了例如中间人这种隐患。 例如，假设 gfw **劫持**了某个脚本大户站点的访问，那么用 `--no-check-certificate` 参数的那么多用户都要遭殃。
* **其实简单说就是HTTP会被劫持** 。
#!/usr/bin/env sh

# 该脚本用于主动推送 sitemap 到百度搜索资源平台，缩短爬虫发现网站链接的时间
# 百度资源平台地址：https://ziyuan.baidu.com

# 确保脚本抛出遇到的错误
set -e

curl -H 'Content-Type:text/plain' --data-binary @urls.txt "http://data.zz.baidu.com/urls?site=https://www.peterjxl.com&token=ThTfDAQIHXqbZYZb"


rm -rf urls.txt # 删除文件

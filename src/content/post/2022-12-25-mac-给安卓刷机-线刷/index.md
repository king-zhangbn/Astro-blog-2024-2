---
title: "Mac 给安卓刷机-线刷"
publishDate: 2022-12-25 09:23:02 
description: 此篇文章迁移自前WordPress文章，无description
tags:
  - 折腾分享
language: 中文
---

## 一：安装ADB Tools

在终端中输入：

```
brew install android-platform-tools --cask
```

等待跑马结束

## 二：解压下载好的线刷包，给权限

```
sudo chmod -R 777 (/Users/xingluo/Downloads/lmi_images_V13.0.6.0.SJKCNXM_20221101.0000.00_12.0_cn_chinatelecom)
```

> 括号内的是你刷机包的路径，自行更换

## 三：开始刷机

首先获取手机识别码，手机进入fastboot

```
fastboot devices
```

的出的前面的字符即位手机识别码

```
xxxxxxfastboot
```

进入刷机包目录，在该目录下输入一下代码

```
sh ./flash_all.sh -s b0844ab
```

## 四： finish

如果要root，先导出手机上做好的boot，再输入

```
fastboot boot 你导出的boot文件.img
```

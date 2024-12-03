---
title: "史上最简单的我的世界互通服务器开服V1.20.6"
publishDate: 2024-06-22 22:14:05 
description: 此篇文章迁移自前WordPress文章，无description
tags:
  - 折腾分享
language: 中文
---

![](https://cpic2024.qiu.icu/uploads/piclist/202406230612204.webp)

> Minecraft--Purpur-Geyser-Spigot-Floodgate-ViaVersion

## 1、You Need What?

- 一台LINUX的小主机或者电脑等等都可以
- 下载需要好的网速（科学环境）

## 2、INSTALL

### STEP.1 - Install MCSManager

Linux 自动安装脚本，因为需要注册到系统服务，一键安装脚本**必须使用 root 权限**运行。

```
sudo su -c "wget -qO- https://script.mcsmanager.com/setup_cn.sh | bash"
```

![image-20240623052239127](https://cpic2024.qiu.icu/uploads/piclist/202406230522655.webp)

### STEP.2 - Download Somethings

- Purpur 核心—— [Purpur - Your Minecraft, your way (purpurmc.org)](https://purpurmc.org/)
- Geyser 间歇泉 （Spigot/Floodgate）（Spigot/Paper）——[GeyserMC: Download](https://geysermc.org/download#floodgate)
- ViaVersion 跨版本——[ViaVersion | SpigotMC - High Performance Minecraft](https://www.spigotmc.org/resources/viaversion.19254/)

![image-20240623052848463](https://cpic2024.qiu.icu/uploads/piclist/202406230528756.webp)

![image-20240623053758293](https://cpic2024.qiu.icu/uploads/piclist/202406230537566.webp)

### STEP.3 - Start MCSManager

浏览器输入 http://:23333 ，注册登入

![image-20240623053234540](https://cpic2024.qiu.icu/uploads/piclist/202406230532066.webp)

选择java

![image-20240623053304241](https://cpic2024.qiu.icu/uploads/piclist/202406230533541.webp)

选择第三个：上传单个服务端软件

![image-20240623053918439](https://cpic2024.qiu.icu/uploads/piclist/202406230539699.webp)

![image-20240623055316404](https://cpic2024.qiu.icu/uploads/piclist/202406230553720.webp)

进入面板，选择 **应用实例设置**，容器化，启动docker容器

![image-20240623054231116](https://cpic2024.qiu.icu/uploads/piclist/202406230542448.webp)

此处新建镜像

![image-20240623054457551](https://cpic2024.qiu.icu/uploads/piclist/202406230544907.webp)

![image-20240623054615947](https://cpic2024.qiu.icu/uploads/piclist/202406230546238.webp)

戳这个

![image-20240623054649742](https://cpic2024.qiu.icu/uploads/piclist/202406230546997.webp)

![image-20240623054748037](https://cpic2024.qiu.icu/uploads/piclist/202406230547291.webp)

等创建成功，选择JDK21 保存启动即可

![image-20240623054853459](https://cpic2024.qiu.icu/uploads/piclist/202406230548800.webp)

### STEP.3 - Fight BE And JAVA

打通互通

把之前下的jar塞到此文件夹

![image-20240623055616789](https://cpic2024.qiu.icu/uploads/piclist/202406230556114.webp)

## 3、Enjoy

over

所有下载打包：[https://xingluos.notion.site/V1-20-6-38f8a05e75ea44c3939bc074d4640c7d?pvs=4](https://xingluos.notion.site/V1-20-6-38f8a05e75ea44c3939bc074d4640c7d?pvs=4)

---
title: "图床工具PicGo 顶级替代品：PicList"
publishDate: 2024-04-08 11:47:11 
description: 此篇文章迁移自前WordPress文章，无description
tags:
  - 折腾分享
language: 中文
---

# 推荐一款图床软件

PicList，Kuingsmile大佬所制作

手机端仓库链接：[Kuingsmile/PicHoro: 一款手机端云存储平台/图床管理和文件上传/下载工具](https://github.com/Kuingsmile/PicHoro)

电脑端仓库链接：[Kuingsmile/PicList: An image upload and manage tool, base on PicGo (github.com)](https://github.com/Kuingsmile/PicList)

# 官方说明

PicList是一款高效的云存储和图床平台管理工具，在PicGo的基础上经过深度的二次开发，不仅完整保留了PicGo的所有功能，还增添了许多新的feature。例如相册支持同步云端删除文件，内置图床额外添加了WebDav、本地图床和SFTP等。PicList同时增加了完整的云存储管理功能，包括云端目录查看、文件搜索、批量上传下载和删除文件，复制多种格式文件链接和图片/markdown/文本/视频预览等，另外还有更加强大的相册和多项功能新增或优化。

## 如何从PicGo迁移

PicList `V1.5.0`以上版本提供 `一键迁移`功能，进入 `设置`页面，然后在 `从PicGo迁移`选项点击右侧按钮即可，迁移后请重启应用生效。

## PicList-Core

PicList的内核使用的是原版PicGo-Core基础上修改的[PicList-core](https://github.com/Kuingsmile/PicList-Core)，为云端删除等功能做了适配，同时，新增了水印添加和图片压缩/缩放/旋转/格式转换等功能，可以通过CLI命令行调用，支持通过`picgo-server`命令开启上传服务器，还有一些其他的功能改动。

如果您希望使用PicList-core，请前往https://github.com/Kuingsmile/PicList-Core，或者前往[npm官方地址](https://www.npmjs.com/package/piclist)查看安装说明。

## 特色功能

- 保留了PicGo的所有功能，兼容绝大部分已有的PicGo插件，包括和Typora、Obsidian等软件的搭配
- 新增了多个内置图床，如WebDav、兰空图床、本地图床、SFTP和Telegra.ph等，原内置imgur图床额外支持登录账号上传
- 相册中可同步删除云端图片，支持所有内置图床和多个插件
- 相册新增了高级搜索和排序，批量修改URL等功能
- 内置水印添加、图片压缩、图片缩放、图片旋转和图片格式转换等功能，同时支持高级重命名
- 上传接口支持表单上传文件，可多电脑共用
- 支持配置同步至Github/Gitee/Gitea仓库
- 支持管理十余种图床，可以在线进行云端目录查看、文件搜索、批量上传、批量下载、删除文件等
- 支持预览多种格式的文件，包括图片、视频、纯文本文件和markdown文件等，具体支持的格式请参考[支持的文件格式列表](https://github.com/Kuingsmile/PicList/blob/dev/supported_format.md)
- 支持启用正则表达式的批量云端文件重命名
- 对于私有存储桶等支持复制预签名链接进行分享
- 支持软件自动更新，支持多种启动模式，还有更多功能细节新增和优化
- 优化了PicGo的界面，解锁了窗口大小限制，同时美化了部分界面布局
- mac平台安装包已签名，从源头解决了PicGo上的安装包已损坏的日经问题

## 如何使用

### 如何在Vscode中使用

请安装我的配套插件 [VS-PicList](https://marketplace.visualstudio.com/items?itemName=Kuingsmile.vs-piclist),相比于vs-picgo插件，该插件直接依赖于PicList桌面端软件，支持多样上传和直接在Vscode中进行云端删除等功能。

### 如何在Typora中使用

#### **1.6.0版本及以上**

**Typora 1.6.0-dev以及以上版本现在已经原生支持PicList了**

目前Typora中需要同时设置上传服务PicList和PicGo（app）的路径为PicList的安装路径，已经在最新的Dev版本中修复。

[下载地址](https://typora.io/releases/all)

#### 1.6.0版本以下

Windows:

进入Typora设置界面，选择图像，将上传服务设置为 `PicGo(app)`，然后在 `PicGo路径`中填写PicList的安装路径，如下图所示：

![image-20240411194138826](https://cpic2024.qiu.icu/uploads/picgo/202404111941943.png)

# 为什么推荐？

可以压缩到 webp！！！！，无敌好吧

![image-20240411194306785](https://cpic2024.qiu.icu/uploads/picgo/202404111943921.png)

---
title: ComoressO视频压缩软件 多平台
description: >-
  将任何视频压缩成一个小尺寸。  CompressO（🔉发音为“Espresso”）是一款由 FFmpeg 提供支持的免费开源跨平台视频压缩应用程序。
  适用于Linux、Windows和MacOS。
publishDate: 2024-11-07
tags:
  - 折腾分享
language: CH/EN
---
## Intro

这应该是我见过UI很不错的一个基于ffmpeg的视频压缩软件了，多平台，不用跑命令行了！！

![](https://pic.en.icu/i/2024/11/07/nuo8bf-0.webp)

![](https://pic.en.icu/i/2024/11/07/nuqr6s-0.webp)

## 插一个**WebM 与 MP4 的比较**

您可以根据下表快速比较两种视频格式，看看哪一种更好。

{% table %}
---
- 
- **网络管理器**
- **MP4**
---
- **编解码器**
- 视频：VP8 或 VP9 音频：Vorbis、OGG
- 视频：H.264、H.265/HEVC、MPEG-4 音频：AAC、MP3、AC3
---
- **支持的媒体播放器和浏览器**
- Opera、Mozilla Firefox、Microsoft Internet Explorer、Google Chrome
- 所有媒体播放器和浏览器。
---
- **开发商**
- 谷歌公司
- IOS（国际标准化组织）
---
- **文件扩展名**
- .webm
- .mp4
---
- **优点**
- - ◆小视频上传到网站。
  - ◆它完全免费，任何人都可以使用。
  - ◆热门视频网站支持。
- - ◆图像质量极佳，而数据使用量保持在低水平。
  - ◆视频通过互联网流式传输。
  - ◆高压缩无损质量。
  - ◆通用格式。
---
- **缺点**
- ◆移动设备和媒体播放器的兼容性问题
- - ◆更新编辑不易。
  - ◆支持视频盗版。
{% /table %}

## rope

[compressO](https://github.com/codeforreal1/compressO)

### 常见问题 ❓

1. **MacOS：“CompressO”已损坏，无法打开。你应该把它移到垃圾桶。**

   Apple 显示此错误是为了阻止应用程序开发人员使用他们的应用程序，除非它在支付 100 美元/年的费用后由 Apple 签署。该消息完全具有误导性，因为该应用程序根本没有损坏。既然这是一个免费的应用程序，我不会走 Apple 的路线，只是为了安抚他们，让人们信任我的应用程序。这是此问题的简单解决方案。打开您的终端并运行命令：

   ````
   ```
   xattr -cr /Applications/CompressO.app
   ```
   
   ````

   如果您对应用上述解决方案感到不舒服，您可以简单地将应用程序移至废纸篓（这也意味着您不能在 Mac 上使用 CompressO）。

1. **MacOS：“CompressO”无法打开，因为无法验证开发人员。**

   此错误与上述常见问题解答 1 中的错误相同。只是，Apple 制作了不同的消息来吓唬最终用户。请查看上面的解决方案。

1. **Windows：Microsoft Defender SmartScreen 阻止无法识别的应用程序启动。运行此应用程序可能会使您的 PC 处于危险之中。**

   这是因为您从外部源下载了 Windows 安装程序，并且 Windows Defender 在安装前会警告您。您只需点击“更多信息”并继续安装。

1. **应用程序在Debian 13和Ubuntu 24上无法运行**

   Tauri 似乎缺少一些在 Debian 13 中删除的软件包，以及像 Ubuntu 24 这样的衍生产品。Tauri 团队正在调查此问题。不幸的是，现在没有解决方案。

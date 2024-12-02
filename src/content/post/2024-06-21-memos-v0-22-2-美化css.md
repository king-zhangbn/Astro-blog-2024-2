---
title: "Memos V0.22.2 美化CSS - 顺带视频壁纸"
publishDate: 2024-06-21 08:04:59 
description: 此篇文章迁移自前WordPress文章，无description
tags:
  - 折腾分享
language: 中文
---

# Intro

![](https://cpic2024.qiu.icu/uploads/piclist/202406231936911.avif) 看了一大圈都没有，算了算了，自己车一个，些许部分参考的[木木木木木木教程](http://https://immmmm.com/memos-diy-style/ "木木木木木木教程") 仓库：[https://github.com/usememos/memos](https://github.com/usememos/memos)

# 普通CSS

效果： [![](https://vpic2024.en.icu/uploads/piclist/202406211603191.webp)](https://vpic2024.en.icu/uploads/piclist/202406211603191.webp)

```css
html {
    background-image: url('https://bing.immmmm.com/img/bing?region=zh-CN&type=image');
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}

.w-full.bg-zinc-100,
.bg-white,
.hover\:bg-white:hover,
.dark .dark\:bg-zinc-700,
.dark .dark\:hover\:bg-zinc-700:hover,
.memo-wrapper,
.bg-gray-200,
.dark .memo-wrapper,
.memo-editor-container {
    --tw-bg-opacity: 0.66 !important;
    backdrop-filter: blur(20px);
}

.dark header.dark\:bg-zinc-800,
aside.dark\:bg-zinc-800,
.bg-gray-100,
.dark html,
.dark body {
    --tw-bg-opacity: 0 !important;
}

.memo-editor-container>.memo-editor {
    background-color: transparent !important;
}

.dark\:border-zinc-800:is(.dark *) {
    --tw-border-opacity: 1;
    border-color: rgb(39 39 42 / var(--tw-border-opacity));
    backdrop-filter: blur(20px);
}

.dark\:bg-zinc-900:is(.dark *) {
    --tw-bg-opacity: 1;
    background-color: rgb(24 24 27 / var(--tw-bg-opacity));
}

.dark\:bg-zinc-900:is(.dark *) {
    --tw-bg-opacity: 1;
    background-color: rgb(39 39 42 / 66%);
    .dark\:bg-opacity-40:is(.dark *) {
    --tw-bg-opacity: .4;
    backdrop-filter: blur(20px);
}
}

.dark\:bg-opacity-40:is(.dark *) {
    --tw-bg-opacity: .4;
    backdrop-filter: blur(20px);
}

body {
    min-height: 100svh;
    width: 100%;
    --tw-bg-opacity: 1;
    background-color: rgb(244 244 245 / 0%);
    font-size: 1rem;
}

.bg-zinc-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(250 250 250 / 66%);
    backdrop-filter: blur(20px);
}

.bg-inherit {
    /* background-color: inherit; */
}
```

# 视频CSS & JS

效果：![](https://vpic2024.en.icu/uploads/piclist/202406211701953.gif)

```css
/* 设置body和html的基本样式，去掉默认的margin和padding，并设置宽度和高度为100%，以确保背景视频覆盖整个屏幕 */
body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden; /* 隐藏溢出的内容 */
}

/* 定义视频背景容器的样式 */
.video-background {
    position: fixed; /* 固定位置 */
    top: 0;
    left: 0;
    width: 100%; /* 占满整个屏幕宽度 */
    height: 100%; /* 占满整个屏幕高度 */
    overflow: hidden; /* 隐藏溢出的内容 */
    z-index: -1; /* 设置为-1，使视频背景在内容后面 */
}

/* 定义视频元素的样式 */
#background-video {
    width: 100%; /* 设置视频宽度为100% */
    height: 100%; /* 设置视频高度为100% */
    object-fit: cover; /* 确保视频覆盖整个容器，同时保持视频的宽高比 */
}

.w-full.bg-zinc-100,
.bg-white,
.hover\:bg-white:hover,
.dark .dark\:bg-zinc-700,
.dark .dark\:hover\:bg-zinc-700:hover,
.memo-wrapper,
.bg-gray-200,
.dark .memo-wrapper,
.memo-editor-container {
    --tw-bg-opacity: 0.66 !important;
    backdrop-filter: blur(20px);
}

.dark header.dark\:bg-zinc-800,
aside.dark\:bg-zinc-800,
.bg-gray-100,
.dark html,
.dark body {
    --tw-bg-opacity: 0 !important;
}

.memo-editor-container>.memo-editor {
    background-color: transparent !important;
}

.dark\:border-zinc-800:is(.dark *) {
    --tw-border-opacity: 1;
    border-color: rgb(39 39 42 / var(--tw-border-opacity));
    backdrop-filter: blur(20px);
}

.dark\:bg-zinc-900:is(.dark *) {
    --tw-bg-opacity: 1;
    background-color: rgb(24 24 27 / var(--tw-bg-opacity));
}

.dark\:bg-zinc-900:is(.dark *) {
    --tw-bg-opacity: 1;
    background-color: rgb(39 39 42 / 66%);
    .dark\:bg-opacity-40:is(.dark *) {
    --tw-bg-opacity: .4;
    backdrop-filter: blur(20px);
}
}

.dark\:bg-opacity-40:is(.dark *) {
    --tw-bg-opacity: .4;
    backdrop-filter: blur(20px);
}

body {
    min-height: 100svh;
    width: 100%;
    --tw-bg-opacity: 1;
    background-color: rgb(244 244 245 / 0%);
    font-size: 1rem;
}

.bg-zinc-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(250 250 250 / 66%);
    backdrop-filter: blur(20px);
}

.bg-inherit {
    /* background-color: inherit; */
}
```

JS

```javascript
// 创建一个div元素作为视频背景的容器
var videoBackground = document.createElement('div');
// 为该div元素添加一个类名
videoBackground.className = 'video-background';

// 创建video元素
var videoElement = document.createElement('video');
// 设置video元素的ID
videoElement.id = 'background-video';
// 设置自动播放属性
videoElement.autoplay = true;
// 设置静音属性
videoElement.muted = true;
// 设置循环播放属性
videoElement.loop = true;

// 创建source元素
var sourceElement = document.createElement('source');
// 设置视频的URL
sourceElement.src = 'https://t.alcy.cc/acg';
// 设置视频的类型
sourceElement.type = 'video/mp4';

// 将source元素添加到video元素中
videoElement.appendChild(sourceElement);

// 将video元素添加到视频背景容器div中
videoBackground.appendChild(videoElement);

// 将视频背景容器div添加到body中
document.body.appendChild(videoBackground);
```

# 终极 手机背景为图片，电脑为视频

CSS

```css
/* 设置body和html的基本样式，去掉默认的margin和padding，并设置宽度和高度为100%，以确保背景视频覆盖整个屏幕 */
body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden; /* 隐藏溢出的内容 */
}

/* 定义视频背景容器的样式 */
.video-background {
    position: fixed; /* 固定位置 */
    top: 0;
    left: 0;
    width: 100%; /* 占满整个屏幕宽度 */
    height: 100%; /* 占满整个屏幕高度 */
    overflow: hidden; /* 隐藏溢出的内容 */
    z-index: -1; /* 设置为-1，使视频背景在内容后面 */
}

/* 定义视频元素的样式 */
#background-video {
    width: 100%; /* 设置视频宽度为100% */
    height: 100%; /* 设置视频高度为100% */
    object-fit: cover; /* 确保视频覆盖整个容器，同时保持视频的宽高比 */
}

/* 定义图片背景容器的样式 */
.image-background {
    position: fixed; /* 固定位置 */
    top: 0;
    left: 0;
    width: 100%; /* 占满整个屏幕宽度 */
    height: 100%; /* 占满整个屏幕高度 */
    background-size: cover; /* 确保图片覆盖整个容器 */
    background-position: center; /* 图片居中 */
    z-index: -1; /* 设置为-1，使图片背景在内容后面 */
    display: none; /* 默认隐藏 */
}
```

JS

```javascript
// 创建视频背景函数
function createVideoBackground() {
    // 创建一个div元素作为视频背景的容器
    var videoBackground = document.createElement('div');
    // 为该div元素添加一个类名
    videoBackground.className = 'video-background';

    // 创建video元素
    var videoElement = document.createElement('video');
    // 设置video元素的ID
    videoElement.id = 'background-video';
    // 设置自动播放属性
    videoElement.autoplay = true;
    // 设置静音属性
    videoElement.muted = true;
    // 设置循环播放属性
    videoElement.loop = true;

    // 创建source元素
    var sourceElement = document.createElement('source');
    // 设置视频的URL
    sourceElement.src = 'https://t.alcy.cc/acg';
    // 设置视频的类型
    sourceElement.type = 'video/mp4';

    // 将source元素添加到video元素中
    videoElement.appendChild(sourceElement);

    // 将video元素添加到视频背景容器div中
    videoBackground.appendChild(videoElement);

    // 将视频背景容器div添加到body中
    document.body.appendChild(videoBackground);
}

// 创建图片背景函数
function createImageBackground() {
    // 创建一个div元素作为图片背景的容器
    var imageBackground = document.createElement('div');
    // 为该div元素添加一个类名
    imageBackground.className = 'image-background';
    // 设置背景图片的URL
    imageBackground.style.backgroundImage = "url('https://bing.immmmm.com/img/bing?region=zh-CN&type=image')";

    // 将图片背景容器div添加到body中
    document.body.appendChild(imageBackground);
    // 显示图片背景容器
    imageBackground.style.display = 'block';
}

// 检查设备类型或屏幕宽度
if (window.innerWidth > 768) {
    // 如果屏幕宽度大于768px，创建视频背景
    createVideoBackground();
} else {
    // 如果屏幕宽度小于或等于768px，创建图片背景
    createImageBackground();
}
```

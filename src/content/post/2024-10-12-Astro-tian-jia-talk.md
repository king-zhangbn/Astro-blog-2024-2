---
title: Astro 添加说说页面
publishDate: 2024-10-12 08:00:00
description: '迈向更加光明的未来——各界群众欢度国庆'
tags:
  - 折腾分享
coverImage: { src: './astro.webp', color: '#8c500d' }
language: '中文'
---


> 心血来潮，想给自己喜欢的`astro`博客添加一个说说页面，恰好手上有一个`memos`，ok，开干

## 坑一
直接爆粗口
傻逼`memos`，越更新越傻逼，功能砍来砍去，艹，简直无语

> `v0.22`以上的，本篇文章别看了。

找了许多的教程，发现适配`v0.22`以上的少之又少，聊胜于无，受不了一点，降级`v0.18.2`，这个版本是最好用的一个版本，api全，可以玩很多

## 坑二
`astro`这个框我是真的会谢
`.astro`文件不能和`.md`文件一样渲染，我尝试了很多次，无法加载完全。
> [!NOTE]
> 这里可以看官方说明：[点我跳转](https://docs.astro.build/zh-cn/basics/astro-components/)

### 解决方案
既然无法用`page`，可以使用`post`文章下的`.md`文件进行渲染，然后再更新路由

## 代码如下

本博客使用如下主题：

[theme-astro-pure](https://github.com/cworld1/theme-astro-pure)

其他主题请自行修改

### Step.1
- 新建`post`文件夹
- 新建文件`index.md`
在`index.md`添加如下代码

<details><summary>点击展开</summary>

```

<style>
.page-top-card-box{
    height: 250px;
}
.page-top-card{
    background-image: url(https://img.yywen.top/hy-blog/img/wallpaper/005.webp);
}
.text-english{
    font-family: 'Roboto';
}
.clock{
    position:absolute;
    right: 2.7rem;
}
.clock-canvas {
    width:150px;
    margin-top:5px;
}
svg.is-badge.icon {
    width: 15px;
    margin-left: 5px;
    padding-top: 3px;
}
#bber {
  margin-top: 1rem;
  width: auto !important;
  margin: auto !important;
  min-height: 100vh;
}
.bb-timeline ul {
  margin: 0;
  padding: 0;
  li {
    margin-bottom: 1.5rem;
    list-style-type: none;
    .bb-cont ul li {
        margin-bottom: 0;
    }
  }
}
.bb-timeline {
  padding: 20px;
  font-size: 16px;
  margin-bottom: 15px;
  background: var(--card-bg);
  border-bottom: 1px solid #e0e3ed00;
  transition: all .3s ease-in-out;
  border-radius: 12px;
  }


.bb-item {
  padding: 20px;
  font-size: 16px;
  margin-bottom: 15px;
  background: var(--card-bg);
  border-bottom: 1px solid #e0e3ed00;
  box-shadow: 0px 0px 90px 20px rgba(0, 0, 0, .1);
  transition: all .3s ease-in-out;
  border-radius: 12px;
  &:hover {
    border:1px solid #49b1f5;
  }
}
span.name {
    display: flex;
}
.name {
    display: flex;
}
.bb-timeline .bb-head{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  .user-avatar {
    margin: 0 !important;
    width: 50px;
    height: 50px;
    display: flex;
  }
  .info {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: auto;
    .name {
      font-size: 1.2rem;
    }
    .datatime {
    display: table;
    table-layout: fixed;
    opacity: 0.6;
    white-space: nowrap;
    }
  }
}

.bb-timeline .bb-head {
    & .info {
        .name {
            font-size: 1.2rem;
            display: flex;
        }
    }
}

.bb-timeline .bb-content{
  margin: 5px 0 5px 5px;
}
.bb-bottom{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  margin-top: 10px;
  .emoji {
    margin-left: 15px;
  }
  .comment-btn {
    margin-left: auto !important;
  }
}





.msg-btn {
    display: block!important;
    visibility: visible!important;
}




.bb-bottom{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  margin-top: 10px;
  .emoji {
    margin-left: 15px;
  }
  .comment-btn {
    margin-left: auto !important;
  }
}

  .emoji {
    margin-left: 15px;
  }

  .comment-btn {
    margin-left: auto !important;
  }


















.bb-load button {
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, .1);
  padding: 10px 30px;
  width: 100%;
  background: 0 0;
  letter-spacing: .8rem;
  font-style: italic;
  font-size: .8rem;
  &:hover {
    color:#FFFFFF;
    background:#4C4C4C;
  }
}
#bb-footer {
  margin: 1rem 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 0 0 .6rem;
  }
}











.resimg {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
}
.resimg img {
  width: 100%;
  height: auto;
}
.resimg.grid {
  display: grid;
  box-sizing: border-box;
  margin: 4px 0 0;
  width: auto;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 4px;
}
.resimg.grid-2 {
  width: 80%;
  grid-template-columns: repeat(2, 1fr);
}
.resimg.grid-4 {
  width: calc(80% * 2 / 3);
  grid-template-columns: repeat(2, 1fr);
}
.resimg a {
  display: block;
  border-radius: 9px;
  width: 98%;
  max-height: 60vh;
  aspect-ratio: 1/1;
  position: relative;
  width: 100%;important;
}
.resimg img {
  width: 100%;
  height: 100%;
  border-radius: 9px;
  margin: 0 !important;
  object-fit: cover;
}
.d-none{display:none!important;}
.item-waline {
    min-height: 100px;
    padding: 10px;
    margin-top: 15px;
    border: 1px solid #e0e3ed;
    border-radius: 12px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, .1);
}
@media screen and (max-width: 625px) {
    .emoji{
        display:inline!important;
    }
}
</style>

<script src="https://pic.en.icu/something/waline.css"></script>

<script type="module" src="https://immmmm.com/emaction.js?v=230811"></script>
<script src="https://fastly.jsdelivr.net/npm/marked/marked.min.js"></script>
<div id="bber"></div>
<script data-pjax>
let icon = '<svg viewBox="0 0 512 512"xmlns="http://www.w3.org/2000/svg"class="is-badge icon"><path d="m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z"fill="#1da1f2"></path></svg>';
let bbMemos = {
    memos: 'https://me.en.icu/',
    limit: '5',
    creatorId: '1',
    domId: '#bber',
    wlEnv: 'https://waline.xzi.cc',
    name: '星落',
    avatar: 'https://blog.en.icu/_image?href=%2F_astro%2Favatar.7UC4JUIp.webp&f=webp',
}
let limit = bbMemos.limit
let memos = bbMemos.memos
let memosOpenId
let mePage = 1, offset = 0, nextLength = 0, nextDom = '', apiV1 = '';
let bbDom = document.querySelector(bbMemos.domId);
let load = '<div class="bb-load"><button class="load-btn button-load">加载中……</button></div>'
if (bbDom) {
    fetchStatus()
}
async function fetchStatus() {
    let statusUrl = memos + "api/v1/ping";
    let response = await fetch(statusUrl);
    if (response.ok) {
        apiV1 = 'v1/'
    }
    initMemo(apiV1);
}
function initMemo(apiV1) {
    getFirstList(apiV1) //首次加载数据
    meNums(apiV1) //加载总数
    let btn = document.querySelector("button.button-load");
    btn.addEventListener("click", function () {
        btn.textContent = '加载中……';
        if (bbMemos.wlEnv) {
            updateWaline(nextDom)
        } else {
            updateHTMl(nextDom)
        }
        if (nextLength < limit) { //返回数据条数小于限制条数，隐藏
            document.querySelector("button.button-load").remove()
            return
        }
        getNextList(apiV1)
    });
}
function getFirstList(apiV1) {
    bbDom.insertAdjacentHTML('afterend', load);
    let bbUrl = memos + "api/" + apiV1 + "memo?creatorId=" + bbMemos.creatorId + "&rowStatus=NORMAL&limit=" + limit;
    fetch(bbUrl).then(res => res.json()).then(resdata => {
        if (bbMemos.wlEnv) {
            updateWaline(resdata)
        } else {
            updateHTMl(resdata)
        }
        let nowLength = resdata.length
        if (nowLength < limit) { //返回数据条数小于 limit 则直接移除“加载更多”按钮，中断预加载
            document.querySelector("button.button-load").remove()
            return
        }
        mePage++
        offset = limit * (mePage - 1)
        getNextList(apiV1)
    });
}
function getNextList(apiV1) {   //预加载下一页数据
    let bbUrl = memos + "api/" + apiV1 + "memo?creatorId=" + bbMemos.creatorId + "&rowStatus=NORMAL&limit=" + limit + "&offset=" + offset;
    fetch(bbUrl).then(res => res.json()).then(resdata => {
        nextDom = resdata
        nextLength = resdata.length
        mePage++
        offset = limit * (mePage - 1)
        if (nextLength < 1) { //返回数据条数为 0 ，隐藏
            document.querySelector("button.button-load").remove()
            return
        }
    })
}
function meNums(apiV1) {    //加载总 Memos 数
    let bbLoad = document.querySelector('.bb-load')
    let bbUrl = memos + "api/" + apiV1 + "memo/stats?creatorId=" + bbMemos.creatorId
    fetch(bbUrl).then(res => res.json()).then(resdata => {
        if (resdata) {
            let allnums = `<div id="bb-footer"><a href="${bbMemos.memos}" target="_blank"><p class="bb-allnums">共 ${resdata.length} 条 </p><p class="bb-allpub"></a></p></div>`
            bbLoad.insertAdjacentHTML('afterend', allnums);
        }
    })
}
function getTime(timestamp) {
    let d = new Date(timestamp * 1000),
        ls = [d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()];
    for (let i = 0; i < ls.length; i++) {
        ls[i] = ls[i] <= 9 ? '0' + ls[i] : ls[i] + ''
    }
    if (new Date().getFullYear() == ls[0]) return ls[1] + '月' + ls[2] + '日 ' + ls[3] +':'+ ls[4]
    else return ls[0] + '年' + ls[1] + '月' + ls[2] + '日 ' + ls[3] +':'+ ls[4]
}
function getTimeAgo(timestamp) {
    const days = Math.floor((new Date().getTime() - timestamp * 1000) / (24 * 60 * 60 * 1000));
    switch (true) {
        case (days == 0):
            return ' 今天';
        case (days == 1):
            return ' 昨天';
        case (days == 2):
            return ' 前天';
        case (days - 14 <= 0):
            return ' 一周前';
        default:
            return ' '+ days +'天前';
    }
}
async function updateWaline(data) {
    await updateHTMl(data);
    for (let i = 0; i < data.length; i++) {
        let bbID = data[i].id;
        window.getCommentCount({
            serverURL: bbMemos.wlEnv,
            selector: '.waline-memos-' + bbID,
            path: bbMemos.memos + 'm/' + bbID,
        });
    }
}
// 插入 html 
async function updateHTMl(data) {
    let result = "",
        resultAll = "";
    const TAG_REG = /#([^#\s!.,;:?"'()]+)(?= )/g ///#([^/\s#]+?) /g
        ,
        IMG_REG = /\!\[(.*?)\]\((.*?)\)/g,
        LINK_REG = /\[(.*?)\]\((.*?)\)/g,
        DEODB_LINK_REG = /(https:\/\/(www|movie|book)\.douban\.com\/(game|subject)\/[0-9]+\/).*?/g,
        BILIBILI_REG = /<a.*?href="https:\/\/www\.bilibili\.com\/video\/((av[\d]{1,10})|(BV([\w]{10})))\/?".*?>.*<\/a>/g,
        NETEASE_MUSIC_REG = /<a.*?href="https:\/\/music\.163\.com\/.*id=([0-9]+)".*?>.*<\/a>/g,
        QQMUSIC_REG = /<a.*?href="https\:\/\/y\.qq\.com\/.*(\/[0-9a-zA-Z]+)(\.html)?".*?>.*?<\/a>/g,
        QQVIDEO_REG = /<a.*?href="https:\/\/v\.qq\.com\/.*\/([a-z|A-Z|0-9]+)\.html".*?>.*<\/a>/g,
        YOUKU_REG = /<a.*?href="https:\/\/v\.youku\.com\/.*\/id_([a-z|A-Z|0-9|==]+)\.html".*?>.*<\/a>/g,
        YOUTUBE_REG = /<a.*?href="https:\/\/www\.youtube\.com\/watch\?v\=([a-z|A-Z|0-9]{11})\".*?>.*<\/a>/g;
    marked.setOptions({
        breaks: false,
        smartypants: false,
        langPrefix: 'language-',
        headerIds: false,
        mangle: false
    });
    for (let i = 0; i < data.length; i++) {
        let bbID = data[i].id
        let memoUrl = memos + "m/" + bbID
        let bbCont = data[i].content + ' '
        let bbContREG = ''
        let bbPos = ''
        bbContREG += bbCont.replace(TAG_REG, "")
            .replace(IMG_REG, "")
            .replace(DEODB_LINK_REG, '')
            .replace(LINK_REG, '<a class="primary" href="$2" target="_blank">$1</a>')
        //标签
        bbContREG = bbContREG.replace(/#(.*?)\s/g, '').replace(/\!?\[(.*?)\]\((.*?)\)/g, '').replace(/\{(.*?)\}/g, '')
        bbPos = bbCont.match(/\{(.*?)\}/g);
        bbPos = bbPos ? bbPos[0].replace(/\{(.*?)\}/,'$1') : "";
        let tagArr = bbCont.match(TAG_REG);
        bbContREG = marked.parse(bbContREG)
            .replace(BILIBILI_REG, "<div class='video-wrapper'><iframe src='//www.bilibili.com/blackboard/html5mobileplayer.html?bvid=$1&as_wide=1&high_quality=1&danmaku=0' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'></iframe></div>")
            .replace(NETEASE_MUSIC_REG, "<meting-js auto='https://music.163.com/#/song?id=$1'></meting-js>")
            .replace(QQMUSIC_REG, "<meting-js auto='https://y.qq.com/n/yqq/song$1.html'></meting-js>")
            .replace(QQVIDEO_REG, "<div class='video-wrapper'><iframe src='//v.qq.com/iframe/player.html?vid=$1' allowFullScreen='true' frameborder='no'></iframe></div>")
            .replace(YOUKU_REG, "<div class='video-wrapper'><iframe src='https://player.youku.com/embed/$1' frameborder=0 'allowfullscreen'></iframe></div>")
            .replace(YOUTUBE_REG, "<div class='video-wrapper'><iframe src='https://www.youtube.com/embed/$1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen title='YouTube Video'></iframe></div>")
        //解析 content 内 md 格式图片
        let IMG_ARR = data[i].content.match(IMG_REG) || '',
            IMG_ARR_Grid = '';
        if (IMG_ARR) {
            let IMG_ARR_Length = IMG_ARR.length,
                IMG_ARR_Url = '';
            if (IMG_ARR_Length !== 1) {
                let IMG_ARR_Grid = " grid grid-" + IMG_ARR_Length
            }
            IMG_ARR.forEach(item => {
                let imgSrc = item.replace(/!\[.*?\]\((.*?)\)/g, '$1')
                IMG_ARR_Url += `<a href="${imgSrc}" data-fancybox="gallery${bbID}" class="fancybox" data-thumb="${imgSrc}"><img class="no-lazyload" src="${imgSrc}"></a>`
            });
            bbContREG += `<div class="resimg${IMG_ARR_Grid}">${IMG_ARR_Url}</div>`
        }
        //解析内置资源文件
        if (data[i].resourceList && data[i].resourceList.length > 0) {
            let resourceList = data[i].resourceList;
            let imgUrl = '',
                resUrl = '',
                resImgLength = 0;
            for (let j = 0; j < resourceList.length; j++) {
                let restype = resourceList[j].type.slice(0, 5)
                let resexlink = resourceList[j].externalLink
                let resLink = resexlink ? resexlink :
                    memos + 'o/r/' + resourceList[j].id + '/' + (resourceList[j].publicId || resourceList[j].filename)
                if (restype == 'image') {
                    imgUrl += `<a href="${resLink}" data-fancybox="gallery${bbID}" class="fancybox" data-thumb="${resLink}"><img class="no-lazyload" src="${resLink}"></a>`
                    resImgLength = resImgLength + 1
                } else if (restype == 'video') {
                    imgUrl += `<div class="video-wrapper"><video controls><source src="${resLink}" type="video/mp4"></video></div>`
                } else {
                    resUrl += `<a target="_blank" rel="noreferrer" href="${resLink}">${resourceList[j].filename}</a>`
                }
            }
            if (imgUrl) {
                let resImgGrid = ""
                if (resImgLength !== 1) {
                    resImgGrid = "grid grid-" + resImgLength
                }
                bbContREG += `<div class="resimg ${resImgGrid}">${imgUrl}</div>`
            }
            if (resUrl) {
                bbContREG += `<p class="bb-source">${resUrl}</p>`
            }
        }
        let bbTime1 = getTime(data[i].createdTs);
        let bbTime2 = getTimeAgo(data[i].createdTs);
        let memosIdNow = memos.replace(/https\:\/\/(.*\.)?(.*)\..*/, 'id-$2-')
        let emojiReaction = `<emoji-reaction theme="system" class="reaction" endpoint="https://api-emaction.immmmm.com" reacttargetid="${memosIdNow + 'memo-' + bbID}" style="line-height:normal;display:inline-flex;"></emoji-reaction>`
        let commentBtn = ``
        if (bbMemos.wlEnv) {
            commentBtn = `<div class="comment-btn"><a class="msg-btn" data-id="${bbID}" onclick="loadWaline(this)"><span class="icon"><i class="fa-solid fa-message fa-fw"></i></span><span class="waline-memos-${bbID}"></span></a></div>`
        }
        result += `<li class="memo-${bbID}">
        <div class="bb-item">
            <div class="bb-head">
                <img class="no-lightbox no-lazyload user-avatar" style="border-radius: 50%;" src="${bbMemos.avatar}">
                <div class="info">
                    <span class="name">${bbMemos.name} ${icon}</span>
                    <span class="datatime"><i class="fa-solid fa-calendar-days WISTERIA fa-fw"></i> ${bbTime1}</span>
                </div>
            <a href="${memoUrl}" target="_blank"><i class="fa-solid fa-share-from-square"></i></a>
            </div>
            <div class="bb-content">
                ${bbContREG}
            </div>
            <div class="bb-bottom">
                <div>
                    <span><i class="fa-solid fa-clock WISTERIA fa-fw"></i> ${bbTime2}</span>
                    <span><i class="fa-solid fa-location-dot WISTERIA fa-fw"></i> ${bbPos}</span>
                </div>
                <div class="emoji">${emojiReaction}</div>
                ${commentBtn}
            </div>
            <div id="container-${bbID}" class="item-waline d-none">
                <div style="font-size:20px;padding:5px 10px;font-weight:600;"><i class="fa-solid fa-comments"></i> 评论</div>
                <div id="waline-${bbID}"></div>
            </div>
        </div>
    </li>`
    } // end for
    let bbBefore = "<section class='bb-timeline'><ul class='bb-list-ul'>"
    let bbAfter = "</ul></section>"
    resultAll = bbBefore + result + bbAfter
    let loaderDom = document.querySelector('.loader') || ""
    if (loaderDom) loaderDom.remove()
    bbDom.insertAdjacentHTML('beforeend', resultAll);
    if (document.querySelector('button.button-load')) document.querySelector('button.button-load').textContent = '加载更多';
}
function loadWaline(e) {
    let memosId = e.getAttribute("data-id");
    let walineDom = document.getElementById("container-" + memosId)
    if (walineDom.classList.contains('d-none')) {
        document.querySelectorAll('.item-waline').forEach((item) => {item.classList.add('d-none');})
        if(document.getElementById("waline-" + memosId)){
            walineDom.classList.remove('d-none');
            window.scrollTo({
                top: walineDom.offsetTop - 30,
                behavior: "smooth"
            });
            window.initComment({
                el: '#waline-' + memosId ,
                serverURL: bbMemos.wlEnv ,
                emoji: [
                    '自定义 emoji 地址',
                ],
                path: bbMemos.memos + 'm/' + memosId,
                comment: '.waline-memos-' + memosId,
            });
        }
  }else{
    walineDom.classList.add('d-none');
  }
}
</script>
<script type="module">
import { init, commentCount } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';
window.initComment = function(params) {
    try {
        init({
            el: params.el,
            serverURL: params.serverURL,
            emoji: params.emoji,
            path: params.path,
            comment: params.comment,
        });
    } catch (error) {
        console.log(`Waline ${error}`);
    }
}
window.getCommentCount = function(params) {
    try {
        commentCount({
            serverURL: params.serverURL,
            selector: params.selector,
            path: params.path,
        })
    } catch (error) {
        console.log(`Waline ${error}`);
    }
}
</script>
```

</details>


### Step.2
在 `site.config.ts` 里面修改`MenuLinks` 如下
```
export const menuLinks: MenuLinks = [
  {
    link: '/blog',
    label: 'Blog'
  },
  {
    link: '/blog/我的备忘录',
    label: 'Talk'
  },
  {
    link: '/projects',
    label: 'Projects'
  },
  {
    link: '/links',
    label: 'Links'
  },
  {
    link: '/about',
    label: 'About'
  }
]
```
## Finish

> [!TIP]
> 相关的`memos`配置已经表明在代码里面了，看着换地址就好

[相关代码来自黑色小兔，感谢](https://yywen.top/)

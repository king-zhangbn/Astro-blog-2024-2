---
title: Mac本地快速搭建Aria2+AriaNG服务
description: 如何在Mac本地快速搭建Aria2+AriaNG服务
publishDate: 2023-06-13
tags:
  - 折腾分享
language: 中文
---
## 一、下载Aria2

[Releases · aria2/aria2](https://github.com/aria2/aria2/releases)

![image.png](https://tc-cdn.flowus.cn/oss/29700d11-9a77-44a2-810c-7381ffbfe7d8/image.png?time=1729932300&token=fce5bcb0bfd5ec3f6a652e79c718eb432d1491e1ae4d0e6a791af5dc31b83f93&role=sharePaid)

选择dmg的文件下载，下载不了点下面的文件

> 目前只有1.35.0，日后随缘更新。

[aria2-1.35.0-osx-darwin.dmg](https://flowus.cn/preview/7a40f504-ffa1-4b6e-b43f-668b8e4f4b5f)

## 二、配置

[aria2.zip](https://flowus.cn/preview/76fdaa86-779d-4684-9d47-bec532500ec4)

下载这个配置文件，并且解压到Aria本体目录下

进入这个目录，

![image.png](https://tc-cdn.flowus.cn/oss/568144b3-e6d7-4f14-a065-b59121b500e9/image.png?time=1729932300&token=1f4cd8212de29e96d7965d10bea2a88856a7c0f594fa8c734c7ede26521ad949&role=sharePaid)

用编辑器打开`aria2.conf`

![image.png](https://tc-cdn.flowus.cn/oss/bcc588e4-03f5-42fe-8f15-6a2dff127181/image.png?time=1729932300&token=10184626b3e70bcc53fa46193a8b0743dd8f657abc36a4617ff181ed91d7afee&role=sharePaid)

## 三、下AriaNG

[Release AriaNg 1.3.2 · mayswind/AriaNg](https://github.com/mayswind/AriaNg/releases/tag/1.3.2)

![image.png](https://tc-cdn.flowus.cn/oss/4cd06f50-f157-4a2d-905e-8490ee2693d1/image.png?time=1729932300&token=bd39d92a957f44aacb8660a0139ac9500e3f84e4eb058f22af47111e2e7e6d83&role=sharePaid)

选择allinone的

[AriaNg-1.3.2-AllInOne (1).zip](https://flowus.cn/preview/6e1e569f-a1d5-48fb-8720-21e4c09cedbd)

> 目前只有1.3.2，日后随缘更新。

![image.png](https://tc-cdn.flowus.cn/oss/5fb6b0df-58e6-4f49-8b95-f00c19daf9cd/image.png?time=1729932300&token=bd50b23994696d685b324dae9fb664ccf27c1e636ba9feb8e00a50625c6a3c9f&role=sharePaid)

将index.html也放入aria本体目录下

![image.png](https://tc-cdn.flowus.cn/oss/bcf59d5e-fa89-4d7e-89ef-16b422614399/image.png?time=1729932300&token=7fd9332fd0273827e61386b1f4d048370b7e040e8ca6c50470a4da581bf75e7c&role=sharePaid)

ps：此文件`启动aria.command`暂时没有

## 四、配置运行脚本

新建`启动aria.command`文件

```
cd -- "$(/你的Aria本体的文件目录/aria2 "$BASH_SOURCE")"
open /你的index的文件目录/index.html
aria2c --conf-path="/你的Aria本体的文件目录/.aria2/aria2.conf"
```

## 参考文件

- ## macOS 如何设置 .sh 文件能够双击运行

  > 参考：​[ ​https://stackoverflow.com/questions/5125907/how-to-run-a-shell-script-in-os-x-by-double-clicking​](https://stackoverflow.com/questions/5125907/how-to-run-a-shell-script-in-os-x-by-double-clicking)​

  看到这里，你应该已经会写 bash 脚本。

  ## 一、如何实现双击运行

  例如写了一个 ​`​test.sh​`​ 脚本文件

  1. 修改后缀名，把​`​test.sh​`​ 把名字改为 ​`​test.command​`​
  1. 添加其可执行的属性

  ```
  
  ```

chmod +x test.command

````


  ## 二、将执行目录定位到该执行文件的目录

  这样双击是能打开的，但其环境目录是你当前用户的用户目录 ​`​~/​`​​ 在脚本中 ​`​pwd​`​ 会看到这样的路径 ​`​/Users/你的用户名/​`​，并不是你打开这个文件的目录。
如果想重新定位到这个文件的目录，需要添加下面内容：

  ```
cd -- "$(dirname "$BASH_SOURCE")"  
// 这整个任选其一即可  
cd -- "$(dirname "$0")"
````

然后你再 ​`​pwd​`​ 就会看到输出的是双击时这个执行文件的目录了

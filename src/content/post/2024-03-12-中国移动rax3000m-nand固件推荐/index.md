---
title: "中国移动RAX3000M NAND固件推荐"
publishDate: 2024-03-12 04:58:54 
description: 此篇文章迁移自前WordPress文章，无description
tags:
  - 折腾分享
language: 中文
---

> 文章来源：[潘多拉 QWRT for MT7981 CMCC RAX3000M R24.1.24 CPE功能闭源固件独家USB加速-OPENWRT专版-恩山无线论坛 (right.com.cn)](https://www.right.com.cn/forum/forum.php?mod=viewthread&tid=8303809&extra=&highlight=rax3000&page=1)

# 一、introduce

1. 支持原生界面，摆脱丑陋难用的 MTWIFI
    
2. 原生 lua luci 界面适配，如丝顺滑~
    
3. 解决 IOS 无线速率低的兼容性问题
    
4. 可直接在线更新安装软件
    
5. 支持无线中继 和 80211r 漫游等
    
6. 内置多个软件，包括 IPTV 的 MSDLITE
    
7. 内置独家文件加速引擎， USB3 读写局域网共享速度轻松到千兆满速！
    
8. 默认支持 4G/5G USB 模块拨号/WWAN USB 共享
    

# 二、screenshot

来自_lean_大佬的固件，目前已经稳定运行3 个月，很稳定，截图如下

![SCR-20240312-hfu-2](https://cpic2024.qiu.icu/uploads/picgo/202403121235284.webp)

![SCR-20240312-he8-2](https://cpic2024.qiu.icu/uploads/picgo/202403121235312.webp)

![SCR-20240312-hdg-2](https://cpic2024.qiu.icu/uploads/picgo/202403121235524.webp)

![SCR-20240312-hdb-2](https://cpic2024.qiu.icu/uploads/picgo/202403121235807.webp)

（注意： 由于某些原因，这个版本开始需要 "芝麻开门" 才能打开全功能，谅解~）

方法：ssh 连接，输入

`echo 0xDEADBEEF > /etc/config/google_fu_mode`

# 三、Download

[click here](https://nus.simu.eu.org/xmXWt9u)

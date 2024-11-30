---
title: "小主机如何设置AdGuardHome+QWRT"
publishDate: 2024-06-22 17:25:56 
description: 此篇文章迁移自前WordPress文章，无description
tags:
  - 折腾分享
language: 中文
---

![](https://cpic2024.qiu.icu/uploads/piclist/202406231103091.webp)

> EQUIPMENT:
> 
> CMCC-RAX3000M
> 
> HP600G2DM G4400+DDR4 2133 8GNVME 512GB+HDD500G

# Introduce

这是一个作为小白的折腾备份

## 一、路由器方面

不用管着鬼地方，直接去接口LAN下修改

![image-20240623010759763](https://cpic2024.qiu.icu/uploads/piclist/202406230108799.webp)

![image-20240623011001768](https://cpic2024.qiu.icu/uploads/piclist/202406230110156.webp)

**_修改DHCP 选项，默认监听53端口，所以AdGuardHome的DNS只能53端口，不能换别的_**

## 二、AdGuardHome方面

上游

```
https://dns.alidns.com/dns-query
tls://dns.alidns.com
https://doh.pub/dns-query
https://1.12.12.12/dns-query
tls://dot.pub
```

后备

```
https://doh-pure.onedns.net/dns-query
tls://dot-pure.onedns.net
https://120.53.53.53/dns-query
https://doh.360.cn/dns-query
```

Bootstrap DNS 服务器

```
223.5.5.5
223.6.6.6
2400:3200::1
2400:3200:baba::1
119.29.29.29
2402:4e00::
180.76.76.76
2400:da00::6666
117.50.10.10
52.80.52.52
2400:7fc0:849e:200::8
2404:c2c0:85d8:901::8
```

私人反向 DNS 服务器

```
你路由器ip
```

黑名单

```
Github520：https://raw.hellogithub.com/hosts
列表里面加个CHN: anti-AD
```

自定义规则

```
@@||api.installer.xiaomi.com^$important
@@||tongji.baidu.com^$important
||cache-files.isjike.com^$important
||mcdn.bilivideo.cn^
||mcdn.bilivideo.com^
||p2pstuntest.haplat.net^
```

！！最后记得重启下路由器！！ 因为重启路由器会触发一个网络重新配置的过程，其中所有的客户端设备都需要重新从DHCP服务器获取它们的网络配置信息。如果路由器没有重启，那么设备会继续使用它们当前的配置，直到租期到期或者设备被重置或重新启动。

![image-20240623011832838](https://cpic2024.qiu.icu/uploads/piclist/202406230118128.webp)

![image-20240623011854012](https://cpic2024.qiu.icu/uploads/piclist/202406230118294.webp)

用1panel等等的，请加个127.0.0.1

![image-20240623025357657](https://cpic2024.qiu.icu/uploads/piclist/202406230253124.webp)

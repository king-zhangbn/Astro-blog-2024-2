---
title: Astro Pure主题部署到cloudflare
publishDate: 2024-10-25 18:19:00
description: 原先支持vercel，但是太鸡儿慢了，才用cloudflare了。
tags:
  - 折腾分享
coverImage: { src: 'https://pic.en.icu/i/2024/10/25/vn3wiw.webp', color: '#FFFAF0' }
language: '中文'
---
## 安装依赖
官方教程为npm，并不适用bun，本文将用bun替换npm
vscode运行
bun install @astrojs/cloudflare
过程慢的要死，稍安勿躁
提示
```
PS C:\Users\TAOZI\Documents\GitHub\ASTRO-BLOG-2024> bun install @astrojs/cloudflare
[0.00ms] ".env"
bun add v1.1.30 (7996d06b)

+ @astrojs/node@8.3.2

installed @astrojs/cloudflare@11.1.0

5 packages installed [375.91s]
```
即为成功

## 修改文件

按照官方教程修改`astro.config.ts`
```
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare()
});
```

可以部署cf了
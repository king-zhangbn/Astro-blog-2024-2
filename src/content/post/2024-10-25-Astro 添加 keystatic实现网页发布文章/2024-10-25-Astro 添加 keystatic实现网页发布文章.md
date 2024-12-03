---
title: Astro 添加 keystatic实现网页发布文章
publishDate: 2024-10-25 16:19:00
description: 这操作老方便啦，不用自己开vscode然后push了
tags:
  - 折腾分享
coverImage: { src: 'https://pic.EN.ICU/i/2024/10/25/vh1f1v.webp', color: '#FFFAF0' }
language: '中文'
---

> 更新于24-11-08

## 先放图

![](https://pic.en.icu/i/2024/10/25/vs0e1e-0.webp)

![](https://pic.en.icu/i/2024/10/25/vt7qxy-0.webp)
发布后vercel同步更新

## 官方教程

<https://keystatic.com/docs/installation-astro>

## 安装依赖

### bun

`bun install @astrojs/react @astrojs/markdoc`

`bun install @keystatic/core @keystatic/astro`

### npm

`npx astro add react markdoc`

`npm install @keystatic/core @keystatic/astro`

## 修改文件

修改astro配置文件，名称为astro.config.mjs或者astro.config.ts

```ts title="astro.config.mjs"
// astro.config.mjs
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro'/* [!code ++] */

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc()],/* [!code --] */
  integrations: [react(), markdoc(), keystatic()],/* [!code ++] */
  output: 'hybrid',/* [!code ++] */
})
```

别直接复制，-代表删除，+代表添加

## 添加文件

创建keystatic.config.ts

```ts title="keystatic.config.ts"
// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'xxxxx/xxxxx',//这里去keystatic cloud新建项目，复制项目里面的内容，作用：身份验证才能发布文章
  },

  ui: {
    brand: { 
      name: 'XingLuo\' Dash Board' ,
      // BrandMark: 'https://pic.en.icu/Xingluo.webp',
    },
    navigation: [
      '---',
      'posts_pic',
      'posts_nopic',
    ],

  },
  collections: {
    posts_pic: collection({
      label: '含首图Posts',
      slugField: 'title',
      entryLayout: "content",
      path: 'src/content/post/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ 
          name: { label: '标题' },
          slug: {
            label: '对 SEO 友好的 slug',
            description: '这将定义此条目的文件/文件夹名称'
          }
        }),
        description: fields.text({
          label: '描述',
          description: '15个字以上',
        }),
        publishDate: fields.date({
          label: '发布时间',
          description: 'The publishDate of the event'
        }),
        tags: fields.array(
          fields.text({ label: '类目' }),
          {
            label: '标签',
            itemLabel: props => props.value,
          }
        ),
        coverImage: fields.object({
          src: fields.text({ label: '头图' }),
          color: fields.text({ label: '主题颜色 #xxxxxx 可以在该网站查询https://www.codeeeee.com/color/picker.html' })
          //   color: fields.text({ label: 'Image Color' }),
        }),

        language: fields.text({
          label: '语言',
          description: 'languages',
        }),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
          options: {
            image: {
              directory: 'src/content/postimg',

              // Use the @assets path alias
              publicPath: 'src/content/postimg/'

            }
          }
        })
      },
    }),




    posts_nopic: collection({
      label: '无首图Posts',
      slugField: 'title',
      entryLayout: "content",
      path: 'src/content/post/*/',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ 
          name: { label: '标题' },
          slug: {
            label: '对 SEO 友好的 slug',
            description: '这将定义此条目的文件/文件夹名称'
          }
        }),
        description: fields.text({
          label: '描述',
          description: '15个字以上',
        }),
        publishDate: fields.date({
          label: '发布时间',
          description: 'The publishDate of the event'
        }),
        tags: fields.array(
          fields.text({ label: '类目' }),
          {
            label: '标签',
            itemLabel: props => props.value,
          }
        ),
        language: fields.text({
          label: 'Languages',
          description: 'languages',
        }),
        
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
          options: {
            image: {
              directory: 'src/content/postimg',

              // Use the @assets path alias
              publicPath: 'src/content/postimg/'

            }
          },
        })
      },
    }),
  },
});
```

本配置适用于

[theme-astro-pure](https://github.com/cworld1/theme-astro-pure)

别的主题请参考[keystatic Doc](https://keystatic.com/docs/) 修改字段

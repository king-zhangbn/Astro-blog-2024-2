// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'cloud',
  },
  cloud: {
    project: 'astro-blog-2024/astro-blog-2024-2',
  },
  ui: {
    brand: {
      name: 'XingLuo\' Dash Board',
    },
    navigation: {
      '类别': ['posts_all'],
    },

  },
  collections: {
    // posts_other: collection({
    //   label: '其他类别',
    //   slugField: 'title',
    //   entryLayout: "content",
    //   path: 'src/content/post/*/',
    //   format: { contentField: 'content' },
    //   schema: {
    //     title: fields.slug({
    //       name: { label: '标题' },
    //       slug: {
    //         label: '对 SEO 友好的 slug',
    //         description: '这将定义此条目的文件/文件夹名称'
    //       }
    //     }),
    //     description: fields.text({
    //       label: '描述',
    //       description: '15个字以上',
    //     }),
    //     publishDate: fields.date({
    //       label: '发布时间',
    //       description: 'The publishDate of the event'
    //     }),
    //     tags: fields.multiselect({
    //       label: '分类',
    //       options: [
    //         { label: '随笔日记', value: '随笔日记' },
    //         { label: '折腾分享', value: '折腾分享' },
    //         { label: '闲言碎语', value: '闲言碎语' },
    //         { label: '游玩嬉戏', value: '游玩嬉戏' },
    //         { label: '学点东西', value: '学点东西' },
    //         { label: '壁纸分享', value: '壁纸分享' },
    //         { label: '转载文章', value: '转载文章' },
    //       ],
    //       defaultValue: ['随笔日记', '折腾分享'],
    //     }),

    //     coverImage: fields.object({
    //       src: fields.text({ label: '头图' }),
    //       color: fields.text({ label: '主题颜色 #xxxxxx 可以在该网站查询https://www.codeeeee.com/color/picker.html' })
    //       //   color: fields.text({ label: 'Image Color' }),
    //     }),

    //     language: fields.text({
    //       label: '语言',
    //       description: 'languages',
    //     }),
    //     content: fields.markdoc({
    //       label: 'Content',
    //       extension: 'md',
    //       options: {
    //         image: {
    //           directory: 'src/content/post/',
    //           publicPath: 'src/content/post/'
    //         }
    //       }
    //     })
    //   },
    // }),


    posts_all: collection({
      label: '全部文章',
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
        tags: fields.multiselect({
          label: '分类',
          options: [
            { label: '随笔日记', value: '随笔日记' },
            { label: '折腾分享', value: '折腾分享' },
            { label: '闲言碎语', value: '闲言碎语' },
            { label: '游玩嬉戏', value: '游玩嬉戏' },
            { label: '学点东西', value: '学点东西' },
            { label: '壁纸分享', value: '壁纸分享' },
            { label: '转载文章', value: '转载文章' },
          ],
          defaultValue: ['随笔日记', '折腾分享'],
        }),

        coverImage: fields.object({
          src: fields.text({ label: '头图' }),
          color: fields.text({ label: '主题颜色 #xxxxxx 可以在该网站查询https://www.codeeeee.com/color/picker.html' })
          //   color: fields.text({ label: 'Image Color' }),
        }),
        draft: fields.checkbox({
          label: 'Draft',
          description: 'Set this post as draft to prevent it from being published'
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
              directory: 'src/content/post/*',
              publicPath: 'src/content/post/*'
            }
          }
        })
      },
    }),












  },
});
// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  cloud: {
    project: 'astro-blog-2024/astro-blog-2024',
  },
  ui: {
    brand: { 
      name: 'XingLuo\' Dash Board' ,
    },
    navigation: {
        '总体类别': ['posts_all', 'posts_other'],
        '细分类别': ['posts_suibirji', 'posts_other'],
      },

  },
  collections: {
    posts_other: collection({
      label: '其他类别',
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




    posts_all: collection({
      label: '全部文章',
      slugField: 'title',
      entryLayout: "content",
      path: 'src/content/post/*',
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



    posts_suibirji: collection({
        label: '随笔日记',
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
            label: 'Interests',
            options: [
              { label: '随笔日记', value: '随笔日记' },
              { label: 'Basketball', value: 'basketball' },
              { label: 'Music', value: 'music' },
              { label: 'Chess', value: 'chess' },
            ],
            defaultValue: ['随笔日记', 'basketball', 'music'],
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












  },
});
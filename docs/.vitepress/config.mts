import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config

// 1. 获取环境变量并判断
// 如果环境变量 EDGEONE 等于 '1'，说明在 EdgeOne 环境，使用根路径 '/'
// 否则默认是 GitHub Pages 环境，使用仓库子路径 '/Xbotics_dexhand_repo_demo/'
const isEdgeOne = process.env.EDGEONE === '1'
const baseConfig = isEdgeOne ? '/' : '/Xbotics_dexhand_repo_demo/'

export default defineConfig({
  lang: 'zh-CN',
  title: "Xbotics 灵巧手教程",
  description: "AI前沿知识开源教程",
  base: baseConfig,
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.jpg',
    nav: [
      { text: 'PDF版本下载', link: 'https://github.com/Halloweenpink/Xbotics_dexhand_repo_demo/releases' },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },
    sidebar: [
      {
        items: [
          { text: '第1章：第1章的标题', link: '/chapter1/' },
          {
            text: '第2章：第2章的标题',
            items: [
              { text: '第2.1节：第2.1节的标题', link: '/chapter2/chapter2_1' },
              { text: '第2.2节：第2.2节的标题', link: '/chapter2/chapter2_2' }
            ]
          },
          {
            text: '第7章：第7章的标题',
            items: [
              {
                text: '7.1 基础入门月（第 1–4 周）',
                link: '/chapter7/chapter7_1/',
                items: [
                  { text: '第 1 周', link: '/chapter7/chapter7_1/chapter7_1_1' },
                  { text: '第 2 周', link: '/chapter7/chapter7_1/chapter7_1_2' },
                  { text: '第 3 周', link: '/chapter7/chapter7_1/chapter7_1_3' },
                  { text: '第 4 周', link: '/chapter7/chapter7_1/chapter7_1_4' }
                ]
              },
              {
                text: '7.2 仿真进阶月（第 5–8 周）',
                link: '/chapter7/chapter7_2/',
                items: [
                  { text: '第 5 周', link: '/chapter7/chapter7_2/chapter7_2_1' },
                  { text: '第 6 周', link: '/chapter7/chapter7_2/chapter7_2_2' },
                  { text: '第 7 周', link: '/chapter7/chapter7_2/chapter7_2_3' },
                  { text: '第 8 周', link: '/chapter7/chapter7_2/chapter7_2_4' }
                ]
              }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Halloweenpink/Xbotics_dexhand_repo_demo' }
    ],

    editLink: {
      pattern: 'https://github.com/Halloweenpink/Xbotics_dexhand_repo_demo/blob/main/docs/:path'
    },

    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2026002630号-1</a> | <a href="https://beian.mps.gov.cn/#/query/webSearch?code=11010602202215" rel="noreferrer" target="_blank">京公网安备11010602202215号</a>',
      copyright: '本作品采用 <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议（CC BY-NC-SA 4.0）</a> 进行许可'
    }
  }
})

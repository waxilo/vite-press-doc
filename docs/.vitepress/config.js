export default {
  title: 'VitePress文档',
  description: '使用VitePress构建的文档站点',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' }
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/guide' }
        ]
      }
    ]
  }
}
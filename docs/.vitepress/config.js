export default {
  title: 'VitePress文档',
  description: '使用VitePress构建的文档站点',
  themeConfig: {
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' },
    ],
    // 侧边栏配置
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/guide' },
        ]
      }
    ],
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/your-repo' }
    ]
  }
}
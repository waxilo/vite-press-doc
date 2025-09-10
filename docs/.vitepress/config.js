export default {
  title: 'VitePress文档',
  description: '使用VitePress构建的文档站点',
  
  // 重要：设置基础路径，应该与GitHub仓库名称一致
  // 例如，如果您的仓库名是 'vite-press-doc'，则设置为 '/vite-press-doc/'
  base: '/vite-press-doc/',
  
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' }
    ],
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/waxilo/vite-press-doc' }
    ],
    
    // 侧边栏 - 首页不显示侧边栏
    sidebar: {
      '/guide': [
        {
          items: [
            { text: '介绍', link: '/guide' },
            { text: '其他', link: '/other' }
          ]
        }
      ],
      '/other': [
        {
          items: [
            { text: '介绍', link: '/guide' },
            { text: '其他', link: '/other' }
          ]
        }
      ]
    },
    
    // 隐藏底部的上一页下一页导航
    docFooter: {
      prev: false,
      next: false
    }
  }
}
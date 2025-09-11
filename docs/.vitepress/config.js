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
      { text: '面经', link: '/doc/dev/' },
      { text: '其他', link: '/doc/other/' },
      
    ],
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/waxilo/vite-press-doc' }
    ],
    
    // 侧边栏 - 首页不显示侧边栏
    sidebar: {
      '/doc/dev': [
        {
          items: [
            { text: '概述', link: '/doc/dev/' },
            { text: 'Java', link: '/doc/dev/Java' },
            { text: 'MySQL', link: '/doc/dev/MySQL' },
            { text: 'Redis', link: '/doc/dev/Redis' },
            { text: 'Spring', link: '/doc/dev/Spring' }
          ]
        }
      ],
      '/doc/other': [
        {
          items: [
            { text: '概述', link: '/doc/other/' },
            { text: 'VPN', link: '/doc/other/VPN' },
            { text: '一键激活 JetBrains 全家桶', link: '/doc/other/一键激活 JetBrains 全家桶' },
            { text: 'Mac Idea 最新版激活', link: '/doc/other/Mac Idea 最新版激活' }
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
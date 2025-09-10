export default {
  title: 'VitePress 站点',
  description: '我的 VitePress 站点',
  themeConfig: {
    // 定义侧边栏
    sidebar: {
      '/guide': []
    },
    // 导航栏配置
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' }
    ]
  }
}
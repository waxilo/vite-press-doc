import DefaultTheme from 'vitepress/theme'
import Home from '../../components/Home.vue'
import Layout from '../../components/auth/Layout.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // 注册自定义组件
    app.component('Home', Home)
  }
}
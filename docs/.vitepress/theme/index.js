import DefaultTheme from 'vitepress/theme'
import Home from '../../components/Home.vue'
import './style/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义组件
    app.component('Home', Home)
  }
}
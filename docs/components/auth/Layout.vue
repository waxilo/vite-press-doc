<template>
  <!-- 密码验证界面 -->
  <div v-if="!isAuthenticated" class="auth-layout">
    <!-- 图片背景 -->
    <img class="image-background" src="/index.png" alt="背景图片">
    
    <div class="password-container">
      <div class="input-group">
        <input 
          v-model="password" 
          type="password" 
          :placeholder="errorMessage ? '密码错误，请重新输入' : '请输入密码'" 
          class="password-input"
          @keyup.enter="checkPassword"
        />
      </div>
    </div>
  </div>
  
  <!-- 认证后的正常布局 -->
  <Layout v-else />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { getAuthenticated, setAuthenticated, checkPassword as authCheckPassword } from './auth.js'

const Layout = DefaultTheme.Layout
const isAuthenticated = ref(false)
const password = ref('')
const errorMessage = ref('')

onMounted(() => {
  isAuthenticated.value = getAuthenticated()
})

const checkPassword = () => {
  if (authCheckPassword(password.value)) {
    isAuthenticated.value = true
    errorMessage.value = ''
  } else {
    errorMessage.value = '密码错误，请重新输入'
    password.value = ''
  }
}
</script>

<style scoped>
.auth-layout {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.image-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
}

.password-container {
  align-items: center;
  width: 100%;
  height: 50vh;
  position: fixed;
  bottom: -50px;
  left: 0;
  display: flex;
  justify-content: center;
}

.input-group {
  display: flex;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 100px;
  max-width: 400px;
  width: 90%;
}

.password-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  text-align: center;
  background: transparent;
  color: white;
  border-radius: 100px;
}

.password-input:hover {
  background: rgba(255, 255, 255, 0.15);
}

.password-input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.15);
}
</style>
<template>
  <!-- 密码验证界面 -->
  <div v-if="!isAuthenticated" class="auth-layout">
    <!-- 视频背景 -->
    <video class="video-background" autoplay muted loop playsinline>
      <source src="/index.mp4" type="video/mp4">
      您的浏览器不支持视频播放。
    </video>
    
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

.video-background {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
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

.password-form {
  background: rgba(255, 255, 255, 0.7);
  padding: 3rem 2rem;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
  text-align: center;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.password-form h1 {
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #333;
  font-weight: 600;
}

.input-group {
  display: flex;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
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
}

.password-input:hover {
  background: rgba(255, 255, 255, 0.1);
}

.password-input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.15);
}

.password-input::placeholder {
  color: #000;
}

.password-input:placeholder-shown:invalid::placeholder {
  color: #e74c3c;
}

.submit-btn {
  padding: 0.75rem 1.5rem;
  background: #3eaf7c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;
}

.submit-btn:hover {
  background: #2d8a5e;
}

.error-message {
  color: #e74c3c;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .password-form {
    padding: 2rem 1.5rem;
    margin: 0 1rem;
  }
  
  .input-group {
    flex-direction: column;
  }
}
</style>
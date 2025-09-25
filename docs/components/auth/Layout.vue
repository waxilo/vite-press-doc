<template>
  <!-- 密码验证界面 -->
  <div v-if="!isAuthenticated" class="auth-layout">
    <div class="password-container">
      <div class="password-form">
        <h1>请输入访问密码</h1>
        <div class="input-group">
          <input 
            v-model="password" 
            type="password" 
            placeholder="请输入密码" 
            class="password-input"
            @keyup.enter="checkPassword"
          />
          <button @click="checkPassword" class="submit-btn">进入</button>
        </div>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.password-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
}

.password-form {
  background: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
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
  margin-bottom: 1rem;
}

.password-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.password-input:focus {
  outline: none;
  border-color: #3eaf7c;
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
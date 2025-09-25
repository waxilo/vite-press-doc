<template>
  <div class="home-container">
    <h1>欢迎来到我的 VitePress 站点</h1>
    <p>hello, vite-press</p>
    <div class="features">
      <div class="feature">
        <h2>简单易用</h2>
        <p>基于 Vue 3 和 Vite 构建的现代文档网站</p>
      </div>
      <div class="feature">
        <h2>高性能</h2>
        <p>快速的页面加载和响应式设计</p>
      </div>
      <div class="feature">
        <h2>可定制</h2>
        <p>使用 Vue 组件自由定制您的网站</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Home 组件逻辑 - 现在认证由全局Layout控制
</script>

<style scoped>
.home-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
  width: 100%;
}

.feature {
  flex: 1;
  min-width: 30%;
  max-width: 300px;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #f9f9f9;
  margin: 0.5rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.feature h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #3eaf7c;
}

@media (max-width: 768px) {
  .features {
    flex-direction: column;
  }
  
  .feature {
    margin: 0.5rem 0;
  }
}
</style>
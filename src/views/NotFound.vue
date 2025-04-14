<template>
  <div class="not-found">
    <h1>404 - 页面未找到</h1>
    <p>抱歉，您访问的页面不存在。</p>
    <router-link to="/" class="home-link">返回首页</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFound'
})
</script>

<style lang="scss" scoped>
.not-found {
  max-width: 600px;
  margin: 100px auto;
  text-align: center;
  padding: 20px;

  h1 {
    color: #333;
    margin-bottom: 20px;
  }

  p {
    color: #666;
    margin-bottom: 30px;
  }

  .home-link {
    display: inline-block;
    padding: 10px 20px;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;

    &:hover {
      background: #0056b3;
    }
  }
}
</style> 
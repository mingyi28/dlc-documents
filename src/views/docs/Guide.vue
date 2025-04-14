<template>
  <div class="guide-page">
    <h1>使用指南</h1>
    <div class="content">
      <section>
        <h2>快速开始</h2>
        <p>按照以下步骤开始使用我们的API：</p>
        <ol>
          <li>注册账号并获取API密钥</li>
          <li>安装SDK或直接使用HTTP请求</li>
          <li>开始集成API功能</li>
        </ol>
      </section>

      <section>
        <h2>安装</h2>
        <pre class="code-block">
# 使用npm安装
npm install @your-org/api-client

# 使用yarn安装
yarn add @your-org/api-client</pre>
      </section>

      <section>
        <h2>配置</h2>
        <p>在使用API之前，您需要进行以下配置：</p>
        <ul>
          <li>设置API密钥</li>
          <li>配置环境变量</li>
          <li>初始化客户端</li>
        </ul>
      </section>

      <section>
        <h2>最佳实践</h2>
        <ul>
          <li>始终使用环境变量存储敏感信息</li>
          <li>实现错误处理机制</li>
          <li>使用适当的请求超时设置</li>
          <li>实现请求重试逻辑</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Guide'
})
</script>

<style scoped>
.guide-page {
  padding: 2rem;
}

.content {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--color-heading);
}

h2 {
  font-size: 1.8rem;
  margin: 2rem 0 1rem;
  color: var(--color-heading);
}

p {
  margin: 1rem 0;
  line-height: 1.6;
}

ul, ol {
  margin: 1rem 0;
  padding-left: 2rem;
}

li {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.code-block {
  background-color: var(--color-background-soft);
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  font-family: monospace;
  margin: 1rem 0;
}

section {
  margin-bottom: 2rem;
}
</style> 
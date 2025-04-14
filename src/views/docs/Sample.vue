<template>
  <div class="sample-page">
    <h1>示例代码</h1>
    <div class="content">
      <section>
        <h2>基础用法</h2>
        <pre class="code-block">
// 初始化客户端
const client = new APIClient({
  apiKey: 'your-api-key'
});

// 发送请求
const response = await client.getData({
  endpoint: '/users',
  params: {
    limit: 10
  }
});</pre>
      </section>

      <section>
        <h2>高级示例</h2>
        <pre class="code-block">
// 使用自定义配置
const config = {
  timeout: 5000,
  retries: 3
};

const client = new APIClient({
  apiKey: 'your-api-key',
  ...config
});

// 处理响应
try {
  const data = await client.processData();
  console.log(data);
} catch (error) {
  console.error('Error:', error);
}</pre>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Sample'
})
</script>

<style scoped>
.sample-page {
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
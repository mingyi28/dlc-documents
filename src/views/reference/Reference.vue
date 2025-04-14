<template>
  <ReferenceMain>
    <div class="reference">
      <div class="reference-page">
        <h1>API 参考</h1>
        <div class="content">
          <section>
            <h2>入门指南</h2>
            <p>欢迎使用我们的API文档。这里您可以找到所有需要的API参考信息。</p>
          </section>
          
          <section>
            <h2>认证</h2>
            <p>所有API请求都需要认证。请在请求头中包含您的API密钥。</p>
          </section>

          <section>
            <h2>端点</h2>
            <p>基础URL: https://api.example.com/v1</p>
          </section>
        </div>
      </div>
    </div>
  </ReferenceMain>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ReferenceMain from './ReferenceMain.vue'

export default defineComponent({
  name: 'ReferenceView',
  components: {
    ReferenceMain
  }
})
</script>

<style scoped>
.reference-page {
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

section {
  margin-bottom: 2rem;
}

p {
  line-height: 1.6;
  color: var(--color-text);
}
</style> 
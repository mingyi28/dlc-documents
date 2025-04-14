<template>
  <ReferenceMain>
    <div class="overview-introduction">
      <h1>介绍</h1>
      <section>
        <h2>概述</h2>
        <p>欢迎使用我们的API和SDK文档。本文档提供了完整的接入指南和API参考。</p>
      </section>
      
      <section>
        <h2>功能特点</h2>
        <ul>
          <li>支持多种开发平台：Unity、Unreal、Web等</li>
          <li>提供完整的HTTP API接口</li>
          <li>详细的接入文档和示例代码</li>
          <li>专业的技术支持服务</li>
        </ul>
      </section>
    </div>
  </ReferenceMain>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ReferenceMain from '../ReferenceMain.vue'

export default defineComponent({
  name: 'OverviewIntroduction',
  components: {
    ReferenceMain
  }
})
</script>

<style lang="scss" scoped>
.overview-introduction {
  padding: 20%;
  border-radius: 8px;

  h1 {
    font-size: 2em;
    margin-bottom: 1em;
    color: #2c3e50;
  }

  section {
    margin-bottom: 2em;

    h2 {
      font-size: 1.5em;
      color: #34495e;
      margin-bottom: 1em;
    }

    p {
      line-height: 1.6;
      color: #666;
    }

    ul {
      list-style-type: disc;
      padding-left: 1.5em;
      
      li {
        margin: 0.5em 0;
        color: #666;
      }
    }
  }
}
</style> 
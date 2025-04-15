<template>
  <ReferenceMain>
    <div class="unity-introduction">
      <h1>Unity SDK 介绍</h1>
      <section>
        <h2>概述</h2>
        <p>Unity SDK 提供了完整的功能集成，帮助开发者快速在 Unity 项目中实现账号系统、社交功能等特性。</p>
      </section>
      
      <section>
        <h2>支持版本</h2>
        <ul>
          <li>Unity 2019.4 及以上版本</li>
          <li>iOS 11.0 及以上版本</li>
          <li>Android API Level 21 (Android 5.0) 及以上版本</li>
        </ul>
      </section>

      <section>
        <h2>主要功能</h2>
        <ul>
          <li>账号系统集成</li>
          <li>社交功能</li>
          <li>数据分析</li>
          <li>支付系统</li>
        </ul>
      </section>
    </div>
  </ReferenceMain>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ReferenceMain from '../ReferenceMain.vue'

export default defineComponent({
  name: 'UnityIntroduction',
  components: {
    ReferenceMain
  }
})
</script>

<style lang="scss" scoped>
.unity-introduction {
  padding: 20px;

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
<template>
  <div class="pnt-console-main">
    <SideNavBar :categories="categories" />
    <div class="main-content">
      <h2>入门介绍</h2>
      <!-- 在这里添加具体内容 -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideNavBar from '@/components/SideNavBar.vue'
import { categories } from './categories' // 可以将categories配置抽离到单独的文件

export default defineComponent({
  name: 'Introduction',
  components: {
    SideNavBar
  },
  data() {
    return {
      categories
    }
  }
})
</script>

<style scoped>
.pnt-console-main {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
  margin-left: 240px;
}
</style> 
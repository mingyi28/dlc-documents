<template>
  <PntConsoleMain>
    <template #content>
      <h2>公告配置</h2>
      <!-- 在这里添加具体内容 -->
    </template>
  </PntConsoleMain>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PntConsoleMain from './PntConsoleMain.vue'

export default defineComponent({
  name: 'Announcements',
  components: {
    PntConsoleMain
  }
})
</script> 
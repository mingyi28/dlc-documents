<template>
  <PntConsoleMain>
    <template #content>
      <h2>注册项目并获取sdk配置</h2>
      <!-- 在这里添加具体内容 -->
    </template>
  </PntConsoleMain>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PntConsoleMain from './PntConsoleMain.vue'

export default defineComponent({
  name: 'RegisterAndConfig',
  components: {
    PntConsoleMain
  }
})
</script> 
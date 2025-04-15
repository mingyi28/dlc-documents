<template>
  <PntConsoleMain>
    <template #content>
      <h2>账号操作</h2>
      <!-- 在这里添加具体内容 -->
    </template>
  </PntConsoleMain>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PntConsoleMain from './PntConsoleMain.vue'

export default defineComponent({
  name: 'AccountOperations',
  components: {
    PntConsoleMain
  }
})
</script> 
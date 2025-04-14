<template>
  <div class="main-layout">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout'
})
</script>

<style lang="scss" scoped>
.main-layout {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  .content {
    background: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}

@media (max-width: 768px) {
  .main-layout {
    padding: 10px;

    .content {
      padding: 20px;
    }
  }
}
</style> 
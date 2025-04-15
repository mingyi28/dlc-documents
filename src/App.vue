<template>
  <div id="app">
    <TopNavBar />
    <NavBar v-if="!isOfficialRoute" />
    <main class="main-content" :class="{ 'no-navbar': isOfficialRoute }">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import TopNavBar from '@/components/TopNavBar.vue'
import NavBar from '@/components/NavBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    TopNavBar,
    NavBar
  },
  setup() {
    const route = useRoute()
    
    const isOfficialRoute = computed(() => {
      return ['/overview', '/account-solution', '/news'].includes(route.path)
    })

    return {
      isOfficialRoute
    }
  }
})
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f8f9fa;
}

#app {
  min-height: 100vh;
}

* {
  box-sizing: border-box;
}

.main-content {
  padding-top: 140px; /* 为两个导航栏留出空间 */
  min-height: calc(100vh - 120px);

  &.no-navbar {
    padding-top: 60px; /* 当只有顶部导航栏时减少padding */
    min-height: calc(100vh - 60px);
  }
}
</style> 
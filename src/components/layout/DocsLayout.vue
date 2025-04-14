<template>
  <div class="docs-layout">
    <div class="sidebar">
      <h2>文档中心</h2>
      <nav>
        <router-link to="/docs/reference" class="nav-link">API 参考</router-link>
        <router-link to="/docs/sample" class="nav-link">示例代码</router-link>
      </nav>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DocsLayout'
})
</script>

<style lang="scss" scoped>
.docs-layout {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  gap: 30px;

  .sidebar {
    width: 250px;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    height: fit-content;

    h2 {
      color: #333;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #f0f0f0;
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .nav-link {
        color: #666;
        text-decoration: none;
        padding: 8px 12px;
        border-radius: 4px;
        transition: all 0.3s;

        &:hover {
          background: #f5f5f5;
          color: #333;
        }

        &.router-link-active {
          background: #e3f2fd;
          color: #1976d2;
        }
      }
    }
  }

  .content {
    flex: 1;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}

@media (max-width: 768px) {
  .docs-layout {
    flex-direction: column;
    padding: 10px;

    .sidebar {
      width: 100%;
    }
  }
}
</style> 
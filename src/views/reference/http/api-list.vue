<template>
  <ReferenceMain>
    <div class="http-api-list">
      <h1>HTTP API 列表</h1>
      
      <section v-for="(category, index) in apiCategories" :key="index" class="api-category">
        <h2>{{ category.title }}</h2>
        <div class="api-table">
          <div class="api-row header">
            <div class="method">方法</div>
            <div class="endpoint">端点</div>
            <div class="description">描述</div>
          </div>
          <div v-for="api in category.apis" :key="api.endpoint" class="api-row">
            <div class="method" :class="api.method.toLowerCase()">{{ api.method }}</div>
            <div class="endpoint">{{ api.endpoint }}</div>
            <div class="description">{{ api.description }}</div>
          </div>
        </div>
      </section>
    </div>
  </ReferenceMain>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ReferenceMain from '../ReferenceMain.vue'

export default defineComponent({
  name: 'HttpApiList',
  components: {
    ReferenceMain
  },
  data() {
    return {
      apiCategories: [
        {
          title: '账号接口',
          apis: [
            {
              method: 'POST',
              endpoint: '/v1/auth/login',
              description: '用户登录'
            },
            {
              method: 'POST',
              endpoint: '/v1/auth/register',
              description: '用户注册'
            }
          ]
        },
        {
          title: '用户接口',
          apis: [
            {
              method: 'GET',
              endpoint: '/v1/user/profile',
              description: '获取用户信息'
            },
            {
              method: 'PUT',
              endpoint: '/v1/user/profile',
              description: '更新用户信息'
            }
          ]
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.http-api-list {
  padding: 20px;

  h1 {
    font-size: 2em;
    margin-bottom: 1.5em;
    color: #2c3e50;
  }

  .api-category {
    margin-bottom: 2em;

    h2 {
      font-size: 1.5em;
      color: #34495e;
      margin-bottom: 1em;
    }
  }

  .api-table {
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;

    .api-row {
      display: grid;
      grid-template-columns: 100px 1fr 2fr;
      border-bottom: 1px solid #ddd;

      &:last-child {
        border-bottom: none;
      }

      &.header {
        background: #f8f9fa;
        font-weight: bold;
      }

      > div {
        padding: 12px;
      }

      .method {
        font-family: monospace;
        font-weight: bold;

        &.get { color: #28a745; }
        &.post { color: #007bff; }
        &.put { color: #ffc107; }
        &.delete { color: #dc3545; }
      }

      .endpoint {
        font-family: monospace;
      }
    }
  }
}
</style> 
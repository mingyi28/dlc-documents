<template>
  <ReferenceMain>
    <div class="reference">
      <h1>API 参考文档</h1>
      <div class="api-sections">
        <div v-for="section in apiSections" :key="section.title" class="api-section">
          <div class="section-header">
            <h2>{{ section.title }}</h2>
            <p>{{ section.description }}</p>
          </div>
          
          <div class="api-list">
            <div v-for="api in section.apis" :key="api.name" class="api-item">
              <div class="api-header">
                <h3>{{ api.name }}</h3>
                <div class="method-badge">{{ api.method }}</div>
              </div>
              
              <p class="api-description">{{ api.description }}</p>
              
              <div v-if="api.parameters && api.parameters.length" class="parameters">
                <h4>参数说明</h4>
                <div class="param-table">
                  <div class="param-header">
                    <div class="param-name">参数名</div>
                    <div class="param-desc">说明</div>
                  </div>
                  <div v-for="param in api.parameters" :key="param.name" class="param-row">
                    <div class="param-name">
                      <code>{{ param.name }}</code>
                    </div>
                    <div class="param-desc">{{ param.description }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ReferenceMain>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ReferenceMain from './reference/ReferenceMain.vue'

export default defineComponent({
  name: 'ReferenceView',
  components: {
    ReferenceMain
  },
  data() {
    return {
      apiSections: [
        {
          title: '账号接口',
          description: '用户账号相关的 API 接口文档',
          apis: [
            {
              name: 'login',
              description: '用户登录接口',
              method: 'POST /api/v1/login',
              parameters: [
                { name: 'username', description: '用户名' },
                { name: 'password', description: '密码' }
              ]
            },
            {
              name: 'register',
              description: '用户注册接口',
              method: 'POST /api/v1/register',
              parameters: [
                { name: 'username', description: '用户名' },
                { name: 'password', description: '密码' },
                { name: 'email', description: '邮箱地址' }
              ]
            }
          ]
        },
        {
          title: '社交接口',
          description: '社交功能相关的 API 接口文档',
          apis: [
            {
              name: 'share',
              description: '分享内容接口',
              method: 'POST /api/v1/share',
              parameters: [
                { name: 'content', description: '分享内容' },
                { name: 'platform', description: '分享平台' }
              ]
            },
            {
              name: 'friends',
              description: '获取好友列表',
              method: 'GET /api/v1/friends',
              parameters: [
                { name: 'page', description: '页码' },
                { name: 'limit', description: '每页数量' }
              ]
            }
          ]
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.reference {
  padding: 20px;

  h1 {
    font-size: 2em;
    color: #2c3e50;
    margin-bottom: 1.5em;
  }

  .api-sections {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }

  .api-section {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    .section-header {
      background: #f8f9fa;
      padding: 1.5em;
      border-bottom: 1px solid #e9ecef;

      h2 {
        font-size: 1.5em;
        color: #343a40;
        margin-bottom: 0.5em;
      }

      p {
        color: #6c757d;
        margin: 0;
      }
    }

    .api-list {
      padding: 1.5em;
    }
  }

  .api-item {
    padding: 1.5em;
    background: #f8f9fa;
    border-radius: 8px;
    margin-bottom: 1.5em;

    &:last-child {
      margin-bottom: 0;
    }

    .api-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1em;

      h3 {
        font-size: 1.25em;
        color: #343a40;
        margin: 0;
      }

      .method-badge {
        background: #e3f2fd;
        color: #1976d2;
        padding: 0.5em 1em;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-size: 0.9em;
      }
    }

    .api-description {
      color: #6c757d;
      margin-bottom: 1.5em;
    }

    .parameters {
      h4 {
        color: #495057;
        margin-bottom: 1em;
      }

      .param-table {
        border: 1px solid #dee2e6;
        border-radius: 4px;
        overflow: hidden;

        .param-header {
          display: grid;
          grid-template-columns: 200px 1fr;
          background: #e9ecef;
          padding: 0.75em 1em;
          font-weight: 600;
          color: #495057;
        }

        .param-row {
          display: grid;
          grid-template-columns: 200px 1fr;
          padding: 0.75em 1em;
          border-top: 1px solid #dee2e6;

          &:first-child {
            border-top: none;
          }

          .param-name {
            code {
              background: #e9ecef;
              padding: 0.2em 0.4em;
              border-radius: 3px;
              color: #e83e8c;
              font-family: 'Courier New', monospace;
            }
          }

          .param-desc {
            color: #6c757d;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .reference {
    padding: 10px;

    .api-item {
      .parameters {
        .param-table {
          .param-header,
          .param-row {
            grid-template-columns: 1fr;
            gap: 0.5em;
          }
        }
      }
    }
  }
}
</style> 
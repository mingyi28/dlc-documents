<template>
  <div class="native-account">
    <h1>原生账号接入方案</h1>
    <section class="integration-guide">
      <h2>接入指南</h2>
      <div class="steps">
        <div v-for="step in integrationSteps" :key="step.title" class="step-card">
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
          <ul v-if="step.details">
            <li v-for="detail in step.details" :key="detail">{{ detail }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="features">
      <h2>功能特点</h2>
      <div class="feature-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NativeAccountView',
  data() {
    return {
      integrationSteps: [
        {
          title: '初始化配置',
          description: '配置您的应用信息和环境参数',
          details: [
            '创建应用并获取 AppID',
            '配置开发环境',
            '初始化 SDK'
          ]
        },
        {
          title: '账号系统对接',
          description: '将您的账号系统与我们的服务进行对接',
          details: [
            '实现用户认证接口',
            '配置数据同步',
            '设置安全策略'
          ]
        },
        {
          title: '功能测试',
          description: '在测试环境中验证功能正确性',
          details: [
            '账号登录测试',
            '数据同步测试',
            '安全性测试'
          ]
        }
      ],
      features: [
        {
          title: '灵活的接入方式',
          description: '支持多种认证方式和协议标准，便于与现有系统集成'
        },
        {
          title: '数据安全',
          description: '提供完善的数据加密和保护机制，确保用户数据安全'
        },
        {
          title: '便捷的管理',
          description: '提供直观的管理界面，轻松管理用户账号和权限'
        },
        {
          title: '可扩展性',
          description: '支持自定义扩展，满足不同场景的需求'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.native-account {
  h1 {
    color: #333;
    margin-bottom: 30px;
  }

  section {
    margin-bottom: 40px;

    h2 {
      color: #444;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #f0f0f0;
    }
  }

  .steps {
    display: grid;
    gap: 20px;

    .step-card {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

      h3 {
        color: #2c3e50;
        margin-bottom: 10px;
      }

      p {
        color: #666;
        margin-bottom: 15px;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          color: #666;
          padding: 5px 0;
          padding-left: 20px;
          position: relative;

          &:before {
            content: "•";
            color: #007bff;
            position: absolute;
            left: 0;
          }
        }
      }
    }
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;

    .feature-card {
      background: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

      h3 {
        color: #2c3e50;
        margin-bottom: 10px;
      }

      p {
        color: #666;
        line-height: 1.6;
      }
    }
  }
}

@media (max-width: 768px) {
  .native-account {
    .feature-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style> 
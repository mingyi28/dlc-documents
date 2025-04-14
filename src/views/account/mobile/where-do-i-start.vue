<template>
  <AccountMain>
    <div class="mobile-start-guide">
      <section class="page-header">
        <h1>从哪里开始？</h1>
        <p class="page-description">快速了解如何开始使用 LI Pass 移动端账号解决方案</p>
      </section>

      <section class="content-section">
        <h2>准备工作</h2>
        <div class="preparation-steps">
          <div class="step-card">
            <h3>1. 创建开发者账号</h3>
            <p>在 LI Pass 开发者平台注册并创建您的开发者账号</p>
          </div>
          <div class="step-card">
            <h3>2. 创建应用</h3>
            <p>在开发者控制台创建您的应用并获取 AppID</p>
          </div>
          <div class="step-card">
            <h3>3. 下载 SDK</h3>
            <p>根据您的开发平台选择并下载对应的 SDK 包</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>快速入门</h2>
        <div class="quick-start">
          <div class="code-example">
            <h3>SDK 初始化</h3>
            <pre><code>
// 初始化 SDK
LIPassSDK.initialize(context, "YOUR_APP_ID");

// 设置环境
LIPassSDK.setEnvironment(LIPassEnvironment.SANDBOX);
            </code></pre>
          </div>
          <div class="integration-tips">
            <h3>集成建议</h3>
            <ul>
              <li>建议在应用启动时进行 SDK 初始化</li>
              <li>开发阶段使用 SANDBOX 环境进行测试</li>
              <li>正式发布前切换至 PRODUCTION 环境</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>后续步骤</h2>
        <div class="next-steps-grid">
          <div class="next-step-card">
            <h3>查看详细文档</h3>
            <p>深入了解 SDK 的所有功能和 API</p>
          </div>
          <div class="next-step-card">
            <h3>运行示例程序</h3>
            <p>下载并运行示例程序，快速熟悉各项功能</p>
          </div>
          <div class="next-step-card">
            <h3>获取技术支持</h3>
            <p>遇到问题？联系我们的技术支持团队</p>
          </div>
        </div>
      </section>
    </div>
  </AccountMain>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AccountMain from '../AccountMain.vue'

export default defineComponent({
  name: 'MobileWhereToStart',
  components: {
    AccountMain
  }
})
</script>

<style lang="scss" scoped>
.mobile-start-guide {
  margin-bottom: 40px;
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;

  .page-header {
    margin-bottom: 40px;
    
    h1 {
      font-size: 32px;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 12px;
    }

    .page-description {
      font-size: 16px;
      color: #666;
      line-height: 1.6;
    }
  }

  .content-section {
    background: #ffffff;
    border-radius: 8px;
    padding: 24px;
    margin-bottom: 24px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    h2 {
      font-size: 24px;
      font-weight: 500;
      color: #1a1a1a;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 1px solid #eee;
    }
  }

  .preparation-steps, .next-steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;

    .step-card, .next-step-card {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 20px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      }

      h3 {
        font-size: 18px;
        font-weight: 500;
        color: #2c3e50;
        margin-bottom: 12px;
      }

      p {
        font-size: 14px;
        color: #666;
        line-height: 1.5;
        margin: 0;
      }
    }
  }

  .quick-start {
    .code-example {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;

      pre {
        background: #2d2d2d;
        border-radius: 4px;
        padding: 15px;
        overflow-x: auto;

        code {
          color: #ffffff;
          font-family: 'Courier New', Courier, monospace;
        }
      }
    }

    .integration-tips {
      ul {
        list-style-type: none;
        padding-left: 0;

        li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 10px;
          color: #666;

          &:before {
            content: "•";
            position: absolute;
            left: 0;
            color: #2c3e50;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .mobile-start-guide {
    padding: 16px;

    .preparation-steps, .next-steps-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
}
</style> 
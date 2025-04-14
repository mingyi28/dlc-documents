<template>
  <OperationMain>
    <div class="getting-started-guide">
      <section class="page-header">
        <h1>分享功能快速入门</h1>
        <p class="page-description">快速了解如何开始使用 LI Pass 分享功能</p>
      </section>

      <section class="content-section">
        <h2>准备工作</h2>
        <div class="steps">
          <div class="step">
            <h3>1. 注册开发者账号</h3>
            <p>在 LI Pass 开发者平台注册账号并创建应用</p>
          </div>
          <div class="step">
            <h3>2. 获取应用凭证</h3>
            <p>在开发者平台获取 AppID 和 AppKey</p>
          </div>
          <div class="step">
            <h3>3. 配置分享平台</h3>
            <p>在开发者平台配置需要使用的分享平台信息</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>快速开始</h2>
        <div class="quick-start">
          <div class="step">
            <h3>1. 安装 SDK</h3>
            <div class="code-block">
              <pre><code>npm install @gamekit/share-sdk --save</code></pre>
            </div>
          </div>
          <div class="step">
            <h3>2. 初始化 SDK</h3>
            <div class="code-block">
              <pre><code>import { ShareSDK } from '@gamekit/share-sdk';

ShareSDK.initialize({
  appId: 'YOUR_APP_ID',
  appKey: 'YOUR_APP_KEY'
});</code></pre>
            </div>
          </div>
          <div class="step">
            <h3>3. 实现分享功能</h3>
            <div class="code-block">
              <pre><code>ShareSDK.share({
  title: '分享标题',
  description: '分享描述',
  imageUrl: 'https://example.com/image.jpg',
  link: 'https://example.com'
});</code></pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  </OperationMain>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OperationMain from '@/views/operation/OperationMain.vue'

export default defineComponent({
  name: 'ShareGettingStarted',
  components: {
    OperationMain
  }
})
</script>

<style lang="scss" scoped>
.getting-started-guide {
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

  .steps {
    .step {
      margin-bottom: 20px;

      h3 {
        font-size: 18px;
        color: #2c3e50;
        margin-bottom: 8px;
      }

      p {
        color: #666;
        margin: 0;
        line-height: 1.5;
      }
    }
  }

  .quick-start {
    .step {
      margin-bottom: 30px;

      h3 {
        font-size: 18px;
        color: #2c3e50;
        margin-bottom: 12px;
      }

      .code-block {
        background: #f8f9fa;
        border-radius: 8px;
        padding: 16px;
        margin-top: 12px;

        pre {
          margin: 0;
          code {
            font-family: 'Courier New', Courier, monospace;
            color: #333;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .getting-started-guide {
    padding: 16px;
  }
}
</style> 
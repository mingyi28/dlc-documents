<template>
  <AccountMain>
    <div class="unreal-integration">
      <section class="page-header">
        <h1>Unreal Engine 集成指南</h1>
        <p class="page-description">在 Unreal Engine 项目中集成 LI Pass 账号系统的详细指南</p>
      </section>

      <section class="content-section">
        <h2>环境要求</h2>
        <div class="requirements">
          <div class="requirement-item">
            <h3>引擎版本</h3>
            <p>Unreal Engine 4.26 或更高版本</p>
          </div>
          <div class="requirement-item">
            <h3>开发环境</h3>
            <p>iOS 11.0+ / Android 5.0+</p>
          </div>
          <div class="requirement-item">
            <h3>SDK 版本</h3>
            <p>LI Pass SDK 2.0.0+</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>插件安装</h2>
        <div class="installation-steps">
          <div class="step">
            <h3>1. 下载插件</h3>
            <p>从 UE Marketplace 下载 LI Pass 插件</p>
            <div class="code-block">
              <pre><code>
// 在项目的 .uproject 文件中添加插件引用
{
  "Plugins": [
    {
      "Name": "LIPassSDK",
      "Enabled": true,
      "MarketplaceURL": "com.epicgames.launcher://ue/marketplace/content/xxx"
    }
  ]
}
              </code></pre>
            </div>
          </div>
          <div class="step">
            <h3>2. 初始化配置</h3>
            <p>在游戏模块中初始化 SDK</p>
            <div class="code-block">
              <pre><code>
// 在游戏模块初始化时添加
void AYourGameMode::BeginPlay()
{
    Super::BeginPlay();
    FLIPassModule::Get().Initialize(TEXT("YOUR_APP_ID"));
}
              </code></pre>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>蓝图支持</h2>
        <div class="features-grid">
          <div class="feature-card">
            <h3>登录节点</h3>
            <p>提供完整的蓝图节点支持各类登录方式</p>
          </div>
          <div class="feature-card">
            <h3>账号管理</h3>
            <p>通过蓝图节点轻松实现账号绑定和管理</p>
          </div>
          <div class="feature-card">
            <h3>数据同步</h3>
            <p>支持跨平台的用户数据同步功能</p>
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
  name: 'UnrealIntegration',
  components: {
    AccountMain
  }
})
</script>

<style lang="scss" scoped>
.unreal-integration {
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

  .requirements {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;

    .requirement-item {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 16px;

      h3 {
        font-size: 16px;
        color: #2c3e50;
        margin-bottom: 8px;
      }

      p {
        color: #666;
        margin: 0;
      }
    }
  }

  .installation-steps {
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

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;

    .feature-card {
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
        color: #2c3e50;
        margin-bottom: 12px;
      }

      p {
        color: #666;
        margin: 0;
        line-height: 1.5;
      }
    }
  }
}

@media (max-width: 768px) {
  .unreal-integration {
    padding: 16px;

    .features-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
}
</style> 
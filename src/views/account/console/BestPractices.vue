<template>
  <AccountMain>
    <div class="pc-overview">
      <section class="page-header">
        <h1>PC 端账号解决方案概览</h1>
        <p class="page-description">为 PC 游戏提供完整的账号解决方案，支持多种登录方式和数据管理功能</p>
      </section>

      <section class="content-section">
        <h2>方案特点</h2>
        <div class="features-grid">
          <div class="feature-card">
            <h3>多平台支持</h3>
            <p>支持 Steam、Epic、GOG 等主流游戏平台账号打通</p>
          </div>
          <div class="feature-card">
            <h3>安全可靠</h3>
            <p>采用业界领先的加密技术，确保账号和数据安全</p>
          </div>
          <div class="feature-card">
            <h3>简单集成</h3>
            <p>提供完整的 SDK 和开发文档，快速完成接入</p>
          </div>
          <div class="feature-card">
            <h3>数据同步</h3>
            <p>支持跨平台数据互通，确保用户体验一致性</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>技术架构</h2>
        <div class="architecture">
          <div class="arch-layer">
            <h3>客户端层</h3>
            <ul>
              <li>原生 Windows 支持</li>
              <li>跨平台框架支持</li>
              <li>统一的 API 接口</li>
            </ul>
          </div>
          <div class="arch-layer">
            <h3>服务层</h3>
            <ul>
              <li>账号管理服务</li>
              <li>数据同步服务</li>
              <li>安全认证服务</li>
            </ul>
          </div>
          <div class="arch-layer">
            <h3>存储层</h3>
            <ul>
              <li>分布式存储</li>
              <li>数据备份</li>
              <li>灾备恢复</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>支持平台</h2>
        <div class="platforms-grid">
          <div class="platform-card">
            <h3>Steam</h3>
            <ul>
              <li>Steam 账号集成</li>
              <li>成就系统对接</li>
              <li>好友系统互通</li>
            </ul>
          </div>
          <div class="platform-card">
            <h3>Epic</h3>
            <ul>
              <li>Epic 账号集成</li>
              <li>跨平台存档</li>
              <li>社交功能</li>
            </ul>
          </div>
          <div class="platform-card">
            <h3>独立平台</h3>
            <ul>
              <li>自有账号系统</li>
              <li>数据管理</li>
              <li>客服系统</li>
            </ul>
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
  name: 'PCOverview',
  components: {
    AccountMain
  }
})
</script>

<style lang="scss" scoped>
.pc-overview {
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

  .features-grid, .platforms-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
    margin-top: 20px;

    .feature-card, .platform-card {
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

      ul {
        list-style-type: none;
        padding-left: 0;
        margin: 8px 0;

        li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 8px;
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

  .architecture {
    .arch-layer {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 16px;

      h3 {
        color: #2c3e50;
        margin-bottom: 12px;
        font-size: 18px;
        padding-bottom: 8px;
        border-bottom: 1px solid #eee;
      }

      ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
        list-style-type: none;
        padding-left: 0;
        margin: 0;

        li {
          position: relative;
          padding-left: 20px;
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
  .pc-overview {
    padding: 16px;

    .features-grid, .platforms-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .architecture {
      .arch-layer ul {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style> 
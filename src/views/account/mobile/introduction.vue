<template>
  <AccountMain>
    <div class="mobile-introduction">
      <section class="page-header">
        <h1>移动端账号方案介绍</h1>
        <p class="page-description">为移动游戏开发者提供专业、安全、便捷的账号解决方案</p>
      </section>

      <section class="content-section">
        <h2>概述</h2>
        <p>LI Pass 移动端账号解决方案为游戏开发者提供完整的账号服务体系，包括账号管理、数据安全、用户认证等核心功能。</p>
      </section>
      
      <section class="content-section">
        <h2>核心优势</h2>
        <div class="advantages-grid">
          <div class="advantage-card">
            <h3>快速集成</h3>
            <p>提供完整的 SDK 和详细的接入文档，最快 30 分钟即可完成基础功能接入</p>
          </div>
          <div class="advantage-card">
            <h3>多平台支持</h3>
            <p>支持 iOS、Android 等主流移动平台，提供统一的接口和体验</p>
          </div>
          <div class="advantage-card">
            <h3>安全可靠</h3>
            <p>采用业界领先的加密技术，确保用户数据安全</p>
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
  name: 'MobileIntroduction',
  components: {
    AccountMain
  }
})
</script>

<style lang="scss" scoped>
.mobile-introduction {
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

    p {
      font-size: 15px;
      line-height: 1.6;
      color: #4a4a4a;
    }
  }

  .advantages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin-top: 20px;

    .advantage-card {
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
}

@media (max-width: 768px) {
  .mobile-introduction {
    padding: 16px;

    .advantages-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
}
</style>
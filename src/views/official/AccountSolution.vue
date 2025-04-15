<template>
  <div class="account-solution-page">
    <div class="content-wrapper">
      <h1>Account Solution</h1>
      <div class="content">
        <section class="solution-section">
          <h2>Comprehensive Account Management</h2>
          <p>我们提供完整的账号解决方案，涵盖账号管理、安全防护、合规保障等多个维度，助力游戏开发者构建安全可靠的账号体系。</p>
        </section>

        <section class="solution-section">
          <h2>核心账号方案</h2>
          <div class="solutions-list">
            <div class="solution-item">
              <h3>LI Pass Account System</h3>
              <p>完整的账号系统解决方案，内置安全机制和合规特性，快速实现账号功能。</p>
              <ul class="feature-list">
                <li>多平台账号统一管理</li>
                <li>第三方登录集成</li>
                <li>数据同步与备份</li>
              </ul>
              <router-link to="/account/li-pass" class="learn-more">了解更多</router-link>
            </div>
            <div class="solution-item">
              <h3>Native Account Integration</h3>
              <p>与已有账号系统无缝对接，保持现有账号体系的同时获得增强功能。</p>
              <ul class="feature-list">
                <li>灵活的接入方式</li>
                <li>数据迁移工具</li>
                <li>兼容性保证</li>
              </ul>
              <router-link to="/account/native-account" class="learn-more">了解更多</router-link>
            </div>
          </div>
        </section>

        <section class="solution-section">
          <h2>安全解决方案</h2>
          <div class="solutions-list">
            <div class="solution-item">
              <h3>多重安全防护</h3>
              <p>采用多层次安全架构，全方位保护用户账号安全。</p>
              <ul class="feature-list">
                <li>双因素认证</li>
                <li>设备指纹识别</li>
                <li>异常行为检测</li>
                <li>实时风控系统</li>
              </ul>
            </div>
            <div class="solution-item">
              <h3>数据安全</h3>
              <p>严格的数据安全保护机制，确保用户数据安全。</p>
              <ul class="feature-list">
                <li>端到端加密</li>
                <li>敏感数据脱敏</li>
                <li>数据访问审计</li>
                <li>灾备恢复机制</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="solution-section">
          <h2>合规解决方案</h2>
          <div class="solutions-list">
            <div class="solution-item">
              <h3>全球合规支持</h3>
              <p>符合各地区数据保护法规要求，降低合规风险。</p>
              <ul class="feature-list">
                <li>GDPR 合规</li>
                <li>COPPA 合规</li>
                <li>隐私政策管理</li>
                <li>用户授权机制</li>
              </ul>
            </div>
            <div class="solution-item">
              <h3>合规工具集</h3>
              <p>提供完整的合规工具支持，简化合规流程。</p>
              <ul class="feature-list">
                <li>用户协议模板</li>
                <li>数据处理协议</li>
                <li>合规检查工具</li>
                <li>合规报告生成</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AccountSolution'
})
</script>

<style lang="scss" scoped>
.account-solution-page {
  padding-top: 0;
  min-height: calc(100vh - 60px);
  background: #f8f9fa;

  .content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;

    h1 {
      font-size: 32px;
      color: #333;
      margin-bottom: 30px;
    }

    .content {
      background: #fff;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      .solution-section {
        margin-bottom: 40px;

        &:last-child {
          margin-bottom: 0;
        }

        h2 {
          color: #333;
          font-size: 24px;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #f0f0f0;
        }

        p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .solutions-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;

          .solution-item {
            padding: 20px;
            border: 1px solid #eee;
            border-radius: 8px;
            background: #fff;
            transition: all 0.3s ease;
            
            &:hover {
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
              transform: translateY(-2px);
            }

            h3 {
              color: #333;
              font-size: 20px;
              margin-bottom: 10px;
            }

            p {
              color: #666;
              margin-bottom: 15px;
            }

            .feature-list {
              list-style: none;
              padding: 0;
              margin: 0 0 15px 0;

              li {
                color: #666;
                margin-bottom: 8px;
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

            .learn-more {
              color: #007bff;
              text-decoration: none;
              font-weight: 500;
              display: inline-block;
              margin-top: 10px;

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .account-solution-page {
    .content-wrapper {
      padding: 15px;

      h1 {
        font-size: 28px;
      }

      .content {
        padding: 20px;

        .solution-section {
          h2 {
            font-size: 22px;
          }

          .solutions-list {
            .solution-item {
              h3 {
                font-size: 18px;
              }
            }
          }
        }
      }
    }
  }
}
</style> 
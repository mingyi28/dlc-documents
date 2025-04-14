<template>
  <AccountMain>
    <div class="case-studies">
      <section class="page-header">
        <h1>案例研究</h1>
        <p class="page-description">了解其他开发者如何使用 LI Pass 移动端账号解决方案</p>
      </section>

      <section class="content-section">
        <h2>成功案例</h2>
        <div class="case-grid">
          <div class="case-card">
            <div class="case-header">
              <h3>休闲游戏《快乐消消乐》</h3>
              <span class="tag">休闲游戏</span>
            </div>
            <div class="case-content">
              <p class="metrics">
                <span>集成时间：2天</span>
                <span>MAU：500万+</span>
              </p>
              <h4>项目概况</h4>
              <p>一款风靡全球的三消类游戏，需要稳定可靠的账号系统支持全球用户</p>
              <h4>解决方案</h4>
              <ul>
                <li>快速集成 LI Pass SDK</li>
                <li>支持多种社交平台登录</li>
                <li>跨平台数据同步</li>
              </ul>
              <h4>成果</h4>
              <p>用户留存率提升30%，账号安全问题减少80%</p>
            </div>
          </div>

          <div class="case-card">
            <div class="case-header">
              <h3>MMORPG《永恒传说》</h3>
              <span class="tag">角色扮演</span>
            </div>
            <div class="case-content">
              <p class="metrics">
                <span>集成时间：5天</span>
                <span>MAU：300万+</span>
              </p>
              <h4>项目概况</h4>
              <p>大型多人在线角色扮演游戏，需要处理大量并发的账号操作</p>
              <h4>解决方案</h4>
              <ul>
                <li>使用 LI Pass 高并发账号服务</li>
                <li>实现无缝的账号迁移</li>
                <li>整合防沉迷系统</li>
              </ul>
              <h4>成果</h4>
              <p>服务器成本降低40%，账号系统稳定性提升60%</p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>实施建议</h2>
        <div class="tips-grid">
          <div class="tip-card">
            <h3>前期规划</h3>
            <ul>
              <li>评估用户规模和增长预期</li>
              <li>规划需要支持的登录方式</li>
              <li>设计数据存储方案</li>
            </ul>
          </div>
          <div class="tip-card">
            <h3>开发阶段</h3>
            <ul>
              <li>遵循最佳实践指南</li>
              <li>进行充分的测试</li>
              <li>准备降级方案</li>
            </ul>
          </div>
          <div class="tip-card">
            <h3>运营阶段</h3>
            <ul>
              <li>监控关键指标</li>
              <li>收集用户反馈</li>
              <li>定期评估和优化</li>
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
  name: 'CaseStudies',
  components: {
    AccountMain
  }
})
</script>

<style lang="scss" scoped>
.case-studies {
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

  .case-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    margin-top: 20px;

    .case-card {
      background: #f8f9fa;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.2s ease, box-shadow 0.2s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      }

      .case-header {
        background: #2c3e50;
        padding: 16px;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3 {
          margin: 0;
          font-size: 18px;
        }

        .tag {
          background: rgba(255, 255, 255, 0.2);
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
        }
      }

      .case-content {
        padding: 16px;

        .metrics {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
          color: #666;
          font-size: 14px;
        }

        h4 {
          color: #2c3e50;
          margin: 16px 0 8px;
          font-size: 16px;
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
  }

  .tips-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;

    .tip-card {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 20px;

      h3 {
        color: #2c3e50;
        margin-bottom: 12px;
        font-size: 18px;
      }

      ul {
        list-style-type: none;
        padding-left: 0;
        margin: 0;

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
}

@media (max-width: 768px) {
  .case-studies {
    padding: 16px;

    .case-grid, .tips-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
}
</style> 
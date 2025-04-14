<template>
  <main class="home">
    <section class="page-header">
      <h1>PNTSDK 开发者中心</h1>
      <p class="page-description">为游戏开发者提供专业、安全、便捷的解决方案</p>
    </section>

    <section class="content-section">
      <div class="card">
        <h2>{{ content.sdkIntro.title.replace('LIPass', 'PNTSDK') }}</h2>
        <p>{{ content.sdkIntro.description }}</p>
      </div>
    </section>

    <section class="content-section">
      <div class="card">
        <h2>{{ content.accountSolutions.title }}</h2>
        <div class="solutions-grid">
          <div v-for="item in content.accountSolutions.items" :key="item.title" class="solution-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <router-link :to="item.link" class="btn">了解更多</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="card">
        <h2>{{ content.operationalTools.title }}</h2>
        <div class="tools-grid">
          <div v-for="section in content.operationalTools.sections" :key="section.title" class="tool-category">
            <h3>{{ section.title }}</h3>
            <ul>
              <li v-for="item in section.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      content: {
        sdkIntro: {
          title: 'LIPass SDK 介绍',
          description: 'LI Pass 账号方案提供了多种登录方式，包括 guest 登录、第三方渠道登录、lip 邮箱登录等，支持账号绑定和解绑，确保合规性和安全性。'
        },
        accountSolutions: {
          title: '账号方案',
          items: [
            {
              title: 'LI Pass 账号方案',
              description: '提供移动端和 PC 端的多种登录解决方案。',
              link: '/account/li-pass'
            },
            {
              title: '原生账号接入方案',
              description: '支持自建账号系统的接入，提供灵活的登录方式。',
              link: '/account/native-account'
            }
          ]
        },
        operationalTools: {
          title: '运营工具',
          sections: [
            {
              title: '社交',
              items: ['分享', '好友列表']
            },
            {
              title: '玩家参与',
              items: ['公告', '推送']
            },
            {
              title: '数据洞察',
              items: ['UA 数据上报', '游戏数据埋点']
            },
            {
              title: '工具',
              items: ['Deeplink', 'Webview']
            }
          ]
        }
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

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
    margin-bottom: 40px;

    .card {
      background: #ffffff;
      border-radius: 8px;
      padding: 24px;
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
  }

  .solutions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin-top: 20px;

    .solution-card {
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
        margin-bottom: 16px;
      }

      .btn {
        display: inline-block;
        padding: 8px 16px;
        background: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        transition: background 0.2s ease;

        &:hover {
          background: #0056b3;
        }
      }
    }
  }

  .tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
    margin-top: 20px;

    .tool-category {
      h3 {
        font-size: 18px;
        font-weight: 500;
        color: #2c3e50;
        margin-bottom: 12px;
      }

      ul {
        list-style: disc;
        padding-left: 20px;

        li {
          color: #666;
          margin-bottom: 8px;
          font-size: 14px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .home {
    padding: 16px;

    .solutions-grid,
    .tools-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
}
</style> 
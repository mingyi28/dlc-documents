<template>
  <div class="news-page">
    <div class="content-wrapper">
      <h1>Account System News</h1>
      <div class="content">
        <div class="news-list">
          <article class="news-item" v-for="(news, index) in newsList" :key="index">
            <div class="news-date">{{ news.date }}</div>
            <h2>{{ news.title }}</h2>
            <p>{{ news.summary }}</p>
            <a :href="news.link" class="read-more" v-if="news.link">Read More</a>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'News',
  data() {
    return {
      newsList: [
        {
          date: '2024-01-20',
          title: '账号系统安全升级公告',
          summary: '为提供更安全的账号服务，我们将于下周进行系统升级，引入新的加密算法和安全认证机制，确保用户账号安全。',
          link: '#'
        },
        {
          date: '2024-01-15',
          title: '新增账号绑定功能',
          summary: '现已支持多平台账号绑定功能，用户可以将游戏账号与邮箱、手机号、第三方社交账号等进行关联，实现无缝切换。',
          link: '#'
        },
        {
          date: '2024-01-10',
          title: '账号数据迁移工具上线',
          summary: '推出全新的账号数据迁移工具，支持开发者快速、安全地将现有账号系统数据迁移至我们的平台。',
          link: '#'
        },
        {
          date: '2024-01-05',
          title: '账号系统合规性更新',
          summary: '根据最新的数据保护法规要求，我们更新了账号系统的隐私保护措施，包括数据存储、用户授权等方面的优化。',
          link: '#'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.news-page {
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

      .news-list {
        .news-item {
          padding: 20px;
          margin-bottom: 20px;
          border-bottom: 1px solid #eee;

          &:last-child {
            border-bottom: none;
            margin-bottom: 0;
          }

          .news-date {
            color: #666;
            font-size: 14px;
            margin-bottom: 10px;
          }

          h2 {
            color: #333;
            margin-bottom: 10px;
            font-size: 24px;
          }

          p {
            color: #666;
            margin-bottom: 15px;
            line-height: 1.6;
          }

          .read-more {
            color: #007bff;
            text-decoration: none;
            font-weight: 500;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .news-page {
    .content-wrapper {
      padding: 15px;

      h1 {
        font-size: 28px;
      }

      .content {
        padding: 20px;

        .news-list {
          .news-item {
            padding: 15px;

            h2 {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}
</style> 
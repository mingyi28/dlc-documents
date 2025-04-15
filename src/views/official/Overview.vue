<template>
  <div class="overview-page">
    <div class="content-wrapper">
      <h1>Overview</h1>
      <div class="content">
        <section class="overview-section">
          <h2>Welcome to LIPass SDK</h2>
          <p>LIPass SDK provides a comprehensive solution for game developers to implement account systems, social features, and operational tools.</p>
        </section>
        <section class="overview-section">
          <h2>Key Features</h2>
          <ul class="features-list">
            <li>
              <h3>Account System</h3>
              <p>Flexible account management with multiple login options and secure authentication.</p>
            </li>
            <li>
              <h3>Social Integration</h3>
              <p>Rich social features including friend systems and sharing capabilities.</p>
            </li>
            <li>
              <h3>Developer Tools</h3>
              <p>Comprehensive tools for development, testing, and deployment.</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Overview'
})
</script>

<style lang="scss" scoped>
.overview-page {
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

      .overview-section {
        margin-bottom: 40px;

        &:last-child {
          margin-bottom: 0;
        }

        h2 {
          color: #333;
          font-size: 24px;
          margin-bottom: 20px;
        }

        p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;

          li {
            margin-bottom: 30px;
            
            h3 {
              color: #333;
              font-size: 20px;
              margin-bottom: 10px;
            }

            p {
              color: #666;
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .overview-page {
    .content-wrapper {
      padding: 15px;

      h1 {
        font-size: 28px;
      }

      .content {
        padding: 20px;

        .overview-section {
          h2 {
            font-size: 22px;
          }

          .features-list {
            li {
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
<template>
  <div class="sample">
    <h1>示例代码</h1>
    <section class="samples">
      <div class="sample-card" v-for="sample in samples" :key="sample.title">
        <h2>{{ sample.title }}</h2>
        <p class="description">{{ sample.description }}</p>
        <div class="code-block">
          <div class="code-header">
            <span class="language">{{ sample.language }}</span>
            <button @click="copyCode(sample.code)" class="copy-btn">
              复制代码
            </button>
          </div>
          <pre><code>{{ sample.code }}</code></pre>
        </div>
        <div class="notes" v-if="sample.notes">
          <h3>说明：</h3>
          <ul>
            <li v-for="(note, index) in sample.notes" :key="index">{{ note }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SampleView',
  data() {
    return {
      samples: [
        {
          title: '快速开始',
          description: '基本的 SDK 初始化和配置示例',
          language: 'JavaScript',
          code: `// 初始化 SDK
import { LIPassSDK } from 'lipass-sdk';

const sdk = new LIPassSDK({
  appId: 'your-app-id',
  appSecret: 'your-app-secret',
  region: 'CN'
});

// 初始化完成后的回调
sdk.init().then(() => {
  console.log('SDK initialized successfully');
}).catch(error => {
  console.error('SDK initialization failed:', error);
});`,
          notes: [
            '请将 appId 和 appSecret 替换为您的实际配置',
            '确保在使用其他功能前完成初始化'
          ]
        },
        {
          title: '用户登录示例',
          description: '展示如何实现用户登录功能',
          language: 'JavaScript',
          code: `// 邮箱登录
const loginWithEmail = async () => {
  try {
    const result = await sdk.auth.loginWithEmail({
      email: 'user@example.com',
      password: 'password123'
    });
    console.log('Login successful:', result);
  } catch (error) {
    console.error('Login failed:', error);
  }
};

// 第三方登录
const loginWithThirdParty = async (platform) => {
  try {
    const result = await sdk.auth.loginWithPlatform(platform);
    console.log('Third-party login successful:', result);
  } catch (error) {
    console.error('Third-party login failed:', error);
  }
};`,
          notes: [
            '支持多种登录方式：邮箱、手机号、第三方平台等',
            '建议实现完整的错误处理逻辑'
          ]
        }
      ]
    }
  },
  methods: {
    copyCode(code: string) {
      navigator.clipboard.writeText(code).then(() => {
        // 使用更友好的提示方式，而不是 alert
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.textContent = '代码已复制到剪贴板';
        document.body.appendChild(notification);
        
        setTimeout(() => {
          notification.remove();
        }, 2000);
      }).catch(err => {
        console.error('复制失败:', err);
      });
    }
  }
})
</script>

<style lang="scss" scoped>
.sample {
  h1 {
    color: #333;
    margin-bottom: 30px;
  }

  .samples {
    display: grid;
    gap: 30px;

    .sample-card {
      background: #f8f9fa;
      padding: 25px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

      h2 {
        color: #333;
        margin-bottom: 15px;
      }

      .description {
        color: #666;
        margin-bottom: 20px;
      }

      .code-block {
        background: #fff;
        border-radius: 6px;
        overflow: hidden;
        margin-bottom: 20px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

        .code-header {
          background: #e9ecef;
          padding: 10px 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .language {
            color: #495057;
            font-size: 0.9em;
            font-weight: 500;
          }

          .copy-btn {
            background: #007bff;
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.9em;
            transition: background-color 0.2s;

            &:hover {
              background: #0056b3;
            }

            &:active {
              background: #004085;
            }
          }
        }

        pre {
          margin: 0;
          padding: 20px;
          overflow-x: auto;

          code {
            font-family: 'Courier New', Courier, monospace;
            color: #333;
            line-height: 1.5;
          }
        }
      }

      .notes {
        background: #fff;
        padding: 20px;
        border-radius: 6px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

        h3 {
          color: #495057;
          margin-bottom: 15px;
          font-size: 1em;
        }

        ul {
          margin: 0;
          padding-left: 20px;

          li {
            color: #666;
            margin: 8px 0;
            line-height: 1.5;

            &::marker {
              color: #007bff;
            }
          }
        }
      }
    }
  }
}

// 复制成功提示样式
.copy-notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #28a745;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .sample {
    .sample-card {
      padding: 15px;

      .code-block {
        pre {
          padding: 15px;
        }
      }
    }
  }
}
</style> 
<template>
  <AccountMain>
    <div class="integration-guide">
      <section class="page-header">
        <h1>PC 端功能集成</h1>
        <p class="page-description">详细的功能接入说明和代码示例</p>
      </section>

      <section class="content-section">
        <h2>用户认证</h2>
        <div class="feature-implementation">
          <div class="implementation-card">
            <h3>Steam 登录</h3>
            <p>集成 Steam 平台的用户认证</p>
            <div class="code-block">
              <pre><code>
// Steam 登录实现
LIPass::Auth::LoginWithSteam(steamTicket, [](const Result& result) {
    if (result.IsSuccess()) {
        auto token = result.GetToken();
        // 处理登录成功
    }
});
              </code></pre>
            </div>
          </div>

          <div class="implementation-card">
            <h3>Epic 登录</h3>
            <p>集成 Epic 平台的用户认证</p>
            <div class="code-block">
              <pre><code>
// Epic 登录实现
LIPass::Auth::LoginWithEpic(epicToken, [](const Result& result) {
    if (result.IsSuccess()) {
        auto token = result.GetToken();
        // 处理登录成功
    }
});
              </code></pre>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>数据同步</h2>
        <div class="feature-implementation">
          <div class="implementation-card">
            <h3>存档同步</h3>
            <p>实现游戏存档的云端同步</p>
            <div class="code-block">
              <pre><code>
// 上传存档
LIPass::Storage::UploadSave(saveData, [](const Result& result) {
    if (result.IsSuccess()) {
        // 存档上传成功
    }
});

// 下载存档
LIPass::Storage::DownloadSave([](const Result& result) {
    if (result.IsSuccess()) {
        auto saveData = result.GetData();
        // 处理存档数据
    }
});
              </code></pre>
            </div>
          </div>

          <div class="implementation-card">
            <h3>用户数据</h3>
            <p>同步用户配置和游戏设置</p>
            <div class="code-block">
              <pre><code>
// 同步用户设置
LIPass::UserData::Sync({
    {"settings", userSettings},
    {"progress", gameProgress}
}, [](const Result& result) {
    // 处理同步结果
});
              </code></pre>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>社交功能</h2>
        <div class="feature-implementation">
          <div class="implementation-card">
            <h3>好友系统</h3>
            <p>集成平台好友功能</p>
            <div class="code-block">
              <pre><code>
// 获取好友列表
LIPass::Social::GetFriends([](const Result& result) {
    if (result.IsSuccess()) {
        auto friends = result.GetFriends();
        // 处理好友列表
    }
});
              </code></pre>
            </div>
          </div>

          <div class="implementation-card">
            <h3>成就系统</h3>
            <p>对接平台成就系统</p>
            <div class="code-block">
              <pre><code>
// 解锁成就
LIPass::Achievement::Unlock("ACHIEVEMENT_ID", [](const Result& result) {
    if (result.IsSuccess()) {
        // 成就解锁成功
    }
});
              </code></pre>
            </div>
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
  name: 'Integration',
  components: {
    AccountMain
  }
})
</script>

<style lang="scss" scoped>
.integration-guide {
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

  .feature-implementation {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    margin-top: 20px;

    .implementation-card {
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
        margin-bottom: 16px;
        line-height: 1.5;
      }

      .code-block {
        background: #2d2d2d;
        border-radius: 6px;
        padding: 16px;
        margin-top: 12px;

        pre {
          margin: 0;
          code {
            color: #ffffff;
            font-family: 'Courier New', Courier, monospace;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .integration-guide {
    padding: 16px;

    .feature-implementation {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
}
</style> 
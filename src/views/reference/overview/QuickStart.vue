<template>
  <ReferenceMain>
    <div class="overview-quick-start">
      <h1>快速开始</h1>
      
      <section>
        <h2>前置条件</h2>
        <ul>
          <li>已注册开发者账号</li>
          <li>已创建应用并获取 AppID</li>
          <li>已下载对应平台的 SDK</li>
        </ul>
      </section>

      <section>
        <h2>集成步骤</h2>
        <ol>
          <li>
            <h3>1. 安装 SDK</h3>
            <p>选择您的开发平台，按照对应的安装指南进行安装：</p>
            <ul>
              <li>Unity SDK</li>
              <li>Unreal SDK</li>
              <li>Web SDK</li>
            </ul>
          </li>
          <li>
            <h3>2. 初始化</h3>
            <p>在应用启动时进行 SDK 初始化：</p>
            <pre><code>SDK.initialize(appId, appSecret);</code></pre>
          </li>
          <li>
            <h3>3. 功能调用</h3>
            <p>根据需要调用相应的功能接口：</p>
            <ul>
              <li>账号系统</li>
              <li>社交功能</li>
              <li>数据分析</li>
            </ul>
          </li>
        </ol>
      </section>

      <section>
        <h2>下一步</h2>
        <p>查看详细的API文档和最佳实践指南，了解更多功能的使用方法。</p>
      </section>
    </div>
  </ReferenceMain>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ReferenceMain from '../ReferenceMain.vue'

export default defineComponent({
  name: 'OverviewQuickStart',
  components: {
    ReferenceMain
  }
})
</script>

<style lang="scss" scoped>
.overview-quick-start {
  padding: 20px;

  h1 {
    font-size: 2em;
    margin-bottom: 1em;
    color: #2c3e50;
  }

  section {
    margin-bottom: 2em;

    h2 {
      font-size: 1.5em;
      color: #34495e;
      margin-bottom: 1em;
    }

    h3 {
      font-size: 1.2em;
      color: #34495e;
      margin: 1em 0 0.5em;
    }

    p {
      line-height: 1.6;
      color: #666;
      margin-bottom: 1em;
    }

    ul, ol {
      padding-left: 1.5em;
      margin-bottom: 1em;
      
      li {
        margin: 0.5em 0;
        color: #666;
      }
    }

    pre {
      background: #f8f9fa;
      padding: 1em;
      border-radius: 4px;
      margin: 1em 0;
      
      code {
        font-family: 'Courier New', Courier, monospace;
        color: #e83e8c;
      }
    }
  }
}
</style> 
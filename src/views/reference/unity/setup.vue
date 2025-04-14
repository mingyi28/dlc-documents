<template>
  <ReferenceMain>
    <div class="unity-setup">
      <h1>Unity SDK 环境准备</h1>
      
      <section>
        <h2>系统要求</h2>
        <ul>
          <li>Unity 2019.4 或更高版本</li>
          <li>iOS 开发需要 Xcode 12.0 或更高版本</li>
          <li>Android 开发需要 Android Studio 4.0 或更高版本</li>
        </ul>
      </section>

      <section>
        <h2>安装步骤</h2>
        <ol>
          <li>
            <h3>1. 下载 SDK</h3>
            <p>从开发者中心下载最新版本的 Unity SDK 包。</p>
          </li>
          <li>
            <h3>2. 导入项目</h3>
            <p>在 Unity 编辑器中，选择 Assets > Import Package > Custom Package，选择下载的 SDK 包。</p>
          </li>
          <li>
            <h3>3. 配置设置</h3>
            <p>在 Project Settings 中配置必要的设置：</p>
            <pre><code>// 示例配置
{
  "appId": "your_app_id",
  "appSecret": "your_app_secret",
  "environment": "development"
}</code></pre>
          </li>
        </ol>
      </section>

      <section>
        <h2>平台特定配置</h2>
        <div class="platform-config">
          <h3>iOS 配置</h3>
          <ul>
            <li>添加必要的权限描述到 Info.plist</li>
            <li>配置 URL Schemes</li>
          </ul>

          <h3>Android 配置</h3>
          <ul>
            <li>配置 AndroidManifest.xml</li>
            <li>添加必要的权限</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>验证安装</h2>
        <p>运行以下代码验证 SDK 是否正确安装：</p>
        <pre><code>void Start() {
    SDK.Initialize();
    Debug.Log("SDK Version: " + SDK.GetVersion());
}</code></pre>
      </section>
    </div>
  </ReferenceMain>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ReferenceMain from '../ReferenceMain.vue'

export default defineComponent({
  name: 'UnitySetup',
  components: {
    ReferenceMain
  }
})
</script>

<style lang="scss" scoped>
.unity-setup {
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

  .platform-config {
    background: #f8f9fa;
    padding: 1.5em;
    border-radius: 4px;
    margin: 1em 0;

    h3 {
      color: #2c3e50;
      margin-top: 1em;
      
      &:first-child {
        margin-top: 0;
      }
    }
  }
}
</style> 
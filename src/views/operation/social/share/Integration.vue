<template>
  <OperationMain>
    <div class="share-integration">
      <h1>分享功能接入指南</h1>
      
      <section>
        <h2>SDK 集成</h2>
        <h3>安装依赖</h3>
        <pre><code>npm install @gamekit/share-sdk --save</code></pre>
        
        <h3>导入模块</h3>
        <pre><code>import { ShareSDK } from '@gamekit/share-sdk';</code></pre>
      </section>

      <section>
        <h2>基础配置</h2>
        <h3>初始化配置</h3>
        <pre><code>ShareSDK.initialize({
  debug: true, // 开启调试模式
  platforms: {
    wechat: {
      appId: 'your_wechat_appid',
      appSecret: 'your_wechat_secret',
      universal: true // 是否启用通用链接
    },
    qq: {
      appId: 'your_qq_appid',
      appKey: 'your_qq_appkey'
    }
  }
});</code></pre>
      </section>

      <section>
        <h2>功能实现</h2>
        <h3>1. 链接分享</h3>
        <pre><code>ShareSDK.shareLink({
  platform: 'wechat',
  scene: 'session', // session/timeline/favorite
  title: '分享标题',
  description: '分享描述',
  imageUrl: 'https://example.com/image.png',
  link: 'https://example.com/share'
});</code></pre>

        <h3>2. 图片分享</h3>
        <pre><code>ShareSDK.shareImage({
  platform: 'wechat',
  scene: 'timeline',
  image: 'base64_image_data', // 支持 base64 或图片 url
  title: '图片标题'
});</code></pre>

        <h3>3. 小程序分享</h3>
        <pre><code>ShareSDK.shareMiniProgram({
  platform: 'wechat',
  userName: 'gh_xxxxx', // 小程序原始 ID
  path: 'pages/index/index',
  title: '小程序标题',
  description: '小程序描述',
  imageUrl: 'https://example.com/image.png'
});</code></pre>
      </section>

      <section>
        <h2>回调处理</h2>
        <pre><code>ShareSDK.share({
  // ... 分享参数
}).then(result => {
  console.log('分享成功', result);
}).catch(error => {
  console.error('分享失败', error);
});</code></pre>
      </section>

      <section>
        <h2>高级功能</h2>
        <ul>
          <li>
            <h3>自定义分享面板</h3>
            <p>可以自定义分享面板的样式和布局</p>
          </li>
          <li>
            <h3>分享统计</h3>
            <p>集成分享数据统计功能</p>
          </li>
          <li>
            <h3>分享权限控制</h3>
            <p>根据用户等级限制分享功能</p>
          </li>
        </ul>
      </section>
    </div>
  </OperationMain>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OperationMain from '@/views/operation/OperationMain.vue'

export default defineComponent({
  name: 'ShareIntegration',
  components: {
    OperationMain
  }
})
</script>

<style lang="scss" scoped>
.share-integration {
  padding: 20px;

  h1 {
    font-size: 2em;
    color: #333;
    margin-bottom: 1em;
  }

  section {
    margin-bottom: 2em;

    h2 {
      font-size: 1.5em;
      color: #666;
      margin-bottom: 0.5em;
    }

    h3 {
      font-size: 1.2em;
      color: #666;
      margin: 1em 0 0.5em;
    }

    ul {
      list-style-type: disc;
      padding-left: 20px;

      li {
        margin: 0.5em 0;
        color: #666;

        h3 {
          margin: 0.5em 0 0.2em;
        }

        p {
          margin: 0.2em 0 0.5em;
        }
      }
    }

    p {
      line-height: 1.6;
      color: #666;
      margin-bottom: 1em;
    }

    pre {
      background: #f8f9fa;
      padding: 1em;
      border-radius: 4px;
      margin: 1em 0;
      overflow-x: auto;
      
      code {
        font-family: 'Courier New', Courier, monospace;
        color: #e83e8c;
      }
    }
  }
}
</style> 
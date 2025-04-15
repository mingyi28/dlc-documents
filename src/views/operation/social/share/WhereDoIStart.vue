<template>
    <OperationMain>
      <div class="share-start">
        <h1>从哪里开始</h1>
        <section>
          <h2>前置条件</h2>
          <ul>
            <li>已完成 SDK 初始化</li>
            <li>已获取相关平台的 AppID 和 AppSecret</li>
            <li>已在各分享平台完成应用注册</li>
          </ul>
        </section>
  
        <section>
          <h2>快速开始</h2>
          <ol>
            <li>
              <h3>1. 配置分享平台</h3>
              <p>在控制台中配置各个分享平台的参数：</p>
              <ul>
                <li>微信：AppID、AppSecret</li>
                <li>QQ：AppID、AppKey</li>
                <li>微博：AppKey、AppSecret</li>
              </ul>
            </li>
            <li>
              <h3>2. 初始化分享功能</h3>
              <p>在应用启动时初始化分享功能：</p>
              <pre><code>ShareSDK.initialize({
    wechat: {
      appId: 'your_wechat_appid',
      appSecret: 'your_wechat_secret'
    },
    qq: {
      appId: 'your_qq_appid',
      appKey: 'your_qq_appkey'
    }
  });</code></pre>
            </li>
            <li>
              <h3>3. 实现分享功能</h3>
              <p>调用分享接口实现内容分享：</p>
              <pre><code>ShareSDK.share({
    platform: 'wechat',
    type: 'link',
    title: '分享标题',
    description: '分享描述',
    imageUrl: 'share_image_url',
    link: 'share_link_url'
  });</code></pre>
            </li>
          </ol>
        </section>
  
        <section>
          <h2>下一步</h2>
          <ul>
            <li>查看详细的接入指南</li>
            <li>了解更多分享类型</li>
            <li>配置分享回调</li>
            <li>自定义分享样式</li>
          </ul>
        </section>
      </div>
    </OperationMain>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import OperationMain from '@/views/operation/OperationMain.vue'
  
  export default defineComponent({
    name: 'ShareWhereDoIStart',
    components: {
      OperationMain
    }
  })
  </script>
  
  <style lang="scss" scoped>
  .share-start {
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
  
      ul, ol {
        list-style-type: disc;
        padding-left: 20px;
  
        li {
          margin: 0.5em 0;
          color: #666;
  
          ul {
            margin-top: 0.5em;
            margin-bottom: 0.5em;
          }
        }
      }
  
      ol {
        list-style-type: decimal;
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
        
        code {
          font-family: 'Courier New', Courier, monospace;
          color: #e83e8c;
        }
      }
    }
  }
  </style> 
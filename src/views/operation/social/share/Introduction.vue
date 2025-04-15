<template>
  <OperationMain>
    <div class="share-introduction">
      <h1>分享功能介绍</h1>
      <section>
        <h2>功能概述</h2>
        <p>分享功能允许玩家将游戏内容、成就和精彩时刻分享到各种社交平台。支持主流社交媒体平台的分享功能，包括微信、QQ、微博等。</p>
      </section>

      <section>
        <h2>主要特性</h2>
        <ul>
          <li>支持多平台分享</li>
          <li>自定义分享内容和样式</li>
          <li>分享数据统计和分析</li>
          <li>分享激励机制</li>
        </ul>
      </section>

      <section>
        <h2>应用场景</h2>
        <ul>
          <li>游戏成就分享</li>
          <li>游戏邀请好友</li>
          <li>活动分享传播</li>
          <li>游戏内容营销</li>
        </ul>
      </section>
    </div>
  </OperationMain>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OperationMain from '@/views/operation/OperationMain.vue'

export default defineComponent({
  name: 'ShareIntroduction',
  components: {
    OperationMain
  }
})
</script>

<style lang="scss" scoped>
.share-introduction {
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

    ul {
      list-style-type: disc;
      padding-left: 20px;

      li {
        margin: 0.5em 0;
        color: #666;
      }
    }

    p {
      line-height: 1.6;
      color: #666;
    }
  }
}
</style> 
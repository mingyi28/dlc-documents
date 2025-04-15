<template>
  <OperationMain>
    <div class="friends-introduction">
      <h1>好友系统介绍</h1>
      <section>
        <h2>功能概述</h2>
        <p>好友系统为游戏提供完整的社交关系管理功能，包括好友添加、删除、查找、分组等核心功能，以及在线状态、游戏状态等辅助功能。</p>
      </section>

      <section>
        <h2>主要特性</h2>
        <ul>
          <li>好友关系管理
            <ul>
              <li>添加/删除好友</li>
              <li>好友分组管理</li>
              <li>好友查找</li>
              <li>好友推荐</li>
            </ul>
          </li>
          <li>社交互动
            <ul>
              <li>好友在线状态</li>
              <li>游戏状态同步</li>
              <li>即时通讯</li>
              <li>组队邀请</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>应用场景</h2>
        <ul>
          <li>多人游戏组队</li>
          <li>社交游戏互动</li>
          <li>好友排行榜</li>
          <li>好友助力活动</li>
        </ul>
      </section>
    </div>
  </OperationMain>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OperationMain from '@/views/operation/OperationMain.vue'

export default defineComponent({
  name: 'FriendsIntroduction',
  components: {
    OperationMain
  }
})
</script>

<style lang="scss" scoped>
.friends-introduction {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;

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

        ul {
          margin-top: 0.5em;
          margin-bottom: 1em;
        }
      }
    }

    p {
      line-height: 1.6;
      color: #666;
    }
  }
}
</style> 
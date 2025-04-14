<template>
  <OperationMain>
    <div class="player-engagement">
      <h1>玩家参与系统</h1>
      <section class="features">
        <h2>功能特点</h2>
        <ul>
          <li v-for="feature in features" :key="feature.title">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </li>
        </ul>
      </section>
    </div>
  </OperationMain>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OperationMain from './OperationMain.vue'

export default defineComponent({
  name: 'PlayerEngagementView',
  components: {
    OperationMain
  },
  data() {
    return {
      features: [
        {
          title: '成就系统',
          description: '支持自定义成就设置、进度追踪、奖励发放，以及成就排行榜等功能'
        },
        {
          title: '排行榜系统',
          description: '支持多维度排行榜、实时更新、历史记录查询，以及排行榜奖励等功能'
        },
        {
          title: '任务系统',
          description: '支持日常任务、周期任务、成就任务等多种任务类型，支持自定义任务奖励'
        },
        {
          title: '活动系统',
          description: '支持多样化的活动模板、活动数据统计、奖励发放等功能'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.player-engagement {
  section {
    margin-bottom: 40px;
    background: #f5f5f5;
    padding: 20px;
    border-radius: 8px;

    h1, h2 {
      margin-bottom: 20px;
      color: #333;
    }

    p {
      line-height: 1.6;
      color: #666;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: 10px 0;
        border-bottom: 1px solid #ddd;
        color: #444;

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .player-engagement {
    section {
      padding: 15px;
      margin-bottom: 20px;
    }
  }
}
</style> 
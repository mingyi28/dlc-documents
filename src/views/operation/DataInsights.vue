<template>
  <OperationMain>
    <div class="data-insights">
      <h1>数据洞察系统</h1>
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
  name: 'DataInsightsView',
  components: {
    OperationMain
  },
  data() {
    return {
      features: [
        {
          title: '玩家行为分析',
          description: '深入分析玩家行为数据，包括游戏时长、活跃度、付费习惯等多维度分析'
        },
        {
          title: '游戏数据统计',
          description: '提供游戏核心指标统计，包括DAU、MAU、留存率、转化率等关键数据'
        },
        {
          title: '经济系统分析',
          description: '分析游戏经济系统的健康度，包括虚拟货币流向、道具使用情况等'
        },
        {
          title: '自定义报表',
          description: '支持自定义数据维度，生成个性化报表，支持数据导出和定时推送'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.data-insights {
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
  .data-insights {
    section {
      padding: 15px;
      margin-bottom: 20px;
    }
  }
}
</style> 
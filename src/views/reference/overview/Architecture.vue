<template>
  <ReferenceMain>
    <div class="overview-architecture">
      <h1>架构说明</h1>
      
      <section>
        <h2>系统架构</h2>
        <p>我们的服务架构采用分布式微服务设计，主要包含以下几个核心部分：</p>
        <ul>
          <li>
            <h3>客户端 SDK</h3>
            <p>提供多平台支持（Unity、Unreal、Web），封装了所有与服务端的通信逻辑。</p>
          </li>
          <li>
            <h3>API 网关</h3>
            <p>统一的接入层，负责请求的路由、认证、限流等基础功能。</p>
          </li>
          <li>
            <h3>业务服务</h3>
            <p>包含账号、社交、数据分析等核心业务模块。</p>
          </li>
          <li>
            <h3>数据存储</h3>
            <p>采用多种数据库技术，针对不同场景优化存储方案。</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>数据流</h2>
        <div class="flow-diagram">
          <p>客户端请求流程：</p>
          <pre><code>Client SDK -> API Gateway -> Load Balancer -> Service Instances -> Cache/Database</code></pre>
        </div>
      </section>

      <section>
        <h2>安全架构</h2>
        <ul>
          <li>全链路 HTTPS 加密</li>
          <li>多层认证机制</li>
          <li>数据加密存储</li>
          <li>防护措施：
            <ul>
              <li>DDoS 防护</li>
              <li>WAF 防火墙</li>
              <li>入侵检测</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>扩展性</h2>
        <p>系统设计考虑了以下扩展性要素：</p>
        <ul>
          <li>服务水平扩展</li>
          <li>数据分片策略</li>
          <li>多区域部署</li>
          <li>容灾备份</li>
        </ul>
      </section>
    </div>
  </ReferenceMain>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ReferenceMain from '../ReferenceMain.vue'

export default defineComponent({
  name: 'OverviewArchitecture',
  components: {
    ReferenceMain
  }
})
</script>

<style lang="scss" scoped>
.overview-architecture {
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

    ul {
      padding-left: 1.5em;
      margin-bottom: 1em;
      
      li {
        margin: 0.5em 0;
        color: #666;

        ul {
          margin-top: 0.5em;
        }
      }
    }
  }

  .flow-diagram {
    background: #f8f9fa;
    padding: 1.5em;
    border-radius: 4px;
    margin: 1em 0;

    pre {
      margin-top: 1em;
      padding: 1em;
      background: #fff;
      border-radius: 4px;
      
      code {
        font-family: 'Courier New', Courier, monospace;
        color: #e83e8c;
      }
    }
  }
}
</style> 
<template>
  <AccountMain>
    <div class="li-pass">
      <h1>LI Pass 账号方案</h1>
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
  </AccountMain>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AccountMain from './AccountMain.vue'

export default defineComponent({
  name: 'LiPassView',
  components: {
    AccountMain
  },
  data() {
    return {
      features: [
        {
          title: '多种登录方式',
          description: '支持 guest 登录、第三方渠道登录、lip 邮箱登录等多种登录方式'
        },
        {
          title: '账号绑定',
          description: '支持多平台账号绑定，确保用户数据安全'
        },
        {
          title: '合规性',
          description: '符合各地区数据安全和隐私保护要求'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.li-pass {
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
  .li-pass {
    section {
      padding: 15px;
      margin-bottom: 20px;
    }
  }
}
</style> 
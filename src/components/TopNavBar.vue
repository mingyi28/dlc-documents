<template>
  <nav class="top-navbar">
    <div class="left-section">
      <div class="logo-container">
        <router-link to="/">
          <img src="/assets/logo.png" alt="Logo" class="logo" />
        </router-link>
      </div>
      <ul class="nav-menu">
        <li>
          <router-link to="/overview" :class="{ active: route.path.startsWith('/overview') }">
            Overview
          </router-link>
        </li>
        <li>
          <router-link to="/account-solution" :class="{ active: route.path.startsWith('/account-solution') }">
            Account Solution
          </router-link>
        </li>
        <li>
          <router-link to="/" :class="{ active: route.path === '/' || route.path.startsWith('/docs') }">
            Docs
          </router-link>
        </li>
        <li>
          <router-link to="/news" :class="{ active: route.path.startsWith('/news') }">
            News
          </router-link>
        </li>
      </ul>
    </div>
    <div class="right-section">
      <input 
        type="text" 
        v-model="searchQuery" 
        class="search-input" 
        placeholder="搜索..."
        @input="handleSearch"
      >
      <select v-model="currentLanguage" class="language-select" @change="handleLanguageChange">
        <option v-for="lang in languages" :key="lang.value" :value="lang.value">
          {{ lang.label }}
        </option>
      </select>
      <a 
        href="https://console.playernetwork.intlgame.com/" 
        target="_blank" 
        class="console-link"
      >
        PNT Console
      </a>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'TopNavBar',
  setup() {
    const route = useRoute()
    return { route }
  },
  data() {
    return {
      currentLanguage: 'zh',
      searchQuery: '',
      languages: [
        { value: 'zh', label: '中文' },
        { value: 'en', label: 'English' }
      ]
    }
  },
  methods: {
    handleSearch() {
      console.log('Searching:', this.searchQuery)
    },
    handleLanguageChange() {
      // 这里添加语言切换的逻辑
      console.log('Language changed to:', this.currentLanguage)
    }
  }
})
</script>

<style lang="scss" scoped>
.top-navbar {
  background: #fff;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1100;

  .left-section {
    display: flex;
    align-items: center;

    .logo-container {
      margin-right: 40px;
      
      .logo {
        height: 40px;
        width: auto;
      }
    }

    .nav-menu {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 30px;

      li {
        a {
          color: #333;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          padding: 8px 0;
          position: relative;

          &.active {
            color: #007bff;

            &:after {
              content: '';
              position: absolute;
              bottom: -2px;
              left: 0;
              width: 100%;
              height: 2px;
              background: #007bff;
            }
          }

          &:hover {
            color: #007bff;
          }
        }
      }
    }
  }

  .right-section {
    display: flex;
    align-items: center;
    gap: 15px;

    .search-input {
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      width: 200px;

      &:focus {
        outline: none;
        border-color: #007bff;
      }
    }

    .language-select {
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      background: #fff;
      cursor: pointer;

      &:focus {
        outline: none;
        border-color: #007bff;
      }
    }

    .console-link {
      padding: 8px 16px;
      background: #007bff;
      color: #fff;
      text-decoration: none;
      border-radius: 4px;
      font-size: 14px;
      transition: background-color 0.2s;

      &:hover {
        background: #0056b3;
      }
    }
  }
}

@media (max-width: 768px) {
  .top-navbar {
    padding: 10px;
    flex-direction: column;
    height: auto;
    gap: 10px;

    .left-section {
      flex-direction: column;
      width: 100%;

      .logo-container {
        margin-right: 0;
        margin-bottom: 10px;
      }

      .nav-menu {
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
      }
    }

    .right-section {
      width: 100%;
      flex-direction: column;

      .search-input,
      .language-select,
      .console-link {
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
}
</style> 
<template>
  <nav class="navbar">
    <div class="breadcrumb">
      <template v-if="route.path === '/'">Documentation</template>
      <template v-else>
        <span>Documentation</span>
        <template v-if="breadcrumbInfo.section">
          <span> / {{ breadcrumbInfo.section }}</span>
          <template v-if="breadcrumbInfo.subsection">
            <span> / {{ breadcrumbInfo.subsection }}</span>
          </template>
        </template>
        <template v-else-if="route.path.startsWith('/account/')">
          <span>Documentation</span>
          <template v-if="route.path.startsWith('/account/mobile/')">
            <span> / LIPass账号系统 / 移动端账号方案</span>
          </template>
          <template v-else-if="route.path.startsWith('/account/pc/')">
            <span> / LIPass账号系统 / PC端账号方案</span>
          </template>
          <template v-else-if="route.path.startsWith('/account/console/')">
            <span> / LIPass账号系统 / 主机端账号方案</span>
          </template>
          <template v-else-if="route.path.startsWith('/account/native-general/')">
            <span> / 原生账号接入方案 / 原生账号方案</span>
          </template>
          <template v-else-if="route.path.startsWith('/account/native-selfaccount/')">
            <span> / 原生账号接入方案 / 自建账号方案</span>
          </template>
          <template v-else-if="route.path === '/account/li-pass'">
            <span> / LIPass账号系统</span>
          </template>
          <template v-else-if="route.path === '/account/native-account'">
            <span> / 原生账号接入方案</span>
          </template>
        </template>
        <template v-else-if="route.path.startsWith('/operation/')">
          <span> / 运营工具</span>
          <template v-if="route.path.includes('/social/')">
            <span> / 社交</span>
          </template>
          <template v-else-if="route.path.includes('/player-engagement/')">
            <span> / 玩家参与</span>
          </template>
          <template v-else-if="route.path.includes('/data-insights/')">
            <span> / 数据洞察</span>
          </template>
          <template v-else-if="route.path.includes('/development/')">
            <span> / 开发工具</span>
          </template>
        </template>
        <template v-else-if="route.path.startsWith('/reference/')">
          <span> / Reference</span>
        </template>
        <template v-else-if="route.path.startsWith('/docs/sample')">
          <span> / Sample</span>
        </template>
      </template>
    </div>
    <div class="nav-content">
      <ul class="nav-list">
        <li v-for="item in navigation" :key="item.title">
          <router-link :to="item.link" :class="{ active: isActive(item.link) }">
            {{ item.title }}
          </router-link>
          <ul v-if="item.children" class="submenu">
            <li v-for="child in item.children" :key="child.title">
              <router-link :to="child.link">{{ child.title }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

interface BreadcrumbDetail {
  section: string;
  subsection: string;
}

declare global {
  interface WindowEventMap {
    'updateBreadcrumb': CustomEvent<BreadcrumbDetail>;
  }
}

export default defineComponent({
  name: 'NavBar',
  setup() {
    const route = useRoute()
    return { route }
  },
  data() {
    return {
      breadcrumbInfo: {
        section: '',
        subsection: ''
      },
      navigation: [
        {
          title: '概述',
          link: '/',
        },
        {
          title: '账号方案',
          link: '/account-main',
          children: [
            { title: 'LI Pass 账号方案', link: '/account/li-pass' },
            { title: '原生账号接入方案', link: '/account/native-general/Overview' }
          ]
        },
        {
          title: '运营工具',
          link: '/operation-main',
          children: [
            { title: '社交', link: '/operation/social' },
            { title: '玩家参与', link: '/operation/player-engagement' },
            { title: '数据洞察', link: '/operation/data-insights' },
            { title: '实用工具', link: '/operation/common-tools' }
          ]
        },
        {
          title: 'Reference',
          link: '/reference/reference'
        },
        {
          title: 'PNTConsole',
          link: '/pntconsole'
        },
        {
          title: 'Sample',
          link: '/docs/sample'
        }
      ]
    }
  },
  methods: {
    handleBreadcrumbUpdate(event: CustomEvent<BreadcrumbDetail>) {
      this.breadcrumbInfo = event.detail;
    },
    isActive(link: string): boolean {
      if (link === '/') {
        return this.route.path === '/'
      }

      if (link === '/account-main') {
        return this.route.path.startsWith('/account')
      }

      if (link === '/operation-main') {
        return this.route.path.startsWith('/operation')
      }

      if (link === '/reference/reference') {
        return this.route.path.startsWith('/reference')
      }

      if (link === '/pntconsole') {
        return this.route.path.startsWith('/pntconsole')
      }

      if (link === '/docs/sample') {
        return this.route.path.startsWith('/docs/sample')
      }

      return this.route.path.startsWith(link)
    }
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  z-index: 1000;

  .breadcrumb {
    font-size: 20px;
    color: #007bff;
    margin: 0px 20px;
    padding: 5px 5px;
    margin-bottom: 5px;

    span {
      &:not(:last-child) {
        color: #007bff;
      }
    }
  }

  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0px 5px;
    margin-bottom: -5px;
  }

  .nav-list {
    display: flex;
    list-style: none;
    flex-grow: 1;

    > li {
      position: relative;
      padding: 0 15px;

      > a {
        color: #333;
        text-decoration: none;
        display: inline-block;
        position: relative;

        &.active {
          color: #007bff;

          &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: #007bff;
          }
        }
      }

      .submenu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        padding: 10px 0;
        min-width: 200px;

        li {
          list-style: none;

          a {
            color: #333;
            text-decoration: none;
            padding: 8px 20px;
            display: block;

            &:hover {
              background: #f5f5f5;
            }

            &.active {
              color: #007bff;
              &:after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background: #007bff;
              }
            }
          }
        }
      }

      &:hover .submenu {
        display: block;
      }
    }
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 10px;

    .nav-content {
      flex-direction: column;
      align-items: flex-start;
    }

    .nav-list {
      flex-direction: column;
      width: 100%;

      > li {
        padding: 10px 0;

        .submenu {
          position: static;
          box-shadow: none;
          padding-left: 20px;
        }
      }
    }
  }
}

.category-section ul li {
  padding-left: 0;
  border-bottom: 1px solid #eee;
}

.category-section ul li:last-child {
  border-bottom: none;
}
</style> 
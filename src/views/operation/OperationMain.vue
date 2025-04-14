<template>
  <div class="operation-main-page">
    <SideNavBar :categories="categories" />
    <div class="operation-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideNavBar from '@/components/SideNavBar.vue'

interface MenuItem {
  text: string;
  link?: string;
  expanded?: boolean;
  children?: Array<{
    text: string;
    link: string;
  }>;
}

interface Category {
  title: string;
  items: MenuItem[];
}

export default defineComponent({
  name: 'operationMain',
  components: {
    SideNavBar
  },
  data() {
    return {
      categories: [
        {
          title: '社交',
          items: [
            {
              text: '分享',
              expanded: false,
              children: [
                { text: '介绍', link: '/operation/social/share/introduction' },
                { text: '从哪里开始', link: '/operation/social/share/where-do-i-start' },
                { text: '接入指南', link: '/operation/social/share/integration' },
                { text: '最佳实践', link: '/operation/social/share/best-practices' },
                { text: '案例研究', link: '/operation/social/share/case-studies' }
              ]
            },
            {
              text: '好友列表',
              expanded: false,
              children: [
                { text: '介绍', link: '/operation/social/friends/introduction' },
                { text: '从哪里开始', link: '/operation/social/friends/where-do-i-start' },
                { text: '接入指南', link: '/operation/social/friends/integration' },
                { text: '最佳实践', link: '/operation/social/friends/best-practices' },
                { text: '案例研究', link: '/operation/social/friends/case-studies' }
              ]
            }
          ]
        },
        {
          title: '玩家参与',
          items: [
            {
              text: '公告',
              expanded: false,
              children: [
                { text: '介绍', link: '/operation/player-engagement/announcement/introduction' },
                { text: '从哪里开始', link: '/operation/player-engagement/announcement/where-do-i-start' },
                { text: '接入指南', link: '/operation/player-engagement/announcement/integration' },
                { text: '最佳实践', link: '/operation/player-engagement/announcement/best-practices' },
                { text: '案例研究', link: '/operation/player-engagement/announcement/case-studies' }
              ]
            },
            {
              text: '推送',
              expanded: false,
              children: [
                { text: '介绍', link: '/operation/player-engagement/push/introduction' },
                { text: '从哪里开始', link: '/operation/player-engagement/push/where-do-i-start' },
                { text: '接入指南', link: '/operation/player-engagement/push/integration' },
                { text: '最佳实践', link: '/operation/player-engagement/push/best-practices' },
                { text: '案例研究', link: '/operation/player-engagement/push/case-studies' }
              ]
            }
          ]
        },
        {
          title: '数据洞察',
          items: [
            {
              text: 'UA 数据上报',
              expanded: false,
              children: [
                { text: '介绍', link: '/operation/data-insights/ua/introduction' },
                { text: '从哪里开始', link: '/operation/data-insights/ua/where-do-i-start' },
                { text: '接入指南', link: '/operation/data-insights/ua/integration' },
                { text: '最佳实践', link: '/operation/data-insights/ua/best-practices' },
                { text: '案例研究', link: '/operation/data-insights/ua/case-studies' }
              ]
            },
            {
              text: '游戏数据埋点',
              expanded: false,
              children: [
                { text: '介绍', link: '/operation/data-insights/tracking/introduction' },
                { text: '从哪里开始', link: '/operation/data-insights/tracking/where-do-i-start' },
                { text: '接入指南', link: '/operation/data-insights/tracking/integration' },
                { text: '最佳实践', link: '/operation/data-insights/tracking/best-practices' },
                { text: '案例研究', link: '/operation/data-insights/tracking/case-studies' }
              ]
            }
          ]
        },
        {
          title: '工具',
          items: [
            {
              text: 'deeplink',
              expanded: false,
              children: [
                { text: '介绍', link: '/operation/development/deeplink/introduction' },
                { text: '从哪里开始', link: '/operation/development/deeplink/where-do-i-start' },
                { text: '接入指南', link: '/operation/development/deeplink/integration' },
                { text: '最佳实践', link: '/operation/development/deeplink/best-practices' },
                { text: '案例研究', link: '/operation/development/deeplink/case-studies' }
              ]
            },
            {
              text: 'webview',
              expanded: false,
              children: [
                { text: '介绍', link: '/operation/development/webview/introduction' },
                { text: '从哪里开始', link: '/operation/development/webview/where-do-i-start' },
                { text: '接入指南', link: '/operation/development/webview/integration' },
                { text: '最佳实践', link: '/operation/development/webview/best-practices' },
                { text: '案例研究', link: '/operation/development/webview/case-studies' }
              ]
            },
            {
              text: 'Configoperation',
              expanded: false,
              children: [
                { text: '介绍', link: '/operation/development/config/introduction' },
                { text: '从哪里开始', link: '/operation/development/config/where-do-i-start' },
                { text: '接入指南', link: '/operation/development/config/integration' },
                { text: '最佳实践', link: '/operation/development/config/best-practices' },
                { text: '案例研究', link: '/operation/development/config/case-studies' }
              ]
            }
          ]
        }
      ] as Category[]
    }
  },
  watch: {
    '$route': {
      handler(to) {
        const currentPath = to.path
        
        this.categories.forEach(category => {
          category.items.forEach(item => {
            if (item.children && item.children.length > 0) {
              const basePath = item.children[0].link.split('/').slice(0, -1).join('/')
              item.expanded = currentPath.startsWith(basePath)
            }
          })
        })
      },
      immediate: true
    }
  }
})
</script>

<style lang="scss" scoped>
.operation-main-page {
  display: flex;
  min-height: 100vh;
  padding-left: 10%;
}

.operation-content {
  flex-grow: 1;
  max-width: calc(100% - 200px);
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .operation-content {
    padding: 10px;
  }
}
</style> 
<template>
  <div class="account-main-page">
    <SideNavBar :categories="categories" />
    <div class="account-content">
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
  name: 'AccountMain',
  components: {
    SideNavBar
  },
  data() {
    return {
      categories: [
        {
          title: 'LI Pass 账号方案',
          items: [
            {
              text: '移动端账号方案',
              expanded: false,
              children: [
                { text: '介绍', link: '/account/mobile/introduction' },
                { text: '从哪里开始', link: '/account/mobile/WhereDoIStart' },
                { text: 'Unity集成', link: '/account/mobile/unity' },
                { text: 'Unreal集成', link: '/account/mobile/Unreal' },
                { text: 'web集成', link: '/account/mobile/Unreal' },
                { text: '案例研究', link: '/account/mobile/case-studies' },
                {
                  text: '其他功能接入',
                  detailsExpanded: false,
                  details: [
                    { text: '个人中心接入', link: '/account/mobile/Unreal' },
                    { text: '礼包接入', link: '/account/mobile/Unreal' },
                    { text: '安全接入', link: '/account/mobile/Unreal' },
                    { text: '合规配置', link: '/account/mobile/Unreal' },
                    { text: '自定义UI/UX', link: '/account/mobile/case-studies' }
                  ]
                },
              ]
            },
            {
              text: 'PC端账号方案',
              expanded: false,
              children: [
                { text: '概述', link: '/account/pc/Overview' },
                { text: '设置指南', link: '/account/pc/SetupGuide' },
                { text: '集成方式', link: '/account/pc/Integration' },
                { text: '最佳实践', link: '/account/pc/BestPractices' },
                { text: '案例研究', link: '/account/pc/CaseStudies' }
              ]
            },
            {
              text: '主机端账号方案',
              expanded: false,
              children: [
                { text: '概述', link: '/account/console/overview' },
                { text: '设置指南', link: '/account/console/setup-guide' },
                { text: '集成方式', link: '/account/console/integration' },
                { text: '最佳实践', link: '/account/console/best-practices' },
                { text: '案例研究', link: '/account/console/case-studies' }
              ]
            }
          ]
        },
        {
          title: '原生账号接入方案',
          items: [
            {
              text: '原生账号方案',
              expanded: false,
              children: [
                { text: '介绍', link: '/account/native-general/introduction' },
                { text: '从哪里开始', link: '/account/native-general/where-do-i-start' },
                { text: 'Unity集成', link: '/account/native-general/unity' },
                { text: 'Unreal集成', link: '/account/native-general/Unreal' },
                { text: '案例研究', link: '/account/native-general/case-studies' }
              ]
            },
            {
              text: '自建账号账号方案',
              expanded: false,
              children: [
                { text: '介绍', link: '/account/native-selfaccount/introduction' },
                { text: '从哪里开始', link: '/account/native-selfaccount/where-do-i-start' },
                { text: 'Unity集成', link: '/account/native-selfaccount/unity' },
                { text: 'Unreal集成', link: '/account/native-selfaccount/Unreal' },
                { text: '案例研究', link: '/account/native-selfaccount/case-studies' }
              ]
            },
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
            if ('children' in item) {
              if (currentPath.includes('/account/mobile/') && item.text === '移动端账号方案') {
                item.expanded = true
              } else if (currentPath.includes('/account/pc/') && item.text === 'PC端账号方案') {
                item.expanded = true
              } else if (currentPath.includes('/account/console/') && item.text === '主机端账号方案') {
                item.expanded = true
              } else if (currentPath.includes('/account/native-general/') && item.text === '原生账号方案') {
                item.expanded = true
              } else if (currentPath.includes('/account/native-selfaccount/') && item.text === '自建账号账号方案') {
                item.expanded = true
              } else {
                item.expanded = false
              }
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
.account-main-page {
  display: flex;
  min-height: 100vh;
  padding-left: 10%;
}

.account-content {
  flex-grow: 1;
  max-width: calc(100% - 200px);
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .account-content {
    padding: 10px;
  }
}
</style>
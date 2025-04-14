<template>
  <div class="reference-main-page">
    <SideNavBar :categories="categories" />
    <div class="reference-content">
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
  name: 'ReferenceMain',
  components: {
    SideNavBar
  },
  data() {
    return {
      categories: [
        {
          title: 'API 参考文档',
          items: [
            {
              text: 'Overview',
              expanded: false,
              children: [
                { text: '介绍', link: '/reference/overview/introduction' },
                { text: '快速开始', link: '/reference/overview/quick-start' },
                { text: '架构说明', link: '/reference/overview/architecture' },
                { text: '最佳实践', link: '/reference/overview/best-practices' },
                { text: '常见问题', link: '/reference/overview/faq' }
              ]
            },
            {
              text: 'Unity SDK',
              expanded: false,
              children: [
                { text: '介绍', link: '/reference/unity/introduction' },
                { text: '环境准备', link: '/reference/unity/setup' },
                { text: 'API文档', link: '/reference/unity/api' },
                { text: '示例代码', link: '/reference/unity/samples' },
                { text: '版本记录', link: '/reference/unity/changelog' }
              ]
            },
            {
              text: 'Unreal SDK',
              expanded: false,
              children: [
                { text: '介绍', link: '/reference/unreal/introduction' },
                { text: '环境准备', link: '/reference/unreal/setup' },
                { text: 'API文档', link: '/reference/unreal/api' },
                { text: '示例代码', link: '/reference/unreal/samples' },
                { text: '版本记录', link: '/reference/unreal/changelog' }
              ]
            },
            {
              text: 'HTTP API',
              expanded: false,
              children: [
                { text: '介绍', link: '/reference/http/introduction' },
                { text: '认证授权', link: '/reference/http/authentication' },
                { text: 'API列表', link: '/reference/http/api-list' },
                { text: '错误码', link: '/reference/http/error-codes' },
                { text: '示例', link: '/reference/http/examples' }
              ]
            },
            {
              text: 'Web SDK',
              expanded: false,
              children: [
                { text: '介绍', link: '/reference/web/introduction' },
                { text: '安装配置', link: '/reference/web/setup' },
                { text: 'API文档', link: '/reference/web/api' },
                { text: '示例代码', link: '/reference/web/samples' },
                { text: '版本记录', link: '/reference/web/changelog' }
              ]
            },
            {
              text: 'Others',
              expanded: false,
              children: [
                { text: '数据结构', link: '/reference/others/data-structures' },
                { text: '安全说明', link: '/reference/others/security' },
                { text: '限流规则', link: '/reference/others/rate-limits' },
                { text: '更新日志', link: '/reference/others/changelog' },
                { text: '术语表', link: '/reference/others/glossary' }
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
            if ('children' in item && item.children && item.children.length > 0) {
              const baseRoute = item.children[0].link.split('/').slice(0, 3).join('/')
              if (currentPath.includes(baseRoute)) {
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
.reference-main-page {
  display: flex;
  min-height: 100vh;
  padding-left: 10%;
}

.reference-content {
  flex-grow: 1;
  max-width: calc(100% - 200px);
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .reference-content {
    padding: 10px;
  }
}
</style> 
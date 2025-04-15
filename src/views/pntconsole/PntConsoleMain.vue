<template>
  <div class="pnt-console-main">
    <SideNavBar :categories="categories" />
    <div class="main-content">
      <slot name="content">
        <h1>PNT Console</h1>
        <div class="content">
          <p>Welcome to PNT Console</p>
        </div>
      </slot>
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
  name: 'PntConsoleMain',
  components: {
    SideNavBar
  },
  data() {
    return {
      categories: [
        {
          title: 'PNT Console',
          items: [
            {
              text: '入门介绍',
              link: '/pntconsole/Introduction'
            },
            {
              text: '注册项目并获取sdk配置',
              link: '/pntconsole/RegisterAndConfig'
            },
            {
              text: '下载资源',
              link: '/pntconsole/Downloads'
            },
            {
              text: '账号配置',
              expanded: false,
              children: [
                { text: 'LIPass配置', link: '/pntconsole/account/LipassConfig' },
                { text: '第三方配置', link: '/pntconsole/account/ThirdPartyConfig' },
                { text: '游客配置', link: '/pntconsole/account/GuestConfig' },
                { text: '发布配置', link: '/pntconsole/account/PublishConfig' }
              ]
            },
            {
              text: '账号操作',
              link: '/pntconsole/AccountOperations'
            },
            {
              text: '公告配置',
              link: '/pntconsole/Announcements'
            },
            {
              text: 'Dashboard',
              link: '/pntconsole/Dashboard'
            },
            {
              text: '其他主题',
              expanded: false,
              children: [
                { text: '申请账号', link: '/pntconsole/others/ApplyAccount' },
                { text: '角色与权限', link: '/pntconsole/others/RolesAndPermissions' },
                { text: '个人中心', link: '/pntconsole/others/UserProfile' }
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

<style scoped>
.pnt-console-main {
  display: flex;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
  margin-left: 240px; /* SideNavBar 的宽度 */
}

.content {
  margin-top: 20px;
}
</style> 
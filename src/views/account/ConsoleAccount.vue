<template>
  <div class="console-account-page">
    <SideNavBar :navItems="sideNavItems" />
    <div class="console-account-content">
      <h1>主机端账号方案</h1>
      <p>这里是主机端账号方案的详细信息。</p>
      <p>更多内容即将到来...</p>
    </div>
  </div>
</template>

<script>
import SideNavBar from '@/components/SideNavBar.vue';

export default {
  name: 'ConsoleAccount',
  components: {
    SideNavBar
  },
  data() {
    return {
        sideNavItems: [
      {
        text: '移动端账号方案',
        link: '/mobile-account',
        expanded: false, // Set to true if you want it expanded by default
        children: [
          { text: 'Introduction', link: '/mobile/introduction' },
          { text: 'Where do I start?', link: '/mobile/where-do-i-start' },
          { text: 'Unity', link: '/mobile/unity' },
          { text: 'Unreal', link: '/mobile/unreal' },
          { text: 'Case Studies', link: '/mobile/case-studies' }
        ]
      },
      {
        text: 'PC端账号方案',
        link: '/pc-account',
        expanded: false,
        children: [
          { text: 'Overview', link: '/pc/overview' },
          { text: 'Setup Guide', link: '/pc/setup-guide' },
          { text: 'Integration', link: '/pc/integration' },
          { text: 'Best Practices', link: '/pc/best-practices' },
          { text: 'Case Studies', link: '/pc/case-studies' }
        ]
      },
      {
        text: '主机端账号方案',
        link: '/pc-account',
        expanded: true,
        children: [
          { text: 'Overview', link: '/console/overview' },
          { text: 'Setup Guide', link: '/console/setup-guide' },
          { text: 'Integration', link: '/console/integration' },
          { text: 'Best Practices', link: '/console/best-practices' },
          { text: 'Case Studies', link: '/console/case-studies' }
        ]
      },
      ]
    };
  }
};
</script>

<style scoped>
.console-account-page {
  display: flex;
}
.console-account-content {
  flex-grow: 1;
  padding: 20px;
  margin-left: 200px; /* Ensure content is to the right of the sidebar */
}
</style> 
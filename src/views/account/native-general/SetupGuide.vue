<template>
  <div class="setup-guide-page">
    <SideNavBar :navItems="sideNavItems" />
    <div class="setup-guide-content">
      <h1>Setup Guide</h1>
      <p>This is the Setup Guide page content.</p>
    </div>
  </div>
</template>

<script>
import SideNavBar from '@/components/SideNavBar.vue';

export default {
  name: 'SetupGuide',
  components: {
    SideNavBar
  },
  data() {
    return {
      sideNavItems: [
        { text: '移动端账号方案', link: '/mobile-account' },
        {
          text: 'PC端账号方案',
          link: '/pc-account',
          expanded: true,
          children: [
            { text: 'Overview', link: '/pc/overview' },
            { text: 'Setup Guide', link: '/pc/setup-guide' },
            { text: 'Integration', link: '/pc/integration' },
            { text: 'Best Practices', link: '/pc/best-practices' },
            { text: 'Case Studies', link: '/pc/case-studies' }
          ]
        },
        { text: '主机端账号方案', link: '/console-account' }
      ]
    };
  }
};
</script>

<style scoped>
.setup-guide-page {
  display: flex;
}
.setup-guide-content {
  flex-grow: 1;
  padding: 20px;
  margin-left: 200px; /* Ensure content is to the right of the sidebar */
}
</style> 
<template>
  <div class="best-practices-page">
    <SideNavBar :navItems="sideNavItems" />
    <div class="best-practices-content">
      <h1>Best Practices</h1>
      <p>This is the Best Practices page content.</p>
    </div>
  </div>
</template>

<script>
import SideNavBar from '@/components/SideNavBar.vue';

export default {
  name: 'BestPractices',
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
.best-practices-page {
  display: flex;
}
.best-practices-content {
  flex-grow: 1;
  padding: 20px;
  margin-left: 200px; /* Ensure content is to the right of the sidebar */
}
</style> 
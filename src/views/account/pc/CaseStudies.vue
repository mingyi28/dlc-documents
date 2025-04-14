<template>
  <div class="case-studies-page">
    <SideNavBar :navItems="sideNavItems" />
    <div class="case-studies-content">
      <h1>Case Studies</h1>
      <p>This is the Case Studies page content.</p>
    </div>
  </div>
</template>

<script>
import SideNavBar from '@/components/SideNavBar.vue';

export default {
  name: 'CaseStudiesPC',
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
.case-studies-page {
  display: flex;
}
.case-studies-content {
  flex-grow: 1;
  padding: 20px;
  margin-left: 200px; /* Ensure content is to the right of the sidebar */
}
</style>

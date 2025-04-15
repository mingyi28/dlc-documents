import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // 基础路由
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },

  // 官方页面路由
  {
    path: '/overview',
    name: 'Overview',
    component: () => import('@/views/official/Overview.vue')
  },
  {
    path: '/account-solution',
    name: 'AccountSolution',
    component: () => import('@/views/official/AccountSolution.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/official/News.vue')
  },

  // 主要布局组件
  {
    path: '/account-main',
    name: 'AccountMain',
    component: () => import('@/views/account/AccountMain.vue')
  },
  {
    path: '/operation-main',
    name: 'operationMain',
    component: () => import('@/views/operation/OperationMain.vue')
  },

  // 账号系统相关路由
  {
    path: '/account/li-pass',
    name: 'LiPass',
    component: () => import('@/views/account/LiPass.vue')
  },
  {
    path: '/account/native-account',
    name: 'NativeAccount',
    component: () => import('@/views/account/NativeAccount.vue')
  },
  {
    path: '/mobile-account',
    name: 'MobileAccount',
    component: () => import('@/views/account/MobileAccount.vue')
  },
  {
    path: '/pc-account',
    name: 'PCAccount',
    component: () => import('@/views/account/PCAccount.vue')
  },
  {
    path: '/console-account',
    name: 'ConsoleAccount',
    component: () => import('@/views/account/ConsoleAccount.vue')
  },

  // 移动端账号方案路由
  {
    path: '/account/mobile/introduction',
    name: 'MobileIntroduction',
    component: () => import('@/views/account/mobile/Introduction.vue')
  },
  {
    path: '/account/mobile/where-do-i-start',
    name: 'MobileWhereDoIStart',
    component: () => import('@/views/account/mobile/WhereDoIStart.vue')
  },
  {
    path: '/account/mobile/unity',
    name: 'MobileUnity',
    component: () => import('@/views/account/mobile/Unity.vue')
  },
  {
    path: '/account/mobile/unreal',
    name: 'MobileUnreal',
    component: () => import('@/views/account/mobile/Unreal.vue')
  },
  {
    path: '/account/mobile/case-studies',
    name: 'MobileCaseStudies',
    component: () => import('@/views/account/mobile/CaseStudies.vue')
  },

  // PC端账号方案路由
  {
    path: '/account/pc/overview',
    name: 'PCOverview',
    component: () => import('@/views/account/pc/Overview.vue')
  },
  {
    path: '/account/pc/setup-guide',
    name: 'PCSetupGuide',
    component: () => import('@/views/account/pc/SetupGuide.vue')
  },
  {
    path: '/account/pc/integration',
    name: 'PCIntegration',
    component: () => import('@/views/account/pc/Integration.vue')
  },
  {
    path: '/account/pc/best-practices',
    name: 'PCBestPractices',
    component: () => import('@/views/account/pc/BestPractices.vue')
  },
  {
    path: '/account/pc/case-studies',
    name: 'PCCaseStudies',
    component: () => import('@/views/account/pc/CaseStudies.vue')
  },

  // 主机端账号方案路由
  {
    path: '/account/console/overview',
    name: 'ConsoleOverview',
    component: () => import('@/views/account/console/Overview.vue')
  },
  {
    path: '/account/console/setup-guide',
    name: 'ConsoleSetupGuide',
    component: () => import('@/views/account/console/SetupGuide.vue')
  },
  {
    path: '/account/console/integration',
    name: 'ConsoleIntegration',
    component: () => import('@/views/account/console/Integration.vue')
  },
  {
    path: '/account/console/best-practices',
    name: 'ConsoleBestPractices',
    component: () => import('@/views/account/console/BestPractices.vue')
  },
  {
    path: '/account/console/case-studies',
    name: 'ConsoleCaseStudies',
    component: () => import('@/views/account/console/CaseStudies.vue')
  },

  // 原生账号方案路由
  {
    path: '/account/native-general/Integration',
    name: 'NativeGeneralWhereDoIStart',
    component: () => import('@/views/account/native-general/Integration.vue')
  },

  // 自建账号方案路由
  // {
  //   path: '/account/native-selfaccount/introduction',
  //   name: 'NativeSelfAccountIntroduction',
  //   component: () => import('@/views/account/native-selfaccount/introduction.vue')
  // },
  // {
  //   path: '/account/native-selfaccount/where-do-i-start',
  //   name: 'NativeSelfAccountWhereDoIStart',
  //   component: () => import('@/views/account/native-selfaccount/where-do-i-start.vue')
  // },
  // {
  //   path: '/account/native-selfaccount/unity',
  //   name: 'NativeSelfAccountUnity',
  //   component: () => import('@/views/account/native-selfaccount/unity.vue')
  // },
  // {
  //   path: '/account/native-selfaccount/unreal',
  //   name: 'NativeSelfAccountUnreal',
  //   component: () => import('@/views/account/native-selfaccount/unreal.vue')
  // },
  // {
  //   path: '/account/native-selfaccount/case-studies',
  //   name: 'NativeSelfAccountCaseStudies',
  //   component: () => import('@/views/account/native-selfaccount/case-studies.vue')
  // },

  // 运营工具相关路由
  {
    path: '/operation/social',
    name: 'Social',
    component: () => import('@/views/operation/Social.vue')
  },
  {
    path: '/operation/player-engagement',
    name: 'PlayerEngagement',
    component: () => import('@/views/operation/PlayerEngagement.vue')
  },
  {
    path: '/operation/data-insights',
    name: 'DataInsights',
    component: () => import('@/views/operation/DataInsights.vue')
  },
  {
    path: '/operation/common-tools',
    name: 'CommonTools',
    component: () => import('@/views/operation/CommonTools.vue')
  },

  // 社交功能路由
  {
    path: '/operation/social/share/introduction',
    name: 'social-share-introduction',
    component: () => import('@/views/operation/social/share/Introduction.vue')
  },
  {
    path: '/operation/social/share/where-do-i-start',
    name: 'social-share-start',
    component: () => import('@/views/operation/social/share/where-do-i-start.vue')
  },
  {
    path: '/operation/social/share/integration',
    name: 'social-share-integration',
    component: () => import('@/views/operation/social/share/Integration.vue')
  },
  // {
  //   path: '/operation/social/share/best-practices',
  //   name: 'social-share-best-practices',
  //   component: () => import('@/views/operation/social/share/best-practices.vue')
  // },
  // {
  //   path: '/operation/social/share/case-studies',
  //   name: 'social-share-case-studies',
  //   component: () => import('@/views/operation/social/share/case-studies.vue')
  // },

  // 好友列表路由
  {
    path: '/operation/social/friends/introduction',
    name: 'social-friends-introduction',
    component: () => import('@/views/operation/social/friends/Introduction.vue')
  },
  // {
  //   path: '/operation/social/friends/where-do-i-start',
  //   name: 'social-friends-start',
  //   component: () => import('@/views/operation/social/friends/where-do-i-start.vue')
  // },
  // {
  //   path: '/operation/social/friends/integration',
  //   name: 'social-friends-integration',
  //   component: () => import('@/views/operation/social/friends/integration.vue')
  // },
  // {
  //   path: '/operation/social/friends/best-practices',
  //   name: 'social-friends-best-practices',
  //   component: () => import('@/views/operation/social/friends/best-practices.vue')
  // },
  // {
  //   path: '/operation/social/friends/case-studies',
  //   name: 'social-friends-case-studies',
  //   component: () => import('@/views/operation/social/friends/case-studies.vue')
  // },

  // 玩家参与路由
  // {
  //   path: '/operation/player-engagement/announcement/introduction',
  //   name: 'player-engagement-announcement-introduction',
  //   component: () => import('@/views/operation/player-engagement/announcement/introduction.vue')
  // },
  // {
  //   path: '/operation/player-engagement/announcement/where-do-i-start',
  //   name: 'player-engagement-announcement-start',
  //   component: () => import('@/views/operation/player-engagement/announcement/where-do-i-start.vue')
  // },
  // {
  //   path: '/operation/player-engagement/announcement/integration',
  //   name: 'player-engagement-announcement-integration',
  //   component: () => import('@/views/operation/player-engagement/announcement/integration.vue')
  // },
  // {
  //   path: '/operation/player-engagement/announcement/best-practices',
  //   name: 'player-engagement-announcement-best-practices',
  //   component: () => import('@/views/operation/player-engagement/announcement/best-practices.vue')
  // },
  // {
  //   path: '/operation/player-engagement/announcement/case-studies',
  //   name: 'player-engagement-announcement-case-studies',
  //   component: () => import('@/views/operation/player-engagement/announcement/case-studies.vue')
  // },

  // 数据洞察路由
  // {
  //   path: '/operation/data-insights/ua/introduction',
  //   name: 'data-insights-ua-introduction',
  //   component: () => import('@/views/operation/data-insights/ua/introduction.vue')
  // },
  // {
  //   path: '/operation/data-insights/ua/where-do-i-start',
  //   name: 'data-insights-ua-start',
  //   component: () => import('@/views/operation/data-insights/ua/where-do-i-start.vue')
  // },
  // {
  //   path: '/operation/data-insights/ua/integration',
  //   name: 'data-insights-ua-integration',
  //   component: () => import('@/views/operation/data-insights/ua/integration.vue')
  // },
  // {
  //   path: '/operation/data-insights/ua/best-practices',
  //   name: 'data-insights-ua-best-practices',
  //   component: () => import('@/views/operation/data-insights/ua/best-practices.vue')
  // },
  // {
  //   path: '/operation/data-insights/ua/case-studies',
  //   name: 'data-insights-ua-case-studies',
  //   component: () => import('@/views/operation/data-insights/ua/case-studies.vue')
  // },

  // 开发工具路由
  // {
  //   path: '/operation/development/deeplink/introduction',
  //   name: 'development-deeplink-introduction',
  //   component: () => import('@/views/operation/development/deeplink/introduction.vue')
  // },
  // {
  //   path: '/operation/development/deeplink/where-do-i-start',
  //   name: 'development-deeplink-start',
  //   component: () => import('@/views/operation/development/deeplink/where-do-i-start.vue')
  // },
  // {
  //   path: '/operation/development/deeplink/integration',
  //   name: 'development-deeplink-integration',
  //   component: () => import('@/views/operation/development/deeplink/integration.vue')
  // },
  // {
  //   path: '/operation/development/deeplink/best-practices',
  //   name: 'development-deeplink-best-practices',
  //   component: () => import('@/views/operation/development/deeplink/best-practices.vue')
  // },
  // {
  //   path: '/operation/development/deeplink/case-studies',
  //   name: 'development-deeplink-case-studies',
  //   component: () => import('@/views/operation/development/deeplink/case-studies.vue')
  // },

  // 文档相关路由
  {
    path: '/docs/tools',
    name: 'DocsTools',
    component: () => import('@/views/docs/Tools.vue')
  },
  {
    path: '/reference/reference',
    name: 'DocsReference',
    component: () => import('@/views/reference/Reference.vue')
  },
  {
    path: '/docs/sample',
    name: 'DocsSample',
    component: () => import('@/views/docs/Sample.vue')
  },
  {
    path: '/reference/overview/introduction',
    name: 'reference-overview-introduction',
    component: () => import('@/views/reference/overview/Introduction.vue')
  },
  {
    path: '/reference/overview/quick-start',
    name: 'reference-overview-quickstart',
    component: () => import('@/views/reference/overview/QuickStart.vue')
  },
  {
    path: '/reference/overview/architecture',
    name: 'reference-overview-architecture',
    component: () => import('@/views/reference/overview/Architecture.vue')
  },
  {
    path: '/reference/overview/best-practices',
    name: 'reference-overview-bestpractices',
    component: () => import('@/views/reference/overview/BestPractices.vue')
  },
  // {
  //   path: '/reference/overview/faq',
  //   name: 'reference-overview-faq',
  //   component: () => import('@/views/reference/overview/faq.vue')
  // },

  // Unity SDK Section
  {
    path: '/reference/unity/introduction',
    name: 'reference-unity-introduction',
    component: () => import('@/views/reference/unity/Introduction.vue')
  },
  {
    path: '/reference/unity/setup',
    name: 'reference-unity-setup',
    component: () => import('@/views/reference/unity/Setup.vue')
  },
  // {
  //   path: '/reference/unity/api',
  //   name: 'reference-unity-api',
  //   component: () => import('@/views/reference/unity/api.vue')
  // },
  // {
  //   path: '/reference/unity/samples',
  //   name: 'reference-unity-samples',
  //   component: () => import('@/views/reference/unity/samples.vue')
  // },
  // {
  //   path: '/reference/unity/changelog',
  //   name: 'reference-unity-changelog',
  //   component: () => import('@/views/reference/unity/changelog.vue')
  // },

  // Unreal SDK Section
  // {
  //   path: '/reference/unreal/introduction',
  //   name: 'reference-unreal-introduction',
  //   component: () => import('@/views/reference/unreal/introduction.vue')
  // },
  // {
  //   path: '/reference/unreal/setup',
  //   name: 'reference-unreal-setup',
  //   component: () => import('@/views/reference/unreal/setup.vue')
  // },
  // {
  //   path: '/reference/unreal/api',
  //   name: 'reference-unreal-api',
  //   component: () => import('@/views/reference/unreal/api.vue')
  // },
  // {
  //   path: '/reference/unreal/samples',
  //   name: 'reference-unreal-samples',
  //   component: () => import('@/views/reference/unreal/samples.vue')
  // },
  // {
  //   path: '/reference/unreal/changelog',
  //   name: 'reference-unreal-changelog',
  //   component: () => import('@/views/reference/unreal/changelog.vue')
  // },

  // HTTP API Section
  // {
  //   path: '/reference/http/introduction',
  //   name: 'reference-http-introduction',
  //   component: () => import('@/views/reference/http/Introduction.vue')
  // },
  // {
  //   path: '/reference/http/authentication',
  //   name: 'reference-http-authentication',
  //   component: () => import('@/views/reference/http/Authentication.vue')
  // },
  {
    path: '/reference/http/api-list',
    name: 'reference-http-apilist',
    component: () => import('@/views/reference/http/ApiList.vue')
  },
  // {
  //   path: '/reference/http/error-codes',
  //   name: 'reference-http-errorcodes',
  //   component: () => import('@/views/reference/http/ErrorCodes.vue')
  // },
  // {
  //   path: '/reference/http/examples',
  //   name: 'reference-http-examples',
  //   component: () => import('@/views/reference/http/Examples.vue')
  // },

  // Web SDK Section
  // {
  //   path: '/reference/web/introduction',
  //   name: 'reference-web-introduction',
  //   component: () => import('@/views/reference/web/introduction.vue')
  // },
  // {
  //   path: '/reference/web/setup',
  //   name: 'reference-web-setup',
  //   component: () => import('@/views/reference/web/setup.vue')
  // },
  // {
  //   path: '/reference/web/api',
  //   name: 'reference-web-api',
  //   component: () => import('@/views/reference/web/api.vue')
  // },
  // {
  //   path: '/reference/web/samples',
  //   name: 'reference-web-samples',
  //   component: () => import('@/views/reference/web/samples.vue')
  // },
  // {
  //   path: '/reference/web/changelog',
  //   name: 'reference-web-changelog',
  //   component: () => import('@/views/reference/web/changelog.vue')
  // },

  // // Others Section
  // {
  //   path: '/reference/others/data-structures',
  //   name: 'reference-others-datastructures',
  //   component: () => import('@/views/reference/others/data-structures.vue')
  // },
  // {
  //   path: '/reference/others/security',
  //   name: 'reference-others-security',
  //   component: () => import('@/views/reference/others/security.vue')
  // },
  // {
  //   path: '/reference/others/rate-limits',
  //   name: 'reference-others-ratelimits',
  //   component: () => import('@/views/reference/others/rate-limits.vue')
  // },
  // {
  //   path: '/reference/others/changelog',
  //   name: 'reference-others-changelog',
  //   component: () => import('@/views/reference/others/changelog.vue')
  // },
  // {
  //   path: '/reference/others/glossary',
  //   name: 'reference-others-glossary',
  //   component: () => import('@/views/reference/others/glossary.vue')
  // },
  {
    path: '/pntconsole',
    name: 'PntConsole',
    component: () => import('@/views/pntconsole/PntConsoleMain.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 
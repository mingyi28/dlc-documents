import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/layout/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/Home.vue')
      }
    ]
  },
  {
    path: '/account-main',
    component: () => import('@/views/account/AccountMain.vue'),
    children: [
      {
        path: '',
        name: 'AccountMain',
        component: () => import('@/views/account/LiPass.vue')
      }
    ]
  },
  {
    path: '/account',
    component: () => import('@/components/layout/AccountLayout.vue'),
    children: [
      {
        path: 'li-pass',
        name: 'LiPass',
        component: () => import('@/views/account/LiPass.vue')
      },
      {
        path: 'native-account',
        name: 'NativeAccount',
        component: () => import('@/views/account/NativeAccount.vue')
      },
      {
        path: '',
        redirect: 'li-pass'
      }
    ]
  },
  {
    path: '/operation',
    component: () => import('@/components/layout/MainLayout.vue'),
    children: [
      {
        path: 'social',
        name: 'Social',
        component: () => import('@/views/operation/Social.vue')
      },
      {
        path: 'player-engagement',
        name: 'PlayerEngagement',
        component: () => import('@/views/operation/PlayerEngagement.vue')
      },
      {
        path: 'data-insights',
        name: 'DataInsights',
        component: () => import('@/views/operation/DataInsights.vue')
      },
      {
        path: '',
        redirect: 'social'
      }
    ]
  },
  {
    path: '/docs',
    component: () => import('@/components/layout/DocsLayout.vue'),
    children: [
      {
        path: 'reference',
        name: 'Reference',
        component: () => import('@/views/docs/Reference.vue')
      },
      {
        path: 'sample',
        name: 'Sample',
        component: () => import('@/views/docs/Sample.vue')
      },
      {
        path: '',
        redirect: 'reference'
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/error/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router

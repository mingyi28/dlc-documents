import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import routes from './router'
import './assets/styles/main.scss'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const i18n = createI18n({
  locale: 'zh',
  messages: {
    zh: {
      // 中文翻译
    },
    en: {
      // 英文翻译
    }
  }
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app') 
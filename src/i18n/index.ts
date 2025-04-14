import { createI18n } from 'vue-i18n'

const messages = {
  zh: {
    nav: {
      overview: '概述',
      accountSolutions: '账号方案',
      liPass: 'LI Pass 账号方案',
      nativeAccount: '原生账号接入方案',
      operationalTools: '运营工具',
      social: '社交',
      playerEngagement: '玩家参与',
      dataInsights: '数据洞察',
      tools: '工具',
      reference: '参考',
      samples: '示例'
    },
    home: {
      title: 'LIPass SDK 介绍',
      description: 'LI Pass 账号方案提供了多种登录方式，包括 guest 登录、第三方渠道登录、lip 邮箱登录等，支持账号绑定和解绑，确保合规性和安全性。',
      learnMore: '了解更多'
    }
  },
  en: {
    nav: {
      overview: 'Overview',
      accountSolutions: 'Account Solutions',
      liPass: 'LI Pass Account',
      nativeAccount: 'Native Account',
      operationalTools: 'Operational Tools',
      social: 'Social',
      playerEngagement: 'Player Engagement',
      dataInsights: 'Data Insights',
      tools: 'Tools',
      reference: 'Reference',
      samples: 'Samples'
    },
    home: {
      title: 'LIPass SDK Introduction',
      description: 'LI Pass account solution provides multiple login methods, including guest login, third-party channel login, lip email login, etc., supporting account binding and unbinding, ensuring compliance and security.',
      learnMore: 'Learn More'
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'en',
  messages
})

export default i18n 
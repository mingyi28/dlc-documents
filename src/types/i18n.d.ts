declare module 'vue-i18n' {
  import { DefineComponent } from 'vue'
  import { I18nOptions, I18n } from 'vue-i18n'

  export const createI18n: (options: I18nOptions) => I18n
  export const useI18n: () => {
    t: (key: string) => string
    locale: {
      value: string
    }
  }
} 
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { loadSettings } from '../utils/storage'
import en from './en.json'
import fi from './fi.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fi: { translation: fi },
  },
  // Start in the saved language
  lng: loadSettings().lang,
  fallbackLng: 'en',
  initAsync: false,
  interpolation: { escapeValue: false },
})

export default i18n

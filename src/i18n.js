import i18n from 'i18next';
import backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use (backend)
  .use (LanguageDetector)
  .use (initReactI18next)
  .init({
    supportedLngs: ['ru', 'en'],
    fallbackLng: 'ru',
    lng: 'ru',  
    debug: true,
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie']
    },
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: '/my-cv/locales/{{lng}}/translation.json'
    }
  })

export default i18n;
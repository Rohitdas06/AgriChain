import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import hi from './locales/hi/translation.json';
import bn from './locales/bn/translation.json';
import mr from './locales/mr/translation.json';
import te from './locales/te/translation.json';
import ta from './locales/ta/translation.json';
import gu from './locales/gu/translation.json';
import ur from './locales/ur/translation.json';

// Initialize i18next with supported locales
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      hi: { translation: hi }, // Hindi
      bn: { translation: bn }, // Bengali
      mr: { translation: mr }, // Marathi
      te: { translation: te }, // Telugu
      ta: { translation: ta }, // Tamil
      gu: { translation: gu }, // Gujarati
      ur: { translation: ur }, // Urdu
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'hi', 'bn', 'mr', 'te', 'ta', 'gu', 'ur'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag', 'cookie', 'querystring'],
      caches: ['localStorage'],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;



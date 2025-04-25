import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// import homeEN from './locales/en/home.json';
import aboutEN from './locales/en/about.json';
import aboutHY from './locales/hy/about.json';
import aboutRU from './locales/ru/about.json';
import contactEN from './locales/en/contact.json';
import contactHY from './locales/hy/contact.json';
import contactRU from './locales/ru/contact.json';
// import homeHY from './locales/hy/home.json';


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        // home: homeEN,
        about: aboutEN,
        contact: contactEN,
      },
      hy: {
        // home: homeHY,
        about: aboutHY,
        contact: contactHY,
      },
      ru: {
        about: aboutRU,
        contact: contactRU,
      }
    },
    fallbackLng: 'hy',
    ns: ['contact', 'about'],
    // defaultNS: 'home',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

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
import headerEN from './locales/en/header.json';
import headerHY from './locales/hy/header.json';
import headerRU from './locales/ru/header.json';
// import homeHY from './locales/hy/home.json';


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        about: aboutEN,
        contact: contactEN,
        header: headerEN,
      },
      hy: {
        about: aboutHY,
        contact: contactHY,
        header: headerHY,
      },
      ru: {
        about: aboutRU,
        contact: contactRU,
        header: headerRU,
      }
    },
    fallbackLng: 'hy',
    ns: ['header', 'contact', 'about'],
    // defaultNS: 'home',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

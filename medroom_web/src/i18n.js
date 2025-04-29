import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import aboutEN from './locales/en/about.json';
import aboutHY from './locales/hy/about.json';
import aboutRU from './locales/ru/about.json';
import contactEN from './locales/en/contact.json';
import contactHY from './locales/hy/contact.json';
import contactRU from './locales/ru/contact.json';
import headerEN from './locales/en/header.json';
import headerHY from './locales/hy/header.json';
import headerRU from './locales/ru/header.json';
import staffEN from './locales/en/staff.json';
import staffHY from './locales/hy/staff.json';
import staffRU from './locales/ru/staff.json';
import servicesEN from './locales/en/services.json';
import servicesHY from './locales/hy/services.json';
import servicesRU from './locales/ru/services.json';
import footerEN from './locales/en/footer.json';
import footerHY from './locales/hy/footer.json';
import footerRU from './locales/ru/footer.json';
import moreEN from './locales/en/more.json';
import moreHY from './locales/hy/more.json';
import moreRU from './locales/ru/more.json';
import homeEN from './locales/en/home.json';
import homeHY from './locales/hy/home.json';
import homeRU from './locales/ru/home.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        about: aboutEN,
        contact: contactEN,
        header: headerEN,
        staff: staffEN,
        services: servicesEN,
        footer: footerEN,
        more: moreEN,
        home: homeEN,
      },
      hy: {
        about: aboutHY,
        contact: contactHY,
        header: headerHY,
        staff: staffHY,
        services: servicesHY,
        footer: footerHY,
        more: moreHY,
        home: homeHY,
      },
      ru: {
        about: aboutRU,
        contact: contactRU,
        header: headerRU,
        staff: staffRU,
        services: servicesRU,
        footer: footerRU,
        more: moreRU,
        home: homeRU,
      }
    },
    fallbackLng: 'hy',
    ns: [ 'home','more', 'footer','services','staff', 'header', 'contact', 'about'],
    defaultNS: 'home',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

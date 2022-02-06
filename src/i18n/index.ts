import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { English } from './translations/english';
// import { Polish } from './translations/polish';

export const initTranslations = () => {
  i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      lng: 'en',
      resources: {
        // pl: {
        //   translation: Polish,
        // },
        en: {
          translation: English,
        },
      },
      interpolation: {
        escapeValue: false,
      },
    });
};

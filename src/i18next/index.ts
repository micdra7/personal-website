import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { English } from './translations/english';
import { Polish } from './translations/polish';
import LanguageDetector from 'i18next-browser-languagedetector';

export const initTranslations = () => {
  i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        pl: {
          translation: Polish,
        },
        en: {
          translation: English,
        },
      },
      interpolation: {
        escapeValue: false,
      },
    });
};

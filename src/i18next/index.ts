import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { English } from './translations/english';
import { Polish } from './translations/polish';

export const initTranslations = () => {
  i18next.use(initReactI18next).init({
    resources: {
      pl: {
        translation: Polish,
      },
      en: {
        translation: English,
      },
    },
    lng: 'pl',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
};

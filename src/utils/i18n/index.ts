import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const LANGUAGE_EN = 'en';
export const LANGUAGE_ES = 'es';
export const DEFAULT_LANGUAGE = LANGUAGE_EN;

const LANGUAGE = localStorage.getItem('language') || DEFAULT_LANGUAGE;

const translationEN = require('./locales/en-US.json');
const translationVN = require('./locales/es.json');

i18n.use(initReactI18next).init({
  fallbackLng: LANGUAGE,
  lng: LANGUAGE,

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    [LANGUAGE_EN]: {
      translation: translationEN,
    },
    [LANGUAGE_ES]: {
      translation: translationVN,
    },
  },
  react: {
    bindI18n: 'languageChanged editorSaved',
  },
});

export default i18n;

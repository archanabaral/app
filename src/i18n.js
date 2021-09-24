import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import translationEN from "./locales/translationEN.json";
import translationNE from "./locales/translationNE.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ne: {
    translation: translationNE,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
});

export default i18n;

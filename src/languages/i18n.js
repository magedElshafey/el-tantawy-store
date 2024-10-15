import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import TranselateEn from "./en.json";
import TranselateAr from "./ar.json";
const resources = {
  en: {
    translation: TranselateEn,
  },
  ar: {
    translation: TranselateAr,
  },
};
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("i18nextLng") || "ar",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
export default i18n;

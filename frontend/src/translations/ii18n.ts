import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ptBR from "./locales/pt/pt-br.json";
import enUS from "./locales/en/en-us.json";

const resources = {
  pt: { translation: ptBR },
  en: { translation: enUS },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pt",
    debug: false,
    interpolation: { escapeValue: false },
  });

export default i18n;

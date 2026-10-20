import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import enTranslation from "./locales/en.json"
import nlTranslation from "./locales/nl.json"
import frTranslation from "./locales/fr.json"
import deTranslation from "./locales/de.json"

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    nl: { translation: nlTranslation },
    fr: { translation: frTranslation },
    de: { translation: deTranslation },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n

import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import translationEN from './utils/en/translation.json';
import translationAR from './utils/ar/translation.json';

// the translations
const resources = {
    en: {
        translation: translationEN
    },
    ar: {
        translation: translationAR
    }
};

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        supportedLngs: ['en', 'ar'],
        // lng: "en",
        fallbackLng: 'en',
        debug: false,

        // // have a common namespace used around the full app
        // ns: ["translations"],
        // defaultNS: "translations",

        // Options for language detector
        detection: {
            order: ['path', 'cookie', 'htmlTag'],
            caches: ['cookie'],
        },

        // backend: {
        //     loadPath: './utils/{{lng}}/translation.json',
        // },
        // keySeparator: false, // we do not use keys in form messages.welcome

        // interpolation: {
        //     escapeValue: false, // react already safes from xss
        //     formatSeparator: ","
        // },
        react: {
            wait: true
        }
    });

export default i18n;
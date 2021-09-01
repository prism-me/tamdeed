import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

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
    .use(detector)
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        debug: true,

        // // have a common namespace used around the full app
        // ns: ["translations"],
        // defaultNS: "translations",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
            formatSeparator: ","
        },
        react: {
            wait: true
        }
    });

export default i18n;
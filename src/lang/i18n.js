import i18n from "i18next";
import { initReactI18next } from 'react-i18next';

import langEn from "./en";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translations: langEn
        }
    },
    fallbackLng: "en",
    debug: false,
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
        escapeValue: false,
        formatSeparator: ","
    },
    react: {
        wait: true
    }
});

export default i18n;
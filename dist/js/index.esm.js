// src/app/index.ts
import { useRouter } from "next/router";

// src/app/locales.ts
var locales = {
  af: "af-ZA",
  ar: "ar",
  bg: "bg-BG",
  ca: "ca-AD",
  cs: "cs-CZ",
  cy: "cy-GB",
  da: "da-DK",
  de: "de-DE",
  el: "el-GR",
  en: "en-US",
  es: "es-ES",
  et: "et-EE",
  eu: "eu",
  fa: "fa-IR",
  fi: "fi-FI",
  fr: "fr-FR",
  he: "he-IL",
  hi: "hi-IN",
  hr: "hr-HR",
  hu: "hu-HU",
  id: "id-ID",
  is: "is-IS",
  it: "it-IT",
  ja: "ja-JP",
  km: "km-KH",
  ko: "ko-KR",
  la: "la",
  lt: "lt-LT",
  lv: "lv-LV",
  mn: "mn-MN",
  nb: "nb-NO",
  nl: "nl-NL",
  nn: "nn-NO",
  pl: "pl-PL",
  pt: "pt-PT",
  ro: "ro-RO",
  ru: "ru-RU",
  sk: "sk-SK",
  sl: "sl-SI",
  sr: "sr-RS",
  sv: "sv-SE",
  th: "th-TH",
  tr: "tr-TR",
  uk: "uk-UA",
  vi: "vi-VN",
  zh: "zh-CN"
};
var locales_default = locales;

// src/app/lib.ts
import lodash from "lodash";
function isJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    console.warn("next-locale-database: Invalid json format!");
    return false;
  }
  return true;
}
function isLocaleFormat(str) {
  try {
    const obj = JSON.parse(str);
    let result = true;
    Object.keys(obj).forEach((key) => {
      if (!lodash.invert(locales_default).hasOwnProperty(key) && !locales_default.hasOwnProperty(key)) {
        result = false;
      }
    });
    if (!result) {
      throw new Error("error");
    }
    return result;
  } catch (e) {
    console.warn("next-locale-database: Invalid locale format!");
    return false;
  }
}
function getLocaleString(str, locale) {
  try {
    const obj = JSON.parse(str);
    if (!obj.hasOwnProperty(locale)) {
      return "";
    }
    return obj[locale];
  } catch (e) {
    console.warn("next-locale-database: " + e);
    return "";
  }
}

// src/app/index.ts
function useLocale(options) {
  var _a;
  const router = useRouter();
  const locale = (_a = router.locale) != null ? _a : "en";
  return {
    getLang: (str) => {
      if (str === void 0) {
        return "";
      }
      if (typeof str !== "string") {
        console.warn("next-locale-database: Input is not a string!");
        return "";
      }
      if (!isJsonString(str) || !isLocaleFormat(str)) {
        return (options == null ? void 0 : options.revert) === true ? str : "";
      }
      return getLocaleString(str, locale);
    }
  };
}
export {
  useLocale as default
};

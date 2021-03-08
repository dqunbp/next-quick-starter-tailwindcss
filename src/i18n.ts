import { i18n } from "@lingui/core";
import { en, ru } from "make-plural/plurals";

export const locales = {
  en: "English",
  ru: "Russian",
};

i18n.loadLocaleData({
  en: { plurals: en },
  ru: { plurals: ru },
});

// Pseudo static rendering
// import messagesEn from "locales/en/messages.js";
// import messagesRu from "locales/ru/messages.js";

// i18n.load("en", messagesEn.messages);
// i18n.load("ru", messagesRu.messages);
// i18n.activate("en");

/**
 * We do a dynamic import of just the catalog that we need
 * @param locale any locale string
 */
export async function dynamicActivate(locale: string) {
  console.log("call activeate");
  const { messages } = await import(`locales/${locale}/messages.po`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}

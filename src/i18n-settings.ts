import { AllLocaleData, AllMessages } from "@lingui/core";
import { en, ru } from "make-plural/plurals";
import { t } from "@lingui/macro";

import messagesRu from "locales/ru/messages";
import messagesEn from "locales/en/messages";

export const messages: AllMessages = {
  en: messagesEn.messages,
  ru: messagesRu.messages,
};

export const plurals: AllLocaleData = {
  en: { plurals: en },
  ru: { plurals: ru },
};

export const localeNames = {
  en: t`English`,
  ru: t`Russian`,
};

export const locales = Object.keys(localeNames);

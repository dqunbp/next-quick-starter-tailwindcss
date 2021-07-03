import * as React from "react";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";

import { defaultLocale, messages } from "i18n-settings";
import { plurals } from "i18n-settings";
import { useRouter } from "next/router";

const LanguageProvider: React.FC = ({ children }) => {
  const { locale } = useRouter();

  // once before render load all i18n catalogs and plurals
  React.useState(() => {
    i18n.load(messages);
    i18n.loadLocaleData(plurals);
    i18n.activate(locale || defaultLocale);
  });

  React.useEffect(() => {
    if (i18n.locale === locale) return;
    i18n.activate(locale || defaultLocale);
  }, [locale]);

  return React.createElement(I18nProvider, { i18n }, children);
};

export default LanguageProvider;

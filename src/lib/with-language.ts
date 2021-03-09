import { createElement, useEffect, useState } from "react";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";

import { Locale } from "@lingui/core";
import { messages } from "i18n";
import { plurals } from "i18n";
import { useRouter } from "next/router";

interface PageComponentProps {
  locale: Locale;
}

const withLanguage = (
  Component: React.ElementType | React.FunctionComponent
): React.ReactNode => ({ ...props }: PageComponentProps) => {
  const { locale } = useRouter();

  // once before render load all i18n catalogs and plurals
  useState(() => {
    i18n.load(messages);
    i18n.loadLocaleData(plurals);
    i18n.activate(locale);
  });

  useEffect(() => {
    if (i18n.locale === locale) return;
    i18n.activate(locale);
  }, [locale]);

  return createElement(I18nProvider, { i18n }, createElement(Component, props));
};

export { withLanguage };

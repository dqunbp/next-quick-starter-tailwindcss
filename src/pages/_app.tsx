import "../styles/globals.css";

import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { dynamicActivate } from "../i18n";
import { useEffect } from "react";

function MyApp({ Component, pageProps, router }) {
  const { locale } = router;

  useEffect(() => {
    // With this method we dynamically load the catalogs
    dynamicActivate(locale);
  }, [locale]);

  return (
    <I18nProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nProvider>
  );
}

export default MyApp;

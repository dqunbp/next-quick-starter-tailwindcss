import Router, { useRouter } from "next/router";
// import { I18n } from "@lingui/react";
import { t, Trans } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import { useState } from "react";

const availableLanguageNames = {
  en: t`English`,
  ru: t`Russian`,
};
const availableLanguages = Object.keys(availableLanguageNames);

function LangSwitcher() {
  const router = useRouter();
  const { i18n } = useLingui();
  const [language, setLanguage] = useState(i18n.locale);

  function onChange(e) {
    const nextLocale = e?.currentTarget?.value;

    if (!nextLocale) return;

    setLanguage(nextLocale);

    router.push(router.asPath, router.asPath, { locale: nextLocale });
  }

  return (
    <select
      className="border py-3 px-4 rounded-md shadow-sm"
      key={language}
      name="language"
      value={language}
      onChange={onChange}
    >
      {availableLanguages.map((lang) => (
        <option key={lang} value={lang} disabled={language === lang}>
          {i18n._(availableLanguageNames[lang])}
        </option>
      ))}
    </select>
  );
}

export default LangSwitcher;

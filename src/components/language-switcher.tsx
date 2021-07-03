import { ChangeEvent } from "react";
import { useRouter } from "next/router";
import { useLingui } from "@lingui/react";
import { locales, localeNames, Locale } from "i18n-settings";
import { useCookieState } from "use-cookie-state";

function LanguageSwitcher() {
  const router = useRouter();

  const { i18n } = useLingui();

  const [language, setLanguage] = useCookieState("NEXT_LOCALE", i18n.locale, {
    encodeOps: { path: "/", expires: new Date("10000") },
  });

  function onChange(e: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = e?.currentTarget?.value as Locale;

    if (!nextLocale) return;

    if (!locales.includes(nextLocale)) {
      console.error(`Unknown locale: ${nextLocale}`);
      return;
    }

    setLanguage(nextLocale);

    router.push(router.asPath, router.asPath, { locale: nextLocale });
  }

  const renderOption = (locale: Locale) => (
    <option key={locale} value={locale}>
      {i18n._(localeNames[locale])}
    </option>
  );

  return (
    <select
      className="border py-3 px-4 rounded-md shadow-sm"
      name="language"
      key={language}
      value={language}
      onChange={onChange}
    >
      {locales.map(renderOption)}
    </select>
  );
}

export default LanguageSwitcher;

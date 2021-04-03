import { t, Trans } from "@lingui/macro";

import Head from "next/head";
import styles from "styles/Home.module.css";

import LangSwitcher from "components/language-switcher";
import { useQuery } from "react-query";
import { getHello } from "requests/hello";
import { useLingui } from "@lingui/react";

function Home() {
  const query = useQuery("hello", getHello);

  const { i18n } = useLingui();

  return (
    <div className={styles.container}>
      <Head>
        {/* <Trans> doesnt works here */}
        <title>{i18n._(t`Create Next App`)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LangSwitcher />
        <h1 className={styles.title}>
          <Trans>Welcome to</Trans> <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          <Trans>Get started by editing</Trans>{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <code className={styles.description}>
          {query.isLoading
            ? i18n._(t`Fetches the hello api...`)
            : i18n._(t`API Response:`) + ` ${JSON.stringify(query.data)}`}
        </code>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>
              <Trans>Documentation</Trans> &rarr;
            </h3>
            <p>
              <Trans>
                Find in-depth information about Next.js features and API.
              </Trans>
            </p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>
              <Trans>Learn</Trans> &rarr;
            </h3>
            <p>
              <Trans>
                Learn about Next.js in an interactive course with quizzes!
              </Trans>
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>
              <Trans>Examples</Trans> &rarr;
            </h3>
            <p>
              <Trans>
                Discover and deploy boilerplate example Next.js projects.
              </Trans>
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>
              <Trans>Deploy</Trans> &rarr;
            </h3>
            <p>
              <Trans>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </Trans>
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Trans>Powered by</Trans>{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export default Home;

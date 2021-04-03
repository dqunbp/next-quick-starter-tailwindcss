import { t, Trans } from "@lingui/macro";

import Head from "next/head";

import LangSwitcher from "components/language-switcher";
import { useQuery } from "react-query";
import { getHello } from "requests/hello";
import { useLingui } from "@lingui/react";

function Home() {
  const query = useQuery("hello", getHello);

  const { i18n } = useLingui();

  return (
    <div className="min-h-screen py-0 px-2 flex flex-col justify-center items-center">
      <Head>
        {/* <Trans> doesnt works here */}
        <title>{i18n._(t`Create Next App`)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-20 px-0 flex flex-1 flex-col justify-center items-center">
        <LangSwitcher />
        <h1 className="m-0 leading-tight text-6xl text-center">
          <Trans>Welcome to</Trans>{" "}
          <a
            className="text-blue-600 no-underline hover:underline focus:underline active:underline"
            href="https://nextjs.org"
          >
            Next.js!
          </a>
        </h1>

        <p className="text-center leading-normal text-2xl mt-4">
          <Trans>Get started by editing</Trans>{" "}
          <code className="font-mono text-lg p-3">pages/index.js</code>
        </p>

        <code className="bg-gray-50 rounded-md text-lg font-mono">
          {query.isLoading
            ? i18n._(t`Fetches the hello api...`)
            : i18n._(t`API Response:`) + ` ${JSON.stringify(query.data)}`}
        </code>

        <div className="flex flex-col sm:flex-row items-center justify-center flex-wrap max-w-screen-md mt-12">
          <a
            href="https://nextjs.org/docs"
            style={{ flexBasis: "45%" }}
            className="m-4 p-6 text-left no-underline border rounded-xl
            transition duration-150 ease-in-out 
            hover:text-blue-600 hover:border-blue-600"
          >
            <h3 className="mb-4 text-2xl">
              <Trans>Documentation</Trans> &rarr;
            </h3>
            <p className="text-xl leading-6">
              <Trans>
                Find in-depth information about Next.js features and API.
              </Trans>
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            style={{ flexBasis: "45%" }}
            className="m-4 p-6 text-left no-underline border rounded-xl 
            transition duration-150 ease-in-out 
            hover:text-blue-600 hover:border-blue-600"
          >
            <h3 className="mb-4 text-2xl">
              <Trans>Learn</Trans> &rarr;
            </h3>
            <p className="text-xl leading-6">
              <Trans>
                Learn about Next.js in an interactive course with quizzes!
              </Trans>
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            style={{ flexBasis: "45%" }}
            className="m-4 p-6 text-left no-underline border rounded-xl 
            transition duration-150 ease-in-out 
            hover:text-blue-600 hover:border-blue-600"
          >
            <h3 className="mb-4 text-2xl">
              <Trans>Examples</Trans> &rarr;
            </h3>
            <p className="text-xl leading-6">
              <Trans>
                Discover and deploy boilerplate example Next.js projects.
              </Trans>
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            style={{ flexBasis: "45%" }}
            className="m-4 p-6 text-left no-underline border rounded-xl 
            transition duration-150 ease-in-out 
            hover:text-blue-600 hover:border-blue-600"
          >
            <h3 className="mb-4 text-2xl">
              <Trans>Deploy</Trans> &rarr;
            </h3>
            <p className="text-xl leading-6">
              <Trans>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </Trans>
            </p>
          </a>
        </div>
      </main>

      <footer className="w-full h-24 border-t flex justify-center items-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center"
        >
          <Trans>Powered by</Trans>{" "}
          <img className="ml-2 h-4" src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  );
}

export default Home;

import { AppProps } from "next/app";
import { PrismicPreview } from "@prismicio/next";
import { PRISMIC_REPOSITORY_NAME } from "lib/content";

import Head from "next/head";

import "globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div,
        main {
          height: 100%;
          max-width: 100%;
        }
      `}</style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <PrismicPreview repositoryName={PRISMIC_REPOSITORY_NAME} />
    </>
  );
}

export default App;

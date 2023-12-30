import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="app">
      <Head>
        <title>Dashboard - 1-4</title>
      </Head>
      <Component value="何かしらのコンポーネント" />
    </div>
  );
};

export default MyApp;

import Main from "@components/Main";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Hi! Karthikeya here</title>
        <link rel="icon" href="/avatar.png" />
      </Head>
      <link
        href="https://api.fontshare.com/v2/css?f[]=satoshi@500&display=swap"
        rel="stylesheet"
      />
      <main className="max-w-4xl mx-auto antialiased">
        <Main />
      </main>
    </div>
  );
};

export default Home;

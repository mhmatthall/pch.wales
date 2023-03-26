// pch.wales default page layout
import Head from "next/head";

import Header from "./header";
import Footer from "./footer";

import style from "./layout.module.scss";

// Global variables
export const pageTitleSuffix = " | pch.wales";

// Here comes the layout!
export default function Layout({ children, isHome }) {
  return (
    <div className={style.root}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4444FF" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header />
      <main className={style.main}>
        {children}
      </main>
      <Footer showVunhstLogo={false} />
    </div>
  );
}
// pch.wales/resources page content
import Head from "next/head";
import Link from "next/link";

import Layout, { pageTitleSuffix } from "@/components/layout";

import style from "@/components/layout.module.scss";

export default function Page() {
  return (
    <Layout isHome={false}>
      {/* Inject page-specific HTML header info */}
      <Head>
        <title>{"Resources" + pageTitleSuffix}</title>
        <meta name="description" content="Template for resources page" />
      </Head>
      <div className={style.contentSection}>
        <h1>Resources</h1>
        <p>This page is a work in progress.</p>
        <h2>Studies</h2>
        <ul>
          <li>
            <Link href="/resources/s02">Study S02</Link>
          </li>
          <li>
            <Link href="/resources/s03">Study S03</Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}

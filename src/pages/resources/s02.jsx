// pch.wales study S02 page content
import Head from 'next/head';

import Layout, { pageTitleSuffix } from "@/components/layout";

import style from '@/components/layout.module.scss';

export default function Page() {
  return (
    <Layout isHome={false}>
      {/* Inject page-specific HTML header info */}
      <Head>
        <title>{"S02" + pageTitleSuffix}</title>
        <meta name="description" content="Template for S02 page" />
      </Head>
      <div>
        Study S02
      </div>
    </Layout>
  )
}
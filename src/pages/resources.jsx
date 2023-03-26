// pch.wales/resources page content
import Head from 'next/head';

import Layout, { pageTitleSuffix } from "@/components/layout";

import style from '@/components/layout.module.scss';

export default function Page() {
  return (
    <Layout isHome={false}>
      {/* Inject page-specific HTML header info */}
      <Head>
        <title>{"Resources" + pageTitleSuffix}</title>
        <meta name="description" content="Template for resources page" />
      </Head>
      <div>
        Resources
      </div>
    </Layout>
  )
}
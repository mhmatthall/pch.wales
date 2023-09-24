// pch.wales/team page content
import Head from "next/head";

import Layout, { pageTitleSuffix } from "@/components/layout";

import style from "@/components/layout.module.scss";

export default function Page() {
  return (
    <Layout isHome={false}>
      {/* Inject page-specific HTML header info */}
      <Head>
        <title>{"The team" + pageTitleSuffix}</title>
        <meta name="description" content="Template for team page" />
      </Head>
      <div className={style.contentSection}>
          <h2>The team</h2>
          <p>
            <b>Matt Hall</b> is the project lead and a computer science PhD student
            at Swansea University as a member of the{" "}
            <a
              href="https://people-first.best/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ECHIDNA Centre for Doctoral Training
            </a>
            .
          </p>
          <p>
            <b>Dr. Simon Robinson</b> is a primary supervisor for the project and
            associate professor in computer science at Swansea University, with a
            wealth of experience in human-computer interaction (HCI) research.
          </p>
          <p>
            <b>Dr. Matt Roach</b> is a primary supervisor for the project and
            associate professor in computer science at Swansea University, with
            extensive knowledge of machine learning and ethical AI systems.
          </p>
          <p>
            <b>Prof. Alan Dix</b> is a primary supervisor for the project and Head
            of the Computational Foundry at Swansea University, with decades of
            experience in HCI research and a fantastic beard.
          </p>
        </div>
    </Layout>
  )
}
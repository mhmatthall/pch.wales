// pch.wales study S02 page content
import Head from 'next/head';
import Link from 'next/link';

import Layout, { pageTitleSuffix } from "@/components/layout";
import { S02Form } from "@/components/forms";

import siteStyle from "@/components/layout.module.scss";
import style from './study.module.scss';

export default function Page() {
  return (
    <Layout isHome={false}>
      {/* Inject page-specific HTML header info */}
      <Head>
        <title>{"Understanding the individual's perspective of cancer care in South Wales | Study S02" + pageTitleSuffix}</title>
        <meta name="description" content="I think that there's room to make things better for those in South Wales undergoing cancer care – especially through thoughtfully-designed technology. I want to understand what cancer care receivers currently go through in South Wales and work with them to consider areas which could be improved as well as potential applications of technology which would enable more person-centred cancer care." />
      </Head>
      <div className={style.contentRoot}>
        <Link href="/resources">
          &laquo; Back to Resources
        </Link>
        <div className={siteStyle.contentSection}>
          <h1 className={style.title}>
            Understanding the individual's perspective of cancer care in South Wales
          </h1>
          <div className={style.titleDetails}>
      <div>
              Dec 2022&mdash;May 2023
            </div>
            <div className={style.hLine} />
            <div className={style.right}>
        Study S02
            </div>
          </div>
          <p>
            I think that there&apos;s room to make things better for those in South Wales undergoing cancer care &ndash; especially through thoughtfully-designed technology. I want to understand what cancer care receivers currently go through in South Wales and work with them to consider areas which could be improved as well as potential applications of technology which would enable more person-centred cancer care.
          </p>
          <h3>
            Research questions
          </h3>
          <ul>
            <li>
              What do those with cancer in South Wales experience on their treatment pathway?
            </li>
            <li>
              What do they think about this pathway?
            </li>
            <li>
              What does good quality-of-life look like to them in this situation?
            </li>
            <li>
              How might they consider introducing technology into the pathway to make things better?
            </li>
          </ul>
        </div>
        <div className={siteStyle.outlineSection}>
          <h2>
            Get involved
          </h2>
          <p>
            Are you an individual with cancer care experience in South Wales? I'd love to hear from you!
          </p>
          <p>
            Have a read through this page and if you're keen to take part, fill out the form below and I'll get back to you!
          </p>
          <S02Form />
        </div>
        <div className={style.wide}>
          <h1>
            Downloads
          </h1>
          <p>
            Download the supporting documents for this study here:
          </p>
          <ul className={style.fileList}>
            <li className={style.fileCard}>
              <Link href="/resources/s02/s02h02v03.pdf">
                <img src="/resources/s02/s02h02v03.jpg" alt="Participant information sheet preview" />
                <div className={style.fileName}>
                  Participant information sheet
                </div>
              </Link>
            </li>
            <li className={style.fileCard}>
              <Link href="/resources/s02/s02h01v01.pdf">
                <img src="/resources/s02/s02h01v01.jpg" alt="Participant information sheet preview" />
                <div className={style.fileName}>
                  Consent form
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
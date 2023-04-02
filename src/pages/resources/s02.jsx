// pch.wales study S02 page content
import Head from 'next/head';

import Layout, { pageTitleSuffix } from "@/components/layout";

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
      <div>
        Study S02
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
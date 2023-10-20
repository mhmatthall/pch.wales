// pch.wales study S02 page content
import Head from "next/head";
import Link from "next/link";
import Layout, { pageTitleSuffix } from "@/components/layout";
import siteStyle from "@/components/layout.module.scss";
import style from "./study.module.scss";

export default function Page() {
  return (
    <Layout isHome={false}>
      <Head>
        <title>
          {"Understanding the cancer care givers’ perspective | Study S03" +
            pageTitleSuffix}
        </title>
        <meta
          name="description"
          content="This study is about gaining an understanding of what’s involved in the delivery of cancer care at Velindre, from the care givers’ perspective."
        />
      </Head>
      <div className={style.contentRoot}>
        <Link href="/resources">{"« Back to Resources"}</Link>
        <div className={siteStyle.contentSection}>
          <h1 className={style.title}>
            {"Understanding the cancer care givers’ perspective"}
          </h1>
          <div className={style.titleDetails}>
            <div>Aug 2023&mdash;Dec 2023</div>
            <div className={style.hLine} />
            <div className={style.right}>Study S03</div>
          </div>
          <p>
            {
              "In this study, we will be engaging with care givers at Velindre Cancer Centre to gain an understanding of how they deliver cancer care, their perspectives on the cancer care pathway, and the factors that influence their practice. Through shadowing sessions with various clinical teams, we will observe how care is delivered at Velindre to understand what a typical pathway involves in terms of structure, management, resources, and use of technology. We will also examine the underlying ethos behind practice and the wider practice environment, comparing it to the guidance and principles of popular person-centred models. Brief, follow-up discussions with the teams will explore the systems, guidance, and motives that influence their practice, and will allow us to contrast and compare the ethos of the individual, the team, and the organisation."
            }
          </p>
          <h3>Research questions</h3>
          <p>In terms of practical structure and organisation:</p>
          <ul>
            <li>
              What does cancer care involve of care givers? (people, procedures,
              systems)
            </li>
            <li>How and where are care receivers involved in delivery?</li>
            <li>How does practice change pragmatically?</li>
          </ul>
          <p>In theory and motivation:</p>
          <ul>
            <li>How person-centred is cancer care, as delivered?</li>
            <li>What factors influence practice?</li>
            <li>
              Where do care givers consider opportunity for digital enhancement?
            </li>
          </ul>
          <br />
          <h3>Motivation</h3>
          <p>
            {"The underlying motivation of this study, as with our "}{" "}
            <Link href="/resources/s02">previous work with care receivers</Link>
            {
              ", is to stimulate conversation about technology and its use in enabling practical person-centred healthcare. Effective person-centred healthcare necessitates that care giver and care receiver are equally respected in terms of decision-making, and so we must understand how our future work can reconcile the needs of both care receiver and care giver. Our shadowing sessions will allow us to identify ‘points of friction’ in which practice deviates from our theoretical (read: idealistic) framework of person-centred healthcare, and the follow-up sessions will facilitate mutual learning and the ultimate co-design of a number of speculative digital systems for enhancing the person-centredness of care givers’ practice."
            }
          </p>
        </div>
        <br />
        <div className={style.wide}>
          <h1>Downloads</h1>
          <p>Download the supporting documents for this study here:</p>
          <ul className={style.fileList}>
            <li className={style.fileCard}>
              <Link href="/resources/s03/s03h01v03_factsheet.pdf">
                <img
                  src="/resources/s03/s03h01v03_thumb.jpg"
                  alt="A preview of the cover of the factsheet"
                />
                <div className={style.fileName}>Study factsheet</div>
              </Link>
            </li>
          </ul>
        </div>
        <br />
        <div className={siteStyle.contentSection}>
          <h3>Ethics</h3>
          <p>
            {
              "It's important that I have the freedom to observe and inquire about all aspects of practice in this study. I'm not here to audit or judge anyone at Velindre, nor will our findings be used against anyone involved. Open reflection is an essential part of this study and I hope that it can bring about meaningful and useful improvements in practice and environment at Velindre."
            }
          </p>
          <p>
            {
              "At the same time, I appreciate the need for discretion and respect – especially when this study might involve shadowing in the presence of patients. Whilst it's difficult to pre-empt every scenario I might observe in this study, I have worked hard to make this study flexible and able to adapt to the needs of the moment. I'll only be gathering data with the consent of everyone involved, and our findings will be mutually agreed as to avoid implication."
            }
          </p>
          <p>
            {
              "Ethical approval for this study was obtained from the Swansea University Faculty of Science and Engineering Research Ethics Committee on 17th May 2023 (1-2023-6811-5710). Approval to operate this study as a service evaluation at Velindre University NHS Trust was granted on 11th August 2023."
            }
          </p>
          <p>
            {
              "Feel free to get in touch with any questions, feedback, or issues at any time – simply click the email button at the bottom of the page. Any complaints regarding this study can be sent to "
            }
            <Link href="mailto:researchintegrity@swansea.ac.uk">
              researchintegrity@swansea.ac.uk
            </Link>
            {"."}
          </p>
        </div>
      </div>
    </Layout>
  );
}

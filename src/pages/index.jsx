// pch.wales home page content
import Head from "next/head";

import Layout from "@/components/layout";

import style from "@/components/layout.module.scss";

export default function Page() {
  return (
    <Layout isHome={true}>
      <Head>
        <title>Matt Hall&apos;s PhD Project &ndash; Empowering those with cancer in Wales</title>
        <meta name="description" content="Let's work together to improve the quality-of-life for those with cancer in Wales through digital innovation. Read more about my PhD project here." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="https://pch.wales/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Matt Hall's PhD Project – Empowering those with cancer in Wales" />
        <meta property="og:description" content="Let's work together to improve the quality-of-life for those with cancer in Wales through digital innovation. Read more about my PhD project here." />
        <meta property="og:image" content="https://pch.wales/img/card_test.png" />
      </Head>
      <div>
        <h1>
          Welcome!
        </h1>
        <p>
          Let&apos;s work together to improve the quality-of-life for those with cancer in Wales through digital innovation.
        </p>
        <div className={style.contentSection}>
          <h2>The background</h2>
          <p>
            Cancer diagnosis is a notoriously grievous and brutal experience,
            and one that&apos;s extraordinarily difficult to deal with on a physical,
            mental, and psychosocial level. Treatment regimens come thick and
            fast; constant appointments, harsh treatments, side effects, and the
            complete and abrupt disruption to every aspect of the day-to-day can
            leave those receiving care feeling powerless. Cancer treatment
            becomes a painful burden in itself — with a confusing barrage of
            scans, drugs, and tests frequently leading those with cancer to
            frustration and overwhelm.
          </p>
          <p>
            For caregivers, it can be extremely difficult to understand and
            empathise with the true extent of the situation of those with cancer
            due to the constant and demanding workload driven by systemic
            financial and workforce shortages. This can leave those with cancer
            feeling unsupported and vulnerable — dehumanised by the system,
            withdrawn from their care, and angry with caregivers.
          </p>
          <p>
            Improving this difficult situation in Wales requires a complete shift
            in the way cancer care is delivered: a holistic focus no longer
            limited to simply trying to extend one&apos;s lifespan or achieve maximal
            cost efficiency. Factors such as emotional support, involvement of
            family and friends, shared decision-making, self-care, respect for
            preferences, and continuity of care need to take centre stage in
            cancer practice. Thankfully, this <b>person-centred</b> model of
            healthcare has been formally recognised and become part of NHS Wales&apos;
            new central strategy — codified in recent national policy. However,
            it&apos;s a long and tumultuous road ahead for the service as it endures
            extreme financial constraints and record-long treatment waiting lists.
          </p>
        </div>
        <div className={style.contentSection}>
          <h2>The vision</h2>
          <p>
            We envision a future cancer care experience rich with technology
            that&apos;s{" "}
            <b>designed by those receiving care, for those receiving care</b>. An
            interconnected and intelligent system of apps, wearable technology,
            smart devices, inference, and data will provide an accurate,
            subjective perspective of each person&apos;s life. Caregivers will better
            understand what it&apos;s really like for those undergoing treatment, who
            will subequently be able to keep care receivers continuously educated
            on and involved in the decision-making for their treatment. Care
            receivers will be empowered with the knowledge to decide on their own
            care plan with the full support and input of family and healthcare
            professionals, and be empowered with the knowledge and resources to
            deal with all of the issues associated with treatment promptly.
          </p>
        </div>
        <div className={style.contentSection}>
          <h2>The project</h2>
          <h3>The aim</h3>
          <p>
            Our project is all about finding technology that works to achieve our
            person-centred vision. Working directly with those receiving care at{" "}
            <b>Velindre Cancer Centre</b> in Cardiff, we will co-design and trial
            sustainable digital cancer interventions that empower those using
            them. Due to the participatory nature of the projectm we don&apos;t yet
            know what these interventions will entail, but our team of computer
            scientists and healthcare professionals are ready to make them
            succeed.
          </p>
          <p>
            Of course, creating such interventions is fruitless if there&apos;s no
            commitment from organisations and management. Luckily, NHS Wales is
            primed and ready to embrace person-centred healthcare with the
            creation of the Welsh Value in Health Centre, and Velindre Cancer
            Centre are undertaking a radical redevelopment of their strategy to
            put &apos;digital first&apos;. We&apos;re confident then that our work will
            contribute to the future of cancer care in Wales and provide some of
            the groundwork for NHS Wales&apos; massive, world-leading redevelopment.
          </p>
          <h3>The technical details</h3>
          <p>
            There is huge potential for digital innovation in{" "}
            <b>patient reported outcome measures (PROMs)</b> to empower those
            undergoing cancer treatment and facilitate the shift towards
            person-centred healthcare, with many digital avenues — wearables, IoT,
            machine learning, natural language processing — currently almost
            completely unexplored in the PROMs literature. At the same time, we
            find that existing PROMs instruments have been designed by caregivers,
            for caregivers with rather minimal input by care receivers. Therefore,
            we also place a key focus on adopting a participatory design
            methodology; realigning PROMs to be instruments for empowering care
            receivers by having them as key stakeholders throughout the design
            stage.
          </p>
        </div>
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
      </div>
    </Layout>
  )
}
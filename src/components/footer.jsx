// pch.wales common footer component
import style from './footer.module.scss';

export default function Footer({ showVunhstLogo }) {
  return (
    <footer className={style.container}>
      <div className={style.grid}>
        <div className={style.attributionCol}>
          {
            showVunhstLogo ? (
              <h3>
                A collaborative project between:
              </h3>
            ) : (
              <h3>
                An EPIC CDT project from:
              </h3>
            )
          }
          <ul className={style.attributionLogos}>
            <li>
              <a
                href="https://www.swansea.ac.uk/science/epsrc-centre-for-doctoral-training/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/su_logo.svg"
                  alt="Learn more about the EPIC CDT at Swansea University"
                />
              </a>
            </li>
            {showVunhstLogo && (
              <li>
                <a
                  href="https://velindre.nhs.wales"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/img/vunhst_logo.svg"
                    alt="Visit the Velindre University NHS Trust website"
                  />
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className={style.socialCol}>
          <h3>
            Questions or comments? Get in touch:
          </h3>
          <ul className={style.socialLogos}>
            <li>
              <a
                href="mailto:m.c.hall@swansea.ac.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/social_logo_email.svg"
                  alt="Get in touch with Matt by email"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/matthallSU"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/social_logo_twitter.svg"
                  alt="Follow Matt and the project on Twitter"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
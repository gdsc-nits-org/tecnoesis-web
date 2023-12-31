import styles from "./Footer.module.css";
import pikachu from "/elements/pikachu.gif";
import facebook from "/elements/social_fb.svg";
import instagram from "/elements/social_insta.svg";
import mail from "/elements/social_mail.svg";
import linkedin from "/elements/social_lin.svg";
import twitter from "/elements/social_twit.svg";
import satellite from "/elements/satellite.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={satellite} className={styles.foot_satellite} alt="satellite" />
      <div className={styles.footer_container}>
        <div className={styles.footer_content}>
          <img
            src="/elements/tecneosis.svg"
            className={styles.footer_logo}
            alt="Techno Logo"
          />
          <img src={pikachu} className={styles.pikachu} alt="pikachu" />
          <div className={styles.foot_buttons}>
            <a
              href="https://drive.google.com/file/d/1i53pZdSVj15uRAoAib6ypxKeV18z4K4F/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer "
            >
              <button className={styles.footer_button}>
                DOWNLOAD BROCHURE
              </button>
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdmnmsbM5qv12sPe8ZdAP4cupGOHjMtxzNnKuslO8acKCqSAQ/viewform?usp=pp_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.footer_button}>
                <div className={styles.footer_button_style}>
                  BECOME OUR CAMPUS AMBASSADOR
                </div>
              </button>
            </a>
          </div>
          <div className={styles.footer_contact}>CONTACT US</div>
          <div className={styles.black_flare}></div>
          <div className={styles.footer_icons}>
            <a
              href="https://www.facebook.com/tecnoesis.nits"
              target="_blank"
              rel="noopener noreferrer "
            >
              <img src={facebook} alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/tecnoesis.nits/"
              target="_blank"
              rel="noopener noreferrer "
            >
              <img src={instagram} alt="instagram" />
            </a>
            <a
              href="mailto:Tecnoesis@nits.ac.in"
              target="_blank"
              rel="noopener noreferrer "
            >
              <img
                src={mail}
                style={{ backgroundColor: "white", borderRadius: "10px" }}
                alt="mail"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/tecnoesis-nit-silchar/"
              target="_blank"
              rel="noopener noreferrer "
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <a
              href="https://x.com/tecnoesis_nits?s=20"
              target="_blank"
              rel="noopener noreferrer "
            >
              <img src={twitter} alt="twitter" />
            </a>
          </div>
          <div className={styles.footer_flare}></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

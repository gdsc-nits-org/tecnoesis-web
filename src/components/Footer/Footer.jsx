import styles from "./Footer.module.css";
import Button_page from "../Button/Button";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.footer_content}>
          <img
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1706105860/tecnoesis/Tecno_24_logo_d3tac1.png"
            className={styles.footer_logo}
            alt="Techno Logo"
          />
          <img src="https://res.cloudinary.com/dhry5xscm/image/upload/v1706107103/pikachu_dhcqjy.gif" className={styles.pikachu} alt="pikachu" />
          <div className={styles.foot_buttons}>
            <a
              href="https://drive.google.com/file/d/1i53pZdSVj15uRAoAib6ypxKeV18z4K4F/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer "
            >
              <Button_page>
                <div className={styles.foot_btn}>DOWNLOAD BROCHURE</div>

              </Button_page>
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdmnmsbM5qv12sPe8ZdAP4cupGOHjMtxzNnKuslO8acKCqSAQ/viewform?usp=pp_url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button_page >
                <div className={styles.foot_btn}>BECOME OUR CAMPUS AMBASSADOR</div>

              </Button_page>
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
              <img src="https://res.cloudinary.com/dhry5xscm/image/upload/v1706107103/social_fb_hjt6l2.svg" alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/tecnoesis.nits/"
              target="_blank"
              rel="noopener noreferrer "
            >
              <img src="https://res.cloudinary.com/dhry5xscm/image/upload/v1706107098/social_insta_puschh.svg" alt="instagram" />
            </a>
            <a
              href="mailto:Tecnoesis@nits.ac.in"
              target="_blank"
              rel="noopener noreferrer "
            >
              <img
                src="https://res.cloudinary.com/dhry5xscm/image/upload/v1706107096/social_mail_ilraoy.svg"
                style={{ width: '2.5rem' }}
                alt="mail"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/tecnoesis-nit-silchar/"
              target="_blank"
              rel="noopener noreferrer "
            >
              <img src="https://res.cloudinary.com/dhry5xscm/image/upload/v1706107099/social_lin_c2x0um.svg" alt="linkedin" />
            </a>
            <a
              href="https://x.com/tecnoesis_nits?s=20"
              target="_blank"
              rel="noopener noreferrer "
            >
              <img src="https://res.cloudinary.com/dhry5xscm/image/upload/v1698410357/tech-week-2023/Social_Icons_p5m59p.svg" alt="twitter" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;

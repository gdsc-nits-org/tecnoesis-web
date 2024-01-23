import React from "react";
import styles from "../Team/Card.module.css";
import frame from "../../../public/images/teamPage/frame.svg";
import member from "../../../public/images/teamPage/member.svg";
import logo from "../../../public/images/teamPage/logo.svg";
import tecnoSid from "../../../public/images/teamPage/technoSid.svg";
import frameBorder from "../../../public/images/teamPage/border.png";
import linkedin from "../../../public/images/teamPage/linkedin.svg"
import facebook from "../../../public/images/teamPage/facebook.svg"
import github from "../../../public/images/teamPage/github.svg"

export const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <img src={frame} alt="Image Frame" className={styles.imageFrame} />
        <img src={logo} alt="Image Frame" className={styles.imageFrame} />
        <img
          src={frameBorder}
          alt="Image Frame"
          className={styles.imageFrame}
        />
        <img
          src={tecnoSid}
          alt="Image Frame"
          className={`${styles.imageFrame} ${styles.tecnoSid}`}
        />

        <div className={styles.dp}>
          <img src={member} alt="Image Frame" />
        </div>


        <div className={styles.profile}>
          <div className={styles.prProfile}>
            <div className={styles.name}>Name</div>
            <div className={styles.position}>Developer</div>
          </div>
          <div className={styles.SocialProfile}>
            <div className={styles.linkedin}><img src={linkedin}/></div>
            <div className={styles.github}><img src={github}/></div>
            <div className={styles.facebook}><img src={facebook}/></div>
          </div>
        </div>

      </div>

    </div>
  );
};

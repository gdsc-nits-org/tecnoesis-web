import React from "react";
import styles from "../Team/Card.module.css";
import frame from "../../../public/images/teamPage/frame.svg";
import member from "../../../public/images/teamPage/member.webp";
import logo from "../../../public/images/teamPage/logo.svg";
import tecnoSid from "../../../public/images/teamPage/technoSid.svg";
import frameBorder from "../../../public/images/teamPage/border.png";
import linkedin from "../../../public/images/teamPage/linkedin.svg";
import facebook from "../../../public/images/teamPage/facebook.svg";
import github from "../../../public/images/teamPage/github.svg";

export const Card = ({name , designation , image}) => {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <img src={frame} alt="Image Frame" className={styles.imageFrame} />
        <img src={logo} alt="Image Frame" className={styles.logo} />
        <img
          src={frameBorder}
          alt="Image Frame"
          className={`${styles.imageFrame} ${styles.frame}`}
        />

        <img src={image} alt="Image Frame" className={`${styles.imageFrame} ${styles.dp}`}/>

        <div className={styles.profile}>
          <div className={styles.prProfile}>
            <div className={styles.name}>{name}</div>
            <div className={styles.position}>{designation}</div>
          </div>
          <div className={styles.SocialProfile}>
            <div className={styles.icon}>
              <img src={linkedin} />
            </div>
            <div className={styles.icon}>
              <img src={github} />
            </div>
            <div className={styles.icon}>
              <img src={facebook} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

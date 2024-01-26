import React from "react";
import styles from "../Team/Card.module.css";
import frame from "/images/teamPage/frame.svg";
import member from "/images/teamPage/member.webp";
import logo from "/images/teamPage/logo.svg";
import card_dp from "/elements/tech_card.svg";
import tecnoSid from "/images/teamPage/technoSid.svg";
import frameBorder from "/images/teamPage/border.png";
import linkedin from "/images/teamPage/linkedin.svg";
import facebook from "/images/teamPage/facebook.svg";
import github from "/images/teamPage/github.svg";

export const Card = ({ name, designation, image }) => {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.frameChild}>
          <img src={card_dp} className={styles.imageFrame} />
          <img src={logo} className={styles.logo} />
          <img
            src={card_dp}

            className={`${styles.imageFrame} ${styles.frame}`}
          />

          <img
            src={image}

            className={`${styles.imageFrame} ${styles.dp}`}
          />
        </div>

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

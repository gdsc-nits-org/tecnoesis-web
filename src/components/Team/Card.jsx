import React from "react";
import styles from "../Team/Card.module.css";
import frame from "/images/teamPage/frame.svg";
import member from "/images/teamPage/member.webp";
import logo from "/images/teamPage/logo.svg";
import card_dp from "/elements/tech_card.svg";
import tecnoSid from "/images/teamPage/technoSid.svg";
import frameBorder from "/images/teamPage/border.png";
import linkedinImg from "/images/teamPage/linkedin.svg";
import facebookImg from "/images/teamPage/facebook.svg";
import githubImg from "/images/teamPage/github.svg";

export const Card = ({ name, designation, image , linkedin , facebook , github , inst}) => {
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
        </div>

          <img
            src={image}

            className={`${styles.imageFrame} ${styles.dp}`}
          />

        <div className={styles.profile}>
          <div className={styles.prProfile}>
            <div className={styles.name}>{name}</div>
            <div className={styles.position}>{designation}</div>
          </div>
          <div className={styles.SocialProfile}>
            <div className={styles.icon}>
              <a href={linkedin} target="_blank">
              <img src={linkedinImg} />
              </a>
            </div>
            <div className={styles.icon}>
            <a href={github} target="_blank">
              <img src={githubImg} />
              </a>
            </div>
            <div className={styles.icon}>
            <a href={facebook} target="_blank">
              <img src={facebookImg} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

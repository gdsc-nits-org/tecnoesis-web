import { useState } from "react";

import Lottie from "lottie-react";
import aboutus_pc from "../../assets/aboutus_pc.json";
import aboutus_coin from "../../assets/aboutus_coin.json";
import styles from "./About.module.css";

function About() {
  const [coinbox, setCoinbox] = useState(false);
  const style = {
    height: "auto",
  };
  const style2 = {
    height: "auto",
    // width: "25rem"
  };
  const handleEvent = () => {
    setCoinbox(!coinbox);
  };

  return (
    <>
      <div id='about' >
        <div className={styles.bgContainer}>
          <div className={styles.contentContainer}>
            <div className={styles.aboutleftImg}></div>
            <div className={styles.textContainer}>
              <div className={styles.aboutUsText}>
                <div className={styles.techFestText}>ABOUT US</div>
                <div className={styles.eventText}>
                  Tecnoesis is the annual techno-managerial event of NIT
                  Silchar, promising all tech geeks the ideal niche of
                  fascinating events, workshops, competitions and interactions
                  worth a lifetime. This mega event has left its mark as of the
                  most prominent techfests across the country. The cauldron of
                  enthusiasm and knowledge attracts various students, presenting
                  the chance to let their minds run wild with ideads, fostering
                  the inventors of the future.
                </div>
              </div>
              <div className={styles.spaceBoxParent}>
                <div className={styles.spaceBox}></div>
              </div>
              <div className={styles.lottieContainerParent}>
                <div className={styles.lottieContainer}>
                  <div
                    className={`${
                      coinbox
                        ? styles.translateLottie
                        : styles.retranslateLottie
                    } ${styles.mb4}`}
                  >
                    <Lottie
                      animationData={aboutus_coin}
                      loop={true}
                      style={style}
                    />
                  </div>
                  <div className={styles.coinboxImageParent}>
                    <div
                      onMouseOver={handleEvent}
                      onMouseOut={handleEvent}
                      className={`${
                        coinbox ? styles.translate : styles.retranslate
                      } ${styles.coinboxImage}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* about nit silchar*/}
          <div className={styles.contentContainer2}>
            <div className={styles.aboutrightImg}></div>
            <div className={styles.textContainer2}>
              <div className={styles.lottieContainerParent2}>
                <div className={styles.lottieContainer2}>
                  <Lottie
                    animationData={aboutus_pc}
                    loop={true}
                    style={style2}
                  />
                </div>
              </div>

              <div className={styles.spaceBoxParent2}>
                <div className={styles.spaceBox2}></div>
              </div>
              <div className={styles.aboutNitText}>
                <div className={styles.techFestText2}>
                  ABOUT<span className={styles.wordbreak}></span> NIT SILCHAR
                </div>
                <div className={styles.eventText2}>
                  A bright future requires a bright start. NITS abides by this
                  mantra. The institute believes in equipping students with the
                  knowledge and skills in their chosen streams, inculcate
                  values, identify hidden talents, and provide opportunities for
                  students to realize their full potential. It facilitates the
                  requisite support and encouragement via various cultural and
                  academic activities to shape the body and soul. It has
                  transformed into a sought out centre of learning.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

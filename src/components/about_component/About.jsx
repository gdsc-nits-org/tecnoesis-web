import { useState } from "react";

import Lottie from "lottie-react";
import aboutus_pc from "./aboutus_pc.json";
import aboutus_coin from "./aboutus_coin.json";
import styles from "./About.module.css";
import styles2 from "./About2.module.css";

function About() {
  const [coinbox, setCoinbox] = useState(false);
  const style = {
    height: "16rem",
  };
  const style2 = {
   
    height: "25rem",
    width: "25rem"
  };
  const handleEvent = () => {
    setCoinbox(!coinbox);
  };

  // const interactivity = {
  //   mode: "scroll",
  //   actions: [
  //     {
  //       visibility: [0, 0.2],
  //       type: "stop",
  //       frames: [0],
  //     },
  //     {
  //       visibility: [0.2, 0.45],
  //       type: "seek",
  //       frames: [0, 45],
  //     },
  //     {
  //       visibility: [0.45, 1.0],
  //       type: "loop",
  //       frames: [45, 60],
  //     },
  //   ],
  // };
  //   <div>
  //   <Lottie animationData={aboutus_pc} loop={true} autoplay={true} style={style}/>
  //   <Lottie animationData={aboutus_coin}  loop={true} style={style}  />

  //   </div  >
  //   <div className="  w-[100%] bg-[url('./bg2.svg')]" >
  //   <div className="flex w-[70.5625rem] h-[31.75rem] items-center gap-[7.6875rem] shrink-0 px-40 py-4">
  // hello i am VIvek
  //   </div>
  //   </div>
  return (
    <>
      <div>
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
              <div>
                <div className={styles.spaceBox}></div>
              </div>
              <div className={styles2.coinboxContainerParent}>
                <div className={styles.coinboxContainer}>
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
          <div className={styles2.contentContainer}>
          <div className={styles2.aboutleftImg}></div>
            <div className={styles2.textContainer}>
            <div className={styles2.coinboxContainerParent}>
                <div className={styles2.coinboxContainer}>
                  
                    <Lottie
                      animationData={aboutus_pc}
                      loop={true}
                      style={style2}
                    />
                  
                  
                </div>
              </div>
              
              <div>
                <div className={styles2.spaceBox}></div>
              </div>
              <div className={styles2.aboutUsText}>
                <div className={styles2.techFestText}>ABOUT NIT SILCHAR</div>
                <div className={styles2.eventText}>
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

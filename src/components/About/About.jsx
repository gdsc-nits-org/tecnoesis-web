import { useState } from "react";
import Lottie from "lottie-react";
import aboutus_pc from "../../assets/aboutus_pc.json";
import aboutus_coin from "../../assets/aboutus_coin.json";
import alien_near_module_section from "../../assets/alien_near_module_section.json";
import heart from "../../assets/heart.json";
import styles from "./About.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import HomeCarousel from '../HomeCarousel/HomeCarousel.jsx'

function About() {
  const [coinbox, setCoinbox] = useState(false);
  const style = {
    height: "auto",
  };
  const style2 = {
    height: "auto",
  };
  const handleEvent = () => {
    setCoinbox(!coinbox);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: true,
  };

  return (
    <>
      <div id="about">
        <div className={styles.bgContainer}>
          <div className={styles.contentContainer}>
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
                    className={`${coinbox
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
                      className={`${coinbox ? styles.translate : styles.retranslate
                        } ${styles.coinboxImage}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* about nit silchar*/}
          <div className={styles.contentContainer2}>
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
          <div
            className={`${styles.contentContainer3} ${styles.containerPadding}`}
          >
            <div className={styles.alienLottieContainer}>
              <Lottie
                animationData={alien_near_module_section}
                loop={true}
                style={style2}
              />
            </div>
            <div className={styles.moduleContainer}>
              <div className={styles.heartLottieContainer}>
                <Lottie animationData={heart} loop={true} style={style2} />
              </div>

              <div className={styles.moduletext}>MODULES</div>
              <div className={styles.eventText3}>
                Tecnoesis, an awaited fiesta filled with technology and creativity finally knocks on your doors and it's time to explore. Starting from day zero till the last day, it is a colossal affair that encompasses several activities, be it building a robot or designing a bridge. It has it all. From building of robots in Robotron, learning the automobile secrets in SAE, exploring entrepreneurship in Empresario, innovation in ASME to having minds blown in MYNDSNARE, hacking races in NITS HACKS, and city exploration in SMART CITY. These are just a few and a lot more fun awaits you. Hold on to your horses and get ready for a vibrant and techy carnival.
              </div>

              <div className={styles.buttonContainer}>
                <Link to="/modules">
                  <Button>
                    <a className={styles.moduleButton}>PLAY MODULES</a>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.contentContainer3} id="gallery" >
            <div className={styles.photoContainer}>
              <div className={styles.moduletext}>PHOTO GALLERY</div>

              <HomeCarousel />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

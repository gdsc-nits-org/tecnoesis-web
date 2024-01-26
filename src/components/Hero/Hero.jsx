import React from "react";
import Lottie from "lottie-react";
// import home_arror from "../../lotties/home_arror.json";
// import dots from "../../lotties/loading.json";
import styles from "./Herosection.module.css";
import home_arrow from "../../assets/home_arrow.json";

import { Link } from "react-scroll";

function Hero() {
  return (
    // <section className={styles.heroSection} id="hero">
    //   <img
    //     className={styles.starsImg}
    //     src="images/bg landing stars.svg"
    //     alt=""
    //     loading="lazy"
    //   />
    //   <img
    //     className={styles.buildImg}
    //     src="images/build.svg"
    //     alt=""
    //     loading="lazy"
    //   />
    //   <img
    //     className={styles.lightsImg}
    //     src="images/lights.svg"
    //     alt=""
    //     loading="lazy"
    //   />
    //   <img
    //     className={styles.mobBack}
    //     src="images/mobback.png"
    //     alt=""
    //     loading="lazy"
    //   />

    //   <div className={styles.tecComing}>
    //     <div className={styles.tecLogo}>
    //       <img src="images/Tecno 24 logo.png" alt="" loading="lazy" />
    //     </div>

    //     <div className={styles.comingSoon}>
    //       <img src="images/Group 28.svg" alt="" loading="lazy" />
    //     </div>

    //     <div className={styles.pacmanContainer}>
    //       <Lottie animationData={dots} />
    //     </div>
    //   </div>
    //   <Link
    //     to="about"
    //     spy={true}
    //     smooth={true}
    //     hashSpy={true}
    //     offset={50}
    //     duration={500}
    //   >
    //     <a>
    //       <Lottie className={styles.arrowLottie} animationData={home_arror} />
    //     </a>
    //   </Link>
    // </section>
    <div className={styles.gifBackground} id="hero">
      <div>
        <img
          src="https://res.cloudinary.com/dnitrnzho/image/upload/v1706279238/Tecno_24_logo_ifx9ru.png"
          alt="Tecnoesis 2024"
          className={styles.tecnoLogo}
        />
      </div>
      <div className={styles.dateTecno}>01. 02. 03. 04</div>
      <div className={styles.dateTecno}>FEBRUARY</div>
      <div className={styles.arrowLottieContainer}>
        <div className={styles.arrowLottie}>
          <Link
            to="about"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
          >
            <Lottie
              animationData={home_arrow}
              loop={true}
              style={{ width: "auto", height: "100%" }}
            />
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Hero;

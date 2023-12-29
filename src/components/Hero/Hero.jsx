import React from 'react'

import Lottie from 'lottie-react';
import home_arror from "../../lotties/home_arror.json";
import dots from "../../lotties/dots.json";
import styles from './Herosection.module.css';

function Herosection () {
  
  return (
    <section className={styles.heroSection}>

      <img className= {styles.buildImg} src="images/build.svg" alt="" loading='lazy'/>
      <img className= {styles.starsImg} src="images/bg landing stars.svg" alt="" loading='lazy'/>
      <img className= {styles.lightsImg} src="images/lights.svg" alt="" loading='lazy'/>


      <div className={styles.tecComing}>

      <div className={styles.tecLogo}>
        <img src="images/Tecno 24 logo.png" alt="" loading='lazy'/>
      </div>

      <div className={styles.comingSoon}>
        <img src="images/Group 28.svg" alt="" loading='lazy'/>
      </div>

      <div className={styles.pacmanContainer}>
        <div class={styles.pacmanImage}></div>
      <Lottie className={styles.pacmanLottie} animationData={dots} />
      </div>
      </div>
      
      <a href="#about">
      <Lottie className={styles.arrowLottie} animationData={home_arror} />
      </a>

  </section>
  )
}

export default Herosection


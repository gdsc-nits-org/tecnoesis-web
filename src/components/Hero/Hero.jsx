import React from 'react'

import Lottie from 'lottie-react';
import home_arror from "../../lotties/home_arror.json";
import pacman from "../../lotties/pacman.json";
import styles from './Herosection.module.css';

function Herosection () {
  return (
    <section className={styles.heroSection}>

      <img className= {styles.bgImg} src="images/bg_landing.svg" alt="" />

      <img className= {styles.mobImg} src="images/mobbg.png" alt=""  />

      <img className={styles.tecLogo}src="images/Tecno 24 logo.png" alt="" />
      <img className={styles.comingSoon} src="images/Group 28.svg" alt="" />
      
      
      <Lottie className={styles.arrowLottie} animationData={home_arror} />
      
        
      <Lottie className={styles.pacmanLottie} animationData={pacman} />
  </section>
  )
}

export default Herosection


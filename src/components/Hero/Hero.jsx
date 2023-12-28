import React from 'react'

import Lottie from 'lottie-react';
import home_arror from "../../lotties/home_arror.json";
import pacman from "../../lotties/pacman.json";
import styles from './Herosection.module.css';

function Herosection () {
  
  return (
    <section className={styles.heroSection}>

      <img className= {styles.bgImg} src="images/bg_landing.svg" alt="" loading='lazy'/>

      <img className= {styles.mobImg} src="images/mobbg.png" alt=""  loading='lazy'/>

      <img className={styles.tecLogo}src="images/Tecno 24 logo.png" alt="" loading='lazy'/>
      <img className={styles.comingSoon} src="images/Group 28.svg" alt="" loading='lazy'/>
      
      <a href="#about">
      <Lottie className={styles.arrowLottie} animationData={home_arror} />
      </a>
        
      <Lottie className={styles.pacmanLottie} animationData={pacman} />
  </section>
  )
}

export default Herosection


import React from 'react'


import Lottie from 'lottie-react';
import home_arror from "../../lotties/home_arror.json";
import pacman from "../../lotties/pacman.json";
import styles from '../Herosection/Herosection.module.css';

function Herosection () {
  return (
    <section className={styles.heroSection}>

      <img className= {styles.bgImg} src="./public/images/bg landing.svg" alt="" />

      <img src="./public/images/mobbg.png" alt="" className= {styles.mobImg} />

      <img className={styles.tecLogo}src="./public/images/Tecno 24 logo.png" alt="" />
      <img className={styles.comingSoon} src="./public/images/Group 28.svg" alt="" />
      
      <div className={styles.arrowLottie}>
      <Lottie animationData={home_arror} />
      </div>
        
      <Lottie className={styles.pacmanLottie} animationData={pacman} />
  </section>
  )
}

export default Herosection


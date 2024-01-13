import { useState } from "react";
     import module_page_ring_animation from "../../assets/module_page_ring_animation.json";

import Lottie from "lottie-react";
import styles from "./Module.module.css";

function Module() {
const [showRing1, setShowRing1] = useState(false);
const [showRing2, setShowRing2] = useState(false);
const [showRing3, setShowRing3] = useState(false);
const [showRing4, setShowRing4] = useState(false);
const [showRing5, setShowRing5] = useState(false);
const [showRing6, setShowRing6] = useState(false);
const [showRing7, setShowRing7] = useState(false);

const delayTime = 400;

    const handleEvent1=()=> {
        setShowRing1(true);

      
    }
    const handleEvent11=()=> {
        setTimeout(() => {
            setShowRing1(false);
           }, delayTime);
    }
    const handleEvent2=()=> {
        setShowRing2(true);
    }
    const handleEvent22=()=> {
        setTimeout(() => {
            setShowRing2(false);
           }, delayTime);
    }
    const handleEvent3=()=> {
        setShowRing3(true);
    }
    const handleEvent33=()=> {
        setTimeout(() => {
            setShowRing3(false);
           }, delayTime);
    }
    const handleEvent4=()=> {
        setShowRing4(true);
    }
    const handleEvent44=()=> {
        setTimeout(() => {
            setShowRing4(false);
           }, delayTime);
    }
    const handleEvent5=()=> {
        setShowRing5(true);
    }
    const handleEvent55=()=> {
        setTimeout(() => {
            setShowRing5(false);
           }, delayTime);
    }
    const handleEvent6=()=> {
        setShowRing6(true);
    }
    const handleEvent66=()=> {
        setTimeout(() => {
            setShowRing6(false);
           }, delayTime);
    }
   
    const handleEvent7=()=> {
        setShowRing7(true);
    }
    const handleEvent77=()=> {
        setTimeout(() => {
            setShowRing7(false);
           }, delayTime);
    }
  return (
    <>
      <div className={styles.boxContainerParent}>
        <div className={styles.boxContainer}>
          <div className={styles.moduleContainer}>
            <div className={styles.modulestext}>ROBOWARS</div>
            <div className={styles.moduleFrames}>
              <div className={styles.moduleImg} />

              <div className={styles.moduleImg} />

              <div className={styles.moduleImg} />
            </div>
          </div>
          <div className={styles.moduleContainer}>
            <div className={styles.modulestext}>V-WARS</div>
            <div className={styles.moduleFrames}>
              <div className={styles.moduleImg} />

              <div className={styles.moduleImg} />

              <div className={styles.moduleImg} />
            </div>
          </div>
          <div className={styles.moduleContainer}>
            <div className={styles.modulestext}>SHOWCASE</div>
            <div className={styles.moduleFrames}>
              <div className={styles.moduleImg} />

              <div className={styles.moduleImg} />

              <div className={styles.moduleImg} />
            </div>
          </div>
        </div>
        <div className={styles.rightFrame}>
          <div className={styles.moduleNamesHeading}>MODULES</div>
          <div   className={styles.moduleName} ><span onMouseOver={handleEvent1} onMouseOut={handleEvent11} style={{zIndex:'2'}}>Robotron</span> <Lottie
                    animationData={module_page_ring_animation}
                    loop={false}
                   className= {`${showRing1 ? styles.lottieAnimation : styles.lottieAnimation2}`}
                  /> </div>
          <div   className={styles.moduleName} ><span onMouseOver={handleEvent2} onMouseOut={handleEvent22} style={{zIndex:'2'}}>V-Wars</span> <Lottie
                    animationData={module_page_ring_animation}
                    loop={false}
                   className= {`${showRing2 ? styles.lottieAnimation : styles.lottieAnimation2}`}
                  /> </div>
          <div   className={styles.moduleName} ><span onMouseOver={handleEvent3} onMouseOut={handleEvent33} style={{zIndex:'2'}}>Showcase</span> <Lottie
                    animationData={module_page_ring_animation}
                    loop={false}
                   className= {`${showRing3 ? styles.lottieAnimation : styles.lottieAnimation2}`}
                  /> </div>
          <div   className={styles.moduleName} ><span onMouseOver={handleEvent4} onMouseOut={handleEvent44} style={{zIndex:'2'}}>Amazers</span> <Lottie
                    animationData={module_page_ring_animation}
                    loop={false}
                   className= {`${showRing4 ? styles.lottieAnimation : styles.lottieAnimation2}`}
                  /> </div>
          <div   className={styles.moduleName} ><span onMouseOver={handleEvent5} onMouseOut={handleEvent55} style={{zIndex:'2'}}>Cyberwrap</span> <Lottie
                    animationData={module_page_ring_animation}
                    loop={false}
                   className= {`${showRing5 ? styles.lottieAnimation : styles.lottieAnimation2}`}
                  /> </div>
          <div   className={styles.moduleName} ><span onMouseOver={handleEvent6} onMouseOut={handleEvent66} style={{zIndex:'2'}}>Myndsnare</span> <Lottie
                    animationData={module_page_ring_animation}
                    loop={false}
                   className= {`${showRing6 ? styles.lottieAnimation : styles.lottieAnimation2}`}
                  /> </div>
          <div   className={styles.moduleName} ><span onMouseOver={handleEvent7} onMouseOut={handleEvent77} style={{zIndex:'2'}}>Smartcity</span> <Lottie
                    animationData={module_page_ring_animation}
                    loop={false}
                   className= {`${showRing7 ? styles.lottieAnimation : styles.lottieAnimation2}`}
                  /> </div>
          
        </div>
      </div>
    </>
  );
}

export default Module;

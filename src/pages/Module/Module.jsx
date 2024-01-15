import { useState } from "react";
import module_page_ring_animation from "../../assets/module_page_ring_animation.json";

import Lottie from "lottie-react";
import styles from "./Module.module.css";
import { useEffect } from "react";
import Slider from "react-slick";
import "./slick.css"; 
import "./slick-theme.css";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";


function Module() {
  const [showRing1, setShowRing1] = useState(false);
  const [showRing2, setShowRing2] = useState(false);
  const [showRing3, setShowRing3] = useState(false);
  const [showRing4, setShowRing4] = useState(false);
  const [showRing5, setShowRing5] = useState(false);
  const [showRing6, setShowRing6] = useState(false);
  const [showRing7, setShowRing7] = useState(false);

  const delayTime = 400;

  const handleEvent1 = () => {
    setShowRing1(true);
  };
  const handleEvent11 = () => {
    setTimeout(() => {
      setShowRing1(false);
    }, delayTime);
  };
  const handleEvent2 = () => {
    setShowRing2(true);
  };
  const handleEvent22 = () => {
    setTimeout(() => {
      setShowRing2(false);
    }, delayTime);
  };
  const handleEvent3 = () => {
    setShowRing3(true);
  };
  const handleEvent33 = () => {
    setTimeout(() => {
      setShowRing3(false);
    }, delayTime);
  };
  const handleEvent4 = () => {
    setShowRing4(true);
  };
  const handleEvent44 = () => {
    setTimeout(() => {
      setShowRing4(false);
    }, delayTime);
  };
  const handleEvent5 = () => {
    setShowRing5(true);
  };
  const handleEvent55 = () => {
    setTimeout(() => {
      setShowRing5(false);
    }, delayTime);
  };
  const handleEvent6 = () => {
    setShowRing6(true);
  };
  const handleEvent66 = () => {
    setTimeout(() => {
      setShowRing6(false);
    }, delayTime);
  };

  const handleEvent7 = () => {
    setShowRing7(true);
  };
  const handleEvent77 = () => {
    setTimeout(() => {
      setShowRing7(false);
    }, delayTime);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // arrows: false,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnFocus : true,
         
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 720);
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles.boxContainerParent} >
        <div className={styles.boxContainer}>
          <div id="section1" className={styles.moduleContainer}>
            <div className={styles.modulestext}>ROBOWARS</div>
                             

            {isSmallScreen ? (
        <div className={styles.moduleFrames}>
        <Slider {...settings}>
          <div className={styles.moduleImg} >
           <div  className={styles.moduleImgContent}>
               ROBOWAR
            </div>
          </div>
          <div className={styles.moduleImg} >
          <div  className={styles.moduleImgContent}>
               ROBOWAR
            </div>
          </div>
          <div className={styles.moduleImg} >
          <div  className={styles.moduleImgContent}>
               ROBOWAR
            </div>
          </div>
       </Slider>
     
          </div>
      ) : (
        <div className={styles.moduleFrames}>
              <div className={styles.moduleImg} >
               <div  className={styles.moduleImgContent}>
                   ROBOWAR
                </div>
              </div>
              <div className={styles.moduleImg} >
              <div  className={styles.moduleImgContent}>
                   ROBOWAR
                </div>
              </div>
              <div className={styles.moduleImg} >
              <div  className={styles.moduleImgContent}>
                   ROBOWAR
                </div>
              </div>
         
              </div>
      )}

            
            {/* <div className={styles.moduleFrames}>
              <div className={styles.moduleImg} />

              <div className={styles.moduleImg} />

              <div className={styles.moduleImg} />
              </div> */}
           
          </div>
          <div id="section2" className={styles.moduleContainer}>
            <div className={styles.modulestext}>V-WARS</div>
            {isSmallScreen ? (
        <div className={styles.moduleFrames}>
        <Slider {...settings}>
          <div className={styles.moduleImg} >
           <div  className={styles.moduleImgContent}>
               ROBOWAR
            </div>
          </div>
          <div className={styles.moduleImg} >
          <div  className={styles.moduleImgContent}>
               ROBOWAR
            </div>
          </div>
          <div className={styles.moduleImg} >
          <div  className={styles.moduleImgContent}>
               ROBOWAR
            </div>
          </div>
       </Slider>
     
          </div>
      ) : (
        <div className={styles.moduleFrames}>
              <div className={styles.moduleImg} >
               <div  className={styles.moduleImgContent}>
                   ROBOWAR
                </div>
              </div>
              <div className={styles.moduleImg} >
              <div  className={styles.moduleImgContent}>
                   ROBOWAR
                </div>
              </div>
              <div className={styles.moduleImg} >
              <div  className={styles.moduleImgContent}>
                   ROBOWAR
                </div>
              </div>
         
              </div>
      )}
          </div>
          <div id="section3" className={styles.moduleContainer}>
            <div className={styles.modulestext}>SHOWCASE</div>
            {isSmallScreen ? (
        <div className={styles.moduleFrames}>
        <Slider {...settings}>
          <div className={styles.moduleImg} >
           <div  className={styles.moduleImgContent}>
               ROBOWAR
            </div>
          </div>
          <div className={styles.moduleImg} >
          <div  className={styles.moduleImgContent}>
               ROBOWAR
            </div>
          </div>
          <div className={styles.moduleImg} >
          <div  className={styles.moduleImgContent}>
               ROBOWAR
            </div>
          </div>
       </Slider>
     
          </div>
      ) : (
        <div className={styles.moduleFrames}>
              <div className={styles.moduleImg} >
               <div  className={styles.moduleImgContent}>
                   ROBOWAR
                </div>
              </div>
              <div className={styles.moduleImg} >
              <div  className={styles.moduleImgContent}>
                   ROBOWAR
                </div>
              </div>
              <div className={styles.moduleImg} >
              <div  className={styles.moduleImgContent}>
                   ROBOWAR
                </div>
              </div>
         
              </div>
      )}
          </div>
        </div>
        <div className={styles.rightFrameParent}>
        <div className={styles.rightFrame}>
          <div className={styles.moduleNamesHeading}>MODULES</div>
          <div className={styles.moduleName}>
            <a href="#section1"
              onMouseOver={handleEvent1}
              onMouseOut={handleEvent11}
              className={styles.link}
            >
              Robotron
            </a>{" "}
            <Lottie
              animationData={module_page_ring_animation}
              loop={false}
              className={`${
                showRing1 ? styles.lottieAnimation : styles.lottieAnimation2
              }`}
            />{" "}
          </div>
          <div className={styles.moduleName}>
            <a href="#section2"
              onMouseOver={handleEvent2}
              onMouseOut={handleEvent22}
              className={styles.link}
            >
              V-Wars
            </a>{" "}
            <Lottie
              animationData={module_page_ring_animation}
              loop={false}
              className={`${
                showRing2 ? styles.lottieAnimation : styles.lottieAnimation2
              }`}
            />{" "}
          </div>
          <div className={styles.moduleName}>
            <a href="#section3"
              onMouseOver={handleEvent3}
              onMouseOut={handleEvent33}
              className={styles.link}
            >
              Showcase
            </a>{" "}
            <Lottie
              animationData={module_page_ring_animation}
              loop={false}
              className={`${
                showRing3 ? styles.lottieAnimation : styles.lottieAnimation2
              }`}
            />{" "}
          </div>
          <div className={styles.moduleName}>
            <a
              onMouseOver={handleEvent4}
              onMouseOut={handleEvent44}
              className={styles.link}
            >
              Amazers
            </a>{" "}
            <Lottie
              animationData={module_page_ring_animation}
              loop={false}
              className={`${
                showRing4 ? styles.lottieAnimation : styles.lottieAnimation2
              }`}
            />{" "}
          </div>
          <div className={styles.moduleName}>
            <a
              onMouseOver={handleEvent5}
              onMouseOut={handleEvent55}
              className={styles.link}
            >
              Cyberwrap
            </a>{" "}
            <Lottie
              animationData={module_page_ring_animation}
              loop={false}
              className={`${
                showRing5 ? styles.lottieAnimation : styles.lottieAnimation2
              }`}
            />{" "}
          </div>
          <div className={styles.moduleName}>
            <a
              onMouseOver={handleEvent6}
              onMouseOut={handleEvent66}
              className={styles.link}
            >
              Myndsnare
            </a>{" "}
            <Lottie
              animationData={module_page_ring_animation}
              loop={false}
              className={`${
                showRing6 ? styles.lottieAnimation : styles.lottieAnimation2
              }`}
            />{" "}
          </div>
          <div className={styles.moduleName}>
            <a
              onMouseOver={handleEvent7}
              onMouseOut={handleEvent77}
              className={styles.link}
            >
              Smartcity
            </a>{" "}
            <Lottie
              animationData={module_page_ring_animation}
              loop={false}
              className={`${
                showRing7 ? styles.lottieAnimation : styles.lottieAnimation2
              }`}
            />{" "}
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Module;

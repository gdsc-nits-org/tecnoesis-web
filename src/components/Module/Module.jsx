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


const Module = () => {
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
      setIsSmallScreen(window.innerWidth < 725);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
     
  const sections = [
    { id: 'section1', text: 'ROBOWARS' },
    { id: 'section2', text: 'V-WARS' },
    { id: 'section3', text: 'SHOWCASE' },
  ];
  
  const moduleData = [
    { content: 'ROBOWAR', imgSrc: '/elements/module_page_frame.svg' },
    { content: 'ROBOWAR', imgSrc: '/elements/module_page_frame.svg' },
    { content: 'ROBOWAR', imgSrc: '/elements/module_page_frame.svg' },
  ];
  const modules = [
    { id: 1, section: 'section1', name: 'Robotron', events: [handleEvent1, handleEvent11], showRing: showRing1 },
    { id: 2, section: 'section2', name: 'V-Wars', events: [handleEvent2, handleEvent22], showRing: showRing2 },
    { id: 3, section: 'section3', name: 'Showcase', events: [handleEvent3, handleEvent33], showRing: showRing3 },
    { id: 4, name: 'Amazers', events: [handleEvent4, handleEvent44], showRing: showRing4 },
    { id: 5, name: 'Cyberwrap', events: [handleEvent5, handleEvent55], showRing: showRing5 },
    { id: 6, name: 'Myndsnare', events: [handleEvent6, handleEvent66], showRing: showRing6 },
    { id: 7, name: 'Smartcity', events: [handleEvent7, handleEvent77], showRing: showRing7 },
  ];
  return (
    <>
      <div className={styles.boxContainerParent} >
        

<div className={styles.boxContainer}>
      {sections.map((section) => (
        <div key={section.id} id={section.id} className={styles.moduleContainer}>
          <div className={styles.modulestext}>{section.text}</div>

          {isSmallScreen ? (
            <div className={styles.moduleFrames}>
              <Slider {...settings}>
                {moduleData.map((module, index) => (
                  <div key={index} className={styles.moduleImg}>
                    <div className={styles.moduleImgInContent}>
                      <img
                        src={module.imgSrc}
                        alt={`img${index + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div className={styles.moduleImgContent}>
                    <div className={styles.subModules}>{module.content}</div></div>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <div className={styles.moduleFrames}>
              {moduleData.map((module, index) => (
                <div key={index} className={styles.moduleImg}>
                  <div className={styles.moduleImgInContent}>
                    <img
                      src={module.imgSrc}
                      alt={`img${index + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className={styles.moduleImgContent}>
                    <div className={styles.subModules}>{module.content}</div></div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>

        

<div className={styles.rightFrameParent}>
      <div className={styles.rightFrame}>
        {/* <img src="/elements/module_page_right_frame.svg" alt="" className={styles.rightFrameBg} /> */}
        <div className={styles.moduleNamesHeading}>MODULES</div>

        {modules.map(({ id, section, name, events, showRing }) => (
          <div key={id} className={styles.moduleName}>
            <a href={`#${section}`} onMouseOver={events[0]} onMouseOut={events[1]} className={styles.link}>
              {name}
            </a>{" "}
            <Lottie
              animationData={module_page_ring_animation}
              loop={false}
              className={`${styles.lottieAnimation} ${showRing ? '' : styles.lottieAnimation2}`}
            />{" "}
          </div>
        ))}
      </div>
    </div>
       
      </div>
    </>
  );
}

export default Module;


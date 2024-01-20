import { useState } from "react";
import module_page_ring_animation from "../../assets/module_page_ring_animation.json";

import Lottie from "lottie-react";
import styles from "./Module.module.css";
import { useEffect } from "react";
import Slider from "react-slick";
import "./slick.css"; 
import "./slick-theme.css";
import axios from "axios";
import data from './data.json';
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
  const [modulesData, setModulesData] = useState([]);

  useEffect(() => {
    const getModules = async () => {
      try {
        const response = await axios.get('https://tecnoesis-api.onrender.com/api/module/');
        const jsonData = response.data;
        console.log(jsonData.msg);

        setModulesData(jsonData.msg);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getModules();
  }, []); 
  // const modulesData=data.msg; 
  // console.log(modulesData);
     
  
  const handleEvent= [[handleEvent1,handleEvent11],[handleEvent2,handleEvent22],[handleEvent3,handleEvent33],[handleEvent4,handleEvent44],[handleEvent5,handleEvent55],[handleEvent6,handleEvent66],[handleEvent7,handleEvent77]];
  const showRing = [showRing1, showRing2,showRing3,showRing4,showRing5,showRing6,showRing7 ]


  for (let i = 0; i < modulesData.length; i++) {
    modulesData[i].sequence = i + 1;
  }
  console.log(modulesData);
  return (
    <>
      <div className={styles.boxContainerParent} >
        

{/* <div className={styles.boxContainer}>
      {modulesData.map((moduleName) => (
        <div key={moduleName.id} id={moduleName.id} className={styles.moduleContainer}>
          <div className={styles.modulestext}>{moduleName.name}</div>

          {isSmallScreen ? (
            <div className={styles.moduleFrames}>
              <Slider {...settings}>
                {moduleName.map((event) => (
                  <div key={event.id} className={styles.moduleImg}>
                    <div className={styles.moduleImgInContent}>
                      <img
                        src='/elements/module_page_frame.svg'
                        alt={`img${index + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div className={styles.moduleImgContent}>
                    <div className={styles.subModules}>{event.name}</div></div>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <div className={styles.moduleFrames}>
              {moduleName.map((event) => (
                <div key={event.id} className={styles.moduleImg} style={''}>
                  <div className={styles.moduleImgInContent}>
                    <img
                      src='/elements/module_page_frame.svg'
                      alt={`img${index + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className={styles.moduleImgContent}>
                    <div className={styles.subModules}>{event.name}</div></div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div> */}
    <div className={styles.boxContainer}>
  {modulesData.map((moduleName) => (
    <div key={moduleName.id} id={moduleName.id} className={styles.moduleContainer}>
      <div className={styles.modulestext}>{moduleName.name}</div>

      {isSmallScreen ? (
        <div className={styles.moduleFrames}>
          <Slider {...settings}>
            {moduleName.events.map((event) => (
              <div key={event.id} className={styles.moduleImg} style={{ backgroundImage: `url(${event.posterImage})` }}>
                <div className={styles.moduleImgInContent} style={{ backgroundImage: `url(${event.posterImage})` ,backgroundSize:'cover'}}>
                  <img
                    src='/elements/module_page_frame.svg'
                    alt={`img${event.id}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.moduleImgContent}>
                  <div className={styles.subModules}>{event.name}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className={styles.moduleFrames}>
          {moduleName.events.map((event) => (
            <div key={event.id} className={styles.moduleImg} style={{ backgroundImage: `url(${event.posterImage})` }}>
              <div className={styles.moduleImgInContent}>
                <img
                  src='/elements/module_page_frame.svg'
                  alt={`img${event.id}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className={styles.moduleImgContent}>
                <div className={styles.subModules}>
                  <div style={{overflow: 'hidden' , textOverflow:'ellipsis',maxWidth:'13ch'}}>{event.name}</div></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  ))}
</div>


        

{/* <div className={styles.rightFrameParent}>
      <div className={styles.rightFrame}>
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
    </div> */}

<div className={styles.rightFrameParent}>
      <div className={styles.rightFrame}>
        <div className={styles.moduleNamesHeading}>MODULES</div>

        {modulesData.map((moduleName) => (
          <div key={moduleName.id} className={styles.moduleName}>
            <a href={`#${moduleName.id}`} onMouseOver={handleEvent[moduleName.sequence][0]} onMouseOut={handleEvent[moduleName.sequence][1]} className={styles.link}>
              {moduleName.name}
            </a>{" "}
            <Lottie
              animationData={module_page_ring_animation}
              loop={false}
              className={`${styles.lottieAnimation} ${showRing[moduleName.sequence] ? '' : styles.lottieAnimation2}`}
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


import { useState } from "react";
import module_page_ring_animation from "../../assets/module_page_ring_animation.json";
import toggleLeft from "/images/teamPage/toggle1.svg";
import toggleRight from "/images/teamPage/toggleRight.svg";
import Lottie from "lottie-react";
import styles from "./Module.module.css";
import { useEffect } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import axios from "axios";
import { Link } from "react-scroll";
import LoadingContext from "../../globals/loading/loadingContext";
import { useContext } from "react";
import Loading from "../Loading/Loading";
import { Link as NavigateLink } from "react-router-dom";
import data from "./data.json";
import { useNavigate } from "react-router-dom";

const Module = () => {


  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const navigate = useNavigate();

  const delayTime = 400;
  const handleEvent = (index) => {
    setShowRing(index, true);
  };

  const handleEventEnd = (index) => {
    setTimeout(() => {
      setShowRing(index, false);
    }, delayTime);
  };
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const [showRings, setShowRings] = useState(Array(20).fill(false));

  const setShowRing = (index, value) => {
    setShowRings((prevShowRings) => {
      const newShowRings = [...prevShowRings];
      newShowRings[index] = value;
      return newShowRings;
    });
  };


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnFocus: true,
  };
  const [isSticky, setIsSticky] = useState(true);
  const [sidebar, setSidebar] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSmallScreen2, setIsSmallScreen2] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setIsSidebarVisible(false);
        setIsSmallScreen(true);
      } else {
        setIsSidebarVisible(true);
        setIsSmallScreen(false);
      }
      if (window.innerWidth < 725) {
        setIsSmallScreen2(true);
      } else {
        setIsSmallScreen2(false);
      }
    };
    const handleScroll = () => {
    const footer = document.getElementById("footer");
      const footerRect = footer.getBoundingClientRect();

      if (footerRect.top - window.innerHeight > 0) {
        setSidebar(true);
      } else {
        setSidebar(false);
      }
    };
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [modulesData, setModulesData] = useState([]);


  const getModules = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/module/`
      );
      const jsonData = response.data;

      setModulesData(jsonData.msg);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getModules();
  }, []);



  // const modulesData=data.msg; 

  
  const handleRoute = (id) => {
    console.log(id);
    navigate(`/event/${id}`);
  }
  const handleToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  if (isLoading) {
    return <Loading />;
  }
  // console.log(modulesData);
  return (
    // <>
    //   <div className={styles.boxContainerParent}>
    //     <div className={styles.boxContainer}>
    //       {modulesData.map((moduleName) => (
    //         <div
    //           key={moduleName.id}
    //           id={moduleName.id}
    //           className={styles.moduleContainer}
    //         >
    //           <div className={styles.modulestext}>{moduleName.name}</div>

    //           {isSmallScreen ? (
    //             <div className={styles.moduleFrames}>
    //               <Slider {...settings}>
    //                 {moduleName.events.map((event) => (
    //                   <div
    //                     key={event.id}
    //                     className={styles.moduleImg}
    //                     onClick={() => handleRoute(event.id)}
    //                   >
    //                     <div
    //                       className={styles.moduleImgInContent}
    //                       style={{
    //                         backgroundImage: `url(${event.posterImage})`,
    //                         backgroundSize: "cover",
    //                       }}
    //                     >
    //                       <img
    //                         src="/elements/module_page_frame.svg"
    //                         alt={`img${event.id}`}
    //                         style={{
    //                           width: "100%",
    //                           height: "100%",
    //                           objectFit: "cover",
    //                         }}
    //                       />
    //                     </div>
    //                     <div className={styles.moduleImgContent}>
    //                       <div className={styles.subModules}>
    //                         <div
    //                           style={{
    //                             overflow: "hidden",
    //                             textOverflow: "ellipsis",
    //                             maxWidth: "13ch",
    //                           }}
    //                         >
    //                           {event.name}
    //                         </div>
    //                       </div>{" "}
    //                     </div>
    //                   </div>
    //                 ))}
    //               </Slider>
    //             </div>
    //           ) : (
    //             <div className={styles.moduleFrames}>
    //               {moduleName.events.map((event) => (

    //                 <div
    //                   key={event.id}
    //                   className={styles.moduleImg}
    //                   style={{ backgroundImage: `url(${event.posterImage})` }}
    //                   onClick={() => handleRoute(event.id)}
    //                 >
    //                   <div className={styles.moduleImgInContent}>
    //                     <img
    //                       src="/elements/module_page_frame.svg"
    //                       alt={`img${event.id}`}
    //                       style={{
    //                         width: "100%",
    //                         height: "100%",
    //                         objectFit: "cover",
    //                       }}
    //                     />
    //                   </div>
    //                   <div className={styles.moduleImgContent}>
    //                     <div className={styles.subModules}>
    //                       <div
    //                         style={{
    //                           overflow: "hidden",
    //                           textOverflow: "ellipsis",
    //                           maxWidth: "13ch",
    //                         }}
    //                       >
    //                         {event.name}
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>

    //               ))}
    //             </div>
    //           )}
    //         </div>
    //       ))}
    //     </div>

    //     <div className={styles.rightFrameParent}>
    //       <div className={styles.rightFrame}>
    //         <div className={styles.moduleNamesHeading}>MODULES</div>

    //         {modulesData.map((moduleName) => (
    //           <div key={moduleName.id} className={styles.moduleName}>
    //             <Link
    //               to={`${moduleName.id}`}
    //               spy="true"
    //               smooth="true"
    //               hashspy="true"
    //               offset={-80}
    //               duration={400}
    //               onMouseOver={handleEvent[moduleName.sequence][0]}
    //               onMouseOut={handleEvent[moduleName.sequence][1]}
    //               className={styles.link}
    //             >
    //               {moduleName.name}
    //             </Link>
    //             <Lottie
    //               animationData={module_page_ring_animation}
    //               loop={false}
    //               className={`${styles.lottieAnimation} ${showRing[moduleName.sequence] ? "" : styles.lottieAnimation2
    //                 }`}
    //             />{" "}
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
    <div className={styles.boxContainerParent}>
      <div className={styles.boxContainer}>
        {modulesData.map((moduleName, index) => (
          <div
            key={moduleName.id}
            id={moduleName.id}
            className={styles.moduleContainer}
          >
            <div className={styles.modulestext}>{moduleName.name}</div>

            {isSmallScreen2 ? (
              <div className={styles.moduleFrames}>
                <Slider {...settings}>
                  {moduleName.events.map((event) => (
                    <div
                      key={event.id}
                      className={styles.moduleImg}
                      onClick={() => handleRoute(event.id)}
                    >
                      <div
                        className={styles.moduleImgInContent}
                        style={{
                          backgroundImage: `url(${event.posterImage})`,
                          backgroundSize: "cover",
                        }}
                      >
                        <img
                          src="/elements/module_page_frame.svg"
                          alt={`img${event.id}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className={styles.moduleImgContent}>
                        <div className={styles.subModules}>
                          <div
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              maxWidth: "13ch",
                            }}
                          >
                            {event.name}
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <div className={styles.moduleFrames}>
                {moduleName.events.map((event) => (
                  <div
                    key={event.id}
                    className={styles.moduleImg}
                    style={{ backgroundImage: `url(${event.posterImage})` }}
                    onClick={() => handleRoute(event.id)}
                    // onMouseOver={() => handleEvent(index)}
                    // onMouseOut={() => handleEventEnd(index)}
                  >
                    <div className={styles.moduleImgInContent}>
                      <img
                        src="/elements/module_page_frame.svg"
                        alt={`img${event.id}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className={styles.moduleImgContent}>
                      <div className={styles.subModules}>
                        <div
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "13ch",
                          }}
                        >
                          {event.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
     {sidebar && ( <div
        className={`${styles.toggle} ${isSticky ? styles.sticky : ""}`}
        onClick={handleToggle}
      >
        {isSmallScreen &&
          (isSidebarVisible ? (
            <img src={toggleRight} alt="img" />
          ) : (
            <img src={toggleLeft} alt="img" />
          ))}
      </div> )}
      {sidebar && ( <div className={`${isSidebarVisible?styles.rightFrameParent:styles.rightFrameParent2}`}>
        <div className={styles.rightFrame}>
          <div className={styles.moduleNamesHeading}>MODULES</div>

          {modulesData.map((moduleName, index) => (
            <div key={moduleName.id} className={styles.moduleName}>
              <Link
                to={`${moduleName.id}`}
                spy="true"
                smooth="true"
                hashspy="true"
                offset={-80}
                duration={400}
                onMouseOver={() => handleEvent(index)}
                onMouseOut={() => handleEventEnd(index)}
                className={styles.link}
              >
                {moduleName.name}
              </Link>
              {isSmallScreen2===false && (
  <Lottie
    animationData={module_page_ring_animation}
    loop={false}
    className={`${styles.lottieAnimation} ${
      showRings[index] ? "" : styles.lottieAnimation2
    }`}
  />
)}
            </div>
          ))}
        </div>
      </div>)}
    </div>
  </>
  );
}

export default Module;

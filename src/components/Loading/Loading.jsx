import React from "react";
import Lottie from "lottie-react";
import home_arror from "../../lotties/home_arror.json";
import dots from "../../lotties/loading.json";
import loading from "../../assets/loading.json"
import pixels from "../../assets/background pixels landiing.json"
import loading_compressed from "../../assets/loading_compressed.json"
import styles from "./Loading.module.css";

function Loading() {
  return (
   <div style={{overflow:'hidden'}}>
     <div className={styles.bgContainer}>
     <div className={styles.pixelContainer}>
     <Lottie
                   animationData={pixels}
                   loop={true}
                   style={{ width: '100%', height: '100%' }}
                 />
     </div>
        {/* <img src="/elements/frame.svg" alt="" className={styles.bgImage}/> */}
        <div>
     <img src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/kgajelscqqbonahqxg3y" alt="Tecnoesis 2024"  className={styles.tecnoLogo}/>
     </div>
     <div className={styles.lottieContainer}>
     <Lottie
                   animationData={loading}
                   loop={true}
                   style={{ width: 'auto', height: '100%' }}
                 />
     </div>
     </div>
   </div>
  );
}

export default Loading;

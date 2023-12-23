import { useEffect } from "react";
import "./App.css";
import Lottie from 'lottie-react';
import animationData1 from "./lotties/home_arror.json"
import animationData2 from "./lotties/pacman.json"

function App() {


  return(
    
    
    <section className="hero-section">


    <img className="bgimg" src="./src/assets/bg landing.svg" alt="" />

    <img src="./src/assets/mobbg.png" alt="" className="mobimg" />
    {/* <img src="./src/assets/mobimgg.png" alt="" className="mobimg" />
    <img src="./src/assets/outrun-neon-dark-background-purple-1920x1200-4523 2.png" alt="" className="mobimg2" /> */}
    {/* <img src="./src/assets/building.svg" alt="" className="building" /> */}
    {/* <img src="./src/assets/bg landing stars.svg" alt="" className="stars" /> */}


    <img className="tec" src="./src/assets/Tecno 24 logo.png" alt="" />
    <img className="comingsoon" src="./src/assets/Group 28.svg" alt="" />

    
    

    <Lottie className="arrow" animationData={animationData1} />
    <Lottie className="pacman" animationData={animationData2} />
   </section>

   
  )
}

export default App;

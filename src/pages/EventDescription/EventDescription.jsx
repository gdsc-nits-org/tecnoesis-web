import React, { useState, useEffect } from 'react';
import styles from "./EventDescription.module.css";
import robowarsImage from "/images/robowars.png";
import backIcon from "/images/backIcon.png";
import modulesData from "../../assets/modulesData.json";
import { Link } from 'react-router-dom'; 

const EventDescription = () => {
  const [moduleData, setModuleData] = useState(null);

  useEffect(() => {
    
    const selectedModule = modulesData.find((module) => module.moduleId === 1);

    if (selectedModule) {
      setModuleData(selectedModule);
    }
  }, [1]);

  if (!moduleData) {
    return null; 
  }

  const { moduleHeading, description, centerImage } = moduleData;
  return (
    <div className={styles.container}>
      
      
      <div className={styles.gradient} >
      
      <div className={styles.robowars}>
      <Link to="">
      <div className={styles.backIcon}><img  alt="" src={backIcon} /></div></Link>
         <div className={styles.robowars_img}> <img src={robowarsImage} alt="Robowars"></img></div>
        </div>
    
        <div className={styles.moduleWrapper}>
          Module : {moduleHeading}
        </div>
        <div className={styles.center}>
        <div className={styles.description}>
        {description.map((paragraph, index) => (
              <p key={index} className={styles.text}>{paragraph}</p>
            ))}
        </div>
        <div className={styles.center_img}>
          
            <img alt="robologo_demo.png" src={centerImage} />
            
        
        </div>
        </div>
        <button className={styles.button}>
          
           Register
           
        </button>
      
      
    
    </div>
    </div>
  );
};

export default EventDescription;



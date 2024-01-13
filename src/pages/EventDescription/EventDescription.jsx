import styles from "./EventDescription.module.css";
import robowarsImage from "/images/robowars.png";
import robologo_demo from "/images/robologo_demo.png";
import backIcon from "/images/backIcon.png";

const EventDescription = () => {
  return (
    <div className={styles.container}>
      
      
      <div className={styles.gradient} >
      
      <div className={styles.robowars}>
      <div className={styles.backIcon}><img  alt="" src={backIcon} /></div>
         <div className={styles.robowars_img}> <img src={robowarsImage} alt="Robowars"></img></div>
        </div>
    
        <div className={styles.moduleWrapper}>
          Module : Robotron
        </div>
        <div className={styles.center}>
        <div className={styles.description}>
          <p
            className={styles.text}
          >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa.
          </p>
        </div>
        <div className={styles.center_img}>
          
            <img alt="robologo_demo.png" src={robologo_demo} />
            
        
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



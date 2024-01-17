import styles from "./Dashboard.module.css";
import { useState ,useEffect} from "react";
import profile from "/images/Profile.png";
import contact from "/images/contact.png";
import schoolblack from "/images/school_black.png";
import callblack from "/images/call_black.png";
import location from "/images/location.png";
import pin from "/images/pin.png";
import vector_right from "/images/Vector1.png";
import vector_left from "/images/Vector.png";
import ellipse from "/images/Ellipse.svg";
import vector from "/images/Vector.svg";
import statusData from "../../assets/statusData";
import camera from "/images/camera.svg";
import vector3 from "/images/Vector3.png";
import vector4 from "/images/Vector4.png";




    
export default function Dashboard() {
    const [currentStatus, setCurrentStatus] = useState('registered');
    const handleArrowClick = (direction) => {
        if (direction === 'right') {
          switch (currentStatus) {
            case 'registered':
              setCurrentStatus('pending');
              break;
            case 'pending':
              setCurrentStatus('rejected');
              break;
            
            default:
              break;
          }
        } else if (direction === 'left') {
          switch (currentStatus) {
            case 'rejected':
              setCurrentStatus('pending');
              break;
            case 'pending':
              setCurrentStatus('registered');
              break;
            
            default:
              break;
          }
        }
    };
    const [isExpanded, setExpanded] = useState(new Array(statusData[currentStatus].length).fill(false));

    const handleToggle = (index) => {
      setExpanded((prevExpanded) => {
        const newExpandedState = [...prevExpanded];
        newExpandedState[index] = !newExpandedState[index];
        return newExpandedState;
      });
      
    };
    useEffect(() => {
      
    }, [isExpanded]);
    
    const trimText = (text) => {
      return text.length > 6 ? text.slice(0, 6) : text;
  };
    
    return (
    <div className={styles.container}>
       
    <div className={styles.texture}>
   <div className={styles.left}>
    <div className={styles.image}>
        <img src={profile} alt="" />
        <img className={styles.camera} src={camera} alt="" />
    </div>
    <div className={styles.profile}>
        <div className={styles.name}>
            <img className={styles.profile_icons} src={contact} alt="" />
            <p className={styles.profile_text}>Name Lorem Ipsum</p>
        </div>
        <div className={styles.college}>
           <img className={styles.profile_icons} src={schoolblack} alt="" />
            <p className={styles.profile_text}>National Institute of Technology, Silchar</p>
        </div>
        <div className={styles.contact}>
        <img className={styles.profile_icons} src={callblack} alt="" />
            <p className={styles.profile_text}>+91 6942069420</p>
        </div>
        <div className={styles.address}>
            <img className={styles.profile_icons} src={location} alt="" />
            <p className={styles.profile_text}>Address</p>
        </div>
        <div className={styles.id}>
        <img className={styles.profile_icons} src={pin} alt="" />
            <p className={styles.profile_text}>2214170</p>
        </div>
        </div>
        <div className={styles.buttons}>
        <button className={styles.button1}>GO TO HOME</button>
        <button className={styles.button2}>LOGOUT</button>

    </div>
   </div>
   <div className={styles.right}>
    <div className={styles.events}>
        <div className={styles.heading}>
            <img onClick={() => handleArrowClick('left')} src={vector_left} alt="" />
            <p>{`Events ${currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1)}`} </p>
            <img onClick={() => handleArrowClick('right')} src={vector_right} alt="" />
        </div>
        <div className={styles.content}>
        
        {currentStatus === 'registered' && statusData[currentStatus].map((event,index) => (
          <div key={event.id} className={styles.repeating_box}>
          <div className={styles.event_rect}>
            <div className={styles.circle}>
                <img src={ellipse} alt="" />
            </div>
            <div className={styles.middle}>
                <div className={styles.event_title}>{event.title}</div>
                <div className={styles.event_team}>Team Name: {event.team}</div></div>
            <div className={styles.end_div}>
               <p> View Team </p>
                <img onClick={() =>handleToggle(index)} src={isExpanded[index] ? vector3:vector} alt="" />
            </div>
            </div>
            {isExpanded[index] && (
        <div className={styles.expanded_content}>
          
          
          <table>
  <thead>
    <tr>
      <th >
        Name
      </th>
    
      <th >
        Username
      </th>
      
      <th >
        Status
      </th>
   </tr>
   </thead>
   <tbody>
    <tr >
        
    
    </tr>
    <tr >
      <td >{trimText(event.name)}</td>
      <td >{trimText(event.username)}</td>
      <td >
        <img src={vector4} alt="" />
      </td>
    </tr>

    
    
    <tr>
      <td>{trimText(event.name)}</td>
      <td>{trimText(event.username)}</td>
      <td >
        <img src={vector4} alt="" />
      </td>
    </tr>

    
    
    <tr >
      <td >{trimText(event.name)}</td>
      <td >{trimText(event.username)}</td>
      <td>
        <img src={vector4} alt="" />
      </td>
    </tr>
  </tbody>
</table>


        </div>
      )}
            </div>
          
        ))}


       {currentStatus === 'pending' && statusData[currentStatus].map((event) => (
          <div key={event.id} className={styles.event_rect2}>
            <div className={styles.circle}>
                <img src={ellipse} alt="" />
            </div>
            <div className={styles.middle}>
                <div className={styles.event_title}>{event.title}</div>
                <div className={styles.event_team}>Team Name: {event.team}</div></div>
            <div className={styles.end_div2}>
               <button className={styles.button3}>Accept</button>
               <button className={styles.button4}>Reject</button>
            </div>
          
          </div>
        ))}


        {currentStatus === 'rejected' && statusData[currentStatus].map((event,index) => (
          <div key={event.id} className={styles.repeating_box}>
          <div key={event.id} className={styles.event_rect}>
            <div className={styles.circle}>
                <img src={ellipse} alt="" />
            </div>
            <div className={styles.middle}>
                <div className={styles.event_title}>{event.title}</div>
                <div className={styles.event_team}>Team Name: {event.team}</div></div>
            <div className={styles.end_div}>
               <p> View Team </p>
                <img onClick={() =>handleToggle(index)} src={isExpanded[index] ? vector3:vector} alt="" />
            </div>
          
          </div>
          {isExpanded[index] && (
        <div className={styles.expanded_content}>
         
        <table>
  <thead>
    <tr>
      <th >
        Name
      </th>
    
      <th >
        Username
      </th>
      
      <th >
        Status
      </th>
   </tr>
   </thead>
   <tbody>
    <tr >
        
    
    </tr>
    <tr >
      <td >{trimText(event.name)}</td>
      <td >{trimText(event.username)}</td>
      <td >
        <img src={vector4} alt="" />
      </td>
    </tr>

    
    
    <tr>
      <td>{trimText(event.name)}</td>
      <td>{trimText(event.username)}</td>
      <td >
        <img src={vector4} alt="" />
      </td>
    </tr>

    
    
    <tr >
      <td >{trimText(event.name)}</td>
      <td >{trimText(event.username)}</td>
      <td>
        <img src={vector4} alt="" />
      </td>
    </tr>
  </tbody>
</table>




        </div>
      )}
          </div>
        ))}   
        </div>
        
    </div>
    </div>      
    <div className={styles.buttons_responsive}>
        <button className={styles.button1}>GO TO HOME</button>
        <button className={styles.button2}>LOGOUT</button>

    </div>
    </div>
    </div>
  
    
  )
}

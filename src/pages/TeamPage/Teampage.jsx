import React, { useState } from "react";
import styles from "./Teampage.module.css";
import { Card } from "../../components/Team/Card";

const Teampage = () => {

  const [teams, setTeams] = useState(["TeamName" ,"TeamName" ,"TeamName" ,"TeamName" ,"TeamName" ]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.headingDiv}>
        <div className={styles.heading}>
          <h1>MEET THE TEAM</h1>
        </div>
        <div className={styles.teamName}>
          <h3>Team Name</h3>
        </div>
      </div>
      <div className={styles.teamCards}> 
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>

      <div className={styles.rightFrameParent}>
        <div className={styles.rightFrame}>
            {
              teams.map((teamName)=>(
                <div className={styles.teamName} key={teamName.id}>
                  {teamName}
                </div>
              ))
            }
        </div>
      </div>
    </div>
  );
};
export default Teampage;

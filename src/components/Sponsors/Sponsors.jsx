import React from 'react';

import styles from '../Sponsors/Sponsors.module.css';

import StarBg from "../../assets/Images/bg_landing_stars.svg";
import Sponsor from '../../assets/Images/sponsor_logo.png';
import frame from '../../assets/Images/frame.png';


import Cards from '../../assets/Card.json';

const Sponsors = () => {
  return (
    <div>
      <img className={styles.main_container} src={StarBg} />
      <img className={styles.text_container} src={Sponsor} />

      {Cards &&
        Cards.map((item) => (
          <div key={item.id}>
            <img className={styles.mn_fr_container} src={frame} />
            <img className={styles.fr_container} src={item.company} />
          </div>
        ))}
    </div>
  );
}

export default Sponsors
import React from 'react';
import styles from '../Sponsors/Sponsors.module.css';
import Cards from '../../assets/Card.json';
import '../../App.css'; // Import app.css


const Sponsors = () => {
  return (
    <section className={styles.main_container}>
      <img
        className={styles.bg_container}
        src="images/bg_landing_stars.svg"
        alt="Background stars"
      />
      <h1 className={styles.text_container}>OUR PAST SPONSORS</h1> 

      {Cards &&
        Cards.map((item) => (
          <div key={item.id} className={styles.mn_fr_container}>
            <img className={styles.frame} src="images/frame.png" />
            <img className={styles.fr_container} src={item.company} />
          </div>
        ))}
    </section>
  );
};

export default Sponsors;

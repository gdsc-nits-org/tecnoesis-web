import React from 'react';
import styles from '../Sponsors/Sponsors.module.css';
import Cards from '../../assets/Card.json';

const Sponsors = () => {
  return (
    <section className={styles.main_container}>
      <img
        className={styles.bg_container}
        src="images/bg_landing_stars.svg"
        alt="Background stars"
      />
      <img className={styles.text_container} src="images/sponsor_logo.png" />

      {Cards &&
        Cards.map((item) => (
          <div key={item.id} className={styles.mn_fr_container}> {/* Apply mn_fr_container to the parent div */}
            <img src="images/frame.png" />
            <img className={styles.fr_container} src={item.company} />
          </div>
        ))}
    </section>
  );
};

export default Sponsors;

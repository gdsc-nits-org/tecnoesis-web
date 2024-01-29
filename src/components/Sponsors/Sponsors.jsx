import React from 'react';
import styles from '../Sponsors/Sponsors.module.css';
import Cards from '../../assets/Card.json';
import '../../App.css'; // Import app.css


const Sponsors = () => {
  return (
    <section className={styles.main_container} id='sponsor' >
      {/* <img
        className={styles.bg_container}
        src="/images/homepageBg.png"
        alt="Background stars"
      /> */}
      <h1 className={styles.text_container}>OUR SPONSORS</h1> 

      {Cards &&
        Cards.map((item) => (
          <div key={item.id} className={styles.mn_fr_container} onClick={() => {if(item.url!=="")window.open(item.url, "_blank")}}>
            <img className={styles.frame} src="https://res.cloudinary.com/dhry5xscm/image/upload/v1706105907/tecnoesis/frame_jgpdkn.png" />
            <img className={styles.fr_container} src={item.company} />
          </div>
        ))}
    </section>
  );
};

export default Sponsors;

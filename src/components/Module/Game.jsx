import React from 'react'

import styles from "../Module/Game.module.css";

const Game = () => {
  return (
    <>
      <section className={styles.main_container}>
              <img className={styles.bg_container} src="##" alt="bg_giphy" />
              <h1 className={styles.text_container}>ROBOWARS</h1>
        <div className={styles.sub_container}></div>
      </section>
    </>
  );
}

export default Game
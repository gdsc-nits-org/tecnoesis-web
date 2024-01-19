import React from "react";
import styles from "../Form/Form.module.css";

const Form = () => {
  return (
    // <div className={styleswrapper}>
    //   <h1 className={styles.heading}>Form</h1>
    //   <form action="" className={styles.form}>
    //     <div className={styles.inputBox}>
    //       <span></span>
    //       <input className={styles.input} type="email" required></input>
    //       <label className={styles.labels}>Email</label>
    //     </div>
    //     <div className={styles.inputBox}>
    //       <span></span>
    //       <input className={styles.input}  type="password" required></input>
    //       <label className={styles.labels}>Password</label> // Changed email to password
    //     </div>
    //   </form>
    // </div>

    <div className={styles.wrapper}>
      <form action="" className={styles.form}>
        <h1 className={styles.heading}>
          <p>Welcome To The Official Website Of Technoesis</p>
          <p>Let’s Get You Started</p>
        </h1>
        <div className={styles.container}>
          <div className={styles.inputBox}>
            <input className={styles.input} type="email" required></input>
            <label className={styles.labels}>ENTER YOUR USERNAME</label>
          </div>
          <div className={styles.inputBox}>
            <input className={styles.input} type="text" required></input>
            <label className={styles.labels}>ENTER SCHOLAR ID</label>
          </div>
          <div className={styles.inputBox}>
            <input className={styles.input} type="text" required></input>
            <label className={styles.labels}>ENTER PHONE NUMBER</label>
          </div>
        </div>

        <button className={styles.button}>
          <div className={styles.layertext}>SUBMIT</div>
        </button>
      </form>
    </div>
  );
};

export default Form;

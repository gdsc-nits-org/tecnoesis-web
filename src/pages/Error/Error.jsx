import styles from "./Error.module.css";
import error_txt from "/elements/404_text.svg"
import { Link } from "react-router-dom";


const Error = () => {
  return (
    <div className={styles.error_container}>
      <div className={styles.err_txt}>
        <img src={error_txt} alt="error_txt" />
        <div className={styles.sub_txt} >We don’t know how you made it here, but</div>
        <div className={styles.button_sign_content}>
          <div className={styles.btn_signin}>Lets's Get You Back Home</div>
        </div>
      </div>
    </div>
  );
};

export default Error;

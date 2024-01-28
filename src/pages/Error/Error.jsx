import styles from "./Error.module.css";
import { Link } from "react-router-dom";


const Error = () => {
  return (
    <div className={styles.error_container}>
      <div className={styles.err_txt}>
        <img src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/qprbhte9yqmaglmmisik" alt="error_txt" />
        <div className={styles.sub_txt} >We don’t know how you made it here, but</div>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <div className={styles.button_sign_content}>
            <div className={styles.btn_signin}>Lets's Get You Back Home</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Error;

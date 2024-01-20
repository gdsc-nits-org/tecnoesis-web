import styles from "./Error.module.css";
import error_bg from "../../../public/elements/error_bg.png"
import error_txt from "../../../public/elements/404_text.svg"
import { Link } from "react-router-dom";


const Error = () => {
  return (
    <div className={styles.error_container}>
      <div>
        <img style={{ width: '100vw', height: '100vh' }} src={error_bg} />
        <div   style={{ width: '100vw', height: '100vh' }} className={styles.txt}>
          <img src={error_txt} />
          <div className={styles.sub_txt} style={{ textAlign: 'center', color: '#3ACAF6', fontSize: 24, fontWeight: '400', lineHeight: 20, letterSpacing: 0.10, wordWrap: 'break-word' }}>We don’t know how you made it here, but</div>
        </div>

        <Link
        to="/"
        >
          <div className={styles.btn_error_container}>
          <div className={styles.error_btn} style={{ left: 1, top: 0, position: 'absolute', background: 'linear-gradient(90deg, #56F4FD 0%, #047A94 100%)', borderRadius: 100, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
            <div style={{ paddingLeft: 24, paddingRight: 24, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
              <div style={{ textAlign: 'center', color: '#190958', fontSize: 24, fontWeight: '400', wordWrap: 'break-word' }}>Lets get you back home</div>
            </div>
          </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Error;

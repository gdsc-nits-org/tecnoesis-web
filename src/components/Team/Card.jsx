import styles from "../Team/Card.module.css";
import insta from "/images/teamPage/inst.svg";
import linkedinImg from "/images/teamPage/linkedin.svg";
import facebookImg from "/images/teamPage/facebook.svg";
import githubImg from "/images/teamPage/github.svg";

export const Card = ({
  name,
  designation,
  image,
  linkedin,
  facebook,
  github,
  inst,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.frameChild}>
          <img
            src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/pgzhtyz0lfv7jl2kbq0n"
            className={styles.imageFrame}
          />
          <img
            src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/pgzhtyz0lfv7jl2kbq0n"
            className={`${styles.imageFrame} ${styles.frame}`}
          />

          <img src={image} className={`${styles.imageFrame} ${styles.dp}`} />
        </div>

        <div className={styles.profile}>
          <div className={styles.prProfile}>
            <div className={styles.name}>{name}</div>
            <div className={styles.position}>{designation}</div>
          </div>
          <div className={styles.SocialProfile}>
            {linkedin ? (
              <div className={styles.icon}>
                <a href={linkedin} target="_blank">
                  <img src={linkedinImg} />
                </a>
              </div>
            ) : (
              ""
            )}
            {github ? (
              <div className={styles.icon}>
                <a href={github} target="_blank">
                  <img src={githubImg} />
                </a>
              </div>
            ) : inst ? (
              <div className={styles.icon}>
                <a href={inst} target="_blank">
                  <img src={insta} />
                </a>
              </div>
            ) : (
              ""
            )}
            {facebook ? (
              <div className={styles.icon}>
                <a href={facebook} target="_blank">
                  <img src={facebookImg} />
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

import styles from "./Input.module.css";

const Input = ({ value, onChange }) => {
  return (
    <input className={styles["input"]} value={value} onChange={onChange} />
  );
};

export default Input;

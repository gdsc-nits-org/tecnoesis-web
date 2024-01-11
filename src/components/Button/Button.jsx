import React from 'react';
import styles from './Button.module.css'; 

const Button = ({rounded, onClick, children }) => {
  return (
    <button className={styles.footer_button} style={{borderRadius: `${rounded ? '9999px' : '0px'}`}} onClick={onClick}>
      <div className={styles.footer_button_style}>
        {children}
      </div>
    </button>
  );
};

export default Button;

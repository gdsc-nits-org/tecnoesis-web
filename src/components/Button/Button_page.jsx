import React from 'react';
import styles from './Button_page.module.css'; 

const Button_page = ({comp, onClick, children }) => {
  return (
    <button className={styles.footer_button} style={{borderRadius:`${comp==='home'?'9999px':'0px'}`}} onClick={onClick}>
      <div className={styles.footer_button_style}>
        {children}
      </div>
    </button>
  );
};

export default Button_page;

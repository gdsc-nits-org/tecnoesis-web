import React from 'react'
import styles from "./Footer.module.css";
import techno_logo from '../../assets/techno_logo.png'
import pikachu from '../../assets/pikachu.gif'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import mail from '../../assets/mail.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import satellite from '../../assets/satellite.svg'


const Footer = () => {
    return (
        <div className={styles.footer}>
            <img src={satellite} className={styles.foot_satellite} alt="satellite" />
            <div className={styles.footer_container}>
                <div className={styles.footer_content}>
                    <img src={techno_logo} className={styles.footer_logo} alt="Techno Logo" />
                    <img src={pikachu} className={styles.pikachu} alt="pikachu" />
                    <div className={styles.foot_buttons}>
                        <a href="#" target="_blank" rel="noopener noreferrer ">
                            <button className={styles.footer_button}>
                                DOWNLOAD BROCHURE
                            </button>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">

                            <button className={styles.footer_button}>
                                <div className={styles.footer_button_style}>
                                    BECOME OUR CAMPUS AMBASSADOR
                                </div>
                            </button>


                        </a>
                    </div>
                    <div className={styles.footer_contact}>CONTACT US</div>
                    <div className={styles.black_flare}></div>
                    <div className={styles.footer_icons}>
                        <a href="#" target="_blank" rel="noopener noreferrer " ><img src={facebook} alt='facebook' /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer "><img src={instagram} alt='instagram' /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer "><img src={mail} style={{ backgroundColor: "white", borderRadius: "10px" }} alt='mail' /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer " ><img src={linkedin} alt='linkedin' /></a>
                        <a href="#" target="_blank" rel="noopener noreferrer " ><img src={twitter} alt='twitter' /></a>
                    </div>y
                    <div className={styles.footer_flare}></div>
                </div>
            </div>


        </div>
    )
}

export default Footer

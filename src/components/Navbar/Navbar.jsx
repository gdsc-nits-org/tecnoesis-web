import { useState, useEffect, useRef } from "react";
import { Slant as Hamburger } from "hamburger-react";
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";
import Button_page from "../Button/Button";
import logo from "/elements/tecno-Logo.svg";
import cross_logo from "/elements/cross.png";
import { Link as RouterLink } from "react-router-dom";



const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const navbarRef = useRef(null);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const closeNavbarOnOutsideClick = (event) => {
    if (
      showNavbar &&
      navbarRef.current &&
      !navbarRef.current.contains(event.target)
    ) {
      setShowNavbar(false);
    }
  };


  useEffect(() => {
    document.addEventListener("click", closeNavbarOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeNavbarOnOutsideClick);
    };
  }, [showNavbar]);

  return (
    <nav>
      {showNavbar && (
        <div  className={styles.nav_sidebar} onClick={handleShowNavbar}>
          <button className={`${styles.close_button} ${showNavbar && styles.active}`} onClick={handleShowNavbar}>
            <img src={cross_logo} alt="cross_button" />
          </button>
          <ul className={styles.nav_links}>
            <li className={styles.register_dock}>
              <Link
                to=""
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                onClick={handleShowNavbar}
              >
                <div className={styles.button_sign_content}>
                  <div className={styles.btn_signin}>LOGIN WITH GOOGLE</div>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-50}
                duration={500}
                onClick={handleShowNavbar}
              >
                <Button_page>
                  <div className={styles.navbuttonpage_side}>ABOUT</div>
                </Button_page>
              </Link>
            </li>
            <li>
              <RouterLink
                to="/modules"
                onClick={handleShowNavbar}
              >
                <Button_page>
                  <div className={styles.navbuttonpage_side}>MODULES</div>
                </Button_page>
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/events"
                onClick={handleShowNavbar}
                
              >
                <Button_page>
                  <div className={styles.navbuttonpage_side}>EVENTS</div>
                </Button_page>
              </RouterLink>
            </li>
            <li>
              <Link
                to="sponsor"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-60}
                duration={500}
                onClick={handleShowNavbar}
              >
                <Button_page >
                  <div className={styles.navbuttonpage_side}>SPONSORS</div>
                </Button_page>
              </Link>
            </li>
            <li>
              <RouterLink
                to="/team"
                onClick={handleShowNavbar}
              >
                <Button_page >
                  <div className={styles.navbuttonpage_side}>TEAM</div>
                </Button_page>
              </RouterLink>
            </li>
            <li>
              <Link
                to=""
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                onClick={handleShowNavbar}
              >
                <Button_page >
                  <div className={styles.navbuttonpage_side}>GALLERY</div>
                </Button_page>
              </Link>
            </li>
            <li>
              <RouterLink
                to="/contactus"
                onClick={handleShowNavbar}
              >
                <Button_page >
                  <div className={styles.navbuttonpage_side}>CONTACT US</div>
                </Button_page>
              </RouterLink>
            </li>
          </ul>
        </div>
      )}
      <div className={`${styles.container} ${showNavbar ? styles.moveUp : ""}`} >
        <div className={`${styles.menu_icon} ${showNavbar && styles.active}`}
          onClick={handleShowNavbar}>

          <Hamburger className={styles.hambur}
            color="linear-gradient(to bottom, #41D4E8, #0C6CA5)"
            easing="ease-in"
            rounded
            toggled={showNavbar}
            size={window.innerWidth >= 3500 ? 70 : 30}
          />


        </div>

        <div>
          <ul className={styles.nav_content}>
            <li>
              <Link
                to=""
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
              >
                <Button_page rounded>
                  <div className={styles.navbuttonpage}>LOGIN WITH GOOGLE</div>
                </Button_page>
              </Link>
            </li>
          </ul>
          <div className={styles.nav_logo}>
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
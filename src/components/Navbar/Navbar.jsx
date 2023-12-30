import { useState, useEffect, useRef } from 'react';
import { Slant as Hamburger } from 'hamburger-react';
import techno_logo from '/elements/tecno-Logo.svg';
import styles from './Navbar.module.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const navbarRef = useRef(null);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const closeNavbarOnOutsideClick = (event) => {
    if (showNavbar && navbarRef.current && !navbarRef.current.contains(event.target)) {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeNavbarOnOutsideClick);

    return () => {
      document.removeEventListener('click', closeNavbarOnOutsideClick);
    };
  }, [showNavbar]);

  return (
    <nav ref={navbarRef} className={`${styles.navbar} ${showNavbar && styles.active}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={techno_logo} alt="Logo" />
        </div>
        <div className={styles.menu_icon} onClick={handleShowNavbar}>
          <Hamburger
            color="linear-gradient(to bottom, #41D4E8, #0C6CA5)"
            easing="ease-in"
            rounded
            toggled={showNavbar} 
          />
        </div>
        <div className={`${styles.nav_elements} ${showNavbar && styles.active}`}>
          <ul>
            <li className={styles.nav_button_style}>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
              >
                <div className={styles.navButton}>HOME</div>
              </Link>
            </li>
            <li className={styles.nav_button_style}>
              <Link
                to="about"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
              >
                <div className={styles.navButton}>ABOUT US</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

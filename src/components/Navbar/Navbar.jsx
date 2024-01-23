import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Slant as Hamburger } from "hamburger-react";
import { toast } from "react-toastify";
import { Button } from "../../components";

import logo from "/elements/tecno-Logo.svg";
import cross_logo from "/elements/cross.png";
import UserContext from "../../globals/authcontext";
import { Link as RouterLink } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const { signin, logout, loggedin } = useContext(UserContext);
  const [showNavbar, setShowNavbar] = useState(false);
  const navbarRef = useRef(null);
  const navigate = useNavigate();

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

  const handleLogin = async () => {
    const { status, message } = await signin();
    toast(message);
    setShowNavbar(false);
    if (status === 200) {
      navigate("/dashboard");
    } else if (status === 404 || status === 409) {
      // if no user exists or username already taken
      navigate("/signup");
    } else {
      navigate("/");
    }
  };

  const handleLogout = async () => {
    logout();
    setShowNavbar(false);
    toast("Logged out successfully");
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
        <div className={styles.nav_sidebar}>
          <button
            className={`${styles.close_button} ${showNavbar && styles.active}`}
            onClick={handleShowNavbar}
          >
            <img src={cross_logo} alt="cross_button" />
          </button>
          <ul className={styles.nav_links}>
            {loggedin ? (
              <li className={styles.register_dock}>
                <Link
                  to=""
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  onClick={handleLogout}
                >
                  <div className={styles.button_sign_content}>
                    <div className={styles.btn_signin}>LOGOUT</div>
                  </div>
                </Link>
              </li>
            ) : (
              <li className={styles.register_dock}>
                <Link
                  to=""
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  onClick={handleLogin}
                >
                  <div className={styles.button_sign_content}>
                    <div className={styles.btn_signin}>LOGIN WITH GOOGLE</div>
                  </div>
                </Link>
              </li>
            )}
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
                <Button>
                  <div className={styles.navbuttonpage_side}>ABOUT</div>
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/modules" onClick={handleShowNavbar}>
                <Button>
                  <div className={styles.navbuttonpage_side}>MODULES</div>
                </Button>
              </Link>
            </li>
            {loggedin && (
              <li>
                <Link
                  to="/dashboard"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={500}
                  onClick={handleShowNavbar}
                >
                  <Button>
                    <div className={styles.navbuttonpage_side}>DASHBOARD</div>
                  </Button>
                </Link>
              </li>
            )}
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
                <Button>
                  <div className={styles.navbuttonpage_side}>EVENTS</div>
                </Button>
              </Link>
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
                <Button>
                  <div className={styles.navbuttonpage_side}>SPONSORS</div>
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={handleShowNavbar}>
                <Button>
                  <div className={styles.navbuttonpage_side}>TEAM</div>
                </Button>
              </Link>
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
                <Button>
                  <div className={styles.navbuttonpage_side}>GALLERY</div>
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/contactus" onClick={handleShowNavbar}>
                <Button>
                  <div className={styles.navbuttonpage_side}>CONTACT US</div>
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
      <div className={`${styles.container} ${showNavbar ? styles.moveUp : ""}`}>
        <div
          className={`${styles.menu_icon} ${showNavbar && styles.active}`}
          onClick={handleShowNavbar}
        >
          <Hamburger
            className={styles.hambur}
            color="linear-gradient(to bottom, #41D4E8, #0C6CA5)"
            easing="ease-in"
            rounded
            toggled={showNavbar}
            size={window.innerWidth >= 3500 ? 70 : 30}
          />
        </div>

        <div>
          <ul className={styles.nav_content}>
            {loggedin ? (
              <li>
                <Link
                  to=""
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                >
                  <Button rounded>
                    <div
                      className={styles.navbuttonpage}
                      onClick={handleLogout}
                    >
                      LOGOUT
                    </div>
                  </Button>
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  to=""
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                >
                  <Button rounded>
                    <div className={styles.navbuttonpage} onClick={handleLogin}>
                      LOGIN WITH GOOGLE
                    </div>
                  </Button>
                </Link>
              </li>
            )}
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

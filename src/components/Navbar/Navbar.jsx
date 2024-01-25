import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Link as SectionLink } from "react-scroll";
import { Slant as Hamburger } from "hamburger-react";
import { toast } from "react-toastify";
import { Button } from "../../components";
import logo from "/elements/tecno-Logo.svg";
import UserContext from "../../globals/authcontext";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const { signin, logout } = useContext(UserContext);
  const loggedin = parseInt(localStorage.getItem("loggedin"));
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
        <div className={styles.nav_sidebar} onClick={handleShowNavbar}>
          <button
            className={`${styles.close_button} ${showNavbar && styles.active}`}
            onClick={handleShowNavbar}
          >
            <img
              src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/fflloqnphs0nyn1cimlz"
              alt="cross"
            />
          </button>
          <ul className={styles.nav_links}>
            {loggedin ? (
              <li className={styles.register_dock}>
                <Link to="" onClick={handleLogout}>
                  <div className={styles.button_sign_content}>
                    <div className={styles.btn_signin}>LOGOUT</div>
                  </div>
                </Link>
              </li>
            ) : (
              <li className={styles.register_dock}>
                <Link to="" onClick={handleLogin}>
                  <div className={styles.button_sign_content}>
                    <div className={styles.btn_signin}>LOGIN WITH GOOGLE</div>
                  </div>
                </Link>
              </li>
            )}
            <li>
              <SectionLink to="hero" smooth={true} onClick={handleShowNavbar}>
                <Button>
                  <div className={styles.navbuttonpage_side}>HOME</div>
                </Button>
              </SectionLink>
            </li>
            <li>
              <SectionLink to="about" smooth={true} onClick={handleShowNavbar}>
                <Button>
                  <div className={styles.navbuttonpage_side}>ABOUT</div>
                </Button>
              </SectionLink>
            </li>
            <li>
              <Link to="/team" onClick={handleShowNavbar}>
                <Button>
                  <div className={styles.navbuttonpage_side}>TEAM</div>
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
            <li>
              <SectionLink
                to="gallery"
                smooth={true}
                onClick={handleShowNavbar}
              >
                <Button>
                  <div className={styles.navbuttonpage_side}>GALLERY</div>
                </Button>
              </SectionLink>
            </li>
            <li>
              <SectionLink
                to="sponsor"
                smooth={true}
                onClick={handleShowNavbar}
              >
                <Button>
                  <div className={styles.navbuttonpage_side}>SPONSORS</div>
                </Button>
              </SectionLink>
            </li>
            {loggedin && (
              <li>
                <Link to="/dashboard" onClick={handleShowNavbar}>
                  <Button>
                    <div className={styles.navbuttonpage_side}>DASHBOARD</div>
                  </Button>
                </Link>
              </li>
            )}
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
                <Link to="">
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
                <Link to="">
                  <Button rounded>
                    <div className={styles.navbuttonpage} onClick={handleLogin}>
                      LOGIN WITH GOOGLE
                    </div>
                  </Button>
                </Link>
              </li>
            )}
            {/* <li className={styles.nav_profile}>
              <a href="">
                <img className={styles.main_img} src={img123456} alt="" />
              </a>
            </li> */}
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

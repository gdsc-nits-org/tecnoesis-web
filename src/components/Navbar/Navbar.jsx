import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Cross as Hamburger } from 'hamburger-react'
import techno_logo from '../../../public/elements/techno-Logo.svg'
import styles from './Navbar.module.css'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={techno_logo} alt="Logo" />
                </div>
                <div className={styles.menu_icon} onClick={handleShowNavbar}>
                    <Hamburger />
                </div>
                <div className={`${styles.nav_elements} ${showNavbar && styles.active}`}>
                    <ul>
                        <li className={styles.nav_button_style}>
                            <NavLink to="/">
                                <div className={styles.navButton}>
                                    HOME
                                </div>
                            </NavLink>
                        </li>
                        <li className={styles.nav_button_style}>
                            <NavLink to="/">
                                <div className={styles.navButton}>
                                    ABOUT US
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
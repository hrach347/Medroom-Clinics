import { Link } from "react-router";

import logo from "../../Assets/Images/logo.svg";
import styles from "./style.module.css";
import { useState } from "react";

function Header() {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.menu}>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Staff">Staff</Link>
        <Link to="/Contact">Contact</Link>
      </div>
      <div
        className={`${styles.menuIcon} ${isOpened ? styles.openedIcon : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        className={`${styles.mobileMenu} ${
          isOpened ? styles.openedMobileMenu : ""
        }`}
      >
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Staff">Staff</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );
}

export default Header;

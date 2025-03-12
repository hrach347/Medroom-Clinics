import { useState } from "react";
import { Link } from "react-router";

import logo from "../../Assets/Images/logo.png";
import styles from "./style.module.css";

function Header() {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={styles.container}>
        <img src={logo} alt="" />
      <div className={styles.menu}>
        <Link to="/">Գլխավոր</Link>
        <Link to="/About">Մեր Մասին</Link>
        <Link to="/Services">Ծառայություններ</Link>
        <Link to="/Staff">Թիմ</Link>
        <Link to="/Contact">Կապ</Link>
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

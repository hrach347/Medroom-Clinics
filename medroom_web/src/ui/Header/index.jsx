import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router";

import logo from "../../Assets/Images/logo.png";
import styles from "./style.module.css";

function Header() {
  const [isOpened, setIsOpened] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const currentLocation = useLocation()


  useEffect(() => {
    
    
    if(currentLocation.pathname !== '/') {
      setIsScrolled(true);
      return;
    } else {
      setIsScrolled(false);
    }

    const scrollHandler = () => {
      setIsScrolled(window.scrollY > 100);
      
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }

  }, [currentLocation.pathname]);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={`${styles.container} ${isScrolled ? styles.scrolled : ""}`}>
        <img src={logo} alt="" />
      <div className={styles.menu}>
        <NavLink to="/" className={({isActive}) => (isActive ? styles.active : '')}>Գլխավոր</NavLink>
        <NavLink to="/About"  className={({isActive}) => (isActive ? styles.active : '')}>Մեր Մասին</NavLink>
        <NavLink to="/Services"  className={({isActive}) => (isActive ? styles.active : '')}>Ծառայություններ</NavLink>
        <NavLink to="/Staff"  className={({isActive}) => (isActive ? styles.active : '')}>Թիմ</NavLink>
        <NavLink to="/Contact"  className={({isActive}) => (isActive ? styles.active : '')}>Կապ</NavLink>
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

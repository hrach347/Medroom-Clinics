import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";

import logo from "../../Assets/Images/logo.png";
import styles from "./style.module.css";

function Header() {

  const { t } = useTranslation('header');

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
        <NavLink to="/" className={({isActive}) => (isActive ? styles.active : '')}>{t('home')}</NavLink>
        <NavLink to="/About"  className={({isActive}) => (isActive ? styles.active : '')}>{t('about')}</NavLink>
        <NavLink to="/Services"  className={({isActive}) => (isActive ? styles.active : '')}>{t('services')}</NavLink>
        <NavLink to="/Staff"  className={({isActive}) => (isActive ? styles.active : '')}>{t('team')}</NavLink>
        <NavLink to="/Contact"  className={({isActive}) => (isActive ? styles.active : '')}>{t('contact')}</NavLink>
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

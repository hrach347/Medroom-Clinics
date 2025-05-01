import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";

import styles from "./style.module.css";

function Header() {

  const { t, i18n } = useTranslation('header');

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

  const handleChangeLanguage = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang)
  }

  return (
    <div className={`${styles.container} ${isScrolled ? styles.scrolled : ""}`}>
        <img src='/Assets/Images/logo.png' alt="" />

        
      <div className={styles.menu}>
        <NavLink to="/" className={({isActive}) => (isActive ? styles.active : '')}>{t('home')}</NavLink>
        <NavLink to="/About"  className={({isActive}) => (isActive ? styles.active : '')}>{t('about')}</NavLink>
        <NavLink to="/Services"  className={({isActive}) => (isActive ? styles.active : '')}>{t('services')}</NavLink>
        <NavLink to="/Staff"  className={({isActive}) => (isActive ? styles.active : '')}>{t('team')}</NavLink>
        <NavLink to="/Contact"  className={({isActive}) => (isActive ? styles.active : '')}>{t('contact')}</NavLink>
      </div>
      <select className={styles.select} onChange={handleChangeLanguage} defaultValue={i18n.language}>
          <option value="hy">🇦🇲 Հայերեն</option>
          <option value="en">🇺🇸 English</option>
          <option value="ru">🇷🇺 Русский</option>
        </select>
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
        <Link to="/">{t('home')}</Link>
        <Link to="/About">{t('about')}</Link>
        <Link to="/Services">{t('services')}</Link>
        <Link to="/Staff">{t('team')}</Link>
        <Link to="/Contact">{t('contact')}</Link>
      </div>
    </div>
  );
}

export default Header;

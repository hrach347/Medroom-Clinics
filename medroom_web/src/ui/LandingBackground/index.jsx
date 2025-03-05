import React from "react";
import styles from "./style.module.css";
import header1 from "../../Assets/Images/header1.png";
import homePresent from "../../Assets/Images/homePresent.png";

const LandingBackground = () => {
  return (
    <div className={styles.font}>
      <img className={styles.fontBackground} src={header1} alt="" />
      <div className={styles.fontClient}>
        <div>
          <div className={styles.fontClientLine1}></div>
          <p>CLIENT CENTER</p>
          <div className={styles.fontClientLine2}></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicingelit. Recusandae
            Lorem
          </p>
        </div>
      </div>
      <img className={styles.homePresent} src={homePresent} alt="" />
    </div>
  );
};

export default LandingBackground;

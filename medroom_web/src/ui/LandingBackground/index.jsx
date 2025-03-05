import React from "react";
import styles from "./style.module.css";
import background from "../../Assets/Images/header1.png";

const LandingBackground = () => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${background})` }}
    >
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
    </div>
  );
};

export default LandingBackground;

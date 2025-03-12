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
          <p>Medroom Clinics</p>
          <div className={styles.fontClientLine2}></div>
          <p>
            Specialized in: <br /> • Alexandrite Laser Hair Removal <br /> •
            Advanced Skin Treatments <br />• Botox & Fillers <br /> •
            Therapeutic Massage <br /> • Turbo Solarium <br /> • 043 603600{" "}
            <br />• Sayat Nova 13, Yerevan, Armenia
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingBackground;

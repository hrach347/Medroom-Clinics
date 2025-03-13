import styles from "./style.module.css";
import FooterPartOne from "../../components/FooterPartOne";
import FooterPartTwo from "../../components/FooterPartTwo";
import FooterPartThree from "../../components/FooterPartTree";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerTopPartContainer}>
        <FooterPartOne />
       <FooterPartTwo />
       <FooterPartThree />
      </div>
      <hr className={styles.bottomLine} />
      <h3 className={styles.bottomTitle}>lorem lorem lorem lorem</h3>
      <p className={styles.bottomText}>lorem</p>
    </div>
  );
};

export default Footer;
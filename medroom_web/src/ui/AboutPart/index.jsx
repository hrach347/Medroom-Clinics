import CategoryCard from "../../components/CategoryCard/CategoryCard";

import font2 from "../../Assets/Images/font2.png";
import styles from "./style.module.css";

const AboutPart = (data) => {
  return (
    <div className={styles.welcome}>
      <img src={font2} alt="font" />
      <CategoryCard {...data} />
    </div>
  );
};

export default AboutPart;

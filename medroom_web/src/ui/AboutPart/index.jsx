import CategoryCard from "../../components/CategoryCard/CategoryCard";

import font2 from "../../Assets/Images/font2.png";
import clinicServices from "../../Assets/Images/clinicServices.png";
import styles from "./style.module.css";

const AboutPart = () => {
  const data = {
    title: '"ABC" Medical Center',
    description: 'We welcome you to the official website of "ABC" MC',
    subtitle:
      "Many of the clinics specialists have received work training abroad Many of the clinics specialists have received work training abroad",
    image: clinicServices,
  };
  return (
    <div className={styles.welcome}>
      <img src={font2} alt="font" />
      <CategoryCard {...data} />
    </div>
  );
};

export default AboutPart;

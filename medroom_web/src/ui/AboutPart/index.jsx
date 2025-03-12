import CategoryCard from "../../components/CategoryCard/CategoryCard";
import styles from "./style.module.css";

const AboutPart = ({ data, image }) => {
  return (
    <div
      className={styles.welcome}
      style={{ backgroundImage: `url(${image})` }}
    >
      <CategoryCard data={data} />
    </div>
  );
};

export default AboutPart;

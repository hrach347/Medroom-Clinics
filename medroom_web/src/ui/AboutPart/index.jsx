import CategoryCard from "../../components/CategoryCard/CategoryCard";
import styles from "./style.module.css";

const AboutPart = ({ data, background, image }) => {
  return (
    <div
      className={styles.welcome}
      style={{ backgroundImage: `url(${background})` }}
    >
      <CategoryCard data={data} image={image} />
    </div>
  );
};

export default AboutPart;

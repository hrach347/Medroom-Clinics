import BlogCarousel from "../../components/Carusel";
import Title from "../../components/Title"

import styles from "./style.module.css";
import data  from "./data";

const Blogs = () => {
  return (
    <div className={styles.container}>
      <Title>Մասնագիտական անկյուններ</Title>
      <BlogCarousel blogs={data} />
    </div>
  );
};

export default Blogs;

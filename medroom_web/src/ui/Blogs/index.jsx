import BlogCarousel from "../../components/Carusel";
import Title from "../../components/Title"

import styles from "./style.module.css";

const Blogs = ({ data }) => {
  return (
    <div className={styles.container}>
      <Title>{data.title}</Title>
      <BlogCarousel blogs={data.blogs} />
    </div>
  );
};

export default Blogs;

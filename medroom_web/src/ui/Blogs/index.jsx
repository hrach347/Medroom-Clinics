import React from "react";
import styles from "./style.module.css";
import { data } from "./data";
import BlogCarousel from "../../components/Carusel";

const Blogs = () => {
  return (
    <div className={styles.container}>
      <h1>Մասնագիտական անկյուններ</h1>
      <div className={styles.liner}></div>
      <BlogCarousel blogs={data} />
    </div>
  );
};

export default Blogs;

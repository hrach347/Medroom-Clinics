import React from "react";
import styles from "./style.module.css";

const Blog = ({ data }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${data.url})` }}
      ></div>
      <p className={styles.description}>{data.description}</p>
      <p className={styles.title}>{data.title}</p>
      <div className={styles.line}> </div>
      <button className={styles.servicesButton}>Ավելին</button>
    </div>
  );
};

export default Blog;

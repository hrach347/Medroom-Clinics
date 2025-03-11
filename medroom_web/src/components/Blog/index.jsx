import React from "react";
import styles from "./style.module.css";

const Blog = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
      <img src={data.url} alt="" />
      </div>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.line}> </div>
      <p className={styles.title}>{data.title}</p>
    </div>
  );
};

export default Blog;

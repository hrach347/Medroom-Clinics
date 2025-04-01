import React from "react";
import styles from "./style.module.css";
import Button from "../Button/button";

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
      <Button content="Ավելին" to={data.to}/>
    </div>
  );
};

export default Blog;
import React from "react";
import styles from "./button.module.css";
import { Link } from "react-router";

const Button = ({ content ,to}) => {
  return (
    <Link to={to}>
      <button className={styles.btn}>{content}</button>
    </Link>
  );
};

export default Button;

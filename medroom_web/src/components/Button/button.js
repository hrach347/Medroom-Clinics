import React from "react";
import styles from "./button.module.css";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Button = ({ content ,to, animateVariant}) => {
  return (
    <Link to={to}>
      <motion.button className={styles.btn} variants={animateVariant}>{content}</motion.button>
    </Link>
  );
};

export default Button;

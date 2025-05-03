import React from "react";
import styles from "./button.module.css";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Button = ({ content, to, animateVariant, type = 'button'}) => {
  const buttonElement = (
    <motion.button
      type={type}
      className={styles.btn}
      variants={animateVariant}
    >
      {content}
    </motion.button>
  );

  return to ? <Link to={to}>{buttonElement}</Link> : buttonElement;
};

export default Button;
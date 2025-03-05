import React, { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "framer-motion";

import { buttonVariants, containerVariants, textVariants } from "./animate";
import styles from "./style.module.css";

const CategoryCard = ({ title, description, subtitle, image, to }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.1 });
  return (
    <div className={styles.welcomeAbout}>
      <div className={styles.aboutLeft}>
        <motion.div
          ref={ref}
          className={styles.aboutLeftInformation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.p variants={textVariants}>{title}</motion.p>
          <motion.p variants={textVariants}>{description}</motion.p>
          <motion.div
            className={styles.aboutLeftLine}
            variants={textVariants}
          ></motion.div>
          <motion.span variants={textVariants}>{subtitle}</motion.span>
          <Link to={to}>
            <motion.button
              variants={buttonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              READ MORE
            </motion.button>
          </Link>
        </motion.div>
      </div>
      <div className={styles.aboutRight}>
        <img src={image} alt="clinic services" />
      </div>
    </div>
  );
};

export default CategoryCard;

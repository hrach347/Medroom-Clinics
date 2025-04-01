import React, { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "framer-motion";

import { containerVariants, textVariants } from "./animate";
import styles from "./style.module.css";
import Button from "../Button/button";

const CategoryCard = ({ data }) => {
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
          <motion.p className={styles.title} variants={textVariants}>
            {data.title}
          </motion.p>
          <motion.p className={styles.description} variants={textVariants}>
            {data.description}
          </motion.p>
          <motion.div
            className={styles.aboutLeftLine}
            variants={textVariants}
          ></motion.div>
          <motion.span variants={textVariants}>{data.subtitle}</motion.span>
          <Link to={data.to}>
            <Button content='Իմանալ ավելին' to='/alexandrit'/>
          </Link>
        </motion.div>
      </div>
      <div
        className={styles.aboutRight}
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>
    </div>
  );
};

export default CategoryCard;

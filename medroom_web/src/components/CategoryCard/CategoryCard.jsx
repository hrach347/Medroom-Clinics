import React, { useRef } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { buttonVariants, containerVariants, textVariants } from "./animate";
import styles from "./style.module.css";
import Button from "../Button/button";

const CategoryCard = ({ data }) => {


  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <div className={styles.welcomeAbout}>
      <div className={styles.aboutLeft}>
        <motion.div
          ref={ref}
          className={styles.aboutLeftInformation}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
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
            <Button content='Իմանալ ավելին'/>
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

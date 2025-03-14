import React from "react";
import styles from "./style.module.css";
import { motion } from 'framer-motion';
import { titleVariant, containerVariant, lineVariant, textVariant } from "./animate";
import VideoBackground from "../../components/VideoBackground/videoBackground";

const LandingBackground = () => {
  return (
    <motion.div className={styles.container}>

      <VideoBackground />

      <motion.h2
        className={styles.title}
        variants={titleVariant}
        initial='hidden'
        animate='visible'
      >
        Medroom Clinics
      </motion.h2>

      <motion.div 
        className={styles.hr} 
        variants={lineVariant}
        initial='hidden'
        animate='visible'
      />

      <motion.ul
        variants={containerVariant}
        initial='hidden'
        animate='visible'
        className={styles.forHeaderTexts}
      >
        <motion.li variants={textVariant}>Alexandrite Laser Hair Removal</motion.li>
        <motion.li variants={textVariant}>Advanced Skin Treatments</motion.li>
        <motion.li variants={textVariant}>Botox & Fillers</motion.li>
        <motion.li variants={textVariant}>Therapeutic Massage</motion.li>
        <motion.li variants={textVariant}>Turbo Solarium</motion.li>
      </motion.ul>

    </motion.div>
  );
};

export default LandingBackground;

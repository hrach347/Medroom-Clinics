import React from 'react';
import styles from './style.module.css'
import { motion } from 'framer-motion';
import { imageVariants } from './animation';


const RightMore = ({data}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.rightConfideTitle}>
                {data.title}
               </h2>
               <motion.div
                  className={styles.infoImage}
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.1, ease: "easeInOut" } 
                  }}
                  whileTap={{ scale: 0.95,  }} 
                >
                   <img src={data.infoImage} alt=''/>
                </motion.div>
               <p className={styles.rightConfideTitle2}>{data.title2}</p>
               <span className={styles.rightConfideDescription}>
                {data.description}
               </span>
        </div>
    );
};

export default RightMore;
import React from 'react';
import styles from './style.module.css'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { containerVariants, textVariants } from './animate';

const LeftMore = ({ data }) => {

    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    const pendingData = data.lists.map((list, index) => (
        <motion.li
            key={index}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <motion.h2 variants={textVariants} className={styles.title}>
                {list.title}
            </motion.h2>
            <motion.p variants={textVariants} className={styles.description}>
                {list.description}
            </motion.p>
        </motion.li>
    ));

    return (
        <div className={styles.container}>
            <video className={styles.directory} controls autoPlay muted loop>
                <source src={data.infoVideo} type="video/mp4" />
            </video>

            <motion.ul
                className={styles.lists}
                variants={containerVariants}
                ref={ref} 
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {pendingData}
            </motion.ul>
        </div>
    );
};

export default LeftMore;

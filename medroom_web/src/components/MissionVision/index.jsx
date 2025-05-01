import { useState } from 'react';
import OurMissionCard from '../OurMissionCard';
import styles from './style.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { containerVariant, cardVariant, titleVariant } from './animate';


const MissionVision = ({ data }) => {

    const [activeCard, setActiveCard] = useState(2);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    })

    return (
        <motion.div 
            ref={ref} 
            className={styles.container} 
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariant}
        >
            <motion.h2 className={styles.title} variants={titleVariant}>{data.title}</motion.h2>
            <motion.h3 className={styles.subtitle} variants={titleVariant}>{data.subtitle}</motion.h3>
            <motion.h4 className={styles.description} variants={titleVariant}>{data.description}</motion.h4>
            <motion.div 
                className={styles.cards}
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
                variants={containerVariant}
            >
            {
                data.cards.map((card, index) => 
                    <OurMissionCard 
                        key={index} 
                        data={card} 
                        activeCard={activeCard}
                        setActiveCard={setActiveCard}
                        animateVariant={cardVariant}
                    />
                )
            }
            </motion.div>
        </motion.div>
    );
};

export default MissionVision;
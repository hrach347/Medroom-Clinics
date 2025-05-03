import styles from './style.module.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { containerVariant, textVariant, ImageVariant } from './animate';
import InfoBoxes from '../../components/InfoBoxes';

const WhyChooseUs = ({ data }) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    })


    return (
        <div 
            className={styles.container}
            style={{backgroundImage: `url(/Assets/Images/why-choose-bg.svg)`}}
            ref={ref}
        >
            <motion.div 
                className={styles.leftSide}
                initial='hidden'
                animate={inView ? 'visible' : 'hiden'}
                variants={containerVariant}
            >
                <motion.h3 variants={textVariant} className={styles.whyUs}>{data.whyUs}</motion.h3>
                <motion.h2 variants={textVariant} className={styles.title}>{data.title}</motion.h2>
                <motion.p variants={textVariant} className={styles.description}>{data.description}</motion.p>
            </motion.div> 

            <div className={styles.middle} >
                <motion.img 
                    src='/Assets/Images/doctors.JPG'
                    alt='' 
                    initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={ImageVariant}
                />
            </div>
                
            <motion.div 
                className={styles.rightSide}
                initial='hidden'
                animate={inView ? 'visible' : 'hiden'}
                variants={containerVariant}
            >
                {
                    data.boxes.map((box, index) => {
                        return <InfoBoxes key={index} data={box} animVariant={textVariant} />
                    })
                }
            </motion.div>
        </div>
    );
};

export default WhyChooseUs;
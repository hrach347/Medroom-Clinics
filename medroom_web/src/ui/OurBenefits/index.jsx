import InfoBoxes from '../../components/InfoBoxes';
import styles from './style.module.css';
import { motion } from 'framer-motion';
import Button from '../../components/Button/button';
import { useInView } from 'react-intersection-observer';
import { textVariant, containerVariant, titleVariant, buttonVariant, imageVariant } from './animate';
 
const OurBenefits = ({ data }) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5
    })

    return (

        <div ref={ref} className={styles.container}> 
            <motion.div 
                className={styles.leftSide} 
                style={{backgroundImage: `url(${data.background})`}}
                initial='hidden'
                animate={ inView ? 'visible' : 'hidden'}
                variants={imageVariant}
            ><div className={styles.layer} /></motion.div>

            <motion.div 
                className={styles.rightSide}
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
                variants={containerVariant}
            >
                <motion.h2 className={styles.title} variants={titleVariant}>{data.title}</motion.h2>
                <motion.h3 className={styles.description} variants={textVariant}>{data.description}</motion.h3>
                {
                    data.boxes.map((box, index) => 
                        <InfoBoxes 
                            key={index} 
                            data={box} 
                            mode='forAbout'
                            animVariant={textVariant}
                        />
                    )
                }
                <Button content={data.buttonContent} to='/Contact' animateVariant={buttonVariant}/>
            </motion.div>
        </div>
    );
};

export default OurBenefits;
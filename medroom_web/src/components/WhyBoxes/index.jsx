import styles from './style.module.css';
import { motion } from 'framer-motion';


const WhyBoxes = ({data, animVariant}) => {

    return (
        <motion.div 
            className={styles.container}
            variants={animVariant}
        >
            <div className={styles.leftSide}>
                <div className={styles.iconBox}>
                    <img src={data.icon} alt=''/>
                </div>
            </div>
            <div className={styles.rightSide}>
                <h2 className={styles.name}>{data.name}</h2>
                <p className={styles.description}>{data.description}</p>
            </div>
        </motion.div>
    );
};

export default WhyBoxes;
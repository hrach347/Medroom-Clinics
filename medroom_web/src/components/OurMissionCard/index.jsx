import styles from './style.module.css';
import { motion } from 'framer-motion';

const OurMissionCard = ({ data, activeCard, setActiveCard, animateVariant}) => {

    return (
        <motion.div 
            className={`${styles.container} ${activeCard === data.id ? styles.active : ''}`}
            onMouseEnter={() => setActiveCard(data.id)}
            variants={animateVariant}
        >
            <img src={data.icon} alt='' />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
        </motion.div>
    );
};

export default OurMissionCard;
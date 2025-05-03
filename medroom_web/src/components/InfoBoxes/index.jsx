import styles from './style.module.css';
import { motion } from 'framer-motion';


const InfoBoxes = ({data, animVariant, mode}) => {

    return (
        <motion.div 
            className={styles.container}
            style={{
                gridTemplateColumns: mode === 'forAbout' ? '1fr 9fr' : ''
            }}
            variants={animVariant}
        >
            <div className={styles.leftSide}>
                <div className={styles.iconBox}>
                    <img src={data.icon} alt=''/>
                </div>
            </div>
            <div className={styles.rightSide}>
                <h2  
                    className={styles.name}
                    style={{
                        fontSize: mode === 'forAbout' ? 26 : ''
                    }}
                >{data.name}</h2>
                <p 
                    className={styles.description}
                    style={{
                        fontSize: mode === 'forAbout' ? 20 : ''
                    }}
                >{data.description}</p>
            </div>
        </motion.div>
    );
};

export default InfoBoxes;
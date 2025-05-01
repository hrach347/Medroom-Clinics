import { useRef, useState } from 'react';
import OurMissionCard from '../OurMissionCard';
import styles from './style.module.css';


const MissionVision = ({ data }) => {

    const [activeCard, setActiveCard] = useState(2)

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{data.title}</h2>
            <h3 className={styles.subtitle}>{data.subtitle}</h3>
            <h4 className={styles.description}>{data.description}</h4>
            <div className={styles.cards}>
            {
                data.cards.map((card, index) => 
                    <OurMissionCard 
                        key={index} 
                        data={card} 
                        activeCard={activeCard}
                        setActiveCard={setActiveCard}
                    />
                )
            }
            </div>
        </div>
    );
};

export default MissionVision;
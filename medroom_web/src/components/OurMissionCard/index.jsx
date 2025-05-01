import styles from './style.module.css';

const OurMissionCard = ({ data, activeCard, setActiveCard}) => {

    return (
        <div 
            className={`${styles.container} ${activeCard === data.id ? styles.active : ''}`}
            onMouseEnter={() => setActiveCard(data.id)}
        >
            <img src={data.icon} alt='' />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
        </div>
    );
};

export default OurMissionCard;
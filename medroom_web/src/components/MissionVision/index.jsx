import styles from './style.module.css';

const MissionVision = ({ data }) => {

    console.log(data)

    return (
        <div className={styles.container}>
            {
                data.cards.map((card, index) => 
                    <div key={index}>
                        <h2>{card.title}</h2>
                        <img src={card.icon} alt='' />
                        <p>{card.description}</p>
                    </div>
                )
            }
        </div>
    );
};

export default MissionVision;
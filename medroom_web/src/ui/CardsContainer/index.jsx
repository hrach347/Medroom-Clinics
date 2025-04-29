import AdvantageCard from "../../components/AdvantageCard";
import Title from "../../components/Title";

import styles from "./style.module.css";

const CardsContainer = ({ data }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(/Assets/Images/backgroundPattern.png)` }}
    >
      <div className={styles.text}>
        <Title>{data.title}</Title>
      </div>
      <div className={styles.cards}>
        {data.cards.map((card, index) => (
          <AdvantageCard key={index} text={card.text} image={card.image} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;

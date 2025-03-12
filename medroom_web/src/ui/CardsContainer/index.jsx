import AdvantageCard from "../../components/AdvantageCard";
import Title from "../../components/Title";
import data from "./data.js";

import background from "../../Assets/Images/backgroundPattern.png";
import styles from "./style.module.css";

const CardsContainer = () => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.text}>
        <Title>Ինչու՞ ընտրել մեզ</Title>
      </div>
      <div className={styles.cards}>
        {data.map((card, index) => (
          <AdvantageCard key={index} text={card.text} image={card.image} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;

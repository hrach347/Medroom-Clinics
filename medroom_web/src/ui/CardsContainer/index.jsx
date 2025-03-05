import AdvantageCard from "../../components/AdvantageCard";
import data from "./data.js";
import styles from "./style.module.css";

const CardsContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Why do they choose us?</h1>
      </div>
      <div className={styles.cards}>
        {data.map((card, index) => {
          return (
            <AdvantageCard key={index} text={card.text} image={card.image} />
          );
        })}
      </div>
    </div>
  );
};

export default CardsContainer;

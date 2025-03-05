import styles from "./style.module.css";

const AdvantageCard = ({ text, image }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt=""/>
      <h2>{text}</h2>
    </div>
  );
};

export default AdvantageCard;

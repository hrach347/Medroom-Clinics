import styles from "./style.module.css";

const StaffCard = ({ name, profession, image }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt="" />
      <h1>{name}</h1>
      <h2>{profession}</h2>
    </div>
  );
};

export default StaffCard;

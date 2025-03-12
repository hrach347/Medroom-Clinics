import StaffCard from "../../components/StaffCard/index.jsx";
import Title from "../../components/Title/index.jsx";

import data from "./data.js";
import styles from "./style.module.css";

function Staff() {
  return (
    <div className={styles.container}>
      <Title>Մեր Բժիշկները</Title>
      <div className={styles.cards}>
        {data.map((person) => {
          return <StaffCard {...person} />;
        })}
      </div>
    </div>
  );
}

export default Staff;

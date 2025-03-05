import StaffCard from "../../components/StaffCard/index.jsx";

import data from "./data.js";
import styles from "./style.module.css";

function Staff() {
  return (
    <div className={styles.container}>
      <h1>Doctors</h1>
      <div className={styles.cards}>
        {data.map((person) => {
          return <StaffCard {...person} />;
        })}
      </div>
    </div>
  );
}

export default Staff;

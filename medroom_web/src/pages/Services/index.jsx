import { pendingCards } from "./data";
import styles from "./style.module.css";
import Title from "../../components/Title";

function Services() {
  return (
    <div className={styles.container}>
      <Title>Մեր ծառայությունները</Title>
      <div className={styles.serviceCards}>
        {pendingCards}
      </div>
    </div>
  )
}

export default Services;
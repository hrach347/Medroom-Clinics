import { pendingCards } from "./data";
import styles from "./style.module.css";
import Title from "../../components/Title";
import WelcomeCard from "../../components/WelcomeCard";
import { useParams } from "react-router";

function Services() {

  return (
    <div className={styles.container}>
      <WelcomeCard title = 'ծառայություններ' title2='Home / Services'/>
      {/* <Title>Մեր ծառայությունները</Title> */}
      <div className={styles.serviceCards}>
        {pendingCards}
      </div>
    </div>
  )
}

export default Services;
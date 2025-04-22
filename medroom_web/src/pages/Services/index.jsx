import { pendingCards, productionData } from "./data";
import styles from "./style.module.css";
import WelcomeCard from "../../components/WelcomeCard";
import ProductionInfo from "../../ui/ProductionInfo";

function Services() {

  return (
    <div className={styles.container}>
      <WelcomeCard title = 'ծառայություններ' title2='Home / Services'/>
      {/* <Title>Մեր ծառայությունները</Title> */}
      <div className={styles.serviceCards}>
        {pendingCards}
      </div>
      <ProductionInfo data={productionData}/>
    </div>
  )
}

export default Services;
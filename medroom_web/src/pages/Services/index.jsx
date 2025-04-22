import { pendingCards, productionData } from "./data";
import styles from "./style.module.css";
import WelcomeCard from "../../components/WelcomeCard";
import { useParams } from "react-router";
import ProductionInfo from "../../ui/ProductionInfo";
import WhyChooseUs from "../../components/WhyUsCard";

function Services() {

  return (
    <div className={styles.container}>
      <WelcomeCard title = 'Ծառայություններ' title2='Home / Services'/>
      <div className={styles.serviceCards}>
        {pendingCards}
      </div>
      <ProductionInfo data={productionData}/>
      <WhyChooseUs />
    </div>
  )
}

export default Services;
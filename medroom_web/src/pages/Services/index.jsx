import styles from "./style.module.css";
import WelcomeCard from "../../components/WelcomeCard";
import ProductionInfo from "../../ui/ProductionInfo";
import WhyChooseUs from "../../ui/WhyUsCard";
import { useTranslation } from "react-i18next";
import ServiceCard from "../../components/ServiceCard";

function Services() {
  const { t } = useTranslation('services');
  const pendingCardsData = t('cardsData', {returnObjects: true});
  const productionData = t('productionData', {returnObjects: true});
  const whyUsData = t('whyUsData', {returnObjects: true});

  return (
    <div className={styles.container}>
      <WelcomeCard title={t('pageTitle')} title2='Home / Services'/>
      <div className={styles.serviceCards}>
        {
          pendingCardsData.map((data, index) => {
            return <ServiceCard key={index} data={data}/>
          })
        }
      </div>
      <ProductionInfo data={productionData}/>
      <WhyChooseUs data={whyUsData}/>
    </div>
  )
}

export default Services;
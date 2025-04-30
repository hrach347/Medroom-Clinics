import AboutPart from "../../ui/AboutPart";
import LandingBackground from "../../ui/LandingBackground";
import CardsContainer from "../../ui/CardsContainer";


import styles from "./style.module.css";
import Blogs from "../../ui/Blogs";
import InformationAboutClinic from "../../ui/InformationAboutClinic";
import SmallDecorativePart from "../../ui/SmallDecorativePart";
import { useTranslation } from "react-i18next";

function Home() {

  const { t } = useTranslation('home');

  const dataAlexandrit = t('dataAlexandrit', {returnObjects: true});
  const dataPoxpatvastum = t('dataPoxpatvastum', {returnObjects: true});
  const decorationCardData = t('decorationCard', {returnObjects: true});
  const whyUsData = t('whyUs', {returnObjects: true}); 
  const blogsData = t('blogsData', {returnObjects: true});
  const clinikInformation = t('clinicInformation', {returnObjects: true});

 
  return (
    <div className={styles.container}>
      <LandingBackground />
      <AboutPart data={dataAlexandrit} image={'/Assets/Images/font2.png'} />
      <SmallDecorativePart data={decorationCardData} />
      <CardsContainer data={whyUsData} />
      <AboutPart data={dataPoxpatvastum} image={'/Assets/Images/font2.png'} />
      <Blogs data={blogsData} />
      <InformationAboutClinic data={clinikInformation} />
    </div>
  );
}

export default Home;
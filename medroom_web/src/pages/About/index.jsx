import Title from "../../components/Title";
import AboutPart from "../../ui/AboutPart";

import styles from "./style.module.css";
import { useTranslation } from "react-i18next";
import WelcomeCard from "../../components/WelcomeCard";
import MissionVision from "../../components/MissionVision";
import OurBenefits from "../../ui/OurBenefits";
import Blogs from "../../ui/Blogs";
import ListComponent from "../../components/ListComponent";


function About() {

  const { t } = useTranslation('about');

  const firstCardData = t('firstCardData', {returnObjects: true});
  const secondCardData = t('secondCardData', {returnObjects: true});
  const qualityBox = t('qualityBox', {returnObjects: true});
  const missionCard = t('missionCard', {returnObjects: true});
  const benefitsCard = t('benefitsCard', {returnObjects: true});
  const blogsData = t('blogsData',{returnObjects:true});

  return (
    <div className={styles.container}>
      <WelcomeCard title={t('pageTitle')} title2='home / About' />
      <p>{t('pageDescription')}</p>
     
      <AboutPart data={firstCardData} background={'/Assets/Images/backgroundPattern.png'} image={'/Assets/Images/girlsImage.jpg'}/>
      <Title>{qualityBox.title}</Title>
      <ListComponent data={qualityBox.descriptions} />
      <OurBenefits data={benefitsCard} />

      <AboutPart data={secondCardData} image={'/Assets/Images/fonts3.jpg'} />
      <Title>{qualityBox.title}</Title>
      <ListComponent data={qualityBox.descriptions} />

      <MissionVision data={missionCard} />
      <Blogs data={blogsData} />

    </div>
  );
}

export default About;

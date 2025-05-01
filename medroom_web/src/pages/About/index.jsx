import Title from "../../components/Title";
import AboutPart from "../../ui/AboutPart";

import styles from "./style.module.css";
import { useTranslation } from "react-i18next";
import WelcomeCard from "../../components/WelcomeCard";
import MissionVision from "../../components/MissionVision";


function About() {

  const { t } = useTranslation('about');

  const firstCardData = t('firstCardData', {returnObjects: true});
  const secondCardData = t('secondCardData', {returnObjects: true});
  const qualityBox = t('qualityBox', {returnObjects: true});
  const missionCard = t('missionCard', {returnObjects: true});

  return (
    <div className={styles.container}>
      <WelcomeCard title={t('pageTitle')} title2='home / About' />
      <p>{t('pageDescription')}</p>
     
      <AboutPart data={firstCardData} background={'/Assets/Images/backgroundPattern.png'} image={'/Assets/Images/girlsImage.jpg'}/>
      <Title>{qualityBox.title}</Title>
      <ul>
        <li>{qualityBox.description1}</li>
        <li>{qualityBox.description2}</li>  
        <li>{qualityBox.description3}</li>
        <li>{qualityBox.description4}</li>
        <li>{qualityBox.description5}</li>
      </ul>
      <AboutPart data={secondCardData} background={'/Assets/Images/fonts5.jpg'} image={'/Assets/Images/kosmet4.JPG'} />
      <Title>{qualityBox.title}</Title>
      <ul>
        <li>{qualityBox.description1}</li>
        <li>{qualityBox.description2}</li>  
        <li>{qualityBox.description3}</li>
        <li>{qualityBox.description4}</li>
        <li>{qualityBox.description5}</li>
      </ul>

      <MissionVision data={missionCard} />
    </div>
  );
}

export default About;

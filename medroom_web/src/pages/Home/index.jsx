import AboutPart from "../../ui/AboutPart";
import LandingBackground from "../../ui/LandingBackground";
import CardsContainer from "../../ui/CardsContainer";


import styles from "./style.module.css";
import Blogs from "../../ui/Blogs";
import font from "../../Assets/Images/font2.png";
import InformationAboutClinic from "../../ui/InformationAboutClinic";
import SmallDecorativePart from "../../ui/SmallDecorativePart";
import { dataAlexandrit, dataPoxpatvastum } from "./data";

function Home() {
 
  return (
    <div className={styles.container}>
      <LandingBackground />
      <AboutPart data={dataAlexandrit} image={font} />
      <SmallDecorativePart />
      <CardsContainer />
      <AboutPart data={dataPoxpatvastum} image={font} />
      <Blogs />
      <InformationAboutClinic />
    </div>
  );
}

export default Home;
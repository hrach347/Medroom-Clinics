import styles from "./style.module.css";
import AboutPart from "../../ui/AboutPart/AboutPart";
import LandingBackground from "../../ui/LandingBackground/LandingBackground";
import CardsContainer from "../../ui/CardsContainer";

function Home() {
  return (
    <div className={styles.container}>
      <LandingBackground />
      <AboutPart />
      <CardsContainer/>
    </div>
  );
}

export default Home;

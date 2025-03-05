import AboutPart from "../../ui/AboutPart";
import LandingBackground from "../../ui/LandingBackground";
import CardsContainer from "../../ui/CardsContainer";

import clinicServices from "../../Assets/Images/clinicServices.png";
import styles from "./style.module.css";

function Home() {
  const data = {
    title: '"ABC" Medical Center',
    description: 'We welcome you to the official website of "ABC" MC',
    subtitle:
      "Many of the clinics specialists have received work training abroad Many of the clinics specialists have received work training abroad",
    image: clinicServices,
    to: "/",
  };
  return (
    <div className={styles.container}>
      <LandingBackground />
      <AboutPart {...data} />
      <CardsContainer />
      <AboutPart {...data} />
    </div>
  );
}

export default Home;

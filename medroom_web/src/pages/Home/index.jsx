import AboutPart from "../../ui/AboutPart";
import LandingBackground from "../../ui/LandingBackground";
import CardsContainer from "../../ui/CardsContainer";

import clinicServices from "../../Assets/Images/MerMasin.PNG";
import styles from "./style.module.css";
import Blogs from "../../ui/Blogs";
import font from "../../Assets/Images/font2.png";

function Home() {
  const data = {
    title: 'Լազեռային Մազահեռացում',
    description: 'Անվտանգ և պրոֆեսիոնալ մոտեցում',
    subtitle:
      "Ալեքսանդրիտային մազահեռացումը մեր կենտրոնում կատարում են բժշկական կրթություն ունեցող մասնագետները՝ ապահովելով անվտանգ, արագ և արդյունավետ արդյունք:",
    image: clinicServices,
    to: "/",
  };
  return (
    <div className={styles.container}>
      <LandingBackground />
      <AboutPart data={data} image={font} />
      <CardsContainer />

      <Blogs />
    </div>
  );
}

export default Home;

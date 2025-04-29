import InfoAboutClinic from "../../components/InfoAboutClinicPart";
import styles from "./style.module.css";



function InformationAboutClinic({ data }) {

  return (
    <div className={styles.container}>
      {data.map((element, index) => {
        return (
          <InfoAboutClinic 
            key={index} 
            end={element.account}
            text={element.text}
          />
        );
      })}
    </div>
  );
}

export default InformationAboutClinic;

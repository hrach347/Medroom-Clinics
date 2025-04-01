import InfoAboutClinic from "../../components/InfoAboutClinicPart";
import styles from "./style.module.css";




function InformationAboutClinic() {
  const data = [
    { account: 10, text: "Partners" },
    { account: 10, text: "Employee" },
    { account: 200, text: "Clients" },
    { account: 500, text: "Services" },
    { account: 7, text: "Years of experience" },
  ];

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

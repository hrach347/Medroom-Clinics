import styles from "./style.module.css";

function InfoAboutClinic({ children }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}

export default InfoAboutClinic;

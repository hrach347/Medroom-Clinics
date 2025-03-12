import styles from "./style.module.css";

function Title({ children }) {
  return (
    <div>
      <h1 className={styles.title}>{children}</h1>
      <div className={styles.dot}></div>
    </div>
  );
}

export default Title;

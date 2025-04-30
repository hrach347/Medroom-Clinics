import styles from "./style.module.css";
import Button from "../../components/Button/button";

function SmallDecorativePart({ data }) {
    return (
        <div className={styles.container}>
            <div className={styles.smallContainer}>
                <div className={styles.decorativeBlockOne}></div>
                <div className={styles.decorativeBlockTwo}></div>
                <div style={{backgroundImage: `url(/Assets/Images/kosmet.webp)`}} className={styles.picture}/>
                <div className={styles.informationContainer}>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                    <Button content={data.buttonContent} to={'/Contact'}/>
                </div>
            </div>
        </div>
    )
}

export default SmallDecorativePart
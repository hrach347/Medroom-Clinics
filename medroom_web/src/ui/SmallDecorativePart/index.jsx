import styles from "./style.module.css";
import doctorWithClient from "../../Assets/Images/kosmet.JPG";
import Button from "../../components/Button/button";

function SmallDecorativePart() {
    return (
        <div className={styles.container}>
            <div className={styles.smallContainer}>
                <div className={styles.decorativeBlockOne}></div>
                <div className={styles.decorativeBlockTwo}></div>
                <div style={{backgroundImage: `url(${doctorWithClient})`}} className={styles.picture}/>
                <div className={styles.informationContainer}>
                    <h3>Կապնվեք մեզ հետ</h3>
                    <p>We are confident that we can provide you with the best solution for your medical practice. Contact us to learn more about our services and how we can assist you.</p>
                    <Button content={'Կապ'} to={'/Contact'}/>
                </div>
            </div>
        </div>
    )
}

export default SmallDecorativePart
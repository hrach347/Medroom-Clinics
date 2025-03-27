import girlPictureOne from "../../Assets/Images/girlPictureOne.webp"
import girlPictureTwo from "../../Assets/Images/girlPictureTwo.webp"
import styles from "./style.module.css";

function HelperCard() {
    return (
        <div className={styles.container}>
            <div className={styles.pictureContainer}>
                <img src={girlPictureTwo} alt="" width="100%" height="100%" />
            </div>
            <div className={styles.rightPart}>
                <h2>WE ARE ON SOCIAL MEDIA</h2>
                <p className={styles.rightPartText}>Here you will find us on social media</p>
                <div>icons list</div>
            </div>
        </div>
    )
}

export default HelperCard
import girlPictureOne from "../../Assets/Images/girlPictureOne.webp"
import girlPictureTwo from "../../Assets/Images/girlPictureTwo.webp"
import styles from "./style.module.css";

function HelperCard({data}) {
    return (
        <div className={styles.container}>
            <div className={styles.pictureContainer}>
                <img src={girlPictureTwo} alt="" width="100%" height="100%" />
            </div>
            <div className={styles.rightPart}>
                <h2>{data.title}</h2>
                <p className={styles.rightPartText}>{data.description}</p>
                <div>icons list</div>
            </div>
        </div>
    )
}

export default HelperCard
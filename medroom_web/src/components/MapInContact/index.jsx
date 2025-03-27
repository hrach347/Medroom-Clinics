import styles from "./style.module.css";
import { motion } from "framer-motion";

function MapInContact({ map, location, phoneNumber, telegram, clinicName, xCordinat }) {
    const data = [
        { text: location },
        { text: phoneNumber },
        { text: telegram }
    ]
    return (
        <motion.div
            className={styles.container}
            initial={{ opacity: 0, x: xCordinat, }}
            whileInView={{ opacity: 1, x: 0, }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className={styles.informationContainer}>
                <h2>{clinicName}</h2>
                <div className={styles.informationBlock}>
                    {
                        data.map((element, index) => {
                            return <h3 key={index}>{element.text}</h3>
                        })
                    }
                </div>
            </div>
            <div className={styles.mapContainer}>{map}</div>
        </motion.div>
    )
}

export default MapInContact
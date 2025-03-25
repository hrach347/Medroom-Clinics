import styles from "./style.module.css";
import { useEffect, useState, useRef } from "react";

function InfoAboutClinic({ account, text }) {
    const [count, setCount] = useState(0);
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    return (
        <div className={styles.container} ref={sectionRef} >
            <h3>{account}</h3>
            <h4>{text}</h4>
        </div>
    )
}

export default InfoAboutClinic
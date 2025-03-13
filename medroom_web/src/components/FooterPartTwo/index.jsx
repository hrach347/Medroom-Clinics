import styles from "./style.module.css"

function FooterPartTwo() {
    return (
        <div className={styles.footerPartTwo}>
          <h3 className={styles.footerPartOneTitle}>SITE MAP</h3>
          <hr className={styles.line} />
          <ul className={styles.list}>
            <li>About the company</li>
            <li>lorem</li>
            <li>lorem</li>
          </ul>
        </div>
    )
}

export default FooterPartTwo
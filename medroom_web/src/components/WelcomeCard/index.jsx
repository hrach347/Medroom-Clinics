import styles from './style.module.css'


const WelcomeCard = ({title,title2}) => {
     return (
        <div className={styles.info}>
            <img className={styles.branch1} src='/Assets/Images/branch1.png' alt=''/>
                <p className={styles.infoTitle}>{title}</p>
                <p className={styles.infoTitle2}>{title2}</p>
            <img className={styles.branch2} src='/Assets/Images/branch2.png' alt=''/>
            
              </div>
     )
}
export default WelcomeCard
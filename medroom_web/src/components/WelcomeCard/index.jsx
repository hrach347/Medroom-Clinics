import styles from './style.module.css'
import branch1 from '../../Assets/Images/branch1.png'
import branch2 from '../../Assets/Images/branch2.png'


const WelcomeCard = ({title,title2}) => {
     return (
        <div className={styles.info}>
            <img className={styles.branch1} src={branch1} alt=''/>
                <p className={styles.infoTitle}>{title}</p>
                <p className={styles.infoTitle2}>{title2}</p>
            <img className={styles.branch2} src={branch2} alt=''/>
            
              </div>
     )
}
export default WelcomeCard
import { Link } from 'react-router'
import Button from '../Button/button'
import styles from './style.module.css'

const ServiceCard = ({date}) => {
      return (
          <Link to={date.to}>
           <div className={styles.card} style={{backgroundImage: `url(${date.image})`}}>
              <div className={styles.layer} />    
              <div className={styles.info}>
                <p className={styles.title}>{date.title}</p>
                <p className={styles.description}>{date.description}</p>
              </div>
            </div>
          </Link>
      )
}
export default ServiceCard
import { Link } from 'react-router';
import styles from './style.module.css';

const ServiceCard = ({data}) => {

      return (
          <Link to={data.to}>
           <div className={styles.card} style={{backgroundImage: `url(${data.image})`}}>
              <div className={styles.layer} />    
              <div className={styles.info}>
                <p className={styles.title}>{data.title}</p>
                <p className={styles.description}>{data.description}</p>
              </div>
            </div>
          </Link>
      )
}
export default ServiceCard
import styles from "./style.module.css";
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";

function InfoAboutClinic({ end, text, duration = 2 }) {

  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 1
  })

  return (
    <div className={styles.container} ref={ref}>
      <h3>
        {
          inView ? 
          <div className={styles.numberPlus}>
             <CountUp 
            start={0} 
            end={end} 
            duration={duration}
            useEasing
            separator=","
            />
            <p>+</p>
          </div>
          : 
          0
        }
      </h3>
      <h4>{text}</h4>
    </div>
  );
}

export default InfoAboutClinic;

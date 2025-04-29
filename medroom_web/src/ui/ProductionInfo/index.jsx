import styles from './style.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
  
 const ProductionInfo = ({data}) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const pendingLists = data.lists.map((list) => {
         return (
             <p key={Math.random()}><img src='/Assets/icons/Symbol.png'/>{list.name}</p>
         )
    });

    const pendingDescriptions = data.descriptions.map((list) => {
        return (
             <li className={styles.description} key={Math.random()}>{list.description}</li>
        )
    });

     return (
        <div className={styles.container} ref={ref}>

            <motion.video 
                className={styles.leftSide}
                initial={{x: -300, opacity: 0}}
                animate={inView ? {x: 0, opacity: 1} : 'hidden'}
                transition={{duration: 1}}
                muted
                controls 
                autoPlay 
                loop
             >
                <source type="video/mp4"  src={data.video} />
            </motion.video>

            <motion.div 
                className={styles.rightSide}
                initial={{x: 300, opacity: 0}}
                animate={inView ? {x: 0, opacity: 1} : 'hidden'}
                transition={{duration: 1}}
            >
                <div className={styles.rightChild}>
                    <p className={styles.proces}>{data.proc}</p>
                    <p className={styles.title}>{data.title}</p>
                    <ul className={styles.descriptions}>{pendingDescriptions}</ul>
                    <div className={styles.lists}>
                     {pendingLists}
                    </div>
                </div>
            </motion.div>
        </div>
     )

}
export default ProductionInfo
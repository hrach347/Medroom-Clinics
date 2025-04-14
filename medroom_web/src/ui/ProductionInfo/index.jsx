import styles from './style.module.css'
import icons from '../../Assets/icons/Symbol.png'
  
 const ProductionInfo = ({data}) => {

    const pendingLists = data.lists.map((list) => {
         return (
             <p><img src={icons}/>{list.name}</p>
         )
    })
     return (
        <div className={styles.container}>
            <video className={styles.leftSide}
            autoPlay 
            muted 
            loop
             >
                <source type="video/mp4"  src={data.video} />
            </video>
            <div className={styles.rightSide}>
                <div className={styles.rightChild}>
                    <p className={styles.proces}><div></div>Պռոցես</p>
                    <p className={styles.title}>{data.title}</p>
                    <p className={styles.description}>{data.description}</p>
                    <div className={styles.lists}>
                     {pendingLists}
                    </div>
                </div>
            </div>
        </div>
     )

}
export default ProductionInfo
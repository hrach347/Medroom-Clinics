import styles from './style.module.css'
import icons from '../../Assets/icons/Symbol.png'
  
 const ProductionInfo = ({data}) => {

    const pendingLists = data.lists.map((list) => {
         return (
             <p key={Math.random()}><img src={icons}/>{list.name}</p>
         )
    })

    const pendingDescriptions = data.descriptions.map((list) => {
        return (
             <li className={styles.description} key={Math.random()}>{list.description}</li>
        )
    })
     return (
        <div className={styles.container}>
            <video className={styles.leftSide}
            controls 
            autoPlay 
             loop
             >
                <source type="video/mp4"  src={data.video} />
            </video>
            <div className={styles.rightSide}>
                <div className={styles.rightChild}>
                    <p className={styles.proces}><div></div>Պռոցես</p>
                    <p className={styles.title}>{data.title}</p>
                    <ul className={styles.descriptions}>{pendingDescriptions}</ul>
                    <div className={styles.lists}>
                     {pendingLists}
                    </div>
                </div>
            </div>
        </div>
     )

}
export default ProductionInfo
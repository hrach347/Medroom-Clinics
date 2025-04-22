import styles from './style.module.css';
import doc from '../../Assets/Images/nune.jpg'

const WhyChooseUs = () => {

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <h3 className={styles.whyUs}>ԻՆՉՈՒ ԸՆՏՐԵԼ ՄԵԶ</h3>
                <h2 className={styles.title}>Գերազանցություն արդյունքներ որոնց կարողեք վստահել</h2>
                <p className={styles.description}>
                    Մեր կենտրոնում առաջարկում ենք բարձրորակ ծառայություններ՝ 
                    ժամանակակից սարքավորումներով և առաջադեմ տեխնոլոգիաներով: 
                    Մեր փորձառու մասնագետները նվիրված են ձեր առողջությանը՝ տրամադրելով 
                    անհատական բուժում և հոգատար սպասարկում:
                </p>
            </div> 

            <div 
                className={styles.middle} 
                // style={{background: `url(${doc})`}}
            />
                
            <div className={styles.rightSide}>

            </div>
        </div>
    );
};

export default WhyChooseUs;
import styles from "./style.module.css";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const Footer = () => {

  const { t } = useTranslation('footer');

  const linkIcons = ["", "", "", ""]


  const clinicData = [
    { icon: '/Assets/icons/location.svg', text: "11 Sayat-Nova Ave, Yerevan 0001", },
    { icon: '/Assets/icons/telephone.svg', text: "telephone number", },
    { icon: '/Assets/icons/mail.svg', text: "clinic mail", },
  ]

  const pages = t('pages', {returnObjects: true});
  const titles = t('titles', {returnObjects: true});

  return (
    <div className={styles.container}>
      <div className={styles.footerTopPartContainer}>
        <div className={styles.partContainer}>
          <h3>{titles.contacts}</h3>
          <hr />
          <img src='/Assets/Images/logo.png' alt="" width="120px" height="62px" className={styles.logo} />
          {
            clinicData.map((element, index) => {
              return (
                <h4 className={styles.clinicDataTitle} key={index + "" + element.text}>
                  <img src={element.icon} alt="" width="24px" height="24px" />
                  {element.text}
                </h4>
              )
            })
          }
        </div>
        <div className={styles.partContainer}>
          <h3 className={styles.footerPartOneTitle}>{titles.map}</h3>
          <hr className={styles.line} />
          <ul className={styles.list}>
            {
              pages.map((element, index) => {
                return <li className={styles.linkList} key={index}><Link to={element.link} key={index}>{element.name}</Link></li>
              })
            }
          </ul>
        </div>
        <div className={styles.partContainer}>
          <h3>{titles.social}</h3>
          <hr />
          <div className={styles.iconsContainer}>
           
          </div>
        </div>
      </div>
      <hr className={styles.bottomLine} />
      <h3 className={styles.bottomTitle}>lorem lorem lorem lorem</h3>
      <p className={styles.bottomText}>lorem</p>
    </div>
  );
};

export default Footer;
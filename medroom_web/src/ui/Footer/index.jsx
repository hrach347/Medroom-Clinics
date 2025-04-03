import styles from "./style.module.css"
import location from "../../Assets/icons/location.svg"
import telephone from "../../Assets/icons/telephone.svg"
import mail from "../../Assets/icons/mail.svg"
import logo from "../../Assets/Images/logo.png"
import { Link } from "react-router"

const Footer = () => {
  const linkIcons = ["", "", "", ""]

  const clinicData = [
    { icon: location, text: "11 Sayat-Nova Ave, Yerevan 0001", },
    { icon: telephone, text: "telephone number", },
    { icon: mail, text: "clinic mail", },
  ]
  const pages = [
    { name: "Գլխավոր", link: "/", },
    { name: "Մեր Մասին", link: "/About", },
    { name: "Կապ", link: "/Contact", },
    { name: "Թիմ", link: "/Staff", },
    { name: "Ծառայություններ", link: "/Services", },
  ]
  return (
    <div className={styles.container}>
      <div className={styles.footerTopPartContainer}>
        <div className={styles.partContainer}>
          <h3>OUR CONTACTS</h3>
          <hr />
          <img src={logo} alt="" width="120px" height="62px" className={styles.logo} />
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
          <h3 className={styles.footerPartOneTitle}>SITE MAP</h3>
          <hr className={styles.line} />
          <ul className={styles.list}>
            {
              pages.map((element, index) => {
                return <li className={styles.linkList}><Link to={element.link} key={index}>{element.name}</Link></li>
              })
            }
          </ul>
        </div>
        <div className={styles.partContainer}>
          <h3>WE ARE SOCIAL NETWORKS</h3>
          <hr />
          <div className={styles.iconsContainer}>
            {
              linkIcons.map((element, index) => <img src={element} width="24px" height="24px" key={index} />)
            }
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
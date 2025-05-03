import styles from "./style.module.css";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { clinicData, linkIcons } from "./data";

const Footer = () => {
  const { t } = useTranslation("footer");
  const pages = t("pages", { returnObjects: true });
  const titles = t("titles", { returnObjects: true });

  const pendingDataIcons = clinicData.map((element, index) => {
    return (
      <h4 className={styles.clinicDataTitle} key={index + "" + element.text}>
        <img src={element.icon} alt="" className={styles.logo2} />
        {element.text}
      </h4>
    );
  });

  const pendingDataMore = pages.map((element, index) => {
    return (
      <li className={styles.linkList} key={index}>
        <Link to={element.link} key={index}>
          {element.name}
        </Link>
      </li>
    );
  });

  const pendingIcons = linkIcons.map((el) => <a key={el.id} href={el.path} target="_blank">
     <img src={el.icon} alt=""/>
  </a>);

  return (
    <div className={styles.container}>
      <div className={styles.footerTopPartContainer}>
        <div className={styles.partContainer}>
          <h3>{titles.contacts}</h3>
          <hr />
          <img src="/Assets/Images/logo.png" alt="" className={styles.logo} />
          {pendingDataIcons}
        </div>
        <div className={styles.partContainer}>
          <h3 className={styles.footerPartOneTitle}>{titles.map}</h3>
          <hr className={styles.line} />
          <ul className={styles.list}>{pendingDataMore}</ul>
        </div>
        <div className={styles.partContainer}>
          <h3>{titles.social}</h3>
          <hr />
          <div className={styles.iconsContainer}>
            {pendingIcons}
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

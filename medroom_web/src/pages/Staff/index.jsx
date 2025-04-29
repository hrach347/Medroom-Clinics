import StaffCard from "../../components/StaffCard/index.jsx";
import { useTranslation } from "react-i18next";
import styles from "./style.module.css";
import WelcomeCard from "../../components/WelcomeCard/index.jsx";

function Staff() {

  const { t } = useTranslation('staff');

  const data = t('data', {returnObjects: true});

  return (
    <div className={styles.container}>
     <WelcomeCard title={t('pageTitle')} title2={'Home / Our Team'} />
      <div className={styles.cards}>
        {data.map((person) => {
          return <StaffCard {...person} />;
        })}
      </div>
    </div>
  );
}

export default Staff;

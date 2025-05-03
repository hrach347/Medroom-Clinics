import styles from "./style.module.css";
import { motion } from "framer-motion"
import MapInContact from "../../components/MapInContact";
import HelperCard from "../../components/HelperCard";
import { useTranslation } from "react-i18next";
import Button from "../../components/Button/button";
import WelcomeCard from "../../components/WelcomeCard";
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

function Contact() {

  const { t } = useTranslation('contact');

  const labels = t('labels', {returnObjects: true});
  const placeholders = t('placeholders', {returnObjects: true});
  const helperCard = t('helperCard', {returnObjects: true});

  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9r10tj9",   
        "template_4frsc9e",    
        form.current,
        "lQu28uPOZGiQBHlYt"     
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Սխալ տեղի ունեցավ։");
        }
      );
  };

  return (
    <div className={styles.container}>
      <WelcomeCard title={t('pageTitle')} title2='Home / Contact Us' />
      <div className={styles.mainContainer}>
        <h2 className={styles.description}>{t('description')}</h2>
        <div className={styles.registerContainer}>
          <motion.form
            className={styles.contactContainer}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            ref={form}
            onSubmit={sendEmail}
          >

            <div className={styles.forName}>
              <label htmlFor="name">{labels.name}</label>
              <input type="text" id="name" placeholder={placeholders.name} required/>
            </div>

            <div className={styles.forEmail}>
              <label htmlFor="email">{labels.email}</label>
              <input type="email" id="email" placeholder={placeholders.email} required/>
            </div>

            <div className={styles.forMessage}>
              <label htmlFor="message">{labels.message}</label>
              <textarea id="message" name="message" placeholder={placeholders.message} required/>
            </div>

            <div className={styles.forBtn}>
              <Button content={labels.send} type='submit' />
            </div>

          </motion.form>
        </div>
        <div className={styles.mapContainer}>
          <MapInContact map={<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.0882215965016!2d44.51512697528009!3d40.18485006972097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd0e944eb847%3A0x30a9426a15d816b2!2sMedRoom%20Clinic!5e0!3m2!1sen!2sam!4v1742576460558!5m2!1sen!2sam" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>} location="11 Sayat-Nova Ave, Yerevan 0001" phoneNumber="+374 000 000" telegram="clinic telegram" clinicName="MEDROOM CLINIC" xCordinat="-50%" />
          <MapInContact map={<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.0882215965016!2d44.51512697528009!3d40.18485006972097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd0e944eb847%3A0x30a9426a15d816b2!2sMedRoom%20Clinic!5e0!3m2!1sen!2sam!4v1742576460558!5m2!1sen!2sam" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>} location="11 Sayat-Nova Ave, Yerevan 0001" phoneNumber="+374 000 000" telegram="clinic telegram" clinicName="MEDROOM CLINIC" xCordinat="50%" />
        </div>
        <HelperCard data={helperCard}/>
      </div>
    </div>
  );
}

export default Contact;
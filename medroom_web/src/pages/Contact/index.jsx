import styles from "./style.module.css";
import decorativeRoom from "../../Assets/Images/decorativeRoom.webp"
import Title from "../../components/Title/index"
import { motion } from "framer-motion"
import MapInContact from "../../components/MapInContact";
import HelperCard from "../../components/HelperCard";

const inpInfo = [
  { name: "Name", type: "text", },
  { name: "Email", type: "email", },
  { name: "Phone Number", type: "number", },
  { name: "Clinic branch", type: "text", },
  { name: "Message", type: "text", },
]

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.topPictureContainer} style={{ backgroundImage: `url(${decorativeRoom})` }}>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.registerContainer}>
          <Title>Contact Us</Title>
          <p>Send us a message about what you’ve got planned, how we can help and we’ll be right back in touch.</p>
          <motion.form
            className={styles.contactContainer}
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {
              inpInfo.map((element, index) => {
                return (
                  <div className={styles.inpContainer} key={index}>
                    <label htmlFor={index + "input"}>{element.name}</label>
                    <input type={element.type} id={index + "input"} placeholder=" " required />
                  </div>
                )
              })
            }
          </motion.form>
        </div>
        <div className={styles.mapContainer}>
          <MapInContact map={<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.0882215965016!2d44.51512697528009!3d40.18485006972097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd0e944eb847%3A0x30a9426a15d816b2!2sMedRoom%20Clinic!5e0!3m2!1sen!2sam!4v1742576460558!5m2!1sen!2sam" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>} location="11 Sayat-Nova Ave, Yerevan 0001" phoneNumber="+374 000 000" telegram="clinic telegram" clinicName="MEDROOM CLINIC" xCordinat="-50%" />
          <MapInContact map={<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.0882215965016!2d44.51512697528009!3d40.18485006972097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd0e944eb847%3A0x30a9426a15d816b2!2sMedRoom%20Clinic!5e0!3m2!1sen!2sam!4v1742576460558!5m2!1sen!2sam" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>} location="11 Sayat-Nova Ave, Yerevan 0001" phoneNumber="+374 000 000" telegram="clinic telegram" clinicName="MEDROOM CLINIC" xCordinat="50%" />
        </div>
        <HelperCard />
      </div>
    </div>
  );
}

export default Contact;
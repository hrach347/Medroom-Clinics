import Title from "../../components/Title";

import styles from "./style.module.css";
import background from "../../Assets/Images/contactBackground.png";

function Contact() {
  return (
    <div className={styles.container}>
      <div
        className={styles.start}
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1>Կապ Մեզ Հետ</h1>
      </div>

      <div className={styles.contact}>
        <form>
          <div className={styles.inputs}>
            <input type="text" placeholder="First name..." required />
            <input type="text" placeholder="Last name..." required />
            <input type="email" placeholder="Email..." required />
            <input type="number" placeholder="Phone..." required />
            <input
              type="text"
              className={styles.message}
              placeholder="Message..."
              required
            />
          </div>
          <button>Ուղարկել</button>
        </form>
        <Title>Մեր հասցեն</Title>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.088409045991!2d44.51283098493903!3d40.18484589793562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd0e944eb847%3A0x30a9426a15d816b2!2sMedRoom%20Clinic!5e0!3m2!1sen!2sam!4v1741159250460!5m2!1sen!2sam"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Map"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;

import {Link} from "react-router"
import styles from "./style.module.css";

function Header() {
  return (<div className={styles.container}>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
  </div>);
}

export default Header;

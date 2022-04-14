import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <h1>To do List</h1>
      <div>
        <ul>
          <li>
            <Link className={styles.btn_navbar} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.btn_navbar} to="/contact">
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

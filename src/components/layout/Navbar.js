import { Link } from "react-router-dom";
import Container from "./Container";

import styles from "./Navbar.module.css";
import logo from "../../img/Logo.png";
import logo2 from "../../img/Login.png";
import logo3 from "../../img/Carrinho.png";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <Container>

        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">
              <img src={logo2} alt="Login" />
            </Link></li>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Cardápio</Link>
          </li>
          <li className={styles.item}>
            <Link to="/">
              <img src={logo} alt="Logo_principal" />
            </Link></li>
          <li className={styles.item}>
            <Link to="/company">Sobre nós</Link>
          </li>
          <li className={styles.item}>
            <Link to="/">
              <img src={logo3} alt="Carrinho" />
            </Link></li>
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;

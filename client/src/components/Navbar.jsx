import logo from "../assets/Logo Sistema Multishop.png";
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div id={styles.barra_de_navegacion}> 
    <img id={styles.logo_barra} src={logo} />
    <button type="button" id={styles.circulo_nav}></button>
  </div>
  )
}

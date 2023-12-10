import logo from "../assets/Logo Sistema Multishop.png";

import styles from "../styles/Login.module.css";

// eslint-disable-next-line react/prop-types
export default function Login({ onSubmit, setEmail, setPassword, result }) {
  return (
    <div id={styles.todo}>
      <img id={styles.logo} src={logo} />
      <form id={styles.relleno} onSubmit={onSubmit}>
        <label id={styles.login_label} htmlFor="email">Correo Electronico</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id={styles.login_input}
        />
        <label id={styles.login_label} htmlFor="password">Contraseña</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id={styles.login_input}
        />
        <button type="submit" id={styles.boton}>
          Ingresar
        </button>
      </form>
      <div id={styles.errores}>
        {typeof result === "object" ? (
          // eslint-disable-next-line react/prop-types
          result.map((message, index) => <p key={index}>{message}</p>)
        ) : (
          <p>{result}</p>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";
import Modal from "./Modal";
import styles from "../styles/Form.module.css"

export default function Create({ user, setIsReadOpen }) {

  const [response, setResponse] = useState([])

  const onChange = e => {}
  const onSubmit = async e => {}

  return (
    <>
      <Modal>
      <div className={styles.container}>
          <form onSubmit={onSubmit} className={styles.form}>
            <div className={styles.container_inputs}>
              <div>
                <label className={styles.label}>
                  Nombre completo
                  <input
                    className={styles.input}
                    name="fullname"
                    value={user.fullname}
                    type="text"
                    onChange={onChange}
                  />
                </label>
                {
                  response.fullname && 
                  <span className={styles.error}>
                    { response.fullname }
                  </span>
                }
                <label className={styles.label}>
                  Numero de contacto
                  <input
                    className={styles.input}
                    name="phone_contact"
                    value={user.phone_contact}
                    type="text"
                    onChange={onChange}
                  />
                </label>
                {
                  response.phone_contact && 
                  <span className={styles.error}>
                    { response.phone_contact }
                  </span>
                }
                <label className={styles.label}>
                  Numero de mensaje
                  <input
                    className={styles.input}
                    name="phone_messages"
                    value={user.phone_messages}
                    type="text"
                    onChange={onChange}
                  />
                </label>
                {
                  response.phone_messages && 
                  <span className={styles.error}>
                    { response.phone_messages }
                  </span>
                }
              </div>
              <div>
                <label className={styles.label}>
                  Correo
                  <input
                    className={styles.input}
                    name="email"
                    value={user.email}
                    type="email"
                    onChange={onChange}
                  />
                </label>
                {
                  response.email && 
                  <span className={styles.error}>
                    { response.email }
                  </span>
                }
                <label className={styles.label}>
                  Ciclos
                  <input
                    className={styles.input}
                    name="cycles"
                    value={user.cycles}
                    type="number"
                    onChange={onChange}
                  />
                </label>
                {
                  response.cycles && 
                  <span className={styles.error}>
                    { response.cycles }
                  </span>
                }
              </div>
            </div>
            <div>
              <button className={styles.btn} type="submit">
                Editar
              </button>
              <button
                className={styles.btn}
                type="button"
                onClick={() => setIsReadOpen("hide")}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

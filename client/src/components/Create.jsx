import { createRef, useState } from "react";

import Modal from "./Modal";

import { createUser } from "../services/api.services.js";

import styles from "../styles/Form.module.css";

export default function Create({ setIsCreateOpen }) {
  const [newUser, setNewUser] = useState({
    fullname: "",
    phone_contact: "",
    phone_messages: "",
    email: "",
    cycles: 0,
  });

  const [response, setResponse] = useState([])

  const onChange = e => setNewUser({ ...newUser, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    setNewUser({ ...newUser, cycles: Number(newUser.cycles) })
    const createResponse = await createUser(newUser)
    setResponse(createResponse.msg)
  };

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
                  Contraseña
                  <input
                    className={styles.input}
                    name="password"
                    type="password"
                    onChange={onChange}
                  />
                </label>
                {
                  response.password && 
                  <span className={styles.error}>
                    { response.password }
                  </span>
                }
                <label className={styles.label}>
                  Ciclos
                  <input
                    className={styles.input}
                    name="cycles"
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
                Crear
              </button>
              <button
                className={styles.btn}
                type="button"
                onClick={() => setIsCreateOpen("hide")}
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

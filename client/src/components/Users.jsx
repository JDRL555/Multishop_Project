import { USERS } from "../constants/users.constants.js";
import { useState } from "react";

import Modal from "../components/Modal";
import Edit from "../components/Edit";
import Delete from "../components/Delete";

import styles from "../styles/Users.module.css";

export default function Users() {
  const [isReadOpen, setIsReadOpen] = useState("hide");
  const [isDeleteOpen, setIsDeleteOpen] = useState("hide");

  return (
    <div id={styles.container}>
      {
        USERS.map((user, index) => (
          <div id={styles.user} key={index}>
            <p>Nombre completo:{user.name}</p>
            <p>Numero de contacto:{user.phone_contact}</p>
            <p>Numero de mensaje:{user.phone_message}</p>
            <p>Correo:{user.email}</p>
            <p>Ciclos:{user.cycles}</p>

            <div id={styles.btn_container}>
              <button
                id={styles.btn_edit}
                onClick={() => setIsReadOpen("show")}
              >
                Editar
              </button>
              <Modal show={isReadOpen}>
                <Edit user={user} setIsReadOpen={setIsReadOpen} />
              </Modal>
              <button
                id={styles.btn_delete}
                onClick={() => setIsDeleteOpen("show")}
              >
                Borrar
              </button>
              <Modal show={isDeleteOpen}>
                <Delete setIsDeleteOpen={setIsDeleteOpen} />
              </Modal>
            </div>
          </div>
        ))
      }
    </div>
  ) 
}

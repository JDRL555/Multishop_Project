import { useState, useEffect } from "react";
import { getUsers } from '../services/api.services.js'

import Loading from '../components/Loading.jsx'

import Modal from "../components/Modal";
import Edit from "../components/Edit";
import Delete from "../components/Delete";

import styles from "../styles/Users.module.css";

export default function Users() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    async function loadUsers() {
      setLoading(true)
      const { users: usersData } = await getUsers()
      setUsers(usersData)
      setLoading(false)
    }
    loadUsers()
  }, [])

  const [loading, setLoading] = useState(false)
  const [isReadOpen, setIsReadOpen] = useState("hide");
  const [isDeleteOpen, setIsDeleteOpen] = useState("hide");

  return (
    <div id={styles.container}>
      <Loading show={!loading ? "hide" : "show"} />
      {
        users.map((user, index) => (
          <div id={styles.user} key={index}>
            <p>Nombre completo:{user.fullname}</p>
            <p>Numero de contacto:{user.phone_contact}</p>
            <p>Numero de mensaje:{user.phone_messages}</p>
            <p>Correo:{user.email}</p>
            <p>Ciclos:{user.cycles}</p>
            <p>
              {
                user.is_enabled ? "Habilitado" : "Inhabilitado"
              }
            </p>

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

import React, { useState } from "react";
import Modal from "./Modal";
import styles from "../styles/Form.module.css"

export default function Create({ user, setIsReadOpen }) {
  return (
    <>
      <Modal>
        <div className={styles.container}>
          <form className={styles.form}>
            <label className={styles.label}>
              Nombre completo
              <input value={user.name} className={styles.input} type="text" />
            </label>
            <label className={styles.label}>
              Numero de contacto
              <input value={user.phone_contact} className={styles.input} type="number" />
            </label>
            <label className={styles.label}>
              Numero de mensaje
              <input value={user.phone_message} className={styles.input} type="number" />
            </label>
            <label className={styles.label}>
              Correo
              <input value={user.email} className={styles.input} type="email" />
            </label>
            <label className={styles.label}>
              Ciclos
              <input value={user.cycles} className={styles.input} type="number" />
            </label>

            <button
              className={styles.btn}
              type="button"
              onClick={() => setIsReadOpen("hide")}
            >
              Cancelar
            </button>
            <button className={styles.btn} type="button">
              Crear
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}

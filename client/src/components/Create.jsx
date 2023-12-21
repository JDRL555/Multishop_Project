import React, { useState } from "react";
import Modal from "./Modal";
import styles from "../styles/Form.module.css"

export default function Create({ setIsCreateOpen }) {
  return (
    <>
      <Modal>
        <div className={styles.container}>
          <form className={styles.form}>
            <label className={styles.label}>
              Nombre completo
              <input className={styles.input} type="text" />
            </label>
            <label className={styles.label}>
              Numero de contacto
              <input className={styles.input} type="number" />
            </label>
            <label className={styles.label}>
              Numero de mensaje
              <input className={styles.input} type="number" />
            </label>
            <label className={styles.label}>
              Correo
              <input className={styles.input} type="email" />
            </label>
            <label className={styles.label}>
              Contraseña
              <input className={styles.input} type="password" />
            </label>
            <label className={styles.label}>
              Ciclos
              <input className={styles.input} type="number" />
            </label>

            <button
              className={styles.btn}
              type="button"
              onClick={() => setIsCreateOpen("hide")}
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

import React, { useState } from "react";
import Modal from "./Modal";

import styles from '../styles/Modal.module.css'

export default function Reading({ setIsReadOpen }) {
  return (
    <>
      <Modal>
        <div id={styles.div_fondo}>
          <form id={styles.tabla} action="">
            <label id={styles.tabla_label} htmlFor="">
              Nombre completo
              <input type="text" />
            </label>
            <label id={styles.tabla_label} htmlFor="">
              Numero de contacto
              <input type="number" />
            </label>
            <label id={styles.tabla_label} htmlFor="">
              Numero de mensaje
              <input type="number" />
            </label>
            <label id={styles.tabla_label} htmlFor="">
              Correo
              <input type="email" />
            </label>
            <label id={styles.tabla_label} htmlFor="">
              Contraseña
              <input type="password" />
            </label>
            <label id={styles.tabla_label} htmlFor="">
              Ciclos
              <input type="number" />
            </label>

            <button id={styles.boton_edit_delet} type="button">
              Actualizar
            </button>
            <button
              id={styles.boton_edit_delet}
              type="button"
              onClick={() => setIsReadOpen("hide")}
            >
              Cancelar
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}

import React, { useState } from "react";
import Modal from "./Modal";
// import "../styles/Modal.css"

export default function Create({ setIsCreateOpen }) {
  return (
    <>
      <Modal>
        <div id="div_fondo">
          <form id="tabla" action="">
            <label id="tabla_label" htmlFor="">
              Nombre completo
              <input type="text" />
            </label>
            <label id="tabla_label" htmlFor="">
              Numero de contacto
              <input type="number" />
            </label>
            <label id="tabla_label" htmlFor="">
              Numero de mensaje
              <input type="number" />
            </label>
            <label id="tabla_label" htmlFor="">
              Correo
              <input type="email" />
            </label>
            <label id="tabla_label" htmlFor="">
              Contraseña
              <input type="password" />
            </label>
            <label id="tabla_label" htmlFor="">
              Ciclos
              <input type="number" />
            </label>

            <button id="boton_edit_delet" type="button">
              Crear
            </button>
            <button
              id="boton_edit_delet"
              type="button"
              onClick={() => setIsCreateOpen("hide")}
            >
              Cancelar
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}

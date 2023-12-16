import { DATOS_BASE } from "../constants/Datos_Base.js";
import { useState } from "react";

import Modal from "../components/Modal";
import Reading from "../components/Reading";
import Delete from "../components/Delete";

import style from "../styles/Users.module.css";

export default function Users() {
  const [isReadOpen, setIsReadOpen] = useState("hide");
  const [isDeleteOpen, setIsDeleteOpen] = useState("hide");

  return DATOS_BASE.map((dato, index) => (
    <div id={style.div_fondo_muestra}>
      <div key={index}>
        <p>Nombre completo:{dato.NombreCompleto}</p>
        <p>Numero de contacto:{dato.NumeroDeContacto}</p>
        <p>Numero de mensaje:{dato.NumeroDeMensaje}</p>
        <p>Correo:{dato.Correo}</p>
        <p>Ciclos:{dato.Ciclos}</p>

        <div id={style.tabla}>
          <button
            id={style.boton_edit_delet}
            onClick={() => setIsReadOpen("show")}
          >
            Editar
          </button>
          <Modal show={isReadOpen}>
            <Reading setIsReadOpen={setIsReadOpen} />
          </Modal>
          <button
            id={style.boton_edit_delet}
            onClick={() => setIsDeleteOpen("show")}
          >
            Borrar
          </button>
          <Modal show={isDeleteOpen}>
            <Delete setIsDeleteOpen={setIsDeleteOpen} />
          </Modal>
        </div>
      </div>
    </div>
  ));
}

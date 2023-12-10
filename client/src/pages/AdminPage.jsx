import React, { useState } from "react";
import Create from "../components/Create";
import Reading from "../components/Reading";
import Delete from "../components/Delete";
import Show from "../components/Show";
import Modal from "../components/Modal";
import logo from "../assets/Logo Sistema Multishop.png";

import "../styles/Modal.css";
import "../styles/AdminPage.css";

export default function AdminPage() {
  const datos_base = [
    {
      NombreCompleto: "gabriel pineda",
      NumeroDeContacto: "+584121234567",
      NumeroDeMensaje: "+584121234567",
      Correo: "gab@gmail.com",
      Ciclos: "4",
    },
    {
      NombreCompleto: "diego duran",
      NumeroDeContacto: "+584121234567",
      NumeroDeMensaje: "+584121234567",
      Correo: "diego@gmail.com",
      Ciclos: "1",
    },
    {
      NombreCompleto: "jesus acevedo",
      NumeroDeContacto: "+584121234567",
      NumeroDeMensaje: "+584121234567",
      Correo: "jesus@gmail.com",
      Ciclos: "5",
    },
    {
      NombreCompleto: "gutierrez ramirez",
      NumeroDeContacto: "+584121234567",
      NumeroDeMensaje: "+584121234567",
      Correo: "gutierre20@gmail.com",
      Ciclos: "6",
    },
    {
      NombreCompleto: "alexander rodriges",
      NumeroDeContacto: "+584121234567",
      NumeroDeMensaje: "+584121234567",
      Correo: "alexanderfitQgmail.com",
      Ciclos: "7",
    },
    {
      NombreCompleto: "alice sandoval",
      NumeroDeContacto: "+584121234567",
      NumeroDeMensaje: "ninguno",
      Correo: "alic@gmail.com",
      Ciclos: "2",
    },
    {
      NombreCompleto: "John Doe",
      NumeroDeContacto: "+584121234567",
      NumeroDeMensaje: "+584121234567",
      Correo: "john@gmail.com",
      Ciclos: "3",
    },
  ];

  const [isCreateOpen, setIsCreateOpen] = useState("hide");
  const [isReadOpen, setIsReadOpen] = useState("hide");
  const [isDeleteOpen, setIsDeleteOpen] = useState("hide");

  return (
    <>
      <div id="barra_de_navegacion">
        <img id="logo_barra" src={logo} />
        <button type="button" id="circulo_nav"></button>
      </div>

      <div id="div_fondo_muestra">
        {datos_base.map((datos_base) => (
          <div>
            <p>Nombre completo:{datos_base.NombreCompleto}</p>
            <p>Numero de contacto:{datos_base.NumeroDeContacto}</p>
            <p>Numero de mensaje:{datos_base.NumeroDeMensaje}</p>
            <p>Correo:{datos_base.Correo}</p>
            <p>Ciclos:{datos_base.Ciclos}</p>
            <button id="boton_edit_delet" onClick={() => setIsReadOpen("show")}>
              Editar
            </button>
            <Modal show={isReadOpen}>
              <Reading setIsReadOpen={setIsReadOpen} />
            </Modal>
            <button
              id="boton_edit_delet"
              onClick={() => setIsDeleteOpen("show")}
            >
              Borrar
            </button>
            <Modal show={isDeleteOpen}>
              <Delete setIsDeleteOpen={setIsDeleteOpen} />
            </Modal>
          </div>
        ))}
      </div>
      <button id="buton_crear" onClick={() => setIsCreateOpen("show")}>
        Crear
      </button>
      <Modal show={isCreateOpen}>
        <Create setIsCreateOpen={setIsCreateOpen} />
      </Modal>
    </>
  );
}

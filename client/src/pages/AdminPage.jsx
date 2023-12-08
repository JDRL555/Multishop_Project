import React, { useState } from "react";
import Create from '../components/Create'
import Reading from '../components/Reading'
import Delete from '../components/Delete'
import Show from '../components/Show'
import Modal from '../components/Modal'
import '../styles/Modal.css'

export default function AdminPage() {
const [isCreateOpen, setIsCreateOpen] = useState("hide");
const [isReadOpen, setIsReadOpen] = useState("hide");
const [isDeleteOpen, setIsDeleteOpen] = useState("hide");
  return (
   <> 
   
   <div id='div_fondo'>
      <form id='tabla' action="">
          <label htmlFor="">Nombre completo</label>
          <label htmlFor="">Numero de contacto</label>
          <label htmlFor="">Numero de mensaje</label>
          <label htmlFor="">Correo</label>
          <label htmlFor="">Contraseña</label>
          <label htmlFor="">Ciclos</label>
      </form>
    </div>

    <button onClick={() => setIsCreateOpen("show")}>
      Crear
    </button>
      <Modal show={isCreateOpen}>
        <Create setIsCreateOpen = {setIsCreateOpen}/>
      </Modal>

    <button onClick={() => setIsReadOpen("show")}>
      Editar
    </button>
      <Modal show={isReadOpen}>
        <Reading setIsReadOpen = {setIsReadOpen}/>
      </Modal>

    <button onClick={() => setIsDeleteOpen("show")}>
      Borrar
    </button>
      <Modal show={isDeleteOpen}>
        <Delete setIsDeleteOpen = {setIsDeleteOpen}/>
      </Modal>
   </>
  );
}
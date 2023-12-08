import React, { useState }  from 'react'
import Modal from './Modal'
import "../styles/Modal.css"


export default function Reading({ setIsReadOpen }) {
  

  return (
    <>      
        <Modal>
          <div id='div_fondo'>
            <form id='tabla' action="">
                <label htmlFor="">Nombre completo<input type='text'/></label>
                <label htmlFor="">Numero de contacto<input type='number'/></label>
                <label htmlFor="">Numero de mensaje<input type='number'/></label>
                <label htmlFor="">Correo<input type='email'/></label>
                <label htmlFor="">Contraseña<input type='password'/></label>
                <label htmlFor="">Ciclos<input type='number'/></label>

                <button type="button">Actualizar</button>  
                <button type="button" onClick={() => setIsReadOpen("hide")}>Cancelar</button>
            </form>
          </div>
        </Modal>
    </>
  )
}

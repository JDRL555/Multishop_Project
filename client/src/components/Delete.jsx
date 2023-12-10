import React, { useState }  from 'react'
import Modal from './Modal'
// import "../styles/Modal.css"


export default function Delete({ setIsDeleteOpen }) {
  

  return (
    <>      
        <Modal>
          <div id='div_fondo'>
            <form id='tabla' action="">
              
              <p>Quieres Borrar?</p>

              <button id='boton_edit_delet' type='button'>Borrar</button>      
              <button id='boton_edit_delet' type="button" onClick={() => setIsDeleteOpen('hide')}>Cancelar</button>
            </form>
          </div>
        </Modal>
    </>
  )
}

import React, { useState }  from 'react'
import Modal from './Modal'
import "../styles/Modal.css"


export default function Delete({ setIsDeleteOpen }) {
  

  return (
    <>      
        <Modal>
          <div id='div_fondo'>
            <form id='tabla' action="">
              
              <p>Quieres Borrar?</p>

              <button type='button'>Borrar</button>      
              <button type="button" onClick={() => setIsDeleteOpen('hide')}>Cancelar</button>
            </form>
          </div>
        </Modal>
    </>
  )
}

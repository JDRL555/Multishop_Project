import React, { useState }  from 'react'
import Modal from './Modal'
import styles from '../styles/Modal.module.css'


export default function Delete({ setIsDeleteOpen }) {
  

  return (
    <>      
        <Modal>
          <div id={styles.div_fondo}>
            <form id={styles.tabla_delet} action="">
              
              <p>Quieres Borrar?</p>

              <button id={styles.boton_delet} type='button'>Borrar</button>      
              <button id={styles.boton_delet} type="button" onClick={() => setIsDeleteOpen('hide')}>Cancelar</button>
            </form>
          </div>
        </Modal>
    </>
  )
}

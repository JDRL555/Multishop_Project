import React, { useState }  from 'react'
import Modal from './Modal'
import styles from '../styles/Form.module.css'


export default function Delete({ setIsDeleteOpen }) {
  return (
    <>      
        <Modal>
          <form className={styles.delete}>
            <p>Confirmas eliminar el usuario?</p>
            <button className={styles.btn} type='button'>
              Borrar
            </button>      
            <button className={styles.btn} type="button" onClick={() => setIsDeleteOpen('hide')}>Cancelar</button>
          </form>
        </Modal>
    </>
  )
}

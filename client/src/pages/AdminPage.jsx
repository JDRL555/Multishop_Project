import { useState } from "react";

import Navbar from "../components/Navbar";
import Create from "../components/Create";
import Modal from "../components/Modal";
import Users from "../components/Users";

import styles from '../styles/AdminPage.module.css'

export default function AdminPage() {
  const [isCreateOpen, setIsCreateOpen] = useState("hide");

  return (
    <>
      <Navbar />
      <Users/>
      <button id={styles.buton_crear} onClick={() => setIsCreateOpen("show")}>
        Crear
      </button>
      <Modal show={isCreateOpen}>
        <Create setIsCreateOpen={setIsCreateOpen} />
      </Modal>
    </>
  );
}

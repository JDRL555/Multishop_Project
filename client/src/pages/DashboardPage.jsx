import { useState } from 'react'

import Chart from '../components/Chart'
import Navbar from '../components/Navbar'
import Loading from '../components/Loading'

import { createDashboardChart } from '../services/chart.services.js'

import styles from '../styles/Dashboard.module.css'

export default function DashboardPage() {
  
  const [show, setShow] = useState("hide")

  const onClick = async () => {
    setShow("show")
    await createDashboardChart()
    setShow("hide")
  }
  
  return(
  <>
    <Loading show={show} />
    <Navbar />
    <h1 id={styles.title}>
      Dashboard
    </h1>
    <Chart />
    <button id={styles.btn} onClick={onClick}>
      Cargar indices
    </button>
  </>
  );
}

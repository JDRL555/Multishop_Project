import { useState } from 'react'
import Login from "./components/Login";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login />
    </>
  )
}


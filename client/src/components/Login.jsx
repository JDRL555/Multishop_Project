import '../styles/Login.css'
import logo from '../assets/Logo Sistema Multishop.png'
import Loading from './Loading'
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { authUser } from "../services/api.services";


export default function Login() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = async e => {
    e.preventDefault()
    setShow(true)
    const result = await authUser(email, password)
    setShow(false)
    console.log(result)
  }
  
  
  return (  

    <div id='completo'>
          {
            show 
            &&
            <Loading />
          }
        
          <div id='todo'>
              <img id='logo' src={logo}/>
              <form id='relleno' onSubmit={login}>   
                <label htmlFor="email">Correo Electronico</label>
                <input onChange={e => setEmail(e.target.value)} type="email" name='email' id='email'/>    
                <label htmlFor="password">Contraseña</label>
                <input onChange={e => setPassword(e.target.value)} type="password" name='password' id='password'/>
                <button type='submit' id='boton'>
                  Ingresar
                </button>     
              </form>
          </div>
    </div>
  )
}
  
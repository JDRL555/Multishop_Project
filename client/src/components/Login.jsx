import '../styles/Login.css'
import logo from '../assets/Logo Sistema Multishop.png'
import Loading from './loading'
import { useState } from "react"

export default function Login() {

  const [show, setShow] = useState(false)
  const login = () => {
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 2000);
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
              <form id='relleno'>   
                <label htmlFor="email">Correo Electronico</label>
                <input type="email" name='email' id='email'/>    
                <label htmlFor="password">Contraseña</label>
                <input type="password" name='password' id='password'/>
                <button type='button' id='boton' onClick={login}>
                  Ingresar
                </button>     
              </form>
          </div>
    </div>
  )
}
  
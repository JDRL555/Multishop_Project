import '../styles/Login.css'
import logo from '../assets/Logo Sistema Multishop.png'

export default function Login() {
  return (  
    <div id='completo'>
        <div id='titulo'>
          <h1>Inicio de sesion</h1>  
        </div>
        
        <div>
            <div id='todo'>
                    <div>
                        <img id='logo' src={logo}/>
                    </div>
                    <form id='relleno'>   
                <label htmlFor="email">Correo Electronico</label>
                    <input type="email" name='email' id='email'/>    
                <label htmlFor="password">Contraseña</label>
                    <input type="password" name='password' id='password'/>     
                    <input type="button" id='boton' value="ingresar" placeholder='ingresar'/>
                    </form>
            </div>
        </div>
    </div>
  )
}
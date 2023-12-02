import logo from '../assets/Logo Sistema Multishop.png'
// eslint-disable-next-line react/prop-types
export default function Login({ onSubmit, setEmail, setPassword, result }) {
  return (  
    <div id='todo'>
        <img id='logo' src={logo}/>
        <form id='relleno' onSubmit={onSubmit}>   
          <label htmlFor="email">Correo Electronico</label>
          <input onChange={e => setEmail(e.target.value)} type="email" name='email' id='email'/>    
          <label htmlFor="password">Contraseña</label>
          <input onChange={e => setPassword(e.target.value)} type="password" name='password' id='password'/>
          <button type='submit' id='boton'>
            Ingresar
          </button>
        </form>
        <div id='errores'>
        {
          typeof result === 'object'
          ?
          // eslint-disable-next-line react/prop-types
          result.map((message, index) => (
            <p key={index}>
              { message }
            </p>
          ))
          :
          <p>
            { result }
          </p>
        }     
        </div>
    </div>
  )
}
  
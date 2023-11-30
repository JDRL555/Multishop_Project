import ReactLoading from "react-loading";
import '../styles/loading.css'
import logo from '../assets/Logo Sistema Multishop.png'


export default function loading() {
  return (

    <div>
      <div>
    <img id='logo' src={logo}/>
</div>
     <p id="load"> cargando pagina </p>
    </div>



  )
}
import '../styles/Error.css'
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="error_page_sty">
    <div id="error-page">
      <h1>Error 404</h1>
      <p>Lo siento verifique que todo este bien! y vuelva intentar.</p>
      <Link className='link' to={"/"}>
        redirigete a la pagina original
      </Link>
    </div>
    </div>
  );
}
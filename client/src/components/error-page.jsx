import { useRouteError } from "react-router-dom";
import '../styles/Error.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error_page_sty">
    <div id="error-page">
      <h1>Error 404</h1>
      <p>Lo siento verifique que todo este bien! y vuelva intentar.</p>
      <p>
        redirigete a la pagina original <br />
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    </div>
  );
}
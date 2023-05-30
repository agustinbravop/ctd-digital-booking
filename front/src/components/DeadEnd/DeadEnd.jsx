import { Link } from "react-router-dom";
import "./DeadEnd.css";

function DeadEnd({ titulo, desc, to = "/", btnText = "Ok" }) {
  return (
    <div className="cartel-lista-vacia">
      <div className="contenedor">
        <i className="fas fa-ban"></i>
        <div className="cartel-lista-vacia__texto">
          {titulo && <p className="cartel-lista-vacia__titulo">{titulo}</p>}
          {desc && <p className="cartel-lista-vacia__desc">{desc}</p>}
        </div>
        <Link to={to} className="btn btn-primario btn-sm">
          {btnText}
        </Link>
      </div>
    </div>
  );
}

export default DeadEnd;

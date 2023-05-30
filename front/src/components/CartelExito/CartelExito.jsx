import { Link } from "react-router-dom";
import imagen from "../../img/reserva-exitosa.png";
import "./CartelExito.css";

function CartelExito({ titulo, desc, to = "/", btnText = "Ok" }) {
  return (
    <div className="cartel-exito">
      <div className="contenedor">
        <img src={imagen} alt="Éxito" />
        {titulo && <p className="txt-gracias">{titulo}</p>}
        {desc && <p className="txt-exito">{desc}</p>}
        <Link to={to} className="btn btn-primario btn-sm">
          {btnText}
        </Link>
      </div>
    </div>
  );
}

export default CartelExito;

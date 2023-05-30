import { useContext } from "react";
import { AuthContext } from "./../../context/AuthContext";
import "./SaludoRegistrado.css";

function SaludoRegistrado({ menuDrawer, onExit, ...props }) {
  const { auth: { firstName, lastName } } = useContext(AuthContext);

  return (
    <div {...props} className={menuDrawer ? "saludo-mobile" : "saludo-registrado"}>
      <span className="icono-usuario">
        {firstName?.charAt().toUpperCase()}
        {lastName?.charAt().toUpperCase()}
      </span>
      
      <div className="txt">
        <p className="txt-hola">Hola,</p>
        <p className="txt-nombre">{firstName + " " + lastName}</p>
      </div>

      {!menuDrawer && (
        <button id="salir" onClick={onExit} title="Salir">
          <i className="fas fa-sign-out-alt"></i>
        </button>
      )}
    </div>
  );
}

export default SaludoRegistrado;

import { useHistory } from "react-router-dom";
import "./Titulo.css";

function Titulo({ titulo }) {
  const history = useHistory();

  return (
    <div className="background-titulo">
      <div style={{ padding: "5px 0" }}>
        <h2 className="txt-titulo">{titulo}</h2>
      </div>
      <button
        onClick={() => history.goBack()}
        style={{ background: "none", border: "none", color: "#FFF" }}
      >
        <i className="fas fa-chevron-left" title="Volver"></i>
      </button>
    </div>
  );
}

export default Titulo;

import { useContext } from "react";
import { ProdContext } from "./../../context/ProdContext";
import "./ReservaDetalle.css";

function ReservaDetalle({ startDate, endDate }) {
  const { prod } = useContext(ProdContext);
  const { imagenes, categoria, nombre, ciudad } = prod;

  let fechaInicio,
    fechaFin = "__ / __ / __";
  startDate !== null
    ? (fechaInicio = startDate.toLocaleDateString())
    : (fechaInicio = "__ / __ / __");
  endDate !== null
    ? (fechaFin = endDate.toLocaleDateString())
    : (fechaFin = "__ / __ / __");

  return (
    <div className="contenedor-detalle-reserva">
      <div className="detalle-reserva">
        <h2>Detalle de la reserva</h2>
        <div className="detalle-reserva-img-txt">
          <div className="img-detalle-reserva">
            <img src={imagenes[0].urlImagen} alt="Foto del inmueble" />
          </div>
          <div className="body-detalle-reserva">
            <div>
              <p>{categoria.titulo.toUpperCase()}</p>
              <h2>{nombre}</h2>
              <div>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="ubicacion">
                <i className="fas fa-map-marker-alt"></i>
                {ciudad.nombre + ", " + ciudad.pais}
              </p>
            </div>
            <div className="body-resumen-detalle-reserva">
              <div className="check-in">
                <p>Check in</p>
                <p className="fecha">{fechaInicio}</p>
              </div>
              <div className="check-out">
                <p>Check out</p>
                <p className="fecha">{fechaFin}</p>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primario btn-confirmar-reserva"
            >
              Confirmar reserva
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservaDetalle;

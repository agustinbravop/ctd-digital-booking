import { useContext } from "react";
import { ProdContext } from "./../../context/ProdContext";
import "./ProductoUbicacion.css";

function ProductoUbicacion() {
  const { prod } = useContext(ProdContext);

  return (
    <div className="producto-ubicacion">
      <div className="lugar">
        <i className="fas fa-map-marker-alt"></i>
        <p>{`${prod?.ciudad?.nombre}, ${prod?.ciudad?.pais}`}</p>
      </div>

      <div className="puntuacion-prod">
        {[1, 2, 3, 4, 5].map((n) => (
          <i
            className={`${n <= prod?.promedio ? "fas" : "far"} fa-star`}
            key={n}
          ></i>
        ))}
      </div>
    </div>
  );
}

export default ProductoUbicacion;

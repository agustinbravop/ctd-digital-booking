import { useContext } from "react";
import { environment } from "../../constants";
import useFetch from "../../customHooks/useFetch";
import { FiltroContext } from "./../../context/FiltroContext";
import "./CardCategoria.css";

function CardCategoria({ categoria, handleFiltrar }) {
  const { idCategoria, titulo, urlImagen, descripcion } = categoria;
  const {
    hayFiltros,
    filtros: { porCategoria },
  } = useContext(FiltroContext);

  const { BASE_URL, CATEGORIAS_ENDPOINT } = environment;
  const { data: cantidadProds } = useFetch(
    `${BASE_URL}${CATEGORIAS_ENDPOINT}cantidad/${idCategoria}`
  );

  return (
    <article
      className={`card-categoria ${
        porCategoria === titulo ? "filtro-activo" : ""
      }`}
      id={idCategoria}
      onClick={() => handleFiltrar(idCategoria, titulo)}
    >
      <div className={`card-categoria-img ${hayFiltros ? "con-filtro" : ""}`}>
        <img src={urlImagen} alt={titulo} />
      </div>

      <div className="card-categoria-info">
        <h3>{titulo}</h3>
        <p>
          {cantidadProds ? cantidadProds.toString() : ".."} {descripcion}
        </p>
      </div>
    </article>
  );
}

export default CardCategoria;

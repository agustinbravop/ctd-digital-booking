import { useContext } from "react";
import { FiltroContext } from "./../../context/FiltroContext";
import { environment } from "../../constants";
import CardCategoria from "../CardCategoria/CardCategoria";
import Error from "../Error/Error";
import useFetch from "../../customHooks/useFetch";
import "./CategoriaList.css";
import LoadingBar from "../LoadingBar/LoadingBar";

function CategoriaList({ title }) {
  const { BASE_URL, CATEGORIAS_ENDPOINT } = environment;

  const {
    data: categorias,
    isLoading,
    error,
  } = useFetch(`${BASE_URL}${CATEGORIAS_ENDPOINT}`);

  const { filtros: { porCategoria }, newFiltros, limpiarFiltros } = useContext(FiltroContext);

  const handleFiltrar = (idCategoria, nuevoPorCategoria) => {
    if (nuevoPorCategoria !== porCategoria) {
      const cat = categorias.find(cat => cat.idCategoria === idCategoria);
      newFiltros({ porCategoria: cat.titulo });
    }
  };

  const limpiarFiltro = () => {
    limpiarFiltros();
  };

  return (
    <>
      {isLoading && <LoadingBar />}
      <section className="categoria-list">
        <h2>
          {title}{" "}
          <span
            className={`ver-todas ${
              porCategoria ? "ver-todas-con-filtro" : ""
            }`}
            onClick={() => limpiarFiltro()}
          >
            Ver todo
          </span>
        </h2>

        {error ? (
          <Error info={"Error al cargar las categorías"} />
        ) : (
          <ul>
            {categorias?.map((categoria) => (
              <CardCategoria
                key={categoria.idCategoria}
                categoria={categoria}
                handleFiltrar={handleFiltrar}
              />
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default CategoriaList;

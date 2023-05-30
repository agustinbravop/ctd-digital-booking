import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";
import Buscador from "../../components/Buscador/Buscador";
import CategoriaList from "../../components/CategoriaList/CategoriaList";
import CardList from "../../components/CardList/CardList";
import Paginador from "../../components/Paginador/Paginador";
import { FiltroContext } from "../../context/FiltroContext";
import Error from "../../components/Error/Error";
import useFetch from "../../customHooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { environment } from "../../constants";
import LoadingBar from "../../components/LoadingBar/LoadingBar";

function HomePage() {
  const { BASE_URL, PRODUCTOS_ENDPOINT } = environment;
  const { filtros: { porCategoria }, hayFiltros, resultados, newResultados } =
    useContext(FiltroContext);
  const [page, setPage] = useState(0);

  // Cantidad de productos por página
  const size = 4;
  const {
    data: productos,
    isLoading,
    error,
  } = useFetch(
    `${BASE_URL}${PRODUCTOS_ENDPOINT}paged?page=${page}&size=${size}&sort=idProducto,asc`
  );
  const totalPages = productos?.totalPages;

  const handlePage = (num) => setPage(num);

  useEffect(() => {
    // cuando no hay filtro, carga todos los productos
    if (!hayFiltros) {
      newResultados(productos?.content, null);
    }
  }, [hayFiltros, newResultados, productos]);

  return (
    <LayoutGeneral>
      <Buscador />
      <CategoriaList title="Buscar por categoría" />

      {error ? (
        <Error info="Error al cargar los productos" />
      ) : (
        <>
          <CardList
            productos={resultados}
            titulo={
              porCategoria ? `Buscando ${porCategoria}` : "Recomendaciones"
            }
          />
          {isLoading && <LoadingBar />}
        </>
      )}

      <Paginador page={page} totalPages={totalPages} handlePage={handlePage} />
    </LayoutGeneral>
  );
}

export default HomePage;

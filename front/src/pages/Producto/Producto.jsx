import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";
import ProductoHeader from "../../components/ProductoHeader/ProductoHeader";
import ProductoUbicacion from "../../components/ProductoUbicacion/ProductoUbicacion";
import ProductoImagenes from "../../components/ProductoImagenes/ProductoImagenes";
import ProductoDescripcion from "../../components/ProductoDescripcion/ProductoDescripcion";
import ProductoCaracteristicas from "../../components/ProductoCaracteristicas/ProductoCaracteristicas";
import ProductoDisponibilidad from "../../components/ProductoDisponibilidad/ProductoDisponibilidad";
import ProductoMapa from "../../components/ProductoMapa/ProductoMapa";
import ProductoPoliticas from "../../components/ProductoPoliticas/ProductoPoliticas";
import useFetch from "../../customHooks/useFetch";
import { ProdContext } from "./../../context/ProdContext";
import { environment } from "../../constants";
import ProductoSocials from "../../components/ProductoSocials/ProductoSocials";
import LoadingBar from "../../components/LoadingBar/LoadingBar";
import Error from "../../components/Error/Error";

function Producto() {
  const { BASE_URL, PRODUCTOS_ENDPOINT, RESERVAS_ENDPOINT } = environment;

  const { id_producto } = useParams();

  const {
    data: producto,
    isLoading,
    error,
  } = useFetch(`${BASE_URL}${PRODUCTOS_ENDPOINT}${id_producto}`);
  const { data: reservas } = useFetch(
    `${BASE_URL}${RESERVAS_ENDPOINT}porProducto/${id_producto}`
  );

  const { newProd } = useContext(ProdContext);
  useEffect(() => {
    newProd(producto, reservas);
  }, [producto, reservas, newProd]);

  return (
    <LayoutGeneral>
      {isLoading ? (
        <LoadingBar />
      ) : error ? (
        <Error info={"Error al cargar el producto"} />
      ) : (
        <>
          <ProductoHeader />
          <ProductoUbicacion />
          <ProductoSocials />
          <ProductoImagenes />
          <ProductoDescripcion />
          <ProductoCaracteristicas />
          <ProductoDisponibilidad id={id_producto} />
          <ProductoMapa />
          <ProductoPoliticas />
        </>
      )}
    </LayoutGeneral>
  );
}

export default Producto;

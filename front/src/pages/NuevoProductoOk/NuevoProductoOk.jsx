import { useContext } from "react";
import { Redirect } from "react-router-dom";
import CartelExito from "../../components/CartelExito/CartelExito";
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";
import { AuthContext } from "../../context/AuthContext";

function NuevoProductoOk() {
  const { auth } = useContext(AuthContext);

  if (!auth) return <Redirect to="/" />;

  return auth.roles?.includes("ROLE_ADMIN") ? (
    <LayoutGeneral>
      <CartelExito
        desc="Tu propiedad se ha creado con éxito."
        btnText="Volver"
      />
    </LayoutGeneral>
  ) : (
    <Redirect to="/" />
  );
}

export default NuevoProductoOk;

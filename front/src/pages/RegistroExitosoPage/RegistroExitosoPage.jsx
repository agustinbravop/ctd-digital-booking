import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import CartelExito from "../../components/CartelExito/CartelExito";
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";
import LoadingBar from "../../components/LoadingBar/LoadingBar";
import { environment } from "../../constants";
import { AuthContext } from "../../context/AuthContext";

function RegistroExitosoPage() {
  const { BASE_URL, TOKEN_ENDPOINT } = environment;
  const { token } = useParams();
  const { logout } = useContext(AuthContext);
  const [isOk, setOk] = useState(!token);

  const validateToken = async () => {
    try {
      const res = await fetch(`${BASE_URL}${TOKEN_ENDPOINT}${token}`, {
        method: "POST",
      });
      if (res.status >= 400) {
        throw Error("Error de la api al validar el token");
      } else {
        setOk(true);
        logout();
      }
    } catch (err) {
      console.error(err);
    }
  };
  if (token) validateToken();

  return (
    <LayoutGeneral>
      {isOk ? (
        token ? (
          <CartelExito
            titulo={"¡Bienvenido!"}
            desc={"Tu cuenta ha sido verificada exitosamente"}
            btnText="Iniciar sesión"
            to="/login"
          />
        ) : (
          <CartelExito
            titulo={"¡Cuenta registrada con éxito!"}
            desc={"Te enviamos un email para confirmar tu cuenta"}
            btnText="Ir al inicio"
          />
        )
      ) : (
        <LoadingBar />
      )}
    </LayoutGeneral>
  );
}

export default RegistroExitosoPage;

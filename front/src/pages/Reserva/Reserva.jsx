import { useState, useContext, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { ProdContext } from "./../../context/ProdContext";
import { AuthContext } from "./../../context/AuthContext";
import { useParams } from "react-router-dom";
import { environment } from "../../constants";
import useFetch from "../../customHooks/useFetch";
import LayoutGeneral from "../../components/LayoutGeneral/LayoutGeneral";
import ProductoHeader from "../../components/ProductoHeader/ProductoHeader";
import ReservaDatosUsuario from "../../components/ReservaDatosUsuario/ReservaDatosUsuario";
import ReservaCalendario from "../../components/ReservaCalendario/ReservaCalendario";
import ReservaHorario from "../../components/ReservaHorario/ReservaHorario";
import ReservaDetalle from "../../components/ReservaDetalle/ReservaDetalle";
import ProductoPoliticas from "../../components/ProductoPoliticas/ProductoPoliticas";
import LoadingBar from "../../components/LoadingBar/LoadingBar";
import Error from "../../components/Error/Error";
import "./Reserva.css";
import { FiltroContext } from "../../context/FiltroContext";

function Reserva() {
  const { auth } = useContext(AuthContext);
  const { id_producto } = useParams();

  const { BASE_URL, PRODUCTOS_ENDPOINT, RESERVAS_ENDPOINT } = environment;
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
  }, [producto, reservas, newProd, auth]);

  const {
    filtros: { porFechaInicio, porFechaFin },
  } = useContext(FiltroContext);
  const [startDate, setStartDate] = useState(porFechaInicio);
  const [endDate, setEndDate] = useState(porFechaFin);
  const [formFeedback, setFormFeedback] = useState("");

  const onChangeDates = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormFeedback("");

    const inputs = e.target.elements;
    if (
      !inputs["ciudad"].value ||
      !startDate ||
      !endDate ||
      inputs["horario"].selectedOptions[0].disabled
    ) {
      setFormFeedback("Falta completar campos obligatorios");
    } else {
      const body = {
        usuario: {
          idUsuario: auth.idUsuario,
          ciudad: inputs["ciudad"].value,
        },
        producto: { idProducto: id_producto },
        fechaInicio: startDate.toJSON().substring(0, 10),
        fechaFin: endDate.toJSON().substring(0, 10),
        horaIngreso: inputs["horario"].value,
        observaciones: inputs["observaciones"].value.trim(),
        vacunadoCovid: inputs["vacunado-covid"].checked,
      };

      fetch(`${BASE_URL}${RESERVAS_ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.jwt,
        },
        body: JSON.stringify(body),
      })
        .then((res) => {
          if (res.status !== 201) {
            res.json().then((msg) => console.error(msg));
            throw new Error("Status code no es 201");
          } else {
            history.push(`/producto/${id_producto}/reserva-exitosa`);
          }
        })
        .catch((err) => {
          console.error(err);
          setFormFeedback(
            "Lamentablemente la reserva no ha podido realizarse. Por favor, intente más tarde"
          );
        });
    }
  };
  if (!auth) return <Redirect to="/login" />;
  if (!auth.roles?.includes("ROLE_USER")) return <Redirect to="/" />;

  return (
    <LayoutGeneral>
      {isLoading ? (
        <LoadingBar />
      ) : error ? (
        <Error info={"Error al cargar el producto"} />
      ) : (
        <>
          <ProductoHeader />
          <form
            onSubmit={handleSubmit}
            className="form-reserva"
            id="form-reserva"
          >
            <div className="bloques-reserva">
              <div className="bloques-reserva-izq">
                <ReservaDatosUsuario {...auth} />
                <ReservaCalendario
                  startDate={startDate}
                  endDate={endDate}
                  onChange={onChangeDates}
                  show={!!reservas}
                />
                <ReservaHorario />
              </div>
              <ReservaDetalle startDate={startDate} endDate={endDate} />
            </div>
            <Error info={formFeedback} />
          </form>
          <ProductoPoliticas />
        </>
      )}
    </LayoutGeneral>
  );
}

export default Reserva;

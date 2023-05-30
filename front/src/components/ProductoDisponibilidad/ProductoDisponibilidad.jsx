import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../context/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ProductoDisponibilidad.css";
import { FiltroContext } from "../../context/FiltroContext";
import { ProdContext } from "../../context/ProdContext";
import {
  getFechasOcupadasFromReservas,
  isDateInArray,
} from "../../utils/dates";

function ProductoDisponibilidad({ id }) {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const {
    filtros: { porFechaInicio, porFechaFin },
  } = useContext(FiltroContext);
  const { auth } = useContext(AuthContext);
  const { reservas } = useContext(ProdContext);
  const excludedDates = reservas ? getFechasOcupadasFromReservas(reservas) : [];

  return (
    <div className="producto-disponibilidad">
      <h2>Fechas disponibles</h2>
      <div className="contenedor-disponibilidad">
        <div className="disponibilidad__calendario">
          <DatePicker
            monthsShown={width > 490 ? 2 : 1}
            startDate={porFechaInicio}
            endDate={porFechaFin}
            minDate={new Date()}
            filterDate={(date) =>
              !isDateInArray(date.toLocaleDateString(), excludedDates)
            }
            inline
            disabled
            readOnly
          />
        </div>
        <div className="contenedor-reservas">
          <div className="reservas">
            <p>Agregá tus fechas de viaje para obtener precios exactos</p>
            <Link
              to={{
                pathname: auth ? `/producto/${id}/reserva` : "/login",
                state: !auth && {
                  loginReserva: false,
                  destination: `/producto/${id}/reserva`,
                },
              }}
              className="btn btn-primario btn-reserva"
            >
              Iniciar reserva
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductoDisponibilidad;

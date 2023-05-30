import { useContext } from "react";
import CardReserva from "./CardReserva";
import useFetch from "../../customHooks/useFetch";
import { environment } from "../../constants";
import { AuthContext } from "../../context/AuthContext";
import "./CardReservaList.css";

function CardReservaList({ reservas, titulo, ...props }) {
  const { BASE_URL, PUNTUACIONES_ENDPOINT } = environment;
  const { auth } = useContext(AuthContext);
  const { data: puntajes } = useFetch(
    `${BASE_URL}${PUNTUACIONES_ENDPOINT}${auth.idUsuario}`
  );

  reservas.forEach((res) => {
    puntajes?.forEach((punt) => {
      if (res.producto.idProducto === punt.producto.idProducto) {
        res.puntaje = punt;
      }
    });
  });

  return (
    <section className="card-reserva-list" {...props}>
      <h2>{titulo}</h2>
      <ul>
        {[...reservas]
          .sort((a, b) => {
            if (a.fechaInicio < b.fechaInicio) return 1;
            else if (a.fechaInicio > b.fechaInicio) return -1;
            else return 0;
          })
          .map((res) => (
            <CardReserva key={res.idReserva} reserva={res} />
          ))}
      </ul>
    </section>
  );
}

export default CardReservaList;

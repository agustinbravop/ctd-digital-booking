import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { environment } from "../../constants";
import { AuthContext } from "../../context/AuthContext";
import "./CardReserva.css";
import { getDateFromString } from "../../utils/dates";

function CardReserva({ reserva }) {
  const { BASE_URL, PUNTUACIONES_ENDPOINT } = environment;
  const {
    fechaInicio,
    fechaFin,
    idReserva,
    producto: { idProducto, categoria, nombre, imagenes, ciudad },
    puntaje,
  } = reserva;

  const { auth } = useContext(AuthContext);
  const [stars, setStars] = useState(0);

  const fetchPuntaje = async (endpoint, metodo, codigo, puntuacion) => {
    try {
      const res = await fetch(
        `${BASE_URL}${PUNTUACIONES_ENDPOINT}${endpoint}`,
        {
          method: metodo,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.jwt,
          },
          body: JSON.stringify(puntuacion),
        }
      );
      if (res.status !== codigo) {
        throw new Error();
      } else {
        setStars(puntuacion.puntuacion);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (puntaje !== undefined) {
      setStars(puntaje.puntuacion);
    }
  }, [idProducto, setStars, puntaje]);

  const handlePuntaje = (punt) => {
    const puntuacion = {
      puntuacion: punt,
      usuario: { idUsuario: auth.idUsuario },
      producto: { idProducto: idProducto },
    };

    if (stars === 0) {
      fetchPuntaje(idReserva, "POST", 201, puntuacion);
    } else {
      puntuacion.idPuntuacion = puntaje.idPuntuacion;
      fetchPuntaje(puntaje.idPuntuacion, "PUT", 200, puntuacion);
    }
    setStars(punt);
  };

  const startDate = getDateFromString(fechaInicio);
  const endDate = getDateFromString(fechaFin);

  return (
    <article className="card-reserva" id={idReserva}>
      <div className="imagen">
        <img
          src={imagenes[0]?.urlImagen}
          alt={"Foto del alojamiento: " + nombre}
        />
      </div>

      <div className="contenido">
        <div className="titulo">
          <div className="categoria">
            <p>{categoria.titulo.toUpperCase()}</p>
            <h3>{nombre}</h3>
          </div>
        </div>
        <p className="ubicacion">
          <i className="fas fa-map-marker-alt"></i>
          {ciudad.nombre}
        </p>

        <div className="fechas-reserva">
          <div className="check-in">
            <p>Check in</p>
            <p>{startDate.toLocaleDateString()}</p>
          </div>
          <div className="check-out">
            <p>Check out</p>
            <p>{endDate.toLocaleDateString()}</p>
          </div>
        </div>

        <Link
          to={`/producto/${idProducto}`}
          className="btn btn-primario ver-detalle"
        >
          Ver producto
        </Link>

        <div>
          {new Date().getTime() > endDate.getTime() && (
            <div className="puntuacion-reserva">
              <p>¡Dejanos tu opinión!</p>

              <div className="puntuacion-estrellas" id={puntaje?.idPuntuacion}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <i
                    className={`${n <= stars ? "fas" : "far"} fa-star`}
                    key={n}
                    data-testid={"puntuacion"+n}
                    onClick={() => handlePuntaje(n)}
                  ></i>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default CardReserva;

import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../context/AuthContext";
import FavHeart from "../FavHeart/FavHeart";
import ModalMap from "../ModalMap/ModalMap";
import "./Card.css";

function Card({ producto }) {
  const {
    idProducto,
    imagenes,
    categoria,
    nombre,
    ciudad,
    descripcion,
    caracteristicas,
    latitud,
    longitud,
    direccion,
    promedio,
  } = producto;

  const { auth } = useContext(AuthContext);
  const [isActive, setActive] = useState(false);
  const [openMap, setOpenMap] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const handleMap = () => setOpenMap(!openMap);

  return (
    <article
      className={`card ${!isActive ? "ver-mas" : "ver-menos"}`}
      id={idProducto}
    >
      <div className="imagen">
        <img
          src={imagenes[0]?.urlImagen}
          alt={"Foto del alojamiento: " + nombre}
        />
        {auth?.roles?.includes("ROLE_USER") && (
          <FavHeart colorOff="white" idProducto={idProducto} />
        )}
      </div>

      <div className="contenido">
        <div className="titulo">
          <div className="categoria">
            <p>{categoria.titulo.toUpperCase()}</p>
            <h3>{nombre}</h3>
          </div>
          <div className="puntuacion">
            <span>{promedio ? promedio.toFixed(1) : "-"}</span>
            <i className="fas fa-star"></i>
          </div>
        </div>
        <p className="ubicacion">
          <i className="fas fa-map-marker-alt"></i>
          {ciudad.nombre}. <span onClick={handleMap}>MOSTRAR EN EL MAPA</span>{" "}
        </p>
        <ul className="ico-caracteristicas">
          {caracteristicas?.map((caract, index) => (
            <li key={index} title={caract.nombre}>
              <i className={caract.urlIcono}></i>
            </li>
          ))}
        </ul>

        <p className={`descripcion ${!isActive ? "ver-mas" : "ver-menos"}`}>
          {descripcion}
        </p>
        <p className="btn-ver" onClick={toggleClass}>
          {!isActive ? "Ver más..." : "Ver menos..."}
        </p>

        <Link
          to={`/producto/${idProducto}`}
          className="btn btn-primario ver-detalle"
        >
          Ver detalle
        </Link>
      </div>
      <ModalMap
        openMap={openMap}
        handleMap={handleMap}
        nombre={nombre}
        latitud={latitud}
        longitud={longitud}
        ciudad={ciudad}
        direccion={direccion}
      />
    </article>
  );
}

export default Card;

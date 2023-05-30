import { useEffect, useRef, useContext, useState, useCallback } from "react";
import { environment } from "../../constants";
import { AuthContext } from "./../../context/AuthContext";
import "./NuevoProductoCaracteristicas.css";

function NuevoProductoCaracteristicas() {
  const { auth } = useContext(AuthContext);
  const { BASE_URL, CARACTERISTICAS_ENDPOINT } = environment;
  const inputNombre = useRef(null);
  const inputIcono = useRef(null);
  const [caract, setCaract] = useState([]);

  /* 
  useCallback evita que la referencia a 
  getCaracteristicas cambie en cada render 
  */
  const fetchCaracteristicas = useCallback(async () => {
    try {
      const res = await fetch(`${BASE_URL}${CARACTERISTICAS_ENDPOINT}`);
      if (res.status === 200) {
        const data = await res.json();
        setCaract(data);
      } else {
        throw new Error("Error al fetchear las características");
      }
    } catch (err) {
      console.error(err);
    }
  }, [BASE_URL, CARACTERISTICAS_ENDPOINT]);

  useEffect(() => {
    fetchCaracteristicas();
  }, [fetchCaracteristicas]);

  const handlePostNewCaracteristica = () => {
    if (!inputNombre.current?.value || !inputIcono.current?.value) {
      return;
    }
    const caracteristica = {
      nombre: inputNombre.current?.value,
      urlIcono: inputIcono.current?.value,
    };

    const settings = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + auth.jwt,
      },
      body: JSON.stringify(caracteristica),
    };

    // POST con los datos del usuario
    fetch(`${BASE_URL}${CARACTERISTICAS_ENDPOINT}`, settings)
      .then((res) => res.json())
      .then((car) => setCaract([...caract, car]))
      .catch((err) => console.error(err));

    inputNombre.current.value = "";
    inputIcono.current.value = "";
  };

  return (
    <div className="contenedor-atributos-producto">
      <h4>Agregar atributos</h4>
      <div className="checkbox-atributos">
        <div className="checkbox-atributos-existentes">
          {caract?.map((caracteristica, index) => (
            <div className="form-group form-group-checkbox" key={index}>
              <input
                className="input-checkbox"
                type="checkbox"
                name="caracteristicas"
                id={caracteristica.idCaracteristica}
              />
              <i
                className={caracteristica.urlIcono}
                style={{ color: "var(--colorUno)" }}
              ></i>
              <label htmlFor={caracteristica.idCaracteristica}>
                {caracteristica.nombre}
              </label>
            </div>
          ))}
        </div>

        <fieldset className="checkbox-atributos-nuevo">
          <legend>Crear un atributo nuevo:</legend>
          <div className="form-group">
            <label htmlFor="nombre-caracteristica">Nombre</label>
            <input
              className="input"
              type="text"
              id="nombre-caracteristica"
              name="nombre-caracteristica"
              placeholder="Wifi"
              ref={inputNombre}
            />
          </div>
          <div className="form-group">
            <label htmlFor="icono-caracteristica">Ícono</label>
            <input
              className="input"
              type="text"
              id="icono-caracteristica"
              name="icono-caracteristica"
              placeholder="fas fa-wifi"
              ref={inputIcono}
            />
          </div>
          <button
            type="button"
            className=" btn-primario btn-agregar"
            title="Agregar nuevo"
            onClick={handlePostNewCaracteristica}
          >
            <i className="fas fa-plus"></i>
          </button>
        </fieldset>
      </div>
    </div>
  );
}

export default NuevoProductoCaracteristicas;

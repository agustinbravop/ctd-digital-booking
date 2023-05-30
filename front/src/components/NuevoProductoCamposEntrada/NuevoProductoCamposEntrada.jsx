import { useEffect } from "react";
import useFetch from "../../customHooks/useFetch";
import { environment } from "../../constants";
import "./NuevoProductoCamposEntrada.css";

function NuevoProductoCamposEntrada({ setFormFeedback }) {
  const { BASE_URL, CIUDADES_ENDPOINT, CATEGORIAS_ENDPOINT } = environment;
  const { data: ciudades } = useFetch(`${BASE_URL}${CIUDADES_ENDPOINT}`);
  const { data: categorias } = useFetch(`${BASE_URL}${CATEGORIAS_ENDPOINT}`);

  useEffect(() => {}, []);

  return (
    <div className="campos-entrada">
      <div className="form-group">
        <label htmlFor="nombre-producto" className="label-required">
          Nombre del producto
        </label>
        <input
          type="text"
          id="nombre-producto"
          name="nombre-producto"
          className="input"
          placeholder="La soñada"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="categoria-producto" className="label-required">
          Categoría
        </label>
        <select
          className="input"
          name="categoria-producto"
          id="categoria-producto"
          defaultValue="Elegir categoría"
          required
          onChange={() => setFormFeedback("")}
        >
          <option defaultValue="Elegir categoría" disabled>
            Elegir categoría
          </option>
          {categorias?.map((categoria) => (
            <option value={categoria.idCategoria} key={categoria.idCategoria}>
              {categoria.titulo}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="direccion-producto" className="label-required">
          Dirección
        </label>
        <input
          type="text"
          id="direccion-producto"
          name="direccion-producto"
          className="input"
          placeholder="Av. Colón 1643"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="ciudad-producto" className="label-required">
          Ciudad
        </label>
        <select
          className="input"
          name="ciudad-producto"
          id="ciudad-producto"
          defaultValue="Elegir ciudad"
          required
          onChange={() => setFormFeedback("")}
        >
          <option defaultValue="Elegir ciudad" disabled>
            Elegir ciudad
          </option>
          {ciudades?.map((ciudad) => (
            <option value={ciudad.idCiudad} key={ciudad.idCiudad}>
              {ciudad.nombre + ", " + ciudad.pais}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="latitud-producto" className="label-required">
          Latitud
        </label>
        <input
          type="text"
          id="latitud-producto"
          name="latitud-producto"
          className="input"
          placeholder="-34.42644508044667"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="longitud-producto" className="label-required">
          Longitud
        </label>
        <input
          type="text"
          id="longitud-producto"
          name="longitud-producto"
          className="input"
          placeholder="-58.56230721452969"
          required
        />
      </div>
      <div className="form-group form-group-doble">
        <label htmlFor="descripcion-producto" className="label-required">
          Descripción
        </label>
        <textarea
          className="input"
          name="descripcion-producto"
          id="descripcion-producto"
          rows="6"
          defaultValue=""
          placeholder="Escribir aquí"
          maxLength="2000"
          required
        ></textarea>
      </div>
    </div>
  );
}

export default NuevoProductoCamposEntrada;

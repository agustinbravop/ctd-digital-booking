import "./NuevoProductoPoliticas.css";

function NuevoProductoPoliticas() {
  return (
    <div className="contenedor-politicas-producto">
      <h4>Políticas del producto</h4>

      <div className="politicas-producto">
        <div className="politica-producto">
          <h5>Normas de la casa</h5>
          <label htmlFor="descripcion-normas-casa" className="label-required">
            Descripción
          </label>
          <textarea
            className="input"
            name="descripcion-normas-casa"
            id="descripcion-normas-casa"
            rows="6"
            placeholder="Escribir aquí"
            required
          ></textarea>
        </div>

        <div className="politica-producto">
          <h5>Salud y seguridad</h5>
          <label
            htmlFor="descripcion-salud-seguridad"
            className="label-required"
          >
            Descripción
          </label>
          <textarea
            className="input"
            name="descripcion-salud-seguridad"
            id="descripcion-salud-seguridad"
            rows="6"
            placeholder="Escribir aquí"
            required
          ></textarea>
        </div>
        
        <div className="politica-producto">
          <h5>Políticas de cancelación</h5>
          <label htmlFor="descripcion-cancelacion" className="label-required">
            Descripción
          </label>
          <textarea
            className="input"
            name="descripcion-cancelacion"
            id="descripcion-cancelacion"
            rows="6"
            placeholder="Escribir aquí"
            required
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default NuevoProductoPoliticas;

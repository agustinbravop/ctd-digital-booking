import { useRef } from "react";
import "./NuevoProductoImagenes.css";

function NuevoProductoImagenes({ imagenes, setImagenes }) {
  const inputNombre = useRef(null);
  const inputUrl = useRef(null);

  const handleNewImg = () => {
    if (inputNombre.current?.value !== "" && inputUrl.current?.value !== "") {
      setImagenes([
        ...imagenes,
        {
          titulo: inputNombre.current?.value.trim(),
          urlImagen: inputUrl.current?.value.trim(),
        },
      ]);
    }
    inputNombre.current.value = "";
    inputUrl.current.value = "";
  };

  const handleBorrarImg = (id) => {
    setImagenes(imagenes.filter((_, idx) => idx !== id));
  };

  return (
    <div className="contenedor-imagenes-producto">
      <h4>Cargar imágenes</h4>

      <div className="imagenes-producto">
        <div className="imagenes-nueva">
          <div className="form-group">
            <label htmlFor="nombre-imagen" className="label-required">
              Título de la imagen
            </label>
            <input
              className="input"
              type="text"
              id="nombre-imagen"
              name="nombre-imagen"
              placeholder="Foto casa"
              ref={inputNombre}
              required={imagenes.length === 0}
            />
          </div>
          <div className="form-group">
            <label htmlFor="url-imagen" className="label-required">
              URL de la imagen
            </label>
            <input
              className="input"
              type="text"
              id="url-imagen"
              name="url-imagen"
              placeholder="Insertar https://"
              ref={inputUrl}
              required={imagenes.length === 0}
            />
          </div>

          <button
            type="button"
            className="btn-primario btn-agregar"
            title="Agregar nuevo"
            onClick={handleNewImg}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>

        {imagenes.length !== 0 && (
          <div className="imagenes-cargadas">
            {imagenes.map((img, idx) => (
              <div key={idx}>
                <input
                  className="input"
                  type="text"
                  value={img.titulo}
                  disabled
                />
                <input
                  className="input"
                  type="text"
                  value={img.urlImagen}
                  disabled
                />
                <button
                  type="button"
                  className="btn-primario btn-agregar borrar-img"
                  title="Borrar imagen"
                  onClick={() => handleBorrarImg(idx)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default NuevoProductoImagenes;

import "./ReservaDatosUsuario.css";

function ReservaDatosUsuario({ firstName, lastName, email }) {
  return (
    <div className="reserva-datos-usuario">
      <h2>Completá tus datos</h2>
      <div className="reserva-usuario-inputs">
        <div className="form-group">
          <label className="label-required" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="input"
            type="text"
            placeholder="Nombre"
            id="nombre"
            name="nombre"
            value={firstName}
            disabled
            required
          />
        </div>
        <div className="form-group">
          <label className="label-required" htmlFor="apellido">
            Apellido
          </label>
          <input
            className="input"
            type="text"
            placeholder="Apellido"
            id="apellido"
            name="apellido"
            value={lastName}
            disabled
            required
          />
        </div>
        <div className="form-group">
          <label className="label-required" htmlFor="email">
            Correo electrónico
          </label>
          <input
            className="input"
            type="email"
            placeholder="Correo electrónico"
            id="email"
            name="email"
            value={email}
            disabled
            required
          />
        </div>
        <div className="form-group">
          <label className="label-required" htmlFor="ciudad">
            Ciudad
          </label>
          <input
            className="input"
            type="text"
            placeholder="Ingrese su ciudad"
            id="ciudad"
            name="ciudad"
            required
          />
        </div>
        <div className="form-group form-group-doble form-group-checkbox">
          <input
            className="input-checkbox"
            type="checkbox"
            id="vacunado-covid"
            defaultValue=""
          />
          <label htmlFor="vacunado-covid">
            ¿Estás vacunado contra el COVID-19?
          </label>
        </div>
        <div className="form-group form-group-doble">
          <label htmlFor="observaciones">Observaciones</label>
          <textarea
            className="input"
            name="observaciones"
            id="observaciones"
            rows="5"
            defaultValue=""
            placeholder="¿Querés dejarle un comentario al propietario?"
            maxLength="2000"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default ReservaDatosUsuario;

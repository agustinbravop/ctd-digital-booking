import "./ReservaHorario.css";

function ReservaHorario() {
  return (
    <div className="contenedor-reserva-horario">
      <h2>Tu horario de llegada</h2>
      <div className="reserva-horario">
        <p>
          <i className="far fa-check-circle"></i>Tu habitación va a estar lista
          para el check-in entre las 10:00 AM y las 11:00 PM
        </p>
        <label className="label-required" htmlFor="horario">
          Indicá tu horario estimado de llegada
        </label>
        <select defaultValue="Seleccionar hora" className="input" name="horario" id="horario" required>
          <option defaultValue="Seleccionar hora" disabled>
            Seleccionar hora
          </option>
          <option value="01:00:00">01:00 AM</option>
          <option value="02:00:00">02:00 AM</option>
          <option value="03:00:00">03:00 AM</option>
          <option value="04:00:00">04:00 AM</option>
          <option value="05:00:00">05:00 AM</option>
          <option value="06:00:00">06:00 AM</option>
          <option value="07:00:00">07:00 AM</option>
          <option value="08:00:00">08:00 AM</option>
          <option value="09:00:00">09:00 AM</option>
          <option value="10:00:00">10:00 AM</option>
          <option value="11:00:00">11:00 AM</option>
          <option value="12:00:00">12:00 AM</option>
          <option value="13:00:00">01:00 PM</option>
          <option value="14:00:00">02:00 PM</option>
          <option value="15:00:00">03:00 PM</option>
          <option value="16:00:00">04:00 PM</option>
          <option value="17:00:00">05:00 PM</option>
          <option value="18:00:00">06:00 PM</option>
          <option value="19:00:00">07:00 PM</option>
          <option value="20:00:00">08:00 PM</option>
          <option value="21:00:00">09:00 PM</option>
          <option value="22:00:00">10:00 PM</option>
          <option value="23:00:00">11:00 PM</option>
          <option value="00:00:00">12:00 PM</option>
        </select>
      </div>
    </div>
  );
}

export default ReservaHorario;

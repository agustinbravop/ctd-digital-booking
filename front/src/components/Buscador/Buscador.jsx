import { useContext, useEffect, useState } from "react";
import { FiltroContext } from "./../../context/FiltroContext";
import DatePicker from "react-datepicker";
import useFetch from "../../customHooks/useFetch";
import SelectCiudad from "./SelectCiudad.jsx";
import { environment } from "../../constants";
import "react-datepicker/dist/react-datepicker.css";
import "./Buscador.css";

function Buscador() {
  const { BASE_URL, CIUDADES_ENDPOINT } = environment;

  const { data: ciudades } = useFetch(`${BASE_URL}${CIUDADES_ENDPOINT}`);

  const { newFiltros } = useContext(FiltroContext);
  const [ciudad, setCiudad] = useState(null);
  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFin, setFechaFin] = useState(null);

  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const resetForm = () => {
    setCiudad(null);
    setFechaInicio(null);
    setFechaFin(null);
    document.querySelector("#ciudad").value = null;
  };

  // Nueva búsqueda
  const handlerSubmit = (e) => {
    e.preventDefault();
    newFiltros({
      porIdCiudad: ciudad ? ciudad.id : null,
      porFechaInicio: fechaInicio,
      porFechaFin: fechaFin,
    });
    resetForm();
  };

  const onChangePlace = (newValue) => {
    // newValue es un objeto {id,value,label} del react-select
    setCiudad(newValue);
  };

  const onChangeDates = (dates) => {
    const [start, end] = dates;
    setFechaInicio(start);
    setFechaFin(end);
  };

  return (
    <div className="contenedor-buscador">
      <h1>Buscá ofertas en casas, departamentos y mucho más</h1>
      <form onSubmit={handlerSubmit} id="buscador">
        <div className="inputs">
          <SelectCiudad
            value={ciudad}
            ciudades={ciudades}
            onChange={onChangePlace}
            inputId="ciudad"
            name="ciudad"
            placeholder="¿A dónde vamos?"
          />

          <div className="buscador-datepicker input">
            <DatePicker
              monthsShown={width > 490 ? 2 : 1}
              placeholderText="Check in - Check out"
              dateFormat="dd/MM/yyyy"
              onChange={onChangeDates}
              startDate={fechaInicio}
              endDate={fechaFin}
              selectsRange
              minDate={new Date()}
            />
          </div>
        </div>
        <button className="btn btn-primario btn-sm" id="btn-buscador">
          Buscar
        </button>
      </form>
    </div>
  );
}

export default Buscador;

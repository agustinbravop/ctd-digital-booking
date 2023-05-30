import { useState, useEffect, useContext } from "react";
import DatePicker from "react-datepicker";
import "./ReservaCalendario.css";
import "react-datepicker/dist/react-datepicker.css";
import { ProdContext } from "../../context/ProdContext";
import {
  getFechasOcupadasFromReservas,
  isDateRangeOccupied,
  isDateInArray,
} from "../../utils/dates";

function ReservaCalendario({ startDate, endDate, onChange, show = true }) {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const { reservas } = useContext(ProdContext);
  const excludedDates = reservas ? getFechasOcupadasFromReservas(reservas) : [];

  const onChangeDates = (dates) => {
    if (isDateRangeOccupied(dates[0], dates[1], excludedDates)) {
      onChange([null, null]);
    } else {
      onChange(dates);
    }
  };

  return (
    <div className="contenedor-reserva-calendario">
      <h2 className="label-required">Seleccioná tu fecha de reserva</h2>
      <div className="reserva-calendario">
        {show && (
          <DatePicker
            monthsShown={width > 550 ? 2 : 1}
            selectsRange
            onChange={onChangeDates}
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            filterDate={(date) =>
              !isDateInArray(date.toLocaleDateString(), excludedDates)
            }
            inline
            required
          />
        )}
      </div>
    </div>
  );
}

export default ReservaCalendario;

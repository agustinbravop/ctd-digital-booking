export function getDaysBetweenTwoDates(start, end) {
  const arr = [];
  for (
    let dt = getDateFromString(start);
    dt <= getDateFromString(end);
    dt.setDate(dt.getDate() + 1)
  ) {
    arr.push(dt.toLocaleDateString());
  }
  return arr;
}

export function getFechasOcupadasFromReservas(reservas) {
  const fechasOcupadas = [];
  for (let i = 0; i < reservas.length; i++) {
    fechasOcupadas.push(
      getDaysBetweenTwoDates(reservas[i].fechaInicio, reservas[i].fechaFin)
    );
  }
  return fechasOcupadas.flat();
}

export function isDateInArray(target, dateArray = []) {
  for (let i = 0; i < dateArray.length; i++) {
    if (dateArray[i] === target) return true;
  }
  return false;
}

export function isDateRangeOccupied(start, end, occupied = []) {
  return occupied.some((dt) => start <= dt && end >= dt);
}

// format is ISO standard (yyyy-MM-ddT...) that backend returns in JSON
export function getDateFromString(isoString) {
  const dateObject = new Date(
    isoString.substring(0, 4), // yyyy
    Number(isoString.substring(5, 7)) - 1, // MM
    isoString.substring(8, 10) // dd
  );
  return dateObject;
}

import { createContext, useState } from "react";
import { environment } from "../constants";

export const FiltroContext = createContext({
  resultados: [null],
  hayFiltros: Boolean,
  filtros: {
    porCategoria: "",
    porIdCiudad: "",
    porFechaInicio: Date,
    porFechaFin: Date,
  },
  limpiarFiltros: () => {},
  newFiltros: (filtros) => {},
  newResultados: (resultados, filtros) => {},
});

const { Provider } = FiltroContext;

export const FiltroProvider = ({ children }) => {
  const [hayFiltros, setHayFiltros] = useState(false);
  const [resultados, setResultados] = useState([]);
  const [filtros, setFiltros] = useState({
    porCategoria: "",
    porIdCiudad: "",
    porFechaInicio: null,
    porFechaFin: null,
  });

  const { BASE_URL, PRODUCTOS_ENDPOINT } = environment;

  const fetchResultados = async (nuevosFiltros) => {
    const url = new URL(`${BASE_URL}${PRODUCTOS_ENDPOINT}`);

    if (nuevosFiltros.porCategoria) {
      url.searchParams.append("categoria", nuevosFiltros.porCategoria);
    }
    if (nuevosFiltros.porIdCiudad) {
      url.searchParams.append("ciudad", nuevosFiltros.porIdCiudad);
    }
    if (nuevosFiltros.porFechaInicio) {
      // hardcode hasta que funcionalidad exista
      url.searchParams.append(
        "fecha_inicio",
        nuevosFiltros.porFechaInicio.toJSON()
      );
    }
    if (nuevosFiltros.porFechaFin) {
      // hardcode hasta que funcionalidad exista
      url.searchParams.append("fecha_fin", nuevosFiltros.porFechaFin.toJSON());
    }

    try {
      const res = await fetch(url);
      if (res.status !== 200) throw new Error("Algo salió mal");
      const data = await res.json();
      setResultados(data);
    } catch (err) {
      console.error(err);
    }
  };

  const setNewFiltros = (nuevosFiltros) => {
    nuevosFiltros = nuevosFiltros || {};

    if (nuevosFiltros.porCategoria === undefined) {
      nuevosFiltros.porCategoria = filtros.porCategoria;
    }
    if (nuevosFiltros.porIdCiudad === undefined) {
      nuevosFiltros.porIdCiudad = filtros.porIdCiudad;
    }
    if (nuevosFiltros.porFechaInicio === undefined) {
      nuevosFiltros.porFechaInicio = filtros.porFechaInicio;
    }
    if (nuevosFiltros.porFechaFin === undefined) {
      nuevosFiltros.porFechaFin = filtros.porFechaFin;
    }
    setHayFiltros(
      !!nuevosFiltros.porCategoria ||
        !!nuevosFiltros.porIdCiudad ||
        !!nuevosFiltros.porFechaInicio ||
        !!nuevosFiltros.porFechaFin
    );
    setFiltros(nuevosFiltros);

    return nuevosFiltros;
  };

  const limpiarFiltros = () => {
    setNewFiltros({
      porCategoria: "",
      porIdCiudad: "",
      porFechaInicio: null,
      porFechaFin: null,
    });
  };

  const newFiltros = (nuevosFiltros) => {
    nuevosFiltros = setNewFiltros(nuevosFiltros);
    fetchResultados(nuevosFiltros);
  };

  const newResultados = (resultados, nuevosFiltros) => {
    if (nuevosFiltros) {
      setNewFiltros(nuevosFiltros);
    }
    setResultados(resultados);
  };

  return (
    <Provider
      value={{
        resultados,
        filtros,
        hayFiltros,
        limpiarFiltros,
        newFiltros,
        newResultados,
      }}
    >
      {children}
    </Provider>
  );
};

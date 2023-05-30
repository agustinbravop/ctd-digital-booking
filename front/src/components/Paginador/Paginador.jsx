import { useContext } from "react";
import { FiltroContext } from "../../context/FiltroContext";
import "./Paginador.css";

function Paginador({ page, totalPages, handlePage }) {
  const { hayFiltros } = useContext(FiltroContext);

  let btnPages = [];
  for (let i = 0; i < totalPages; i++) {
    btnPages.push(i);
  }

  return (
    <div className="btn-pages">
      {!hayFiltros &&
        btnPages?.map((num) => (
          <p
            key={num}
            className={`btn btn-secundario btn-pag ${page === num && "active"}`}
            onClick={() => handlePage(num)}
          >
            {num + 1}
          </p>
        ))}
    </div>
  );
}

export default Paginador;

import { useContext } from "react";
import { ProdContext } from "./../../context/ProdContext";
import "./ProductoPoliticas.css";

function ProductoPoliticas() {
  const { prod } = useContext(ProdContext);

  return (
    <div className="producto-politicas">
      <h2>Qué tenés que saber</h2>
      <div className="politicas">

        {prod?.politicas?.map((politica, index) => (
          <div className="politica" key={index}>
            <h3>{politica.titulo}</h3>
            
            {politica.descripcion.split("\n").map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductoPoliticas;

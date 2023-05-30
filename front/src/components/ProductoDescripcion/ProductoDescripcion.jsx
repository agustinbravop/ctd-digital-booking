import { useContext } from "react";
import { ProdContext } from "./../../context/ProdContext";
import './ProductoDescripcion.css';

function ProductoDescripcion() {

    const { prod } = useContext(ProdContext);

    return ( 
        <div className='producto-descripcion'>
            <h2>{prod?.nombre}</h2>
            <p>{prod?.descripcion}</p>
        </div>
     );
}
 
export default ProductoDescripcion;

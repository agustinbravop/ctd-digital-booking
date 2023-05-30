import { useContext } from "react";
import { ProdContext } from "./../../context/ProdContext";
import './ProductoCaracteristicas.css';

function ProductoCaracteristicas() {

    const { prod } = useContext(ProdContext);

    return ( 
        <div className='producto-caracteristicas'>
            <h2>¿Qué ofrece este lugar?</h2>
            <ul className='caracteristicas'>
                {
                    prod.caracteristicas.length > 0 ?
                        (prod.caracteristicas?.map((caract, index) => <li key={index}><i className={caract.urlIcono}></i>{caract.nombre}</li>))
                    : <p>{"[Sin información]"}</p>
                    }
           </ul>
        </div>
     );
}

export default ProductoCaracteristicas;

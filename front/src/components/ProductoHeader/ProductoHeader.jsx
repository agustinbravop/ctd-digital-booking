import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ProdContext } from "./../../context/ProdContext";
import './ProductoHeader.css';

function ProductoHeader() {

    const { prod } = useContext(ProdContext);
    const { categoria, nombre } = prod;

    const history = useHistory();

    return ( 
        <div className='producto-header'>
            <div style={{padding:'5px 0'}}>
                <h4 className='producto-header-categoria'>{categoria?.titulo}</h4>
                <h2 className='producto-header-titulo'>{nombre}</h2>
            </div>
            <button onClick={() => history.goBack()} style={{background: 'none', border: 'none', color:'#FFF'}}><i className="fas fa-chevron-left" title="Volver"></i></button>
        </div>
     );
}
 
export default ProductoHeader;

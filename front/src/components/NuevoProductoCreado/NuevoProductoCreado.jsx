import { Link } from "react-router-dom";
import imagen from "../../img/reserva-exitosa.png";
import "./NuevoProductoCreado.css";

function NuevoProductoCreado() {

    return ( 
        <>
            <div className='producto-creado-ok'>
                <div className='contenedor'>
                <img src={imagen} alt="Producto creado" />
                <p className='txt-exito'>Tu propiedad se ha creado con éxito.</p>
                <Link to='/' className='btn btn-primario btn-sm'>Volver</Link>
                </div>
            </div>
      </>
     );
}
 
export default NuevoProductoCreado;

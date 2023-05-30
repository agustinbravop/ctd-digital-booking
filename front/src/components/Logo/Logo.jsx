import { useContext } from "react";
import { FiltroContext } from "./../../context/FiltroContext";
import { Link } from "react-router-dom";
import img from './../../img/logoDB.svg';
import './Logo.css';

function Logo() {
    const { hayFiltros, limpiarFiltros } = useContext(FiltroContext);

    const handleLimpiarFiltro = () => {
        if(hayFiltros) limpiarFiltros();
    }

    return ( 
        <Link to='/' className="logo-img" onClick={handleLimpiarFiltro}>
            <img src={img} alt="Logo Digital Booking" />
            <span className="logo-lema">Sentite como en tu hogar</span>
        </Link>
     );
}
 
export default Logo;

import RedesSociales from '../RedesSociales/RedesSociales';
import Logo from '../../img/logoDB.svg';
import './Footer.css';

function Footer() {

    return (
        <footer className="main-footer">
            <div className="copyright">
                <img src={Logo} alt="Isologotipo Digital Booking"/>
                <p>©2021 Digital Booking</p>
            </div>
            <RedesSociales />
        </footer>
    )
  }

export default Footer;

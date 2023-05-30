import "./ProductoSocials.css";
import ShareIcon from "./../../img/share-icon.svg";
import FavHeart from "../FavHeart/FavHeart";
import { useState, useContext } from "react";
import { ProdContext } from "../../context/ProdContext";
import { AuthContext } from "../../context/AuthContext";

const ShareMenu = ({ img }) => {
  const url = new URL(
    "https://www.digitalhouse.com/ar/acciones/certified-tech-developer"
  );
  const title = "Reserva%20de%20departamentos!";

  return (
    <div className="producto-socials__share__menu">
      <a
        className="share-icon-facebook"
        href={`https://www.facebook.com/sharer/sharer.php?u=${url.host}${url.pathname}`}
        rel="noreferrer"
        target="_blank"
      >
        <i className="fab fa-facebook-square" title="Facebook"></i>
      </a>

      <a
        className="share-icon-twitter"
        href={`https://twitter.com/share?url=${url.href}&text=${title}&via=_digitalhouse`}
        rel="noreferrer"
        target="_blank"
      >
        <i className="fab fa-twitter-square" title="Twitter"></i>
      </a>

      <a
        className="share-icon-pinterest"
        href={`http://pinterest.com/pin/create/link/?url=${url.href}&media=${img.urlImagen}&description=${title}`}
        rel="noreferrer"
        target="_blank"
      >
        <i className="fab fa-pinterest-square" title="Pinterest"></i>
      </a>

      <a
        className="share-icon-linkedin"
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${url.href}&title=${title}&summary=${title}`}
        rel="noreferrer"
        target="_blank"
      >
        <i className="fab fa-linkedin" title="Linked In"></i>
      </a>
    </div>
  );
};

function ProductoSocials() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const {
    prod: { idProducto, imagenes },
  } = useContext(ProdContext);
  const { auth } = useContext(AuthContext);

  return (
    <div className="producto-socials">
      <div className="producto-socials__share">
        <img
          src={ShareIcon}
          alt="Compartir"
          title="Compartir"
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
        {isMenuOpen && <ShareMenu img={imagenes[0]} />}
      </div>
      {auth?.roles?.includes("ROLE_USER") && (
        <FavHeart idProducto={idProducto} />
      )}
    </div>
  );
}

export default ProductoSocials;

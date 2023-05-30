import { useContext, useState } from "react";
import { FavsContext } from "../../context/FavsContext";
import "./FavHeart.css";

const FavHeart = ({
  idProducto,
  colorOn = "var(--colorFav)",
  colorOff = "var(--colorTres)",
  ...props
}) => {
  const { addNewFav, removeFav, favs } = useContext(FavsContext);
  const [isOn, setOn] = useState(
    favs?.find((fav) => fav.idProducto === idProducto) !== undefined
  );

  const handleClick = () => {
    isOn ? removeFav(idProducto) : addNewFav(idProducto);
    setOn(!isOn);
  };

  return (
    <i
      className={"fav-heart " + (isOn ? "fas fa-heart" : "far fa-heart")}
      title="Añadir a favoritos"
      onClick={handleClick}
      style={{ color: isOn ? colorOn : colorOff }}
      {...props}
    ></i>
  );
};

export default FavHeart;

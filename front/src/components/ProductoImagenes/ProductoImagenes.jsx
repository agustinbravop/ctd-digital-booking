import { useEffect, useState, useRef, useContext } from "react";
import { ProdContext } from "./../../context/ProdContext";
import { useMediaQuery } from "react-responsive";
import ProductoImagenesGaleria from "./ProductoImagenesGaleria";
import "./ProductoImagenes.css";
import ProductoImagenesGaleriaMini from "./ProductoImagenesGaleriaMini";

function ProductoImagenes() {
  const { prod } = useContext(ProdContext);
  const imgList = prod.imagenes?.map((imagen) => ({
    img: imagen.urlImagen,
    titulo: imagen.titulo,
  }));

  const [verMas, setVerMas] = useState(false);
  // isMediaAboveTablet es true para anchos de pantalla mayores a 768
  const isMediaAboveTablet = useMediaQuery({ minWidth: 768 });
  const galeriaContainerRef = useRef();

  // si hago click fuera de la galería, se cierra
  const handleClickOutside = (e) => {
    if (galeriaContainerRef.current.contains(e.target)) {
      return; // click adentro
    }
    setVerMas(false); // click afuera
  };

  // agrego el listener solamente cuando es necesario, sino lo elimino
  useEffect(() => {
    if (verMas) {
      document.addEventListener("mouseup", handleClickOutside);
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.removeEventListener("mouseup", handleClickOutside);
      document.querySelector("body").style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [verMas]);

  if (!isMediaAboveTablet && verMas) {
    setVerMas(false);
  }
  
  return (
    <div className="producto-imagenes">
      {isMediaAboveTablet ? (
        <>
          <div className="producto-imagenes__grid">
            {imgList.slice(0, 4).map(({ img, titulo }, idx) => (
              <div key={idx} className="producto-imagenes__grid-cont">
                <img src={img} alt={titulo} />
              </div>
            ))}

            <div className="producto-imagenes__grid-cont">
              <img src={imgList[4]?.img} alt="Foto del inmueble" />
            </div>
            <button
              type="button"
              className="btn producto-imagenes__ver-mas"
              onClick={() => setVerMas(!verMas)}
            >
              Ver más
            </button>
          </div>

          {verMas && (
            <div className="galeria-fullscreen-container">
              <div
                ref={galeriaContainerRef}
                className="producto-imagenes__galeria"
              >
                <ProductoImagenesGaleria
                  imgList={imgList}
                  onClose={() => setVerMas(false)}
                />
              </div>
            </div>
          )}
        </>
      ) : (
        /* Implementación distinta para tablet y mobile 
      (son muy distintos, justifica un componente distinto) */
        <div className="producto-imagenes__galeria-mini">
          <ProductoImagenesGaleriaMini imgList={imgList} />
        </div>
      )}
    </div>
  );
}

export default ProductoImagenes;

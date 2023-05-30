import React from 'react';
import "./ProductoImagenesGaleria.css";
import ImageGallery from "react-image-gallery";

function renderRightNav(onClick, disabled) {
  return (
    <button
      type="button"
      className="image-gallery-custom-right-nav"
      onClick={onClick}
      disabled={disabled}
      aria-label="Next Slide"
    >
      <i className="fas fa-chevron-right"></i>
    </button>
  )
}

function renderLeftNav(onClick, disabled) {
  return <button
      type="button"
      className="image-gallery-custom-left-nav"
      disabled={disabled}
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <i className="fas fa-chevron-left"></i>
  </button>
}

function ProductoImagenesGaleria({ imgList, onClose }) {
  
  const props = {
    items: imgList.map(({ img, titulo }) => (
      { 
        original: img, 
        thumbnail: img,
        originalHeight: 360,
        originalWidth: 720,
        thumbnailHeight: 90,
        thumbnailWidth: 148,
        originalAlt: titulo,
        thumbnailAlt: titulo,
      }
    )),
    slideInterval: 3450,
    showIndex: true,
    showThumbnails: true,
    showFullscreenButton: false,
    showPlayButton: false,
    
    renderLeftNav: renderLeftNav,
    renderRightNav: renderRightNav
  }

  return <div className="productos-imagenes-galeria">
    <button 
      type="button" 
      className="productos-imagenes-galeria__cerrar"
      onClick={onClose}
      >
      <i className="fas fa-times"></i>
    </button>

    <ImageGallery {...props} />
  </div>
}

export default ProductoImagenesGaleria;

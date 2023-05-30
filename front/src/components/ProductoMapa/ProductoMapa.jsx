import { useContext } from "react";
import { ProdContext } from "../../context/ProdContext";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./ProductoMapa.css";

export function ProductoMapa() {
  const { prod } = useContext(ProdContext);
  const { latitud, longitud, ciudad, direccion } = prod;

  return (
    <div className="contenedor-producto-mapa">
      <h2>¿Dónde vas a estar?</h2>
      <h4>
        {direccion}. {ciudad?.nombre}, {ciudad?.pais}.
      </h4>
      <div className="producto-mapa">
        <MapContainer
          center={[latitud, longitud]}
          zoom={15}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitud, longitud]}>
            <Popup>
              {direccion}. {ciudad?.nombre}, {ciudad?.pais}.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default ProductoMapa;

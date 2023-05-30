import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./ModalMap.css";

function ModalMap({
  ciudad,
  direccion,
  latitud,
  longitud,
  openMap,
  handleMap,
}) {
  return (
    openMap && (
      <div className="modal-map">
        <div className="header-modal">
          <h3>{`${ciudad?.nombre}, ${ciudad?.pais}`}</h3>
          <span onClick={handleMap}>
            <i className="fas fa-times"></i>
          </span>
        </div>
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
    )
  );
}

export default ModalMap;

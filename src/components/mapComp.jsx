import React from "react";
import "../assets/style/mapComp.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const MapComp = (props) => {

  return (
    <MapContainer
      center={[props.lat, props.lon]}
      zoom={6}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[props.lat, props.lon]}></Marker>
    </MapContainer>
  );
};

export default MapComp;

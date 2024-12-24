import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  // Set the coordinates for the hotel's location
  const hotelPosition = [23.8103, 90.4125]; // Example coordinates for Dhaka, Bangladesh

  return (
    <div className="w-full h-[400px] md:h-[500px] mt-6">
      <MapContainer
        center={hotelPosition}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        {/* Tile Layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Marker */}
        <Marker position={hotelPosition}>
          <Popup>
            <strong>Hotel Elegance</strong> <br />
            Address: Luxury St., Dhaka, Bangladesh.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

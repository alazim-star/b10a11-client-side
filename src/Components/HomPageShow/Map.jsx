import React from 'react';
import { Map, Marker } from "pigeon-maps";

const LocationMap = () => {
  const hotelLocation = [23.7554816, 90.2713091]; 

  return (
    <div className="p-4 container mx-auto">
      <address className="text-center text-lg font-semibold mb-4">
        <p className="text-3xl font-bold mb-5">Location</p>
        11-12 North-South Road, Old Dhaka, Bangladesh
      </address>
      <div className="w-full h-[450px]">
        <Map 
          height={450} 
          defaultCenter={hotelLocation} 
          defaultZoom={14}
        >
          <Marker width={50} anchor={hotelLocation} />
        </Map>
      </div>
    </div>
  );
};

export default LocationMap;

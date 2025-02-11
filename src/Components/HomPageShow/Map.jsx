import React from 'react';
import { Map, Marker } from "pigeon-maps";
import SectionTitle from '../sheard/SectionTitle';

const LocationMap = () => {
  const hotelLocation = [23.7554816, 90.2713091]; 

  return (
    <div className="mt-10 container mx-auto w-1/2">

<SectionTitle subheading='Location'></SectionTitle>
<address className="text-center mb-4"><p>11-12 North-South Road, Old Dhaka, Bangladesh</p></address>

      <div className="border p-5 rounded-xl border-[#af9556]">
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

import { Typewriter } from 'react-simple-typewriter'

import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import FeaturedRoomsCard from './FeaturedRoomsCard';

const FeaturedRooms = () => {
    const loadedRooms = useLoaderData(); 
    const [rooms, setRooms] = useState(loadedRooms)

  
    const roomsToShow = rooms.slice(0, 6);

    return (
        <div>
             <div>
      <h2 className="text-center text-4xl  mt-5 mb-5">
       OUR <span className='text-[#af9556]'>TOP-RATED</span> ROOMS & SUITES
      </h2>
      <h3 className="text-center text-xl  font-bold text-red-600  mb-20">
        <Typewriter
         words={[
          "Luxurious Stays!",
          "Unmatched Comfort!",
          "Exclusive Deals!",
          "Your Perfect Getaway!",
        ]}
          loop={5} 
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h3>
    </div>

            {/* room Cards Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto container gap-5'>
                {roomsToShow.map((room) => (
                    <FeaturedRoomsCard key={room._id} room={room} rooms={rooms} setRooms={setRooms} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedRooms;

import { useLoaderData } from "react-router-dom";

import { useState, useEffect } from "react";
import FeaturedRoomsCard from "../HomPageShow/FeaturedRoomsCard";



const AllRooms = () => {
  const loadedrooms = useLoaderData(); 
  const [rooms, setrooms] = useState([]);
  

  useEffect(() => {
    setrooms(loadedrooms);
  }, [loadedrooms]);

  
 
  return (
    <div>

      <div className="container mx-auto p-4">
        <h2 className="text-center text-3xl font-bold mt-10 mb-6">All rooms</h2>

       
         

        {/* room Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rooms.length > 0 ? (
            rooms.map((room) => <FeaturedRoomsCard key={room._id} room={room} />)
          ) : (
            <p className="text-center text-lg">No rooms found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
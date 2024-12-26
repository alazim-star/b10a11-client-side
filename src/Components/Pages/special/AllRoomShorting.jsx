import { useState, useEffect } from "react";
import axios from "axios";
import FeaturedRoomsCard from "../../HomPageShow/FeaturedRoomsCard";

const AllRoomShorting = () => {
  const [rooms, setRooms] = useState([]); 
  const [minPrice, setMinPrice] = useState(null); 
  const [maxPrice, setMaxPrice] = useState(null); 
 
  const fetchRooms = () => {
    axios
      .get("https://b10a11-server-side-gray.vercel.app/room") 
      .then((res) => {
        setRooms(res.data); 
      })
      .catch((error) => {
        console.error("Error fetching rooms:", error);
      });
  };

 
  useEffect(() => {
    fetchRooms(); 
  }, []);

 
  const filteredRooms = rooms
    .filter((room) => {
      const isMin = minPrice === null || room.pricePerNight >= minPrice;
      const isMax = maxPrice === null || room.pricePerNight <= maxPrice;
      return isMin && isMax;
    })
    

  return (
    <div>
      <div className="container mx-auto p-4">
        <h2 className="text-center text-3xl font-bold mt-10 mb-6">All Rooms</h2>

      
        <div className="flex flex-col sm:flex-row justify-center items-center mb-6 gap-4">

          <div className="flex gap-4">
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice} 
              onChange={(e) => setMinPrice(e.target.value ? parseFloat(e.target.value) : null)} // Update min price or set to null
              className="input input-bordered"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice} 
              onChange={(e) => setMaxPrice(e.target.value ? parseFloat(e.target.value) : null)} // Update max price or set to null
              className="input input-bordered"
            />
          </div>

        
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRooms.map((room) => (
            <FeaturedRoomsCard key={room._id} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllRoomShorting;

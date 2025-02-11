import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const FeaturedRoomsCard = ({ room }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSeeDetails = () => {
    if (user && user.email) {
     
      navigate(`/viewDetails/${room._id}`);
    } else {
     
      navigate("/login", { state: { from: `/viewDetails/${room._id}` } });
    }
  };

  return (
    <div className="relative overflow-hidden shadow-lg group cursor-pointer rounded-xl">
      {/* Room Image */}
      <img
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        src={room.photoUrl}
        alt={room.roomName}
      />

      {/* Hover Overlay */}
      <div     onClick={handleSeeDetails} className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
        <div className="text-center text-white">
          <p className="font-bold text-lg">{room.roomName}</p>
          <p className="text-sm">{room.maxOccupancy}</p>
          <p className="text-md font-semibold">Starting at ${room.pricePerNight}/night</p>
        </div>

        {/* Book Now Button */}
      <button
          onClick={handleSeeDetails}
          className="px-4 py-2 bg-primary text-white rounded-full hover:bg-white hover:text-[#af9556] transition duration-300"
        >
         Book Now
        </button>
      </div>
    </div>
  );
};

export default FeaturedRoomsCard;

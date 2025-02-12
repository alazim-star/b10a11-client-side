import { Typewriter } from 'react-simple-typewriter';
import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedRoomsCard from './FeaturedRoomsCard';

const FeaturedRooms = () => {
    const loadedRooms = useLoaderData();
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        if (loadedRooms) {
            setRooms(loadedRooms);
        }
    }, [loadedRooms]);

    const roomsToShow = rooms.slice(0, 6);

    return (
        <div className="mt-10">
            {/* Section Title */}
            <div>
                <h2 className="text-center text-4xl font-semibold">
                    OUR TOP-<span className="text-[#af9556]">RATED ROOMS</span> & SUITES
                </h2>
                <h3 className="text-center text-xl text-[#af9556] mb-10">
                    <Typewriter
                        words={[
                            "Elegant Escapes Await!",
                            "Indulge in Ultimate Luxury!",
                            "Unveil the Perfect Stay!",
                            "Where Comfort Meets Class!",
                            "Exclusive Offers Just for You!",
                            "Discover Your Dream Getaway!",
                            "Unrivaled Hospitality Awaits!",
                            "Stay in Style, Live in Luxury!",
                        ]}
                        loop={Infinity}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h3>
            </div>

            {/* Display Rooms */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto container gap-5">
                {roomsToShow.map((room) => (
                    <FeaturedRoomsCard key={room._id} room={room} rooms={rooms} setRooms={setRooms} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedRooms;

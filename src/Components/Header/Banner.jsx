import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
  const slides = [
    {
      img: "https://i.ibb.co.com/xL6vW7w/360-F-393855516-0-Bcg-VZq-Nl-Vrv-DE0ki-D3-YTl-VJaur8-Q02-G.jpg",
      title: "Welcome to a World of Elegance",
      description: "Discover the perfect blend of luxury, comfort, and unparalleled hospitality.",
    },
    {
      img: "https://i.ibb.co.com/L1vb6jv/photo-1638899719048-91b22d3d9ee1.jpg",
      title: "Dive into Serenity",
      description: "Unwind in our pristine swimming pools, designed for ultimate relaxation.",
    },
    {
      img: "https://i.ibb.co/QCLmvWs/istockphoto-1815808691-612x612.jpg",
      title: "Stay in Style",
      description: "Indulge in our sophisticated suites, tailored for your exquisite taste.",
    },
    {
      img: "https://i.ibb.co.com/7QM4V6d/for-gourmets.jpg",
      title: "A Feast for the Senses",
      description: "Enjoy world-class dining experiences with our gourmet cuisine.",
    },
    {
      img: "https://i.ibb.co.com/z2ttvWc/photo-1534438327276-14e5300c3a48.jpg",
      title: "Fitness Beyond Compare",
      description: "Achieve your fitness goals in our state-of-the-art gymnasium.",
    },
    {
      img: "https://i.ibb.co.com/1T0hW6g/istockphoto-1418784247-612x612-1.jpg",
      title: "Grand Lobby Experience",
      description: "Step into a space that exudes grandeur and sophistication.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <div className="w-full relative">
      {/* Advertisement Banner */}
      <div className="absolute top-0 left-0 w-full text-white py-2 flex justify-between items-center px-4 z-10">
        <div className="mt-20 items-center w-80 h-96 ">
          <img
            src="https://i.ibb.co.com/1T0hW6g/istockphoto-1418784247-612x612-1.jpg" // You can replace this with your ad image
            alt="Ad"
            className="relative  mr-4 border-[#af9556] border-b-4 border-l-4"
          />
          <p className="text-3xl text-red-600 bg-[#af9556] font-bold absolute top-36"> 

             <Typewriter
                     words={[
                      "Get 30% OFF !!",
                      "Your First Booking!",
                     
                    ]}
                      loop={Infinity} 
             
                
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
          </p>
          <Link to="/allRooms" className="  text-lg font-semibold text-white hover:text-gray-300">
          <button
                  className="bg-[#af9556] hover:bg-white hover:text-black text-white font-semibold py-2 px-4 rounded-3xl absolute top-[255px] ml-[202px] "
                >
                 Book Now
                </button>
        </Link>

        </div>
       
      </div>

      {/* Banner Slider */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-[600px] md:h-[500px] sm:h-[400px] object-cover"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4">
              <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold mb-4 text-center">
                {slide.title}
              </h2>
              <p className="text-lg md:text-base sm:text-sm mb-6 max-w-2xl text-center">
                {slide.description}
              </p>
              <Link to="/allRooms">
                <button
                  className="bg-[#af9556] hover:bg-[#8c7342] text-white font-semibold py-2 px-4 rounded"
                >
                  Explore Rooms
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;

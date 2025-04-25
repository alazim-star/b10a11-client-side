import React, { useState, useEffect } from "react"; // Import useState and useEffect
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { motion } from 'framer-motion';

const Banner = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal on component mount
    setShowModal(true);
  }, []);

  const slides = [
    {
      img: "https://i.ibb.co.com/xL6vW7w/360-F-393855516-0-Bcg-VZq-Nl-Vrv-DE0ki-D3-YTl-VJaur8-Q02-G.jpg",
      title: "🌟 Where Elegance Meets Comfort",
      description: "Luxury and warmth in perfect harmony.",
    },
    {
      img: "https://i.ibb.co.com/L1vb6jv/photo-1638899719048-91b22d3d9ee1.jpg",
      title: "💦 Dive into Pure Bliss",
      description: "Relax in our crystal-clear pools.",
    },
    {
      img: "https://i.ibb.co/QCLmvWs/istockphoto-1815808691-612x612.jpg",
      title: "🛏️ A Suite of Perfection",
      description: "Unwind in elegance and comfort.",
    },
    {
      img: "https://i.ibb.co.com/7QM4V6d/for-gourmets.jpg",
      title: "🍽️ A Culinary Journey",
      description: "Savor flavors crafted by top chefs.",
    },
    {
      img: "https://i.ibb.co.com/z2ttvWc/photo-1534438327276-14e5300c3a48.jpg",
      title: "🏋️‍♂️ Elevate Your Fitness",
      description: "Train in style, stay in shape.",
    },
    {
      img: "https://i.ibb.co.com/1T0hW6g/istockphoto-1418784247-612x612-1.jpg",
      title: "✨ The Grand Entrance Awaits",
      description: "Step into timeless luxury.",
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

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-full relative mx-auto">

{showModal && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-primary rounded-lg p-1 relative max-w-full w-[90%] sm:w-[500px]">

      {/* Image Section */}
      <div className="relative group overflow-hidden rounded-xl shadow-xl border border-gray-700 bg-gradient-to-br from-[#1a1a1a] to-[#3d3d3d]">
        
        {/* Glass Background Overlay */}
        <div className="absolute inset-0 bg-black/30 rounded-xl backdrop-blur-lg group-hover:backdrop-blur-xl transition-all duration-500"></div>
        
        {/* Background Image */}
        <img
          src="https://i.ibb.co/F0f03b7/standard-02.jpg"
          alt="Special Offer"
          className="w-full h-[250px] sm:h-[400px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
        />

        {/* Neon Border Hover */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:shadow-[0_0_20px_#facc15] transition-all duration-500 rounded-xl"></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 p-4 sm:p-6">
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wide text-primary drop-shadow-2xl animate-pulse text-center">
            ⏲ Limited Time Deal!
          </h2>

          {/* Discount Text */}
          <p className="text-sm sm:text-lg text-center mt-3 font-medium leading-relaxed text-gray-300 drop-shadow-md">
            Get <span className="text-primary font-extrabold text-3xl sm:text-5xl glow">30% OFF</span> on your first booking.  
            <br /> **Luxury & Comfort**
          </p>

          {/* CTA Button */}
          <Link to="/allRooms">
            <button className="bg-primary hover:bg-yellow-600 rounded-full text-white font-semibold mt-5 px-6 py-2 sm:px-8 sm:py-3 transition-all z-20">
              Book Now 🎁
            </button>
          </Link>
        </div>
      </div>

      {/* Close Button */}
      <button
        className="absolute top-2 right-2 text-gray-200 text-lg sm:text-xl z-20"
        onClick={closeModal}
      >
        ✂
      </button>
    </div>
  </div>
)}



      {/* Advertisement Banner */}
      <div className="absolute top-0 left-0 w-full text-white py-2 flex justify-between items-center px-4 z-10">
        <div className="lg:mt-20 items-center w-80  mt-96 ml-14">
          <img
            src="https://i.ibb.co.com/1T0hW6g/istockphoto-1418784247-612x612-1.jpg"
            alt="Ad"
            className="relative rounded-xl mr-4 border-primary border-b-8"
          />
          <p className="text-3xl text-red-600  bg-primary  font-bold absolute lg:top-36 
          top-[500px]">
            <Typewriter
              words={["Get 30% OFF !!", "Your First Booking!"]}
              loop={Infinity}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <Link to="/allRooms" className="text-lg font-semibold text-white hover:text-gray-300">
            <button className="bg-primary hover:bg-white hover:text-primary text-white font-semibold py-2 px-4 rounded absolute lg:top-[257px] ml-[202px] top-[550px]">
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
              className="w-full h-[600px] md:h-[500px] sm:h-[400px] object-cover overflow-hidden"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4">
              <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold mb-4 text-center">
                {slide.title}
              </h2>
              <p className="text-lg md:text-base sm:text-sm mb-6 max-w-2xl text-center">
                {slide.description}
              </p>
              
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;

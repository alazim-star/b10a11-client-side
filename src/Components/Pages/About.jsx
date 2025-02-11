import React from 'react';

const About = () => {
  return (
    <div className=" min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-6">Welcome to The Grand Palace Hotel</h1>
        <p className="text-lg  mb-8">
          Experience luxury, comfort, and the finest hospitality at The Grand Palace Hotel. Whether you're here for business, leisure, or a special event, we provide an unforgettable stay.
        </p>
        
        {/* Hotel Overview */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">
            The Grand Palace Hotel is a five-star luxury hotel nestled in the heart of the city. Our state-of-the-art facilities, world-class service, and breathtaking views create an atmosphere of unmatched sophistication. 
            Whether you're attending an important conference, enjoying a relaxing vacation, or celebrating a special occasion, we offer the perfect blend of elegance and comfort.
          </p>
          <p className="text-gray-700">
            Our hotel features elegantly designed rooms, an exquisite on-site restaurant, a spa and wellness center, a swimming pool, and flexible event spaces for your business and personal needs. 
            Our staff is dedicated to ensuring that your stay is as comfortable and enjoyable as possible.
          </p>
        </div>

        {/* Amenities Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img src="https://i.ibb.co.com/rH7mrRg/15-g-signature-premium-family-room-standard.jpg" alt="" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Luxurious Rooms</h3>
            <p className="text-gray-600">
              Our rooms are designed with your comfort and relaxation in mind. Each room features modern amenities, stylish furnishings, and stunning views to ensure a memorable stay.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img src="https://i.ibb.co.com/8r27kv3/Four-Seasons-Hotel-Riyadh-2.jpg" alt="" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fine Dining</h3>
            <p className="text-gray-600">
              Indulge in world-class cuisine at our on-site restaurant. From gourmet meals to casual dining, we offer a variety of options to satisfy every palate.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img src="https://i.ibb.co.com/DbP5BTm/images-2.jpg" alt="" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Relax and Rejuvenate</h3>
            <p className="text-gray-600">
              Unwind at our spa and wellness center, or take a dip in our stunning swimming pool. Experience ultimate relaxation during your stay at The Grand Palace Hotel.
            </p>
          </div>
        </div>

        {/* Our Commitment to Excellence */}
        <div className="bg-white p-8 rounded-xl shadow-lg mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Commitment to Excellence</h2>
          <p className="text-gray-700 mb-4">
            At The Grand Palace Hotel, we believe in providing the highest level of service. Our staff is committed to making your stay unforgettable. 
            We take pride in every detail, from personalized guest services to keeping our facilities in pristine condition. 
            Your satisfaction is our top priority, and we are here to make sure you experience nothing less than perfection.
          </p>
          <p className="text-gray-700">
            Whether you're here for business or leisure, we strive to offer an experience that is second to none. From seamless check-ins to luxury transportation, 
            we are ready to cater to your every need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

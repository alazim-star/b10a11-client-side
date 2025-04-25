import React from 'react';
import SectionTitle from '../sheard/SectionTitle';
import { SlCalender } from "react-icons/sl";
import { IoBedSharp } from "react-icons/io5";

const About = () => {
  return (
    <div className="container mx-auto  ">
      <div className="  text-center">
   
        <SectionTitle  heading="Welcome to" subheading="The Grand Palace"></SectionTitle>
        
        {/* Hotel Overview */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <p className="text-gray-700 mb-4">
            The Grand Palace Hotel is a five-star luxury hotel nestled in the heart of the city. Our state-of-the-art facilities, world-class service, and breathtaking views create an atmosphere of unmatched sophistication. 
            Whether you're attending an important conference, enjoying a relaxing vacation, or celebrating a special occasion, we offer the perfect blend of elegance and comfort.
          </p>
       
        </div>

        {/* Amenities Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img src="https://i.ibb.co.com/rH7mrRg/15-g-signature-premium-family-room-standard.jpg" alt="" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 uppercase">What we really do?</h3>
            <p className="text-gray-600 text-left">
            We offer lavishly designed rooms and suites that blend modern sophistication with classic charm. Every space is crafted to ensure maximum comfort, featuring premium amenities, plush bedding, and breathtaking views.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img src="https://i.ibb.co.com/8r27kv3/Four-Seasons-Hotel-Riyadh-2.jpg" alt="" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 uppercase">Our version</h3>
            <p className="text-gray-600 text-left">
            At The Grand Palace Hotel, we redefine luxury and hospitality by providing an exceptional stay tailored to every guest. Our mission is to create unforgettable experiences, whether you're here for business, leisure, or a special occasion.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <img src="https://i.ibb.co.com/7NdQkhGZ/istockphoto-1257664126-612x612.jpg" alt="" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 uppercase">history of beginning</h3>
            <p className="text-gray-600 text-left">
            Founded by a group of visionary hoteliers, The Grand Palace Hotel was built with the goal of redefining the hospitality industry. The idea was simple yet ambitious: to create a hotel that offers unparalleled luxury and a home away from home for travelers from all around the world.
            </p>
          </div>
        </div>

{/* facilities  */}
<div className="stats shadow mt-10 w-full bg-primary text-white p-4 sm:p-6 md:p-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="stat text-center">
      <div className="stat-figure mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-8 w-8 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      </div>
      <div className="stat-value text-2xl sm:text-3xl">200 k</div>
      <div className="uppercase text-sm sm:text-base">satisfied customer</div>
    </div>

    <div className="stat text-center">
      <div className="stat-figure mx-auto text-5xl">
        <SlCalender />
      </div>
      <div className="stat-value text-2xl sm:text-3xl">20</div>
      <div className="uppercase text-sm sm:text-base">year of experience</div>
    </div>

    <div className="stat text-center">
      <div className="stat-figure mx-auto text-5xl">
        <IoBedSharp />
      </div>
      <div className="stat-value text-2xl sm:text-3xl">100</div>
      <div className="uppercase text-sm sm:text-base">comfortable rooms</div>
    </div>
  </div>
</div>






        {/* our team */}
<div className='mt-10'>
<SectionTitle  subheading="team" heading="meet our" ></SectionTitle>
</div>

<div className='grid lg:grid-cols-4'>
<div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co.com/cSpJQvkw/istockphoto-941785090-612x612.jpg"
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title uppercase">Guest Relations Executive</h2>
    <p className='text-left'>The Guest Relations Executive is a key role in ensuring that guests receive the highest level of service and satisfaction during their stay at the hotel. </p>
   
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co.com/1tYTBFTx/istockphoto-1471856598-612x612.jpg"
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Room Service Attendant</h2>
    <p className='text-left'>A Room Service Attendant is an essential member of the hospitality team, dedicated to providing guests with a seamless and exceptional in-room dining experience.</p>
   
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co.com/GfCy4qk2/46546631-kapal-restaurant-hizmet-tepsi-cloche-ve-a-ef-garson.jpg"
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Head Chef</h2>
    <p className='text-left'>The Head Chef is the culinary leader of a hotel’s kitchen, responsible for overseeing all kitchen operations, creating innovative menus, and ensuring the highest standards of food quality and presentation.</p>
   
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co.com/Tq4r5psg/shutterstock-67102240-1024x683.jpg"
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Housekeeping Associate </h2>
    <p className='text-left'>The Housekeeping Associate plays a vital role in maintaining the cleanliness, comfort, and overall aesthetic of the hotel’s guest rooms</p>
   
  </div>
</div>

</div>

     
{/* accordion  */}
<SectionTitle subheading="Frequently Asked Questions" />
<div className="mt-10 mb-10 mx-4 sm:mx-10 md:mx-20 lg:mx-56">
  <div className="collapse collapse-plus text-white bg-primary border border-gray-300 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl mb-4">
    <input type="radio" name="my-accordion-3" defaultChecked />
    <div className="collapse-title font-semibold text-lg hover:text-primary transition-colors duration-300 ease-in-out">
      How can I book a room at The Grand Palace?
    </div>
    <div className="collapse-content text-sm p-4">
      To book a room, click on the "Book Now" button on the homepage or visit our booking page to choose your preferred room and check availability.
    </div>
  </div>

  <div className="collapse collapse-plus text-white bg-primary border border-gray-300 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl mb-4">
    <input type="radio" name="my-accordion-3" />
    <div className="collapse-title font-semibold text-lg hover:text-primary transition-colors duration-300 ease-in-out">
      What amenities are available at The Grand Palace?
    </div>
    <div className="collapse-content text-sm p-4">
      We offer a wide range of amenities, including luxurious rooms, fine dining, a spa, a swimming pool, a fitness center, and event spaces. Check out our "Amenities" section for more details.
    </div>
  </div>

  <div className="collapse collapse-plus text-white bg-primary border border-gray-300 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl mb-4">
    <input type="radio" name="my-accordion-3" />
    <div className="collapse-title font-semibold text-lg hover:text-primary transition-colors duration-300 ease-in-out">
      What is your cancellation policy?
    </div>
    <div className="collapse-content text-sm p-4">
      Our cancellation policy allows for free cancellation up to 24 hours before check-in. Please review our full cancellation policy on the booking page for additional details.
    </div>
  </div>

  <div className="collapse collapse-plus text-white bg-primary border border-gray-300 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl mb-4">
    <input type="radio" name="my-accordion-3" />
    <div className="collapse-title font-semibold text-lg hover:text-primary transition-colors duration-300 ease-in-out">
      Are pets allowed at The Grand Palace?
    </div>
    <div className="collapse-content text-sm p-4">
      Yes, we welcome pets in certain rooms. Please contact our reception for more information and to check availability for pet-friendly rooms.
    </div>
  </div>

  <div className="collapse collapse-plus text-white bg-primary border border-gray-300 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
    <input type="radio" name="my-accordion-3" />
    <div className="collapse-title font-semibold text-lg hover:text-primary transition-colors duration-300 ease-in-out">
      How can I contact customer support?
    </div>
    <div className="collapse-content text-sm p-4">
      You can reach our customer support team by calling the number listed on our "Contact Us" page or by emailing us at support@grandpalacehotel.com.
    </div>
  </div>
</div>

    </div>
    </div>
  );
};

export default About;

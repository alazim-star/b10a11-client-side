import React from 'react';
import SectionTitle from '../sheard/SectionTitle';

const AskQuestion = () => {
    return (
        <div>
            {/* accordion  */}
<SectionTitle subheading="Frequently Asked Questions" />
<div className=" mx-4 sm:mx-10 md:mx-20 lg:mx-56">
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
      
    );
};

export default AskQuestion;
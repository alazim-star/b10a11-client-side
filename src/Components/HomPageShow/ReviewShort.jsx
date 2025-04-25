import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ReviewShort = () => {
  const [reviews, setReviews] = useState([]); 
  const [error, setError] = useState(null);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('https://b10a11-server-side-gray.vercel.app/reviews'); 
      console.log('Fetched reviews:', response.data);

      if (response.data && response.data.length > 0) {
        const sortedReviews = response.data.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        setReviews(sortedReviews); 
      } else {
        setReviews([]);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setError('Failed to fetch reviews.');
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="container mx-auto p-4 flex justify-center lg:ml-[600px]">
      <div className="w-full ">
        <h2 className="ml-20 text-3xl  my-6">USER <span className='text-[#af9556]'>REVIEWS</span></h2>
        {reviews.length > 0 ? (
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            dynamicHeight={false}
            interval={3000}
            transitionTime={500}
            swipeable={true}
            emulateTouch={true}
            useKeyboardArrows={true}
          >
            {reviews.map((review) => (
              <div key={review._id} className="w-96 bg-white shadow-md rounded-lg border-[#af9556] border-2 p-4  ">
                <p className="text-gray-800 text-lg font-semibold">{review.roomName}</p>
                <p className="text-gray-800 text-sm font-semibold">{review.email}</p>
                <p className="text-gray-600 my-2">{review.comment}</p>
                <p className="text-yellow-500 font-bold">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </p>
                <p className="text-gray-400 text-sm">
                  {new Date(review.timestamp).toLocaleDateString()}
                </p>
              </div>
            ))}
          </Carousel>
        ) : (
          <p className="text-center text-gray-500">No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewShort;

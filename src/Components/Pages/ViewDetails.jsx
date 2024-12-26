import React, { useState, useContext, useEffect } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from './../AuthProvider/AuthProvider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';

const ViewDetails = () => {
  const room = useLoaderData();
  const { user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState('');
  const [averageRating, setAverageRating] = useState(0); // State to store average rating
  const navigate = useNavigate();

  // Fetch reviews when room id is available
  useEffect(() => {
    if (room && room._id) {
      fetch(`https://b10a11-server-side-gray.vercel.app/reviews/${room._id}`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) {
            setReviews(data);
            // Calculate the average rating from reviews
            const totalRating = data.reduce((acc, review) => acc + review.rating, 0);
            setAverageRating(totalRating / data.length || 0); // If no reviews, set to 0
          } else {
            console.error('Invalid response:', data);
          }
        })
        .catch(err => console.error('Error fetching reviews:', err));
    }
  }, [room?._id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      email: user?.email || '',
      bookingDate: selectedDate.toLocaleDateString(),
      pricePerNight: room.pricePerNight,
      roomName: room.roomName,
      photoUrl: room.photoUrl,
    };

    setIsSubmitting(true);

    fetch('https://b10a11-server-side-gray.vercel.app/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsSubmitting(false);
        if (data.insertedId) {
          Swal.fire('Success', 'Room Booked Successfully', 'success');
          setIsModalOpen(false);
          navigate('/myBooking');
        } else {
          Swal.fire('Error', 'Failed to book the room. Try again.', 'error');
        }
      })
      .catch(() => {
        setIsSubmitting(false);
        Swal.fire('Error', 'Something went wrong. Try again later.', 'error');
      });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const reviewData = {
      roomId: room._id,
      username: user?.username || 'Guest',
      email: user?.email || 'Not Provided',
      rating,
      comment,
      roomName: room.roomName, // Add roomName to review data
      timestamp: new Date(),
    };

    fetch('https://b10a11-server-side-gray.vercel.app/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire('Success', 'Review submitted successfully', 'success');
          setReviewModalOpen(false);
          setComment('');
          setRating(0);
          // Optimistically update reviews in the UI
          setReviews((prevReviews) => [...prevReviews, reviewData]);
          // Recalculate the average rating after adding a new review
          const totalRating = [...reviews, reviewData].reduce((acc, review) => acc + review.rating, 0);
          setAverageRating(totalRating / [...reviews, reviewData].length);
        }
      })
      .catch(() => {
        Swal.fire('Error', 'Something went wrong. Try again later.', 'error');
      });
  };

  return (
    <div className="bg-red-50 flex justify-center items-center min-h-screen">
      <div className=" p-6 bg-white rounded-xl shadow-xl flex flex-col space-y-6">
     <div className='flex  justify-between bg-red-50 p-5 rounded-xl'>
    <div>
    <h2 className="text-3xl  font-bold">{room.roomName}</h2>
<div className='flex gap-2'>
      <Rating
                readonly
                initialRating={averageRating}
                emptySymbol={<FaStar className="text-gray-300" />}
                fullSymbol={<FaStar className="text-yellow-500" />}
              />
              <p>Review</p></div>
    </div>
      <p className='text-2xl'><strong>STARTING AT:</strong> ${room.pricePerNight} / night</p>
     </div>
        {/* Room Details Card */}
        <div className="bg-white rounded-xl shadow-md p-6 space-y-4 md:space-y-0 ">
          <img
            src={room.photoUrl}
            alt={room.roomName}
            className="object-cover border-2 border-gray-300 rounded-lg w-full h-[600px]"
          />
          <div className="">
            <div className=" items-center">
             
              {/* Display the dynamic average rating here */}
              
            </div>
            
            <p className="text-gray-600 text-sm">{room.size}</p>
           
            <p><strong>Bed Type:</strong> {room.bedType}</p>
            <p><strong>Max Occupancy:</strong> {room.maxOccupancy}</p>
            <div className="mt-4">
              <p><strong>Description:</strong> {room.description}</p>
            </div>
            <div className="mt-4">
              <strong>Amenities:</strong>
              <ul className="list-disc pl-6">
                {room?.amenities?.map((amenity, index) => (
                  <li key={index} className="text-gray-600">{amenity}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between space-x-4 mt-6">
              <Link to="/allRooms">
                <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700">
                  See All Rooms
                </button>
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#af9556] text-white py-2 px-6 rounded-lg shadow hover:bg-white hover:text-[#af9556]"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">
          <h3 className="text-xl font-semibold mb-4">Reviews</h3>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg shadow-sm mb-4"
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">{review.username}</h4>
                  <p className="text-sm text-gray-500">
                    {new Date(review.timestamp).toLocaleString()}
                  </p>
                </div>
                <p className="text-gray-600 mt-2"><strong>Room:</strong> {review.roomName}</p>
                <p className="text-gray-600 mt-2">{review.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet. Be the first to review this room!</p>
          )}

          <div className="flex justify-end mt-4">
            <button
              onClick={() => setReviewModalOpen(true)}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700"
            >
              Give Review
            </button>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h3 className="text-2xl font-semibold mb-4">Book Room</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label>Email</label>
                <input
                  type="email"
                  value={user?.email || ''}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label>Booking Date</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  className="input input-bordered w-full"
                  dateFormat="MM/dd/yyyy"
                />
              </div>
              <div>
                <label>Price Per Night</label>
                <input
                  type="text"
                  value={`$${room.pricePerNight}`}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white py-2 px-6 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white py-2 px-6 rounded"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Review Modal */}
      {reviewModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96">
            <h3 className="text-2xl font-semibold mb-4">Give a Review</h3>
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label>Rating</label>
                <Rating
                  initialRating={rating}
                  onChange={setRating}
                  emptySymbol={<FaStar className="text-gray-300" />}
                  fullSymbol={<FaStar className="text-yellow-500" />}
                  className="mt-2"
                />
              </div>
              <div>
                <label>Comment</label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Write your review here"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  type="button"
                  onClick={() => setReviewModalOpen(false)}
                  className="bg-gray-500 text-white py-2 px-6 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-6 rounded"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewDetails;

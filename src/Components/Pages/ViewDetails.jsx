import React, { useState, useContext, useEffect } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from './../AuthProvider/AuthProvider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Rating from 'react-rating';

const ViewDetails = () => {
  const room = useLoaderData();
  const { user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  // Fetch reviews on component mount
  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${room._id}`)
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(err => console.error('Error fetching reviews:', err));
  }, [room._id]);

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

    fetch('http://localhost:5000/bookings', {
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
      timestamp: new Date(),
    };

    fetch('http://localhost:5000/reviews', {
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
          fetch(`http://localhost:5000/reviews/${room._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error('Error fetching updated reviews:', err));
        }
      })
      .catch(() => {
        Swal.fire('Error', 'Something went wrong. Try again later.', 'error');
      });
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="max-w-3xl p-6 bg-white rounded-xl shadow-xl flex space-x-6">
        <div className="flex flex-col items-center space-y-4">
          <img
            src={room.photoUrl}
            alt={room.roomName}
            className="object-cover border-2 border-gray-300 rounded-xl"
          />
          <div className="text-center">
            <h2 className="text-2xl font-semibold">{room.roomName}</h2>
            <p className="text-gray-600 text-sm">{room.size}</p>
          </div>
          <div>
            <p><strong>Price:</strong> ${room.pricePerNight} / night</p>
            <p><strong>Bed Type:</strong> {room.bedType}</p>
            <p><strong>Max Occupancy:</strong> {room.maxOccupancy}</p>
          </div>
        </div>

        <div className="flex-grow space-y-4">
          <p><strong>Description:</strong> {room.description}</p>
          <ul>
            <strong>Amenities:</strong>
            {room.amenities.map((amenity, index) => (
              <li key={index}>- {amenity}</li>
            ))}
          </ul>
          <div className="flex justify-end space-x-4">
            <Link to="/allRooms">
              <button className="bg-blue-600 text-white py-2 px-6 rounded shadow hover:bg-blue-700">
                See All Rooms
              </button>
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-600 text-white py-2 px-6 rounded shadow hover:bg-green-700"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>




{/* Reviews Section */}
<div className="mt-8">
        <h3 className="text-xl font-semibold">Reviews</h3>
        <div className="space-y-4 mt-4">
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="border p-4 rounded-md shadow-sm">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">{review.username}</h4>
                  <Rating
                    initialRating={review.rating}
                    readonly
                    fullSymbol="fa fa-star text-yellow-500"
                    emptySymbol="fa fa-star-o text-gray-400"
                  />
                </div>
                <p className="text-gray-600 mt-2">{review.comment}</p>
                <p className="text-sm text-gray-500 mt-2">{new Date(review.timestamp).toLocaleString()}</p>
              </div>
            ))
          ) : (
            <p>No reviews yet. Be the first to review this room!</p>
          )}
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={() => setReviewModalOpen(true)}
            className="bg-blue-600 text-white py-2 px-6 rounded shadow hover:bg-blue-700"
          >
            Give Review
          </button>
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
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 py-2 px-4 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
                >
                  Confirm Booking
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
            <h3 className="text-2xl font-semibold mb-4">Give Review</h3>
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label>Email</label>
                <input
                  type="email"
                  value={user?.email || 'Guest'}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label>Username</label>
                <input
                  type="text"
                  value={user?.username || 'Guest'}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label>Rating</label>
                <Rating
                  initialRating={rating}
                  onChange={setRating}
                  fullSymbol="fa fa-star text-yellow-500"
                  emptySymbol="fa fa-star-o text-gray-400"
                />
              </div>
              <div>
                <label>Comment</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="textarea textarea-bordered w-full"
                  placeholder="Write your review here"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setReviewModalOpen(false)}
                  className="bg-gray-300 py-2 px-4 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
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

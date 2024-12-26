import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");

  // Fetch the bookings for the user
  useEffect(() => {
    // if (user?.email) {
    //   fetch(`https://b10a11-server-side-gray.vercel.app/bookings/${user.email}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setBookings(data);
    //       setFilteredBookings(data);
    //     })
    //     .catch((err) => console.error("Error fetching bookings:", err));
    // }


    axios.get(`https://b10a11-server-side-gray.vercel.app/bookings/${user.email}`,{ withCredentials: true })
    .then(res => {
      setBookings(res.data);          
      
      setFilteredBookings(res.data); 
      
    })
   







  }, [user]);

  // Handle canceling a booking
  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b10a11-server-side-gray.vercel.app/bookings/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your booking has been removed.", "success");
              fetch(`https://b10a11-server-side-gray.vercel.app/bookings/${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                  setBookings(data);
                  setFilteredBookings(data);
                })
                .catch((err) => console.error("Error fetching updated bookings:", err));
            }
          })
          .catch((err) => console.error("Error cancelling booking:", err));
      }
    });
  };

  // Handle updating a booking's date
  const handleUpdateBooking = () => {
    const formattedDate = selectedDate.toLocaleDateString();
    fetch(`https://b10a11-server-side-gray.vercel.app/bookings/${selectedBooking._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ bookingDate: formattedDate }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Booking date updated successfully.", "success");
          setBookings((prev) =>
            prev.map((room) =>
              room._id === selectedBooking._id
                ? { ...room, bookingDate: formattedDate }
                : room
            )
          );
          setFilteredBookings((prev) =>
            prev.map((room) =>
              room._id === selectedBooking._id
                ? { ...room, bookingDate: formattedDate }
                : room
            )
          );
          setIsModalOpen(false);
        }
      })
      .catch((err) => console.error("Error updating booking date:", err));
  };

  // Handle review submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const reviewData = {
      email: user?.email || "No Email Provided",
      roomName: selectedBooking.roomName,
      comment,
      rating,
      timestamp: new Date().toISOString(),
      

    };

    fetch("https://b10a11-server-side-gray.vercel.app/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Success", "Review submitted successfully", "success");
          setReviewModalOpen(false);
          setComment("");
          setRating(null);
        }
      })
      .catch(() => {
        Swal.fire("Error", "Something went wrong. Try again later.", "error");
      });
  };

  // Handle search functionality
  const handleSearch = () => {
    const filtered = bookings.filter((room) =>
      room.roomName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBookings(filtered);
  };

  // Handle reset functionality
  const handleReset = () => {
    setFilteredBookings(bookings);
    setSearchTerm("");
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="lg:text-2xl font-semibold">My Room Bookings</h2>
        <div className="flex gap-2">
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Search by room name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn bg-green-600 text-white" onClick={handleSearch}>
            Search
          </button>
          <button className="btn bg-green-600 text-white" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>

      {filteredBookings.length > 0 ? (
        <table className="table-auto w-full bg-white shadow-lg rounded-md">
          <thead>
            <tr className="text-left">
              <th className="p-4">Room Details</th>
              <th className="p-4">Price Per Night</th>
              <th className="p-4">Booking Date</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((room) => (
              <tr key={room._id} className="border-b">
                <td className="p-4 flex items-center gap-4">
                  <img
                    src={room.photoUrl}
                    alt="Room"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="font-medium">{room.roomName}</p>
                  </div>
                </td>
                <td className="p-4">${room.pricePerNight}</td>
                <td className="p-4">{room.bookingDate}</td>
                <td className="p-4">
                  <button
                    onClick={() => handleCancel(room._id)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setSelectedBooking(room);
                      setSelectedDate(new Date(room.bookingDate));
                      setIsModalOpen(true);
                    }}
                    className="bg-blue-500 text-white py-1 px-3 ml-2 rounded hover:bg-blue-600"
                  >
                    Update Date
                  </button>
                  <button
                    onClick={() => {
                      setSelectedBooking(room);
                      setReviewModalOpen(true);
                    }}
                    className="bg-green-500 text-white py-1 px-3 ml-2 rounded hover:bg-green-600"
                  >
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600">No bookings found for your search.</p>
      )}

      {/* Modal to update booking */}
      {isModalOpen && selectedBooking && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-semibold mb-4">Update Booking</h3>
            <form className="space-y-4">
              <div>
                <label>Booking Date</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
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
                  type="button"
                  onClick={handleUpdateBooking}
                  className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
                >
                  Update Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Review Modal */}
      {reviewModalOpen && selectedBooking && user && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-semibold mb-4">Give a Review</h3>
            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label>User Email</label>
                <input
                  type="email"
                  value={user?.email}
                  disabled
                  className="input input-bordered w-full bg-gray-200"
                />
              </div>
              <div>
                <label>Rating</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label>Comment</label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Write your review here"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
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
                  className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700"
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

export default MyBooking;

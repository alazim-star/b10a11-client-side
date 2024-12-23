import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/bookings/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setBookings(data);
          setFilteredBookings(data);
        })
        .catch((err) => console.error("Error fetching bookings:", err));
    }
  }, [user]);

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
        fetch(`http://localhost:5000/bookings/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your booking has been removed.", "success");
              // Refetch the bookings data after deleting
              fetch(`http://localhost:5000/bookings/${user.email}`)
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

  const updateBookingState = (id, updatedFields = {}) => {
    setBookings((prev) =>
      prev.map((room) =>
        room._id === id ? { ...room, ...updatedFields } : room
      )
    );
    setFilteredBookings((prev) =>
      prev.map((room) =>
        room._id === id ? { ...room, ...updatedFields } : room
      )
    );
  };

  const handleSearch = () => {
    const filtered = bookings.filter((room) =>
      room.roomName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBookings(filtered);
  };

  const handleReset = () => {
    setFilteredBookings(bookings);
    setSearchTerm("");
  };

  const handleUpdateBooking = () => {
    const formattedDate = selectedDate.toLocaleDateString();
    fetch(`http://localhost:5000/bookings/${selectedBooking._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ bookingDate: formattedDate }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Booking date updated successfully.", "success");
          updateBookingState(selectedBooking._id, { bookingDate: formattedDate });
          setIsModalOpen(false);
        }
      })
      .catch((err) => console.error("Error updating booking date:", err));
  };

  const handleStatusUpdate = (e, id) => {
    const status = e.target.value;
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Booking status updated successfully.", "success");
          updateBookingState(id, { status });
        }
      })
      .catch((err) => console.error("Error updating status:", err));
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
              <th className="p-4">Room Image</th>
              <th className="p-4">Room Name</th>
              <th className="p-4">Price Per Night</th>
              <th className="p-4">Booking Date</th>
              <th className="p-4">Actions</th>
              <th className="p-4">Update Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((room) => (
              <tr key={room._id} className="border-b">
                <td className="p-4">
                  <img
                    src={room.photoUrl}
                    alt="Room"
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="p-4">{room.roomName}</td>
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
                    Update
                  </button>
                </td>
                <td className="p-4">
                  <select
                    onChange={(e) => handleStatusUpdate(e, room._id)}
                    defaultValue={room.status || "Change Status"}
                    className="select select-accent w-full max-w-xs"
                  >
                    <option disabled>Change Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600">No bookings found for your search.</p>
      )}

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
    </div>
  );
};

export default MyBooking;

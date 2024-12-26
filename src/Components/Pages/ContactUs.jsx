import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Form data to be sent to the backend
    const contactData = { name, email, message };

    fetch('https://b10a11-server-side-gray.vercel.app/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactData),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsSubmitting(false);
        if (data.success) {
          Swal.fire('Thank you!', 'Your message has been sent successfully!', 'success');
          setName('');
          setEmail('');
          setMessage('');
        } else {
          Swal.fire('Error', 'Something went wrong. Please try again later.', 'error');
        }
      })
      .catch(() => {
        setIsSubmitting(false);
        Swal.fire('Error', 'Something went wrong. Please try again later.', 'error');
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to get in touch.
        </p>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="textarea textarea-bordered w-full"
                placeholder="Write your message here"
                required
              />
            </div>

            <div className="flex justify-end mt-4 space-x-2">
              <button
                type="button"
                className="bg-gray-500 text-white py-2 px-6 rounded"
                onClick={() => {
                  setName('');
                  setEmail('');
                  setMessage('');
                }}
              >
                Clear
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="mt-12 space-y-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Visit or Call Us</h2>
          <p className="text-lg text-gray-600">
            Address: 123 Grand Palace Avenue, City, Country
          </p>
          <p className="text-lg text-gray-600">
            Phone: +1 (800) 123-4567
          </p>
          <p className="text-lg text-gray-600">
            Email: contact@grandpalacehotel.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

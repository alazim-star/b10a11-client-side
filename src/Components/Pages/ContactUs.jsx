import React, { useState } from 'react';
import Swal from 'sweetalert2';
import SectionTitle from './../sheard/SectionTitle';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
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
    <div className="relative h-screen  items-center  bg-cover bg-center" style={{ backgroundImage: "url('https://i.ibb.co.com/whb3Z3hX/65272.jpg')" }}>
      {/* Overlay */}
      <div>
<h1 className="text-5xl text-primary  text-center drop-shadow-lg ">Get in Touch</h1>
        <p className="text-white text-lg text-center mb-8">
          Have questions? Reach out to us and we’ll get back to you shortly.
        </p>
    
</div>

      <div className=" absolute inset-0 bg-opacity-50"></div>

      {/* Contact Form */}
      <div className="container mx-auto w-[500px] relative max-w-4xl bg-white bg-opacity-10 p-10 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/30">
       

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white font-medium">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full bg-white/30 text-white placeholder-gray-200 focus:ring-2 focus:ring-yellow-300"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-white font-medium">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full bg-white/30 text-white placeholder-gray-200 focus:ring-2 focus:ring-yellow-300"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-white font-medium">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="textarea textarea-bordered w-full bg-white/30 text-white placeholder-gray-200 focus:ring-2 focus:ring-yellow-300"
              placeholder="Write your message..."
              required
            />
          </div>

          <div className="flex justify-center mt-4 space-x-4">
            <button
              type="button"
              className="bg-gray-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-600"
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
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 px-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:from-yellow-600 hover:to-orange-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
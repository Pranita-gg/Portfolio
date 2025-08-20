import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div data-aos= "fade-up" data-aos-duration="10000" className="w-full max-w-lg bg-white shadow-lg rounded-3xl p-8 m-20">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Contact Us
        </h2>
        
        {/* Contact Form */}
        <form
          action="#"
          method="POST"
          className="space-y-5"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="6"
              required
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

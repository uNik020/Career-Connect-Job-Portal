import React from "react";

const Contact = () => {
  return (
    <div className="text-black py-12 px-6 md:px-12 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#512b95] mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We're here to help! Drop us a message and we'll get back to you soon.
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name Input */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-md bg-gray-100 text-[#512b95] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#512b95]"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-100 text-[#512b95] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#512b95]"
              />
            </div>
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              placeholder="Write your message here"
              className="w-full px-4 py-2 rounded-md bg-gray-100 text-[#512b95] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#512b95]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 bg-[#512b95] text-white rounded-md hover:bg-[#4c2a85] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

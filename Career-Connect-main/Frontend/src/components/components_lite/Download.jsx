import React from "react";

const Download = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white p-6 max-w-6xl mx-auto">
      {/* Left Text Section */}
      <div className="text-left">
        <h1 className="text-3xl font-bold text-[#512b95] mb-4">
          Download the App
        </h1>
        <p className="text-gray-700 mb-4">
          Discover opportunities and connect with your dream career through our
          Career Connect app. Click the button below to get started!
        </p>
        <button className="bg-[#512b95] hover:bg-[#522b959a] text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300">
          Download Now
        </button>
      </div>

      {/* Right Image Section */}
      <div className="flex justify-center">
        <img
          src="551.jpg"
          alt="Download the App"
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default Download;

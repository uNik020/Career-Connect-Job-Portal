import React from "react";

const TopRecriters = () => {
  return (
    <div className="w-full">
      <h2 className="text-center text-xl font-bold mb-4">Top Recruiters</h2>
      <div className="overflow-hidden relative">
        {/* Scrolling container */}
        <div
          className="flex"
          style={{
            animation: "scroll 20s linear infinite",
          }}
        >
          {/* Add each recruiter as an item */}
          {[
            "google.png",
            "amazon.png",
            "microsoft.png",
            "nasa.jpg",
            "wipro.png",
            "git.png",
            "tcs.png",
            "infosys.png",
          ].map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center w-40 h-40 mx-4"
            >
              <img
                src={src}
                alt={`Recruiter ${index + 1}`}
                className="w-32 h-32 object-contain"
              />
            </div>
          ))}

          {/* Duplicate the list for infinite scrolling */}
          {[
            "google.png",
            "amazon.png",
            "microsoft.png",
            "nasa.jpg",
            "wipro.png",
            "git.png",
            "tcs.png",
            "infosys.png",
          ].map((src, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 flex justify-center items-center w-40 h-40 mx-4"
            >
              <img
                src={src}
                alt={`Recruiter Duplicate ${index + 1}`}
                className="w-32 h-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Inline CSS for the animation */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .scroll-container {
            display: flex;
            animation: scroll 20s linear infinite;
            width: 200%; /* Ensures seamless looping */
          }
        `}
      </style>
    </div>
  );
};

export default TopRecriters;

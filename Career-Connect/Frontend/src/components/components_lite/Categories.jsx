import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";

const categories = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "MERN Developer",
  "Data Scientist",
  "DevOps Engineer",
  "Machine Learning Engineer",
  "AI Engineer",
  "Cybersecurity Engineer",
  "Product Manager",
  "UX/UI Designer",
  "Graphics Engineer",
  "Graphics Designer",
  "Video Editor",
];

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="py-10 bg-white">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">Browse Categories</h1>
        <p className="text-gray-500 mt-1">Explore our extensive job market</p>
      </div>

      {/* Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-4 whitespace-nowrap animate-scroll">
          {[...categories, ...categories].map((category, index) => (
            <span
              key={index}
              onClick={() => searchJobHandler(category)}
              className="text-xs sm:text-sm text-[#6B3AC2] bg-purple-100 
                         font-semibold px-4 py-2 rounded-lg shadow-sm 
                         transition-colors duration-300 cursor-pointer 
                         hover:bg-purple-200"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(-100%);
            }
          }

          .animate-scroll {
            display: flex;
            animation: scroll 10s linear infinite;
          }

          /* Pause animation on hover */
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
};

export default Categories;
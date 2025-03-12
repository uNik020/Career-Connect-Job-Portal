import { Button } from "@headlessui/react";
import { Search } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import VariableProximity from "./VariableProximity"; // Ensure to import it correctly
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

// Mock function to simulate fetching job suggestions from a database/API
const fetchJobSuggestions = async (query) => {
  // Simulate an API call with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockData = [
        "Software Engineer",
        "Product Manager",
        "Data Scientist",
        "UX Designer",
        "DevOps Engineer",
        "Marketing Specialist",
        "Financial Analyst",
      ];
      const filteredSuggestions = mockData.filter((job) =>
        job.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filteredSuggestions);
    }, 300); // Simulate network delay
  });
};

function Header() {
  const containerRef = useRef(null);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim()) {
      setIsLoading(true);
      fetchJobSuggestions(query).then((data) => {
        setSuggestions(data);
        setIsLoading(false);
      });
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const searchJobHandler = () => {
    if (query.trim()) {
      dispatch(setSearchedQuery(query));
      navigate("/browse");
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    dispatch(setSearchedQuery(suggestion));
    navigate("/browse");
  };

  return (
    <div className="py-10 px-4 flex flex-wrap justify-center items-center bg-white">
      <div className="lg:w-7/10 md:w-3/5 w-full lg:pl-4 md:pl-2 pl-0">
        <div className="text-center flex flex-col gap-5 my-10">
          {/* Top Label */}
          <span className="mx-auto flex gap-2 items-center px-4 py-2 rounded-full bg-gray-100 text-[#512b95] font-medium shadow-sm">
            <HiOutlineBuildingOffice className="h-5 w-5" />
            No.1 Job Hunt Website
          </span>

          {/* Headings with Variable Proximity effect */}
          <div ref={containerRef} style={{ position: "relative" }}>
            <VariableProximity
              label={"Search, Apply & "}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
              className="text-4xl md:text-5xl font-bold"
            />
            <VariableProximity
              label={"Get Your "}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
              className="text-4xl md:text-5xl font-bold"
            />
            <VariableProximity
              label={"Dream Job "}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
              className="text-[#512b95] text-4xl md:text-5xl font-bold"
            />
          </div>

          {/* Description */}
          <p className="text-gray-600 md:text-lg leading-relaxed">
            Start your hunt for the best, life-changing career opportunities
            from here in your
            <br /> selected areas conveniently and get hired quickly.
          </p>

          {/* Search Bar */}
          <div className="relative flex w-full max-w-md shadow-md border border-gray-200 rounded-full items-center gap-4 mx-auto p-1 bg-white hover:shadow-lg transition-all duration-300 ease-in-out">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find your jobs here"
              className="w-full p-2 rounded-l-full outline-none placeholder-gray-400 transition-all duration-200"
              aria-label="Job search input"
            />
            <Button
              type="button"
              onClick={searchJobHandler}
              className="bg-[#512b95] text-white hover:bg-[#3a1f6d] focus:ring-2 focus:ring-[#512b95] rounded-full p-3 transition-all duration-200"
              aria-label="Search jobs"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Job Suggestions Dropdown */}
            {suggestions.length > 0 && (
              <div className="absolute top-12 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="p-3 hover:bg-gray-50 cursor-pointer transition-all duration-200 text-gray-700"
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}

            {/* Loading State */}
            {isLoading && (
              <div className="absolute top-12 left-0 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 p-3">
                <p className="text-gray-500">Loading suggestions...</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="lg:w-3/10 md:w-2/5 w-full lg:pr-4 md:pr-2 pr-0">
        <img
          src="hero.png"
          alt="hero_img"
          className="w-full h-full object-cover object-center "
        />
      </div>
    </div>
  );
}

export default Header;
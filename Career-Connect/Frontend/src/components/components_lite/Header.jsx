import { Button } from "@headlessui/react";
import { Search, Briefcase, Users, Clock, Award } from "lucide-react";
import React, { useState, useEffect } from "react";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

// Mock API call for suggestions
const fetchJobSuggestions = async (query) => {
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
      resolve(
        mockData.filter((job) =>
          job.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, 300);
  });
};

function Header() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim()) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        fetchJobSuggestions(query).then((data) => {
          setSuggestions(data);
          setIsLoading(false);
        });
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(setSearchedQuery(query));
      navigate("/browse");
    }
  };

  const stats = [
    { icon: Briefcase, value: "250K+", label: "Live Jobs" },
    { icon: Users, value: "50K+", label: "Companies" },
    { icon: Clock, value: "Fast", label: "Hiring Process" },
    { icon: Award, value: "98%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#512b95]/5 to-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 w-full space-y-6">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <HiOutlineBuildingOffice className="h-5 w-5 text-[#512b95]" />
              <span className="text-sm sm:text-base font-medium text-gray-700">
                Trusted by 15,000+ Companies
              </span>
            </div>

            {/* Headings */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Find Your Next <br className="hidden sm:block" />
              <span className="text-[#512b95]">Dream Job</span> Here
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600">
              Join thousands of professionals who found their perfect career
              match through our platform. Get matched with roles that align with
              your skills and ambitions.
            </p>

            {/* Search Section */}
            <div className="relative w-full max-w-2xl">
              {/* Search Section */}
              <div className="relative w-full max-w-2xl mx-auto px-4">
  <div className="flex items-center bg-white rounded-xl shadow-sm border border-gray-200 p-1">
    <div className="flex-1 relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Job title, keywords, or company"
        className="w-full pl-12 pr-4 py-3 rounded-lg outline-none placeholder-gray-400 border-none"
      />
    </div>
    <Button
      onClick={handleSearch}
      className="ml-2 px-6 py-3 bg-[#512b95] text-white rounded-lg hover:bg-[#3a1f6d] transition-colors font-medium"
    >
      Search Jobs
    </Button>
  </div>
</div>

              {/* Suggestions Dropdown */}
              {(suggestions.length > 0 || isLoading) && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  {isLoading ? (
                    <div className="p-4 text-gray-500 text-sm">
                      Loading suggestions...
                    </div>
                  ) : (
                    suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => setQuery(suggestion)}
                        className="w-full p-4 text-left hover:bg-gray-50 text-sm sm:text-base border-b last:border-0"
                      >
                        {suggestion}
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-[#512b95] mb-2" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {stat.value}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <div className="relative">
              <img
                src="/hero.png"
                alt="Career opportunities"
                className="w-full h-auto rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-3 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        src={`https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D`}
                        className="h-8 w-8 rounded-full border-2 border-white"
                        alt="User"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      2M+ Candidates Hired
                    </p>
                    <p className="text-xs text-gray-500">Join our community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Companies */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-gray-200">
          <h3 className="text-center text-sm sm:text-base text-gray-500 mb-6">
            Trusted by leading companies
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 opacity-75">
            {["Google", "Microsoft", "Apple", "Amazon", "Netflix"].map(
              (company) => (
                <img
                  key={company}
                  src={`wipro.png`}
                  alt={company}
                  className="h-6 sm:h-8 grayscale hover:grayscale-0 transition-all"
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

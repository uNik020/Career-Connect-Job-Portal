import React from "react";
import Navbar from "./Navbar";
import Filtercard from "./Filtercard";
import Job from "./Job";
import Footer from "./Footer";

const jobsArray = [1, 2,3,4,5,6,,7,8,9,10,11,12];
const Jobs = () => {
  return (
    <>
      <div>
  <Navbar />
  <div className="max-w-8xl mx-auto mt-5 px-4">
  <div className="flex flex-col lg:flex-row gap-6">
    
    {/* Sidebar Filter Section */}
    <div className="lg:w-1/4 w-full bg-white shadow-md rounded-lg p-6 h-fit mb-6 lg:mb-0">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <Filtercard />
    </div>

    {/* Job List Section */}
    <div className="flex-1">
      {jobsArray.length <= 0 ? (
        <p className="text-center text-gray-500 text-lg mt-10">No jobs available</p>
      ) : (
        <div className="h-[88vh] overflow-y-auto pb-5 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <h2 className="text-2xl font-bold mb-6">Job Listings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobsArray.map((job, index) => (
              <Job key={index} job={job} />
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
</div>
</div>
<Footer/>
    </>
  );
};

export default Jobs;

import React from "react";
import Navbar from "./Navbar";
import Job1 from "./Job1";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Browse = () => {
  return (
    <div>
    <Navbar />
    <div className="max-w-7xl mx-auto my-10 p-2 ">
      <h1 className="font-bold text-xl my-10">Search Results {randomJobs.length}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {randomJobs.map((item, index) => {
          return <Job1 key={index} job={item} />;
        })}
      </div>
    </div>
  </div>
  );
};

export default Browse;
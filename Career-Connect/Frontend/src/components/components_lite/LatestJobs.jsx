import React from "react";
import JobCards from "./JobCards";
const randomjobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function LatestJobs() {
  return (
    <>
      <div className="max-w-7xl mx-auto my-20 p-5">
        <h2 className="text-4xl font-bold text-center">
          <span className="text-[#6A38C2]">Latest & Top </span> Jobs Openings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-5">
          {/* job cards */}
          {randomjobs.slice(0, 6).map((job, index) => (
            <JobCards key={index}></JobCards>
          ))}
        </div>
      </div>
    </>
  );
}

export default LatestJobs;

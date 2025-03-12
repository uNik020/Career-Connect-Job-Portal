import React from "react";
import JobCards from "./JobCards";
import { useSelector } from "react-redux";
import useGetAllJobs from "@/hooks/useGetAllJobs"; // Import the hook
import { useNavigate } from "react-router-dom";

const LatestJobs = () => {
  const allJobs = useSelector((state) => state.jobs?.allJobs || []);
  const { loading, error } = useGetAllJobs(); // Call the hook here
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto my-20">
      <h2 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top </span>Job Openings
      </h2>

      {/* Handle Loading and Error */}
      {loading && <span>Loading...</span>}
      {error && <span>Error: {error}</span>}

      {/* Job Cards */}
      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs.length === 0 && !loading ? (
          <span>No Job Available</span>
        ) : (
          allJobs
            .slice(0, 6)
            .map((job) =>
              job?._id ? (
                <JobCards key={job._id} job={job} />
              ) : (
                <span key={Math.random()}>Invalid Job Data</span>
              )
            )
        )}
      </div>
    </div>
  );
};

export default LatestJobs;

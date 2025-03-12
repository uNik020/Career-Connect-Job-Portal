import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Filtercard from "./Filtercard";
import Job1 from "./Job1";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { use } from "react";
import { motion  } from "framer-motion";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.jobs); //jobs instead of job
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    // If no search query is provided, reset to all jobs
    //     if (searchedQuery)
    if (!searchedQuery || searchedQuery.trim() === "") {
      setFilterJobs(allJobs);
      return;
    }

    // Filter based on the searched query across various fields (title, description, etc.)
    const filteredJobs = allJobs.filter((jobs) => {
      const query = searchedQuery.toLowerCase();
      return (
        jobs.title?.toLowerCase().includes(query) ||
        jobs.description?.toLowerCase().includes(query) ||
        jobs.location?.toLowerCase().includes(query) ||
        jobs.experience?.toLowerCase().includes(query) ||
        jobs.salary?.toLowerCase().includes(query)
      );
    });

    setFilterJobs(filteredJobs);
  }, [allJobs, searchedQuery]);

   return (
    <>
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-1/5">
            <Filtercard />
          </div>

          {filterJobs.length <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-2 gap-4">
                {filterJobs.map((jobs) => (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }} 
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.4 }}
                    key={jobs.id}
                  >
                    <Job1 job={jobs} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Jobs;

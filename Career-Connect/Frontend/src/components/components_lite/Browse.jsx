import React, { useEffect, useState, useCallback } from "react";
import Navbar from "./Navbar";
import Job1 from "./Job1";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import debounce from "lodash/debounce"; // Corrected import
import Footer from "./Footer";

const Browse = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(9);
  const [localSearch, setLocalSearch] = useState("");
  const { allJobs, totalJobs, loading, error, searchedQuery } = useSelector((store) => store.jobs);
  const dispatch = useDispatch();

  // Debounce setup
  const debouncedSearch = useCallback(
    debounce((query) => {
      dispatch(setSearchedQuery(query));
      setPage(1);
    }, 500),
    [dispatch]
  );

  useGetAllJobs(page, limit, searchedQuery);

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
      setPage(1);
    };
  }, [dispatch]);

  const handleSearchChange = (e) => {
    setLocalSearch(e.target.value);
    debouncedSearch(e.target.value);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search jobs by title, location, or keywords..."
              value={localSearch}
              onChange={handleSearchChange}
              className="pl-12 pr-6 py-6 rounded-full border-gray-200 focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            {loading && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
              </div>
            )}
          </div>
        </div>

        {/* Results Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
            {totalJobs > 0 
              ? `${totalJobs} ${totalJobs === 1 ? 'Job' : 'Jobs'} Found`
              : "No Jobs Found"}
          </h1>
          {totalJobs > 0 && (
            <span className="text-gray-500 text-sm">
              Showing {Math.min(page * limit, totalJobs)} results
            </span>
          )}
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && page === 1 ? (
            Array.from({ length: limit }).map((_, i) => (
              <Skeleton key={i} className="h-48 rounded-xl bg-gray-50" />
            ))
          ) : (
            allJobs.map((job) => (
              <Job1 key={job._id} job={job} />
            ))
          )}
        </div>

        {/* Load More Button */}
        {!loading && allJobs.length < totalJobs && (
          <div className="mt-12 flex justify-center">
            <Button 
              onClick={handleLoadMore}
              disabled={loading}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all"
            >
              {loading ? 'Loading...' : 'Load More Jobs'}
            </Button>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Browse;
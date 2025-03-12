import React, { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useParams } from "react-router-dom";
import { JOB_API_ENDPOINT, APPLICATION_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSingleJob } from "@/redux/jobSlice";
import { toast } from "sonner";
import Navbar from "./Navbar";

const Description = () => {
  const params = useParams();
  const jobId = params.id;

  const { singleJob } = useSelector((store) => store.jobs); //jobs instead of job
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useSelector((store) => store.auth);

  const isIntiallyApplied =
    singleJob?.application?.some(
      (application) => application.applicant === user?._id
    ) || false;
  const [isApplied, setIsApplied] = useState(isIntiallyApplied);

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_ENDPOINT}/apply/${jobId}`,
        { withCredentials: true }
      );
      if (res.data.success) {
        setIsApplied(true);
        const updateSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updateSingleJob));
        //console.log(res.data);
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchSingleJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/get/${jobId}`, {
          withCredentials: true,
        });
        console.log("API Response:", res.data);
        if (res.data.status) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            res.data.job.applications.some(
              (application) => application.applicant === user?._id
            )
          );
        } else {
          setError("Failed to fetch jobs.");
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        setError(error.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchSingleJobs();
  }, [jobId, dispatch, user?._id]);
  //console.log("single jobs", singleJob);

  if (!singleJob) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="font-bold text-2xl text-gray-900">{singleJob.title}</h1>
            {/* Tags Section */}
            <div className="flex items-center flex-wrap gap-2 mt-2">
              <Badge
                variant="outline"
                className="text-blue-600 bg-blue-100 px-3 py-1 rounded-full font-medium"
              >
                {singleJob.position} Positions
              </Badge>
              <Badge
                variant="outline"
                className="text-green-600 bg-green-100 px-3 py-1 rounded-full font-medium"
              >
                {singleJob.salary} LPA
              </Badge>
              <Badge
                variant="outline"
                className="text-purple-600 bg-purple-100 px-3 py-1 rounded-full font-medium"
              >
                {singleJob.location}
              </Badge>
              <Badge
                variant="outline"
                className="text-orange-600 bg-orange-100 px-3 py-1 rounded-full font-medium"
              >
                {singleJob?.jobType}
              </Badge>
            </div>
          </div>

          <div>
            <Button
              disabled={isApplied}
              onClick={isApplied ? null : applyJobHandler}
              className={`rounded-lg px-6 py-2 font-semibold ${
                isApplied
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-purple-600 text-white hover:bg-purple-500"
              }`}
            >
              {isApplied ? "Already Applied" : "Apply Now"}
            </Button>
          </div>
        </div>

        <div className="my-6">
          <h1 className="text-xl font-bold border-b pb-2 text-gray-800">
          {singleJob.description}
          </h1>
          <div className="mt-4 text-gray-700 space-y-3">
            <h1>
              <span className="font-semibold text-gray-900">Role:</span>{" "}
              {singleJob.position} Positions
            </h1>
            <h1>
              <span className="font-semibold text-gray-900">Location:</span>{" "}
              {singleJob.location}
            </h1>
            <h1>
              <span className="font-semibold text-gray-900">Salary:</span>{" "}
              {singleJob.salary} LPA
            </h1>
            <h1>
              <span className="font-semibold text-gray-900">Experience:</span>{" "}
              {singleJob.experienceLevel} years
            </h1>
            <h1>
              <span className="font-semibold text-gray-900">Job Type:</span>{" "}
              {singleJob.jobType}
            </h1>
            <h1>
              <span className="font-semibold text-gray-900">
                Total Applicants:
              </span>{" "}
              {singleJob?.applications?.length || 0} 
            </h1>
            <h1>
              <span className="font-semibold text-gray-900">
                Post Date:
              </span>{" "}
              {singleJob?.createdAt?.split("T")[0]}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
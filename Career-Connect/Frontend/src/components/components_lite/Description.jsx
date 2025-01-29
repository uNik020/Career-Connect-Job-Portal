import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Navbar from "./Navbar";

const Description = () => {
  const isApplied = true;
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg">
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="font-bold text-2xl text-gray-900">Title</h1>
        {/* Tags Section */}
        <div className="flex items-center flex-wrap gap-2 mt-2">
          <Badge variant="outline" className="text-blue-600 bg-blue-100 px-3 py-1 rounded-full font-medium">
            10 Positions
          </Badge>
          <Badge variant="outline" className="text-green-600 bg-green-100 px-3 py-1 rounded-full font-medium">
            20 LPA
          </Badge>
          <Badge variant="outline" className="text-purple-600 bg-purple-100 px-3 py-1 rounded-full font-medium">
            Remote
          </Badge>
          <Badge variant="outline" className="text-orange-600 bg-orange-100 px-3 py-1 rounded-full font-medium">
            Full Time
          </Badge>
        </div>
      </div>
  
      <div>
        <Button
          disabled={isApplied}
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
        Job Description
      </h1>
      <div className="mt-4 text-gray-700 space-y-3">
        <h1>
          <span className="font-semibold text-gray-900">Role:</span>{" "}
          Software Engineer
        </h1>
        <h1>
          <span className="font-semibold text-gray-900">Location:</span>{" "}
          On-site
        </h1>
        <h1>
          <span className="font-semibold text-gray-900">Salary:</span>{" "}
          ₹25,000 - ₹45,000/-
        </h1>
        <h1>
          <span className="font-semibold text-gray-900">Experience:</span>{" "}
          No Experience Needed
        </h1>
        <h1>
          <span className="font-semibold text-gray-900">Job Type:</span>{" "}
          Full-Time
        </h1>
        <h1>
          <span className="font-semibold text-gray-900">About the Company:</span>{" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h1>
        <h1>
          <span className="font-semibold text-gray-900">Total Applicants:</span>{" "}
          10
        </h1>
      </div>
    </div>
  </div>
  </>
  );
};

export default Description;

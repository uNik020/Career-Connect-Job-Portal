import { Badge } from "../ui/badge";
import React from "react";

const JobCards = () => {
  return (
    <div className="p-6 bg-white border rounded-lg shadow-md space-y-6 max-w-xl mx-auto cursor-pointer transform transition-all duration-300  hover:scale-105 hover:shadow-lg hover:rotate-3 hover:border-gray-300 hover:shadow-[#6b38c278]">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Company Name</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
        <Badge variant="secondary" className="text-sm text-gray-800">
          Featured
        </Badge>
      </div>

      {/* Job Title */}
      <div>
        <h2 className="text-2xl font-semibold text-[#6A38C2]">Job Title</h2>
      </div>

      {/* Job Description */}
      <div>
        <p className="text-sm text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          assumenda, veniam voluptate
        </p>
      </div>

      {/* Tags Section */}
      <div className="flex items-center flex-wrap gap-2 mt-2">
        <Badge
          variant="outline"
          className="text-blue-600 bg-blue-100 px-3 py-1 rounded-full font-medium"
        >
          10 Positions
        </Badge>
        <Badge
          variant="outline"
          className="text-green-600 bg-green-100 px-3 py-1 rounded-full font-medium"
        >
          20 LPA
        </Badge>
        <Badge
          variant="outline"
          className="text-purple-600 bg-purple-100 px-3 py-1 rounded-full font-medium"
        >
          Remote
        </Badge>
        <Badge
          variant="outline"
          className="text-orange-600 bg-orange-100 px-3 py-1 rounded-full font-medium"
        >
          Full Time
        </Badge>
      </div>
    </div>
  );
};

export default JobCards;

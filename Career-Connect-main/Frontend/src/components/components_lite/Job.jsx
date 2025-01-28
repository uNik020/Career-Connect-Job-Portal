import React from "react";
import { Button } from "../ui/button"; // Assuming the Button component is styled using shad cn
import { BookMarkedIcon } from "lucide-react"; // For the save icon
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobId = "jaimin"; // Replace with dynamic job ID when available

  return (
    <div className="p-6 bg-white border rounded-lg shadow-md space-y-6 max-w-xl mx-auto cursor-pointer transform transition-transform duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg hover:border-gray-300 hover:shadow-[#6b38c278]">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Avatar className="w-10 h-10">
            <AvatarImage
              className="transition-transform transform hover:rotate-12"
              src="logo.png"
              alt="Company Icon"
            />
          </Avatar>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Company Name</h1>
            <p className="text-sm text-gray-600">India</p>
          </div>
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
          assumenda, veniam voluptate.
        </p>
      </div>

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

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-6">
        <Button
          onClick={() => navigate(`/description/${jobId}`)}
          variant="outline"
          className="shad-cn btn-primary bg-[#6A38C2] text-white hover:bg-[#5f2db7]"
        >
          Details
        </Button>

        <Button
          variant="outline"
          className="shad-cn btn-outline bg-[#6A38C2] text-white hover:bg-[#5f2db7]"
        >
          <BookMarkedIcon className="mr-2" /> Save for Later
        </Button>
      </div>
    </div>
  );
};

export default Job;

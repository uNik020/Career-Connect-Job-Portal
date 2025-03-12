import React from "react";
import { Button } from "../ui/button";
import { Bookmark, BookMarked } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const Job1 = ({ job }) => {
  const {
    company,
    title,
    description,
    position,
    salary,
    location,
    jobType,
    _id,
  } = job;

  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const navigate = useNavigate();

  const daysAgo = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const timeDiff = new Date() - createdAt;
    return Math.floor(timeDiff / (86400000)); // 86400000 ms in a day
  };

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={company?.logo} alt={company?.name} />
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{company?.name}</h3>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-blue-600 rounded-full"
          onClick={() => setIsBookmarked(!isBookmarked)}
        >
          {isBookmarked ? <BookMarked className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
        </Button>
      </div>

      {/* Job Details */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 line-clamp-3 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="text-blue-600 bg-blue-50">
            {position} Openings
          </Badge>
          <Badge variant="outline" className="text-emerald-600 bg-emerald-50">
            ₹{salary} LPA
          </Badge>
          <Badge variant="outline" className="text-purple-600 bg-purple-50">
            {jobType}
          </Badge>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-gray-100 pt-4">
        <div className="text-sm text-gray-500">
          Posted {daysAgo(job?.createdAt) === 0 ? "today" : `${daysAgo(job?.createdAt)} days ago`}
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <Button
            variant="outline"
            className="w-full sm:w-auto px-6 border-gray-300 hover:border-gray-400"
            onClick={() => navigate(`/description/${_id}`)}
          >
            View Details
          </Button>
          <Button
            className="w-full sm:w-auto px-6 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Job1;
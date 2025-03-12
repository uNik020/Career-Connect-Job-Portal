import React, { useState } from "react";
import Navbar from "./Navbar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Contact, Mail, Pen, Download } from "lucide-react";
import { Badge } from "../ui/badge";
import AppliedJob from "./Appliedjobs";
import EditProfileModal from "./EditProfileModal";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAllAppliedJobs";

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Profile Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex flex-col items-center relative">
                <Button
                  onClick={() => setOpen(true)}
                  variant="outline"
                  className="absolute top-2 right-2 rounded-full w-10 h-10 p-2 hover:bg-purple-50 hover:border-purple-200"
                >
                  <Pen className="w-5 h-5 text-gray-600" />
                </Button>
                <Avatar className="w-32 h-32 mb-4 border-4 border-purple-100">
                  <AvatarImage 
                    src={user?.profile?.profilePhoto} 
                    alt={user?.fullname} 
                    className="object-cover"
                  />
                </Avatar>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">
                  {user?.fullname}
                </h1>
                <p className="text-gray-600 text-center mb-4">
                  {user?.profile?.bio || "No bio added yet"}
                </p>
                
                <div className="w-full space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <a 
                      href={`mailto:${user?.email}`}
                      className="hover:text-purple-600 break-all"
                    >
                      {user?.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Contact className="w-5 h-5 flex-shrink-0" />
                    <a 
                      href={`tel:${user?.phoneNumber}`}
                      className="hover:text-purple-600"
                    >
                      {user?.phoneNumber || "Not provided"}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-4">Resume</h3>
              {user?.profile?.resume ? (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={user.profile.resume}
                  className="flex items-center justify-between p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Download className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700 font-medium">
                      {user.profile.resumeOriginalName || "Download Resume"}
                    </span>
                  </div>
                  <span className="text-purple-600 text-sm">PDF</span>
                </a>
              ) : (
                <div className="text-center p-4 text-gray-500">
                  No resume uploaded
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skills Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {user?.profile?.skills?.length > 0 ? (
                  user.profile.skills.map((skill, index) => (
                    <Badge 
                      key={index}
                      className="px-3 py-1.5 bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))
                ) : (
                  <p className="text-gray-500">No skills added yet</p>
                )}
              </div>
            </div>

            {/* Applied Jobs Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Applied Jobs
              </h2>
              <div className="space-y-4">
                <AppliedJob />
              </div>
            </div>
          </div>
        </div>
      </div>

      <EditProfileModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
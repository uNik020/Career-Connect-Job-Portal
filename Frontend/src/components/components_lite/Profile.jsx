import React, { useState } from "react";
import Navbar from "./Navbar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "../ui/badge";
import Appliedjobs from "./Appliedjobs";

// Mock data for user
const user = {
  fullname: "John Doe",
  email: "User@example.com",
  phoneNumber: "+91 1234567890",
  profile: {
    profilePhoto: "https://via.placeholder.com/150",
    bio: "Software Developer passionate about creating amazing user experiences.",
    skills: ["JavaScript", "React", "Node.js", "CSS"],
    resume: "https://example.com/resume.pdf",
    resumeOriginalName: "JohnDoe_Resume.pdf",
  },
};

const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar />

      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8 shadow shadow-gray-400 hover:shadow-yellow-400">
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <Avatar className="cursor-pointer h-24 w-24">
              <AvatarImage src="logo.png" alt="@john_doe"/>
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button onClick={() => setOpen(true)} className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>

        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>
              <a href={`mailto:${user?.email}`}>{user?.email}</a>
            </span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>
              <a href={`tel:${user?.phoneNumber}`}>{user?.phoneNumber}</a>
            </span>
          </div>
        </div>

        <div>
          <div className="my-5">
            <h1>Skills</h1>
            <div className="flex items-center gap-1">
              {user?.profile?.skills.length !== 0 ? (
                user?.profile?.skills.map((item, index) => (
                  <Badge key={index} className={` text-violet-600 bg-violet-100 px-3 py-1 rounded-full font-medium hover:bg-violet-50`}>{item}</Badge>
                ))
              ) : (
                <span>NA</span>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label className="text-md font-bold">Resume</label>
            <div>
              {user?.profile?.resume ? (
                <a
                  target="_blank"
                  href={user?.profile?.resume}
                  className="text-blue-600 hover:underline cursor-pointer"
                  rel="noopener noreferrer"
                >
                  Download {user?.profile?.resumeOriginalName}
                </a>
              ) : (
                <span>No Resume Found</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="text-lg my-5 font-bold">Applied Jobs</h1>
        {/* Add Application Table or Section Here */}
        <Appliedjobs/>
      </div>

      {/* Edit Profile Modal */}
      {/* Add modal for editing profile if required */}
    </div>
  );
};

export default Profile;

import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/store";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data";

function Navbar() {
  const { user } = useSelector((store) => store.auth); // Replace with actual user authentication logic
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar
  const logoutHandler = async () => {
    try {
      const response = await axios.post(`${USER_API_ENDPOINT}/logout`, {
        withCredentials: true,
      });
      if (response.status === 200) {
        toast.success("Logged out successfully");
        navigate("/");
        dispatch(setUser(null));
      } else {
        toast.error("Failed to log out");
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred");
      }
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">
            Career<span className="text-[#512b95]">Connect</span>
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links for larger devices */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex font-medium items-center gap-6">
            {user && user.role === "Recruiter" ? (
              <>
                <li>
                  <Link to="/admin/companies" onClick={toggleSidebar}>
                    Companies
                  </Link>
                </li>
                <li>
                  <Link to="/admin/jobs" onClick={toggleSidebar}>
                    Jobs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/Home" onClick={toggleSidebar}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/Browse" onClick={toggleSidebar}>
                    Browse
                  </Link>
                </li>
                <li>
                  <Link to="/Jobs" onClick={toggleSidebar}>
                    Jobs
                  </Link>
                </li>
              </>
            )}
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button className="bg-[#512b95] hover:bg-[#522b959d]">
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent>
                <div className="flex items-center gap-4">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h1 className="font-medium">{user?.fullname}</h1>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  {user && user?.role === "Student" && (
                    <div className="flex items-center gap-2 w-fit cursor-pointer">
                      <User2 />
                      <Button variant="link">
                        <Link to="/Profile">View Profile</Link>
                      </Button>
                    </div>
                  )}

                  <div className="flex items-center gap-2 w-fit cursor-pointer">
                    <LogOut />
                    <Button onClick={logoutHandler} variant="link">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>

        {/* Sidebar for small devices */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={toggleSidebar}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <ul className="p-4 space-y-4">
            {user && user.role === "Recruiter" ? (
              <>
                <li>
                  <Link to="/admin/companies" onClick={toggleSidebar}>
                    Companies
                  </Link>
                </li>
                <li>
                  <Link to="/admin/jobs" onClick={toggleSidebar}>
                    Jobs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/Home" onClick={toggleSidebar}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/Browse" onClick={toggleSidebar}>
                    Browse
                  </Link>
                </li>
                <li>
                  <Link to="/Jobs" onClick={toggleSidebar}>
                    Jobs
                  </Link>
                </li>
              </>
            )}

            {!user ? (
              <>
                <li>
                  <Link to="/login" onClick={toggleSidebar}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" onClick={toggleSidebar}>
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/Profile" onClick={toggleSidebar}>
                    View Profile
                  </Link>
                </li>
                <li>
                  <button onClick={logoutHandler}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Overlay when sidebar is open */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

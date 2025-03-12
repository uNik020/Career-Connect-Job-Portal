import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2, X, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data";

function Navbar() {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">
              Career<span className="text-[#512b95]">Connect</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex space-x-8">
              {user && user.role === "Recruiter" ? (
                <>
                  <li>
                    <Link
                      to="/admin/companies"
                      className="text-gray-700 hover:text-[#512b95] transition-colors font-medium"
                    >
                      Companies
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/jobs"
                      className="text-gray-700 hover:text-[#512b95] transition-colors font-medium"
                    >
                      Jobs
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/Home"
                      className="text-gray-700 hover:text-[#512b95] transition-colors font-medium"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Browse"
                      className="text-gray-700 hover:text-[#512b95] transition-colors font-medium"
                    >
                      Browse
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Jobs"
                      className="text-gray-700 hover:text-[#512b95] transition-colors font-medium"
                    >
                      Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-gray-700 hover:text-[#512b95] transition-colors font-medium"
                    >
                      About
                    </Link>
                  </li>
                </>
              )}
            </ul>

            {!user ? (
              <div className="flex items-center gap-4 ml-8">
                <Link to="/login">
                  <Button variant="outline" className="px-6">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-[#512b95] hover:bg-[#3f2173] px-6">
                    Register
                  </Button>
                </Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer h-9 w-9 ml-8">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="User avatar"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={user?.profile?.profilePhoto}
                        alt="User avatar"
                      />
                    </Avatar>
                    <div>
                      <h1 className="font-semibold text-gray-900">
                        {user?.fullname}
                      </h1>
                      <p className="text-sm text-gray-500 truncate">
                        {user?.profile?.bio}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    {user?.role === "Student" && (
                      <Link
                        to="/Profile"
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <User2 className="h-5 w-5 text-gray-700" />
                        <span className="text-gray-700">View Profile</span>
                      </Link>
                    )}
                    <button
                      onClick={logoutHandler}
                      className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <LogOut className="h-5 w-5 text-gray-700" />
                      <span className="text-gray-700">Logout</span>
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-900">Menu</h2>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        <div className="p-4">
          <ul className="space-y-2">
            {user && user.role === "Recruiter" ? (
              <>
                <li>
                  <Link
                    to="/admin/companies"
                    onClick={toggleSidebar}
                    className="block p-2 rounded-lg hover:bg-gray-50 text-gray-700"
                  >
                    Companies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/jobs"
                    onClick={toggleSidebar}
                    className="block p-2 rounded-lg hover:bg-gray-50 text-gray-700"
                  >
                    Jobs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/Home"
                    onClick={toggleSidebar}
                    className="block p-2 rounded-lg hover:bg-gray-50 text-gray-700"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Browse"
                    onClick={toggleSidebar}
                    className="block p-2 rounded-lg hover:bg-gray-50 text-gray-700"
                  >
                    Browse
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Jobs"
                    onClick={toggleSidebar}
                    className="block p-2 rounded-lg hover:bg-gray- 50 text-gray-700"
                  >
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={toggleSidebar}
                    className="block p-2 rounded-lg hover:bg-gray-50 text-gray-700"
                  >
                    About
                  </Link>
                </li>
              </>
            )}

            {!user ? (
              <>
                <li>
                  <Link
                    to="/login"
                    onClick={toggleSidebar}
                    className="block p-2 rounded-lg hover:bg-gray-50 text-gray-700"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    onClick={toggleSidebar}
                    className="block p-2 rounded-lg hover:bg-gray-50 text-gray-700"
                  >
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/Profile"
                    onClick={toggleSidebar}
                    className="block p-2 rounded-lg hover:bg-gray-50 text-gray-700"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logoutHandler}
                    className="block w-full text-left p-2 rounded-lg hover:bg-gray-50 text-gray-700"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
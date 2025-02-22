import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components_lite/Navbar";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data.js";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { loading, user } = useSelector((store) => store.auth);
  console.log('Loading state:', loading);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const ChangeFilehandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };


  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(false));
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setUser (res.data.user));
        navigate("/Home"); // Redirect to Home after login
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error); // Optional: Change this for more user-friendly error handling
      toast.error(error.response ? error.response.data.message : "Login Failed!");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);


  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center items-center min-h-screen p-5 flex-col md:flex-row">
        <div className="lg:w-3/10 md:w-2/5 w-full lg:pr-4 md:pr-2 pr-0">
          <img src="login.png" alt="hero_img" className="w-full h-full object-cover object-center" />
        </div>
        <form
          onSubmit={submitHandler}
          className="w-full max-w-md border border-[#7e22ce] rounded-lg p-6 bg-white shadow-lg"
        >
          <h1 className="font-bold text-2xl mb-5 text-[#7e22ce] text-center">
            Login
          </h1>

          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="example@gmail.com"
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="password"
            />
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Student"
                  checked={input.role === "Student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Recruiter"
                  checked={input.role === "Recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          {loading ? (
            <div className="flex justify-center items-center my-10">
              <div className="spinner-border text-blue-600" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <button
              type="submit"
              className="bg-[#7e22ce] hover:bg-[#7e22ce80] block my-3 w-full py-3 text-white rounded-md transition duration-200"
            >
              Login
            </button>
          )}

          <p className="text-gray-500 text-md my-2 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-700">
              Register
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
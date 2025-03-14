import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components_lite/Navbar";
import Footer from "../components_lite/Footer";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // For navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post("http://localhost:5001/api/auth/forgot-password", { email });
      setMessage(response.data.message);

      // ✅ If OTP is successfully sent, navigate to ResetPassword page
      if (response.data.message === "OTP sent successfully") {
        setTimeout(() => navigate("/reset-password", { state: { email } }), 1000); // Navigate after 1 sec
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Forgot Password</h2>
        <p className="text-gray-500 text-center mb-6">Enter your email to receive an OTP</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          <button
            type="submit"
            className="w-full bg-[#7e22ce] hover:bg-[#6b21a8] text-white py-3 px-4 rounded-lg transition-all duration-200"
          >
            Send OTP
          </button>
        </form>
        {message && <p className="mt-4 text-green-600 text-center">{message}</p>}
        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      </div>
    </div>
    <Footer/>
            </>
  );
};

export default ForgetPassword;

import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components_lite/Footer";
import Navbar from "../components_lite/Navbar";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || ""); // Auto-fill email if passed from ForgetPassword
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post("http://localhost:5001/api/auth/reset-password", {
        email,
        otp,
        newPassword,
      });
      setMessage(response.data.message);

      // ✅ Redirect to login after successful reset
      if (response.data.message === "Password reset successful") {
        setTimeout(() => navigate("/login"), 1500);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Reset Password</h2>
        <p className="text-gray-500 text-center mb-6">Enter the OTP sent to your email and set a new password.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            readOnly={!!location.state?.email} // Make email read-only if passed from ForgetPassword
            />
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          <button
            type="submit"
            className="w-full bg-[#7e22ce] hover:bg-[#6b21a8] text-white py-3 px-4 rounded-lg transition-all duration-200"
            >
            Reset Password
          </button>
        </form>
        {message && <p className="mt-4 text-green-600 text-center">{message}</p>}
        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      </div>
    </div>
    <Footer></Footer>
            </>
  );
};

export default ResetPassword;

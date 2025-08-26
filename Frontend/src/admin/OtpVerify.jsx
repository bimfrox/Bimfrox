import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const OtpVerify = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username;

  useEffect(() => {
    if (!username) {
      toast.error("⚠️ No user found. Please login first.");
      navigate("/admin/login");
    }
  }, [username, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
      toast.error("⚠️ Please enter a valid 6-digit OTP");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/admin/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, otp }),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        const text = await res.text();
        console.error("Non-JSON response:", text);
        toast.error("❌ Server returned invalid response");
        return;
      }

      if (data.success) {
        localStorage.setItem("adminToken", data.token);
        toast.success("✅ OTP Verified!");
        navigate("/admin/dashboard");
      } else {
        toast.error("❌ " + (data.message || "OTP verification failed"));
      }
    } catch (err) {
      console.error("OTP verification error:", err);
      toast.error("❌ Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Enter OTP</h2>
        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border px-4 py-2 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-lg text-white ${
            loading
              ? "bg-green-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          } transition`}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>
    </div>
  );
};

export default OtpVerify;

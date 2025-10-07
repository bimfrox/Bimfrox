// src/pages/ContactPage.jsx
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 🖼️ Import your images
import happy from "../assets/USES/happy client.png";
import ind from "../assets/USES/INDUSTRIES.png";
import social from "../assets/USES/social media.png";
import team from "../assets/USES/team.png";

// ✅ Backend URL (from .env)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://bimfrox-wugz.onrender.com/api";

// ✅ Static company stats
const stats = [
  { number: "10+", label: "Happy Clients Served", icon: happy },
  { number: "100+", label: "Social Media Posts", icon: social },
  { number: "10+", label: "Industries Targeted", icon: ind },
  { number: "7 days", label: "Avg. Delivery Time", icon: team },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    serviceType: "",
  });

  const [loading, setLoading] = useState(false);

  // Update form state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, number } = formData;
    if (!fullName || !email || !number) {
      toast.error("⚠ Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.post(`${API_BASE_URL}/contact`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (data?.success) {
        toast.success("✅ Thanks! Your message has been submitted.");
        setFormData({ fullName: "", email: "", number: "", serviceType: "" });
      } else {
        toast.error("❌ " + (data?.message || "Failed to submit form."));
      }
    } catch (error) {
      console.error("Form submission error:", error);
      if (error.response) {
        toast.error(`❌ ${error.response.data?.message || "Server Error"}`);
      } else {
        toast.error("❌ Network Error. Check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-5 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      {/* Left Column: Contact Form */}
      <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-xl border border-green-100">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">
          Contact <span className="text-green-600">Bimfrox</span>
        </h1>
        <p className="text-gray-600 mb-8">
          Fill out the form below and our team will reach out to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name *"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 transition"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email *"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 transition"
            required
          />
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Phone Number *"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 transition"
            required
          />
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 transition"
          >
            <option value="">Select a service</option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="SEO Optimization">SEO Optimization</option>
            <option value="UI/UX Design">UI/UX Design</option>
          </select>

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white font-semibold py-3 rounded-lg transition transform ${
              loading
                ? "bg-green-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 hover:shadow-lg hover:-translate-y-0.5"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Right Column: Stats Section */}
      <aside className="grid grid-cols-2 gap-6 mt-17">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center border border-green-100 hover:shadow-2xl hover:scale-105 transition"
          >
            <img src={stat.icon} alt={stat.label} className="w-14 h-14 mb-4" loading="lazy" />
            <h2 className="text-3xl font-extrabold text-green-600">{stat.number}</h2>
            <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </aside>
    </div>
  );
};

export default ContactPage;

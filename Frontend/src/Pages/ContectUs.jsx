import React, { useState } from "react";

const stats = [
  { number: "10+", label: "HAPPY CLIENTS SERVED", icon: "https://img.icons8.com/ios-filled/50/000000/engineer.png" },
  { number: "100+", label: "SOCIAL MEDIA POSTS", icon: "https://img.icons8.com/ios-filled/50/000000/graph-up.png" },
  { number: "10+", label: "INDUSTRIES TARGETED", icon: "https://img.icons8.com/ios-filled/50/000000/teamwork.png" },
  { number: "7 days", label: "AVG. DELIVERY TIME", icon: "https://img.icons8.com/ios-filled/50/000000/business-team.png" },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    serviceType: "",
    budget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted! Check console for data.");
    setFormData({
      fullName: "",
      email: "",
      number: "",
      serviceType: "",
      budget: "",
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left: Contact Form */}
        <div className="flex-1 bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="">Select Service Type</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App">Mobile App</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="SEO">SEO</option>
            </select>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Budget"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-full bg-green-900 text-white py-3 rounded-lg font-bold hover:bg-green-950 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right: Stats */}
        <div className="flex-1 grid grid-cols-2 gap-6 md:grid-cols-2">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-6 text-center shadow-lg"
            >
              <img src={item.icon} alt={item.label} className="w-12 h-12 mb-3" />
              <span className="text-2xl font-bold">{item.number}</span>
              <span className="text-gray-600 text-sm mt-1">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

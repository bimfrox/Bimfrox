import React from "react";
import { motion } from "framer-motion";

// Sample client logos (replace with your own image imports)
import am from "../assets/Am Finance & consultancy.png";
import jjb from "../assets/jjb.png";
import me from "../assets/me.png";
import tulsi from "../assets/tulsi.png";
import vally from "../assets/Valley.png";
motion;

const logos = [am, jjb, me, tulsi, vally];

const Client = () => {
  const logosLoop = [...logos, ...logos, ...logos];

  const scrollAnimation = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-14">
      {/* Section Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          🌍 Startups Grow. Giants Stay Ahead. We Make It Happen
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          As a young and innovative software company, we deliver more than code — 
          we craft experiences. Businesses choose us because we blend <span className="font-semibold text-gray-800">AI-powered solutions</span>, 
          <span className="font-semibold text-gray-800"> intelligent automation</span>, and <span className="font-semibold text-gray-800">scalable technology</span> 
          to turn ambitious visions into reality.
        </p>
        <p className="mt-2 text-gray-500 italic">
          "Innovation isn’t an option — it’s our foundation."
        </p>
      </div>

      {/* Scrolling Logos */}
      <div className="overflow-hidden w-full py-4">
        <motion.div
          className="flex space-x-14 md:space-x-24"
          variants={scrollAnimation}
          animate="animate"
          style={{ width: "max-content" }}
        >
          {logosLoop.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-28 md:w-36 h-20 flex items-center justify-center bg-white shadow-lg rounded-xl p-4 hover:scale-110 transition-transform duration-300"
            >
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="max-h-14 md:max-h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
        <button
          onClick={() => (window.location.href = "/projects")}
          className="px-8 py-3 bg-green-700 hover:bg-green-800 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition"
        >
          🌟 Explore Our Projects
        </button>
        <button
          onClick={() => (window.location.href = "/contact")}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition"
        >
          📞 Let’s Work Together
        </button>
      </div>
    </div>
  );
};

export default Client;

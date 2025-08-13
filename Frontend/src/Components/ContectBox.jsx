import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import web from "../assets/images/web_logo.png";
import mo from "../assets/images/app_logo.png";
import seo from "../assets/images/seo_logo.png";
import digi from "../assets/images/Digi_logo.png";
import uiux from "../assets/images/uiux_logo.png";

const slides = [web, mo, digi, seo, uiux];

const ContectBox = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto bg-gradient-to-br from-emerald-900 via-emerald-950 to-black text-white rounded-3xl shadow-2xl p-10 mb-10 flex flex-col md:flex-row items-center md:items-start gap-10 relative overflow-hidden">
      
      {/* Decorative spinning circle */}
      <div className="absolute -top-16 -left-16 w-48 h-48 border-4 border-green-400 rounded-full animate-spin-slower opacity-20"></div>

      {/* Left Content */}
      <div className="flex-1 max-w-2xl text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-green-300 leading-snug">
          🚀 Skyrocket Your Business — <span className="text-white">Starting Today</span>
        </h2>
        <p className="text-green-100 text-lg leading-relaxed mb-6">
          Your business deserves more than just “keeping up.”  
          We deep-dive into your goals, audience needs, and the latest market shifts  
          to create custom software solutions that put you <span className="text-green-400 font-semibold">years ahead of the competition</span>.
        </p>
        <button
          className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-green-400/50 transition transform hover:-translate-y-1"
        >
          <NavLink to="/contact">📞 Contact Us Now</NavLink>
        </button>
      </div>

      {/* Right Slider */}
      <div className="w-full md:w-72 h-48 flex items-center justify-center relative">
        <img
          src={slides[currentSlide]}
          alt="Slide"
          className={`absolute h-48 ml-0 md:ml-45 mt-0 md:mt-20 w-72 rounded-3xl object-cover shadow-xl transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          style={{ maxWidth: "100%" }}
        />
      </div>
    </div>
  );
};

export default ContectBox;

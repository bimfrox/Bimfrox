// Components/LogoLoader.jsx
import React, { useEffect, useState } from "react";
import bimfroxLogo from "../assets/images/BIMFROX-b.png"; // your logo path

const LogoLoader = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 500); // start fade after 0.5s
    const remove = setTimeout(onFinish, 1200); // remove after 1.2s
    return () => {
      clearTimeout(timer);
      clearTimeout(remove);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center">
        {/* Spinning Circle */}
        <div className="absolute w-40 h-40 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>

        {/* Logo */}
        <img
          src={bimfroxLogo}
          alt="Bimfrox Logo"
          className="w-28 animate-pulse"
        />
      </div>
    </div>
  );
};

export default LogoLoader;

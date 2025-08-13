import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/bimfroxlogo1.png";

// Icons
import { RiHome6Fill } from "react-icons/ri";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { FaGraduationCap } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home", icon: <RiHome6Fill /> },
    { to: "/service", label: "Service", icon: <MdOutlineMiscellaneousServices /> },
    { to: "/projects", label: "Project", icon: <GrProjects /> },
    { to: "/career", label: "Career", icon: <FaGraduationCap /> },
    { to: "/about", label: "About Us", icon: <IoPerson /> },
  ];

  return (
    <nav className="bg-white border-b shadow-lg border-gray-300 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-7 py-7 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Bimfrox Logo" className="h-12" />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center space-x-2 text-lg lg:text-xl hover:text-green-950 transition ${
                  isActive ? "text-green-900 font-semibold" : "text-gray-700"
                }`
              }
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          ))}

          {/* Portfolio Button */}
          <button
            type="button"
            className="text-white bg-green-900 ml-10 hover:bg-green-950 font-medium rounded-full px-8 py-2 text-lg lg:text-xl transition"
          >
            <a href="https://portfolio-bimfrox-g585.onrender.com/  " target="_blank" rel="noopener noreferrer">Portfolio</a>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col bg-gray-50 px-4 py-3 space-y-3 border-t border-gray-200">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center space-x-2 text-lg lg:text-xl hover:text-green-950 transition ${
                    isActive ? "text-green-900 font-semibold" : "text-gray-700"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}

          {/* Mobile Portfolio Button */}
          <li>
            <button
              type="button"
              className="w-full text-white bg-green-900 hover:bg-green-950 font-medium rounded-full px-5 py-2 text-lg lg:text-xl transition"
            >
              Portfolio
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

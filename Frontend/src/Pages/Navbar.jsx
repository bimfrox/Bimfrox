import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/bimfroxlogo1.png";
import { NavLink } from "react-router-dom";

// Icons
import { RiHome6Fill } from "react-icons/ri";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { FaGraduationCap } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (to) => {
    navigate(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home", icon: <RiHome6Fill aria-hidden="true" /> },
    { to: "/service", label: "Service", icon: <MdOutlineMiscellaneousServices aria-hidden="true" /> },
    { to: "/projects", label: "Project", icon: <GrProjects aria-hidden="true" /> },
    { to: "/career", label: "Career", icon: <FaGraduationCap aria-hidden="true" /> },
    { to: "/about", label: "About Us", icon: <IoPerson aria-hidden="true" /> },
  ];

  return (
    <nav
      className={`backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 shadow-lg border-b border-gray-300" : "bg-white/40"
      }`}
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-screen-xl mx-auto px-7 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <button 
          onClick={() => handleNavClick("/")} 
          aria-label="Go to Home"
          className="flex items-center space-x-3 group"
        >
          <NavLink to="/">
          <img 
            src={logo} 
            alt="Bimfrox Company Logo" 
            className="h-12 group-hover:scale-105 transition-transform" 
          />
          </NavLink>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <button
                onClick={() => handleNavClick(link.to)}
                className="relative flex items-center space-x-2 text-lg lg:text-xl text-gray-700 group"
                aria-label={`Navigate to ${link.label}`}
              >
                <span className="text-green-900 group-hover:scale-110 transition-transform">{link.icon}</span>
                <span className="group-hover:text-green-900 transition-colors">{link.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-green-900 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://portfolio-bimfrox-g585.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Portfolio Website"
              className="text-white bg-green-900 ml-10 hover:bg-green-950 font-medium rounded-full px-8 py-2 text-lg lg:text-xl transition relative overflow-hidden group"
            >
              <span className="relative z-10">Portfolio</span>
              <span className="absolute inset-0 bg-green-700 opacity-0 group-hover:opacity-30 transition"></span>
              <span className="absolute inset-0 rounded-full border-2 border-green-900 group-hover:scale-110 group-hover:opacity-50 transition"></span>
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
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
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col bg-white/90 backdrop-blur-md px-4 py-3 space-y-3 border-t border-gray-200">
          {navLinks.map((link) => (
            <li key={link.to}>
              <button
                onClick={() => handleNavClick(link.to)}
                className="flex items-center space-x-2 text-lg lg:text-xl hover:text-green-900 transition text-gray-700"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.icon}
                <span>{link.label}</span>
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://portfolio-bimfrox-g585.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Portfolio Website"
              className="block text-center text-white bg-green-900 hover:bg-green-950 font-medium rounded-full px-5 py-2 text-lg lg:text-xl transition"
            >
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

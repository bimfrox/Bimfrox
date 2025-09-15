// src/Pages/Client.jsx
import React from "react";
import { motion } from "framer-motion";
motion
// Sample client logos
import am from "../assets/Am Finance & consultancy.png";
import jjb from "../assets/jjb.png";
import me from "../assets/me.png";
import tulsi from "../assets/tulsi.png";
import vally from "../assets/Valley.png";

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
    <section
      className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16"
      aria-label="Trusted Clients and Partners of BIMFROX"
    >
      {/* Section Heading */}
      <header className="text-center mb-8 sm:mb-12 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-snug">
          Trusted by{" "}
          <span className="text-indigo-600">Startups & Global Brands</span>
        </h1>
      </header>

      {/* Scrolling Logos */}
      <div className="overflow-hidden w-full py-6">
        <motion.div
          className="flex space-x-4 sm:space-x-8 md:space-x-14 lg:space-x-20"
          variants={scrollAnimation}
          animate="animate"
          style={{ width: "max-content" }}
        >
          {logosLoop.map((logo, index) => (
            <motion.figure
              key={index}
              className="flex-shrink-0 w-20 sm:w-24 md:w-28 lg:w-36 h-16 sm:h-20 md:h-24 lg:h-28 
                         flex items-center justify-center bg-white/30 backdrop-blur-sm shadow-md rounded-2xl 
                         p-2 sm:p-3 hover:scale-110 hover:shadow-xl transition-transform duration-400 cursor-pointer"
              whileHover={{ rotate: 3 }}
            >
              <img
                src={logo}
                alt={`Partnered client brand ${index + 1}`}
                className="max-h-10 sm:max-h-12 md:max-h-14 lg:max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Client;

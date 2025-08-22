// src/Pages/Client.jsx
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
motion;
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
      {/* SEO Metadata */}
      <Helmet>
        <title>Our Clients | BIMFROX - Trusted by Startups & Enterprises</title>
        <meta
          name="description"
          content="Discover why startups, creators, and enterprises trust BIMFROX. We deliver AI-powered digital solutions, scalable platforms, and future-ready automation."
        />
        <meta
          name="keywords"
          content="BIMFROX clients, AI-powered solutions, scalable digital platforms, enterprise software, automation, startup technology partner"
        />
        <meta property="og:title" content="BIMFROX Clients & Partners" />
        <meta property="og:description" content="Startups grow and enterprises stay ahead with BIMFROX. Trusted by innovators for scalable AI-powered digital solutions." />
        <meta property="og:image" content={logos[0]} />
      </Helmet>

      {/* Section Heading */}
      <header className="text-center mb-8 sm:mb-12 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-snug">
          Trusted by{" "}
          <span className="text-indigo-600">Startups & Global Brands</span>
        </h1>
        <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
          At <strong>BIMFROX</strong>, we deliver more than just code — we
          engineer <strong>scalable digital platforms</strong> that drive real
          growth. From <em>AI-powered solutions</em> to{" "}
          <em>intelligent automation</em> and <em>future-ready technology</em>, 
          businesses trust us to turn bold ideas into lasting success.
        </p>
        <p className="mt-2 text-gray-500 italic text-sm sm:text-base">"Innovation isn’t optional — it’s our foundation."</p>
        <sub className="mt-2 text-gray-500 italic text-xs sm:text-sm">
          That’s why startups, creators, and enterprises choose BIMFROX as their
          digital partner.
        </sub>
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

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 px-4">
        <motion.a
          href="/projects"
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-flex items-center justify-center px-5 sm:px-8 py-3 sm:py-4
                     text-white text-sm sm:text-base lg:text-lg font-bold
                     bg-gradient-to-r from-green-400 via-green-500 to-green-700
                     rounded-full shadow-lg hover:shadow-green-500/50
                     transition-all duration-300 overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></span>
          🌟 Explore Our Successful Projects
        </motion.a>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-flex items-center justify-center px-5 sm:px-8 py-3 sm:py-4
                     text-white text-sm sm:text-base lg:text-lg font-bold
                     bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700
                     rounded-full shadow-lg hover:shadow-blue-500/50
                     transition-all duration-300 overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></span>
          📞 Partner With BIMFROX Today
        </motion.a>
      </div>
    </section>
  );
};

export default Client;

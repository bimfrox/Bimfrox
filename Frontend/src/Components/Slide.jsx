import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { NavLink } from "react-router-dom";
motion;
const slides = [
  {
    tagline: "Crafting Websites That Define Your Digital Presence",
    description:
      "We build modern, responsive, and scalable websites that truly represent your brand in the digital space.",
    image:
      "https://res.cloudinary.com/duji9wpsp/image/upload/v1755154836/web_logo_okpvua.png",
  },
  {
    tagline: "Turning Your Ideas Into Powerful Mobile Experiences",
    description:
      "Transform your concept into engaging, high-performance mobile applications tailored for your audience.",
    image:
      "https://res.cloudinary.com/duji9wpsp/image/upload/v1755154698/app_logo_uoqulq.png",
  },
  {
    tagline: "Designs That Delight, Experiences That Convert",
    description:
      "Our UI/UX designs focus on beauty, functionality, and creating memorable user journeys.",
    image:
      "https://res.cloudinary.com/duji9wpsp/image/upload/v1755154833/uiux_logo_pu3d9v.png",
  },
  {
    tagline: "Driving Your Brand to the Right Audience, Everywhere",
    description:
      "We help you reach your target audience effectively through data-driven marketing strategies.",
    image:
      "https://res.cloudinary.com/duji9wpsp/image/upload/v1755154720/seo_logo_esmzhp.png",
  },
  {
    tagline: "Boosting Your Visibility, One Click at a Time",
    description:
      "Enhance your online presence with SEO tactics that put you ahead of the competition.",
    image:
      "https://res.cloudinary.com/duji9wpsp/image/upload/v1755154630/Digi_logo_zhubyj.png",
  },
];

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { tagline, description, image } = slides[currentSlide];

  // Highlight last 2 words
  const highlightText = (text) => {
    const words = text.split(" ");
    if (words.length < 2) return text;
    const normal = words.slice(0, -2).join(" ");
    const highlight = words.slice(-2).join(" ");
    return (
      <>
        {normal}{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-4xl md:text-6xl font-bold">
          {highlight}
        </span>
      </>
    );
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-12 flex flex-col-reverse md:flex-row justify-between items-center gap-8 overflow-hidden my-0 md:my-20">
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={tagline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-3xl md:text-6xl font-extrabold text-gray-800 mb-4">
              {highlightText(tagline)}
            </h2>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-lg mx-auto md:mx-0 mb-6">
              {description}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-10 py-3 bg-green-900 text-white font-bold rounded-full shadow-lg hover:bg-green-950 transition-all duration-300"
            >
              <NavLink to="/contact">Discuss Your Project</NavLink>
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={image}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-center"
          >
            {/* Rotating dotted Border */}
            <motion.div
              animate={{ rotate: 180 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              className="absolute rounded-full border-7 border-y-indigo-500 border-dotted w-56 h-56 sm:w-72 sm:h-72 md:w-[420px] md:h-[420px]"
            ></motion.div>

            {/* Lazy-loaded Image */}
            <LazyLoadImage
              key={image}
              src={image}
              alt={tagline}
              effect="blur"
              className="rounded-full object-contain bg-white shadow-lg w-48 h-48 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] relative z-10"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Slide;

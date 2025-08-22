import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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
    <section
      className="max-w-screen-xl mx-auto bg-gradient-to-br from-emerald-900 via-emerald-950 to-black text-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 mb-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
      aria-label="BIMFROX Business Growth Section"
    >
      {/* SEO Metadata */}
      <Helmet>
        <title>Skyrocket Your Business with AI-Powered Software Solutions | BIMFROX</title>
        <meta
          name="description"
          content="BIMFROX helps businesses grow with AI-driven custom software solutions, web development, mobile apps, SEO, digital marketing, and UI/UX design."
        />
        <meta
          name="keywords"
          content="AI software solutions, web development, mobile app development, SEO services, digital marketing, UI/UX design, business growth"
        />
        <meta property="og:title" content="BIMFROX - AI Powered Business Solutions" />
        <meta property="og:description" content="Skyrocket your business with BIMFROX: AI-powered web development, mobile apps, SEO optimization, and digital marketing." />
        <meta property="og:image" content={slides[currentSlide]} />
      </Helmet>

      {/* Decorative spinning circle */}
      <div className="absolute -top-12 -left-12 sm:-top-16 sm:-left-16 w-32 sm:w-48 h-32 sm:h-48 border-4 border-green-400 rounded-full animate-spin-slower opacity-20"></div>

      {/* Left Content */}
      <article className="flex-1 text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-green-300 leading-snug">
          🚀 Skyrocket Your Business —{" "}
          <span className="text-white">AI-Powered Solutions</span>
        </h1>
        <p className="text-green-100 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
          At <strong>BIMFROX</strong>, we build <em>custom software solutions</em> that combine{" "}
          <span className="text-green-400 font-semibold">AI, automation, and innovation</span> to drive
          your growth. From <strong>web development</strong> to <strong>mobile app design</strong>,{" "}
          <strong>SEO optimization</strong>, <strong>digital marketing</strong>, and{" "}
          <strong>UI/UX experiences</strong> — we create strategies that put you{" "}
          <span className="text-green-400 font-semibold">years ahead of the competition</span>.
        </p>
        <NavLink
          to="/contact"
          className="bg-green-600 hover:bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-green-400/50 transition transform hover:-translate-y-1 inline-block"
        >
          📞 Contact BIMFROX Today
        </NavLink>
      </article>

      {/* Right Slider */}
      <aside className="w-full md:w-72 h-48 sm:h-56 md:h-72 flex items-center justify-center relative mt-6 md:mt-0">
        <img
          src={slides[currentSlide]}
          alt={`BIMFROX Service - ${currentSlide + 1}`}
          className={`absolute rounded-3xl object-cover shadow-xl transition-opacity duration-500
                      w-56 sm:w-64 md:w-72 h-40 sm:h-48 md:h-72
                      ${fade ? "opacity-100" : "opacity-0"}`}
        />
      </aside>
    </section>
  );
};

export default ContectBox;

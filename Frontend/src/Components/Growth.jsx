import React from "react";
import happy from "../assets/USES/happy client.png";
import ind from "../assets/USES/INDUSTRIES.png";
import social from "../assets/USES/social media.png";
import team from "../assets/USES/team.png";
import centerImg from "../assets/images/BIMFROXMAP.png";

export default function Growth() {
  const stats = [
    { number: "10+", label: "Happy Clients Served", icon: happy },
    { number: "100+", label: "Social Media Posts", icon: social },
    { number: "10+", label: "Industries Targeted", icon: ind },
    { number: "7 days", label: "Avg. Delivery Time", icon: team },
  ];

  return (
    <section
      className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-green-50 flex flex-col items-center relative"
      aria-label="BIMFROX Business Growth Stats"
    >
      {/* Title */}
      <header className="text-center mb-10 md:mb-16 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-green-700 mb-4">
          Why Businesses Trust BIMFROX
        </h2>
        <p className="text-gray-700 max-w-2xl text-center text-base sm:text-lg md:text-xl">
         BIMFROX helps businesses grow with <strong>AI-powered solutions</strong>,{" "}
          <strong>automation</strong>, and fast delivery.ensuring <strong>strong online presence and competitive advantage</strong>
        </p>
      </header>

      <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-24">
        {/* Left Stats */}
        <div className="flex flex-col gap-10 sm:gap-16 relative items-center md:items-start">
          {stats.slice(0, 2).map((stat, i) => (
            <article
              key={i}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 relative group text-center sm:text-left"
            >
              <img
                src={stat.icon}
                alt={`${stat.label} icon`}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700">
                  {stat.number}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                  {stat.label}
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 right-[-80px] w-[80px] h-[4px] bg-gradient-to-r from-green-400 to-green-700 animate-pulse rounded-full" />
            </article>
          ))}
        </div>

        {/* Center Image */}
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[380px] md:h-[380px] flex items-center justify-center">
          <div className="absolute w-60 h-60 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] rounded-full bg-green-200 blur-3xl opacity-20 animate-pulse"></div>
          <img
            src={centerImg}
            alt="BIMFROX growth map showing digital success"
            className="w-full h-full object-contain rounded-full shadow-2xl border-4 border-green-500"
          />
          <div className="hidden sm:block absolute w-60 h-60 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] rounded-full border-4 border-green-300 animate-spin-slow opacity-40"></div>
        </div>

        {/* Right Stats */}
        <div className="flex flex-col gap-10 sm:gap-16 relative items-center md:items-start">
          {stats.slice(2, 4).map((stat, i) => (
            <article
              key={i}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 relative group text-center sm:text-left"
            >
              <div className="hidden md:block absolute top-1/2 left-[-80px] w-[80px] h-[4px] bg-gradient-to-l from-green-400 to-green-700 animate-pulse rounded-full" />
              <img
                src={stat.icon}
                alt={`${stat.label} icon`}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
              />
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700">
                  {stat.number}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                  {stat.label}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
  
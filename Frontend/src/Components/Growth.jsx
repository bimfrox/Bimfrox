import React from "react";
import am from "../assets/Am Finance & consultancy.png";
import jjb from "../assets/jjb.png";
import me from "../assets/me.png";
import tulsi from "../assets/tulsi.png";
import vally from "../assets/Valley.png";
import happy from "../assets/USES/happy client.png";
import ind from "../assets/USES/INDUSTRIES.png";
import social from "../assets/USES/social media.png";
import team from "../assets/USES/team.png";

export default function Growth() {
  const clientLogos = [
    { src: am, alt: "AM Finance & Consultancy" },
    { src: jjb, alt: "JJB" },
    { src: me, alt: "ME" },
    { src: tulsi, alt: "Tulsi" },
    { src: vally, alt: "Valley" },
  ];

  const stats = [
    { number: "10+", label: "HAPPY CLIENTS SERVED", icon: happy },
    { number: "100+", label: "SOCIAL MEDIA POSTS", icon: social },
    { number: "10+", label: "INDUSTRIES TARGETED", icon: ind },
    { number: "7 days", label: "AVG. DELIVERY TIME", icon: team },
  ];

  return (
    <section className="py-16 bg-gray-50 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Discover Why Businesses Trust Us
      </h2>
      <p className="text-gray-600 max-w-2xl text-center mb-12">
        As a startup software development company, we deliver AI-powered
        solutions, intelligent automation, and scalable technology to help you
        stay ahead of the digital curve.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-20">
        {/* Left Stats */}
        <div className="flex flex-col gap-12">
          {stats.slice(0, 2).map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <img src={stat.icon} alt={stat.label} className="w-20 h-20" />
              <div>
                <h3 className="text-2xl font-bold">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Rotating Globe */}
        <div className="relative w-[300px] h-[300px] flex items-center justify-center">
          {/* Logos orbit */}
          <div className="absolute inset-0 animate-spin-slow">
            {clientLogos.map((logo, i) => {
              const angle = (360 / clientLogos.length) * i;
              const radius = 120;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);
              return (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className="absolute w-16 h-16 bg-white p-2 rounded-lg shadow-md"
                  style={{
                    transform: `translate(${150 + x - 32}px, ${
                      150 + y - 32
                    }px)`,
                  }}
                />
              );
            })}
          </div>

          {/* Center globe */}
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 shadow-xl animate-spin-slower" />
        </div>

        {/* Right Stats */}
        <div className="flex flex-col gap-12">
          {stats.slice(2, 4).map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <img src={stat.icon} alt={stat.label} className="w-20 h-20" />
              <div>
                <h3 className="text-2xl font-bold">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

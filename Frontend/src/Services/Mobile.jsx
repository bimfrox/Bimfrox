// 📱 MobileAppDevelopment.jsx
import React from "react";
import { motion } from "framer-motion";
motion;
// Banner
import banner from "../assets/images/banner_bimfrox.png";

// Tech logos
import Re from "../assets/Service/App/64px-React-icon.svg.png";
import AWS from "../assets/Service/App/AWS.png";
import Firebase from "../assets/Service/App/Firebase.png";
import Flutter from "../assets/Service/App/Flutter.png";
import GraphQL from "../assets/Service/App/GraphQL.png";
import JavaScript from "../assets/Service/App/JavaScript.png";
import Kotlin from "../assets/Service/App/Kotlin.png";
import Node from "../assets/Service/App/Node.js.png";
import Swift from "../assets/Service/App/Swift.png";
import Tailwind from "../assets/Service/App/Tailwind CSS.png";

const MobileAppDevelopment = () => {
  const techStack = [
    { name: "React Native", logo: Re },
    { name: "Flutter", logo: Flutter },
    { name: "Kotlin", logo: Kotlin },
    { name: "Swift", logo: Swift },
    { name: "Firebase", logo: Firebase },
    { name: "AWS", logo: AWS },
    { name: "Node.js Backend", logo: Node },
    { name: "GraphQL / REST APIs", logo: GraphQL },
    { name: "JavaScript", logo: JavaScript },
    { name: "Tailwind CSS", logo: Tailwind },
  ];

  // Duplicate array for smooth scrolling
  const duplicatedTech = [...techStack, ...techStack];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-green-800 mb-4">
        Mobile App Development
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        In today’s mobile-first world, having a powerful, user-friendly, and scalable app is essential.
        We design and develop high-quality mobile applications tailored to your business needs — from startups to enterprises.
      </p>

      {/* Hero Image */}
      <img
        src={banner}
        alt="Mobile App Development"
        className="w-full rounded-lg shadow-lg mb-12"
      />

      {/* Services */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">
          Our Mobile App Development Services
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Native iOS & Android App Development</li>
          <li>Cross-platform Apps using React Native & Flutter</li>
          <li>Custom Business Applications</li>
          <li>UI/UX Design for Mobile Experiences</li>
          <li>App Maintenance & Support</li>
        </ul>
      </section>

      {/* Technologies Carousel */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">
          Technologies We Use
        </h2>
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
            }}
          >
            {duplicatedTech.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow min-w-[120px]"
              >
                <img src={tech.logo} alt={tech.name} className="w-16 h-16 mb-2" />
                <p className="font-semibold text-center">{tech.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">Why Choose Us?</h2>
        <p className="text-gray-700 mb-4">
          We don’t just build apps — we create experiences. Our apps are fast, secure, and engaging.
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Experienced development team</li>
          <li>Agile & transparent process</li>
          <li>Post-launch support</li>
          <li>Focus on UI/UX and user satisfaction</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="bg-green-800 text-white text-center py-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Turn Your Idea into a Mobile App</h2>
        <p className="mb-6">
          Let’s work together to bring your vision to life with a scalable app.
        </p>
        <a
          href="/contact"
          className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default MobileAppDevelopment;

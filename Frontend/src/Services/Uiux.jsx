// 🎨 UIUXDesign.jsx
import React from "react";
import banner from "../assets/images/banner_bimfrox.png";
import adobepho from "../assets/Service/Uiux/Adobe Photoshop.png";
import adobepr from "../assets/Service/Uiux/Adobe Premiere Pro.png";
import adobexd from "../assets/Service/Uiux/Adobe XD.png";
import Figma from "../assets/Service/Uiux/Figma.png";
import Sketch from "../assets/Service/Uiux/Sketch.png";

const UIUXDesign = () => {
  const tools = [
    { name: "Figma", img: Figma },
    { name: "Adobe XD", img: adobexd },
    { name: "Photoshop", img: adobepho },
    { name: "Premiere Pro", img: adobepr },
    { name: "Sketch", img: Sketch },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-green-800 mb-6">UI/UX Design</h1>
      <p className="text-gray-700 leading-relaxed mb-8">
        At <strong>Your Company</strong>, we believe design is more than just
        making things look good—it’s about creating meaningful, intuitive, and
        engaging experiences for users. Our UI/UX design services ensure that
        your digital products are not only visually appealing but also
        functional, accessible, and delightful to use.
      </p>

      {/* Main Banner Image */}
      <img
        src={banner}
        alt="UI/UX Design"
        className="rounded-lg shadow-lg mb-8"
      />

      {/* What We Offer */}
      <h2 className="text-2xl font-semibold text-green-700 mb-4">
        What We Offer
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Custom Web & Mobile App Interface Design</li>
        <li>Landing Page & Dashboard UI Design</li>
        <li>Brand Identity & Design Systems</li>
        <li>Interactive Prototypes & Animations</li>
        <li>Accessibility Compliance (WCAG)</li>
      </ul>

      {/* Design Process */}
      <h2 className="text-2xl font-semibold text-green-700 mt-10 mb-4">
        Our Design Process
      </h2>
      <p className="text-gray-700 mb-4">
        We follow a structured yet flexible process to ensure the best possible
        user experience:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-gray-700">
        <li>
          <strong>Discovery & Research:</strong> Understanding the business
          goals, target audience, and competitor landscape.
        </li>
        <li>
          <strong>Wireframing & User Flows:</strong> Creating low-fidelity
          layouts to define structure and navigation.
        </li>
        <li>
          <strong>Interactive Prototyping:</strong> Building clickable
          prototypes for better visualization and testing.
        </li>
        <li>
          <strong>Visual Design:</strong> Applying branding, typography, and
          color schemes to bring the interface to life.
        </li>
        <li>
          <strong>Usability Testing:</strong> Collecting feedback from real
          users to refine the design.
        </li>
      </ol>

      {/* Tools Carousel */}
      <h2 className="text-2xl font-semibold text-green-700 mt-10 mb-4">
        Tools We Use
      </h2>
      <p className="text-gray-700 mb-6">
        Our designers are experts in industry-standard tools such as:
      </p>

      <div className="relative overflow-hidden w-full">
        <div className="flex animate-scroll space-x-12">
          {[...tools, ...tools].map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[150px] bg-green-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <img
                src={tool.img}
                alt={tool.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <span className="text-green-800 font-medium">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Why UI/UX Matters */}
      <h2 className="text-2xl font-semibold text-green-700 mt-10 mb-4">
        Why UI/UX Matters
      </h2>
      <p className="text-gray-700 mb-8">
        A great design can be the difference between a user staying or leaving
        your app/website. Studies show that{" "}
        <strong>94% of first impressions are design-related</strong>. With
        effective UI/UX design, you can:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Increase user satisfaction and engagement</li>
        <li>Reduce bounce rates</li>
        <li>Improve accessibility and usability</li>
        <li>Boost conversion rates</li>
      </ul>

      {/* Case Study Example */}
      <div className="mt-12 p-6 bg-green-50 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-green-800 mb-3">
          📌 Case Study: E-Commerce Redesign
        </h3>
        <p className="text-gray-700">
          We helped a leading e-commerce store revamp their website’s UI/UX,
          resulting in a <strong>35% increase in conversions</strong> and a{" "}
          <strong>50% improvement in page load times</strong>. Our design
          changes focused on simplifying navigation, enhancing product visuals,
          and making checkout seamless.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-12 p-6 bg-green-900 text-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">
          Let’s Build Something Beautiful
        </h3>
        <p className="mb-4">
          Whether you need a new website, a mobile app interface, or a complete
          design system, our UI/UX team is ready to help.
        </p>
        <a
          href="/contact"
          className="bg-white text-green-900 px-4 py-2 rounded-lg hover:bg-green-100 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default UIUXDesign;

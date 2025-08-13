import React from 'react';
import { NavLink } from "react-router-dom";

import web from "../assets/images/web_logo.png";
import mo from "../assets/images/app_logo.png";
import seo from "../assets/images/seo_logo.png";
import digi from "../assets/images/Digi_logo.png";
import uiux from "../assets/images/uiux_logo.png";
import ContectBox from '../Components/ContectBox';

const servicesProvide = [
  {
    title: "Web Development",
    description:
      "We create dynamic, responsive websites tailored to your business needs. From e-commerce platforms to personal blogs, we ensure a powerful online presence. Our team uses the latest technologies like React, Node.js, and Next.js to build secure, high-performing, and scalable solutions. Every project is designed with user experience in mind, ensuring smooth navigation, fast loading times, and visually appealing layouts that reflect your brand identity.",
    image: web,
  },
  {
    title: "Mobile App Development",
    description:
      "We develop high-performance mobile applications for both Android and iOS platforms, designed to engage your audience and deliver seamless functionality. Our apps are optimized for speed, usability, and security, ensuring your users have an exceptional experience. Whether it’s a business app, e-commerce solution, or custom tool, we use cutting-edge frameworks like Flutter and React Native to bring your vision to life with precision.",
    image: mo,
  },
  {
    title: "UI/UX Design",
    description:
      "We design intuitive, user-friendly, and visually stunning interfaces that blend creativity with usability. By understanding your target audience, we craft designs that are not only beautiful but also functional, guiding users effortlessly through your product. From wireframes and prototypes to final polished designs, our process ensures every detail enhances engagement and user satisfaction.",
    image: uiux,
  },
  {
    title: "Digital Marketing",
    description:
      "We help you boost brand visibility and engagement through targeted marketing strategies. Our services include social media management, content marketing, email campaigns, and paid advertising that delivers measurable results. By analyzing your audience and market trends, we create campaigns that maximize reach, improve conversions, and strengthen your brand presence across multiple platforms.",
    image: digi,
  },
  {
    title: "SEO Optimization",
    description:
      "Our SEO services help your website rank higher on search engines, driving organic traffic and increasing visibility. We use advanced keyword research, on-page optimization, link building, and technical SEO strategies to improve your rankings. By continuously monitoring and adjusting, we ensure long-term results that help your business stay ahead of the competition and reach its target audience effectively.",
    image: seo,
  },
];

const Service = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      {/* Main Heading */}
      <h1 className="text-center text-5xl font-light font-serif text-gray-800">
        Services
      </h1>

      {/* Subheading */}
      <p className="text-center p-5 text-5xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        Turning Ideas into Reality
      </p>

      {/* Description */}
      <p className="text-center max-w-2xl mx-auto mt-4 text-gray-500 leading-relaxed">
        We provide innovative web solutions tailored to your needs.
        From sleek designs to robust development, we ensure your brand
        stands out in the digital world. Let’s create something amazing together!
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-8">
        <button className="bg-green-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-900 transition duration-300">
          <NavLink to="/contact">Contact Us</NavLink>
        </button>
        <button className="bg-transparent border-2 border-green-800 text-gray-900 px-6 py-3 rounded-full hover:bg-green-900 hover:text-white transition duration-300">
          <NavLink to="/projects">View Projects</NavLink>
        </button>
      </div>

      {/* Service Sections */}
      <div className="my-20 space-y-20 max-w-7xl mx-auto">
        {servicesProvide.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
          >
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-purple-700">
                {service.title}
              </h2>
              <p className="mt-4 text-gray-600">{service.description}</p>
              <button className="mt-6 inline-block bg-purple-600 text-white px-5 py-2 rounded-full shadow hover:bg-purple-700 transition duration-300">
                Explore More
              </button>
            </div>

            {/* Image Section */}
            <div className="flex-1">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
      <ContectBox />
    </div>
  );
};

export default Service;

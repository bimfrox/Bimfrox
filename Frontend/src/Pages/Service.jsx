import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async"; // ✅ Better Helmet package
motion;
// Images
import web from "../assets/images/web_logo.png";
import mo from "../assets/images/app_logo.png";
import seo from "../assets/images/seo_logo.png";
import digi from "../assets/images/Digi_logo.png";
import uiux from "../assets/images/uiux_logo.png";

import ContectBox from "../Components/ContectBox";

// ✅ Service Data
const servicesProvide = [
  {
    title: "Web Development",
    description:
      "At BIMFROX, we build responsive, high-performing, and scalable websites tailored to your business goals. From e-commerce platforms to custom web apps, our team leverages React, Node.js, and Next.js to deliver secure, SEO-friendly, and future-ready solutions that reflect your brand identity.",
    image: web,
    link: "/service/web",
    alt: "Custom Web Development Solutions by BIMFROX",
  },
  {
    title: "Mobile App Development",
    description:
      "We design and develop high-performance mobile apps for Android and iOS. Using Flutter and React Native, BIMFROX builds secure, scalable, and engaging apps for businesses, e-commerce, and startups—helping you connect with users anytime, anywhere.",
    image: mo,
    link: "/service/app",
    alt: "Mobile App Development Company BIMFROX",
  },
  {
    title: "UI/UX Design",
    description:
      "Our UI/UX design services combine creativity and usability to deliver seamless digital experiences. From wireframes to final prototypes, BIMFROX ensures intuitive navigation, engaging visuals, and user-centered interfaces that enhance customer satisfaction and brand loyalty.",
    image: uiux,
    link: "/service/uiux",
    alt: "UI/UX Design Services for Businesses",
  },
  {
    title: "Digital Marketing",
    description:
      "BIMFROX helps brands grow online with data-driven digital marketing strategies. From social media campaigns, content marketing, and email automation to PPC ads, we deliver measurable results—boosting visibility, engagement, and conversions.",
    image: digi,
    link: "/service/digital",
    alt: "Digital Marketing Services by BIMFROX",
  },
  {
    title: "SEO Optimization",
    description:
      "Our SEO experts help your website rank higher on search engines through keyword research, on-page optimization, technical SEO, and link building. BIMFROX ensures long-term organic traffic growth and competitive advantage with continuous monitoring and updates.",
    image: seo,
    link: "/service/seo",
    alt: "SEO Optimization Services by BIMFROX",
  },
];

const Service = () => {
  return (
    <div className="bg-gray-50 py-16 px-6">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Our Services | BIMFROX Digital Solutions</title>
        <meta
          name="description"
          content="BIMFROX provides professional web development, mobile app development, UI/UX design, digital marketing, and SEO optimization. Scalable, AI-powered solutions for startups and enterprises."
        />
        <meta
          name="keywords"
          content="web development company, mobile app development services, UI UX design, digital marketing agency, SEO experts, BIMFROX services"
        />
        <meta property="og:title" content="Our Services | BIMFROX Digital Solutions" />
        <meta
          property="og:description"
          content="Explore BIMFROX services: web development, mobile apps, UI/UX design, digital marketing, and SEO optimization. Helping brands grow with AI-powered digital solutions."
        />
        <meta property="og:image" content={web} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bimfrox.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Main Heading */}
      <header>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-light font-serif text-gray-800"
        >
          Our Services
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center p-5 text-5xl font-extrabold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-transparent bg-clip-text"
        >
          Turning Ideas into Reality
        </motion.p>

        {/* Intro Description */}
        <p className="text-center max-w-2xl mx-auto mt-4 text-gray-600 leading-relaxed">
          At <strong>BIMFROX</strong>, we deliver innovative, AI-powered digital solutions
          designed for businesses of all sizes. From sleek UI/UX designs to robust web development,
          our services help you grow your brand and reach new heights in the digital world.
        </p>
      </header>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-6 mt-8">
        <NavLink to="/contact">
          <button className="bg-green-700 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-green-900 transition duration-300">
            📞 Start Your Project
          </button>
        </NavLink>
        <NavLink to="/projects">
          <button className="bg-transparent border-2 border-green-700 text-gray-900 px-6 py-3 rounded-full hover:bg-green-900 hover:text-white hover:scale-105 transition duration-300">
            🌟 View Our Projects
          </button>
        </NavLink>
      </div>

      {/* Services Section */}
      <main className="my-20 space-y-20 max-w-7xl mx-auto">
        {servicesProvide.map((service, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-purple-700">
                {service.title}
              </h2>
              <p className="mt-4 text-gray-600">{service.description}</p>
              <NavLink to={service.link}>
                <button className="mt-6 inline-block bg-purple-600 text-white px-5 py-2 rounded-full shadow hover:scale-105 hover:bg-purple-700 transition duration-300">
                  Explore More
                </button>
              </NavLink>
            </div>

            {/* Image Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex-1"
            >
              <img
                src={service.image}
                alt={service.alt}
                loading="lazy" // ✅ SEO + Performance
                className="w-full h-80 object-cover rounded-xl shadow-lg hover:shadow-2xl transition"
              />
            </motion.div>
          </motion.article>
        ))}
      </main>

      {/* Contact Box */}
      <footer>
        <ContectBox />
      </footer>
    </div>
  );
};

export default Service;

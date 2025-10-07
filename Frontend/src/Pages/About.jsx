import React, { Suspense, lazy, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
motion

const FAQ = lazy(() => import("../Components/Faqs"));
const ContectBox = lazy(() => import("../Components/ContectBox"));
const Invaster = lazy(() => import("../Components/invaster"));

// Assets
import happy from "../assets/USES/happy client.png";
import ind from "../assets/USES/INDUSTRIES.png";
import social from "../assets/USES/social media.png";
import team from "../assets/USES/team.png";
import aboutImg from "../assets/Team/teamb.jpg";

import Aryan from "../assets/Team/IMG_20250815_121337.jpg";
import mehul from "../assets/Team/IMG_20250815_121139.jpg";
import Ankit from "../assets/Team/IMG_20250815_121116.jpg";
import Rahul from "../assets/Team/rahulrai.jpg";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

// Team Members
const teamMembers = [
  { name: "Mehul Jadhav", role: "CFO & Data Analyst", image: mehul },
  { name: "Ankit Maurya", role: "MERN Developer", image: Ankit },
  { name: "Aryan Chaursiya", role: "Graphics Designer", image: Aryan },
  { name: "Rahul Rai", role: "Frontend Developer", image: Rahul },
];

export default function About() {
  // ✅ SEO Meta Tags
  useEffect(() => {
    document.title = "Meet the Team Behind BIMFROX’s Digital Success";

    const description = document.createElement("meta");
    description.name = "description";
    description.content =
      "Learn about BIMFROX, a modern digital startup offering web development, UI/UX design, SEO, and digital marketing services. Meet our passionate team and see our success stories.";
    document.head.appendChild(description);

    const keywords = document.createElement("meta");
    keywords.name = "keywords";
    keywords.content =
      "BIMFROX, About BIMFROX, digital agency, web development team, startup team, UI UX design, SEO, digital marketing, company information";
    document.head.appendChild(keywords);

    return () => {
      document.head.removeChild(description);
      document.head.removeChild(keywords);
    };
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-8 max-w-7xl mx-auto px-6 py-16">
        <motion.img
          src={aboutImg}
          alt="About BIMFROX Team"
          loading="lazy"
          className="w-full lg:w-1/2 rounded-3xl shadow-2xl object-cover"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        />
        <motion.div
          className="lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            About <span className="text-green-600">BIMFROX</span>
          </h1>
          <p className="mb-8 text-lg text-gray-600 leading-relaxed">
            BIMFROX is a modern startup helping businesses achieve{" "}
            <span className="font-semibold text-green-600">digital success</span>{" "}
            through web development, digital marketing, and automation solutions.
            Our passionate team is driven by innovation and delivers impactful,
            measurable results tailored to your unique business goals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition"
          >
            <NavLink to="/contact" aria-label="Contact BIMFROX">
              📞 Contact Us Now
            </NavLink>
          </motion.button>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-16">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-gray-600 text-lg">
            Every project we deliver adds to our growing track record of success. From happy clients to impactful campaigns, these milestones inspire us to push boundaries and achieve more every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-8 text-center">
          {[
            { img: happy, title: "Happy Clients", value: "10+" },
            { img: ind, title: "Industries Served", value: "10+" },
            { img: social, title: "Social Media Posts", value: "100+" },
            { img: team, title: "Team Members", value: "6+" },
          ].map((item, idx) => (
            <motion.article
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition relative overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-16 mx-auto mb-4 drop-shadow-md"
              />
              <h3 className="text-3xl font-extrabold text-green-600">{item.value}</h3>
              <p className="text-gray-600 mt-1">{item.title}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Meet Our <span className="text-green-600">Team</span>
        </motion.h2>
        <p className="max-w-3xl mx-auto text-center text-gray-600 mb-12">
          Behind every successful project is a team of passionate innovators.{" "}
          <span className="font-bold text-black">At BIMFROX,</span> our people combine creativity, expertise, and dedication to craft solutions that are not just functional, but truly impactful.
        </p>

        {/* Mobile Carousel */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="pb-10"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group max-w-xs mx-auto"
                >
                  <img
                    src={member.image}
                    alt={`${member.name} - BIMFROX Team Member`}
                    loading="lazy"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-green-600">{member.role}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group relative"
            >
              <img
                src={member.image}
                alt={`${member.name} - BIMFROX Team Member`}
                loading="lazy"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-green-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lazy Loaded Components */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Invaster />
        <FAQ />
        <ContectBox />
      </Suspense>
    </div>
  );
}

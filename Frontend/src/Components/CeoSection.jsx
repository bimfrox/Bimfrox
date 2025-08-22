import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import ceoImg from "../assets/images/ceorahul.jpg";
motion;
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function CeoSection() {
  return (
    <section className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* CEO Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative w-full lg:w-1/3 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <img
              src={ceoImg}
              alt="CEO of BIMFROX - Rahul Chaursiya"
              loading="lazy"
              className="w-[22rem] h-[22rem] lg:w-[30rem] lg:h-[30rem] object-cover rounded-3xl shadow-2xl border-4 border-green-600"
            />
          </motion.div>
        </motion.div>

        {/* CEO Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Meet Our <span className="text-green-500">CEO</span>
          </h2>
          <h3 className="text-2xl font-semibold text-green-400 mb-4">
            Rahul Chaursiya
          </h3>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Rahul is the visionary leader behind{" "}
            <span className="text-green-400">BIMFROX</span>. A passionate
            innovator from a small town, Rahul started BIMFROX with a mission
            to empower Tier 2 & Tier 3 businesses with growth-focused digital
            solutions. His vision is to bring local talent and businesses into
            the digital spotlight.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center lg:justify-start">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-500 text-2xl transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-500 text-2xl transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-500 text-2xl transition"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaComments, FaCogs, FaRocket } from "react-icons/fa";
motion;
const steps = [
  {
    id: 1,
    title: "Connecting",
    description: "We understand your needs and start the conversation.",
    icon: <FaHandshake className="text-4xl text-green-600" />,
  },
  {
    id: 2,
    title: "Discussion",
    description: "We brainstorm and craft a plan tailored to your goals.",
    icon: <FaComments className="text-4xl text-green-600" />,
  },
  {
    id: 3,
    title: "Working",
    description: "Our team executes with precision and quality.",
    icon: <FaCogs className="text-4xl text-green-600" />,
  },
  {
    id: 4,
    title: "Deploy",
    description: "We launch and ensure smooth operation.",
    icon: <FaRocket className="text-4xl text-green-600" />,
  },
];

export default function ProcessPage() {
  return (
    <section className="py-14 bg-gradient-to-b from-gray-50 to-green-50">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-700 mb-10">
        Our Work Process
      </h2>

      <div className="relative max-w-5xl mx-auto px-4 md:px-0">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-green-400 to-green-700 hidden md:block"></div>

        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`mb-12 flex flex-col md:flex-row items-center w-full relative ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Left / Right Content Box */}
            <div className="w-full md:w-5/12 bg-white shadow-md p-5 rounded-xl relative z-10 border-l-4 border-green-500 hover:shadow-green-200 hover:scale-105 transition-transform duration-300">
              <div className="mb-2">{step.icon}</div>
              <h3 className="text-lg font-bold text-green-700">
                Step {step.id}: {step.title}
              </h3>
              <p className="text-gray-600 mt-1">{step.description}</p>
            </div>

            {/* Circle */}
            <div className="absolute md:static top-0 md:top-auto left-1/2 transform -translate-x-1/2 -translate-y-6 md:translate-y-0 w-12 h-12 bg-green-500 text-white font-bold text-lg flex items-center justify-center rounded-full shadow-lg border-4 border-white z-20">
              {step.id}
            </div>

            {/* Spacer for even/odd */}
            <div className="hidden md:block w-5/12"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

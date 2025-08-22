import React from "react";
import { motion } from "framer-motion";
motion;
// Images
import banner from "../assets/images/banner_bimfrox.png";
import Re from "../assets/Service/web/64px-React-icon.svg.png";
import boot from "../assets/Service/web/Bootstrap.png";
import css from "../assets/Service/web/CSS3.png";
import exp from "../assets/Service/web/Express.png";
import html from "../assets/Service/web/HTML5.png";
import js from "../assets/Service/web/JavaScript.png";
import mo from "../assets/Service/web/MongoDB.png";
import my from "../assets/Service/web/MySQL.png";
import Ne from "../assets/Service/web/Next.js.png";
import no from "../assets/Service/web/node.png";
import tail from "../assets/Service/web/Tailwind CSS.png";

const WebDevelopment = () => {
  const techStack = [
    { name: "React.js", logo: Re },
    { name: "Next.js", logo: Ne },
    { name: "Node.js", logo: no },
    { name: "Express.js", logo: exp },
    { name: "Tailwind CSS", logo: tail },
    { name: "Bootstrap", logo: boot },
    { name: "MongoDB", logo: mo },
    { name: "MySQL", logo: my },
    { name: "HTML5", logo: html },
    { name: "CSS3", logo: css },
    { name: "JavaScript", logo: js },
  ];

  // Duplicate array for smooth infinite scroll
  const duplicatedTech = [...techStack, ...techStack];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-green-800 mb-4">
        Web Development Services
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        At <span className="font-semibold">Bimfrox</span>, we specialize in
        creating visually stunning, highly functional, and performance-driven
        websites that deliver real business results. Whether you need a
        corporate site, e-commerce store, personal portfolio, or web
        application, we ensure every project is built with precision,
        scalability, and user experience at its core.
      </p>

      {/* Hero Image */}
      <img
        src={banner}
        alt="Web Development"
        className="w-full rounded-lg shadow-lg mb-12"
      />

      {/* Our Approach */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">
          Our Development Approach
        </h2>
        <p className="text-gray-700 mb-4">
          We believe in combining cutting-edge technology with creative design
          to deliver websites that not only look great but also perform
          exceptionally well. Every website we build is:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Responsive and mobile-friendly for all devices</li>
          <li>Optimized for fast loading and smooth navigation</li>
          <li>Built with SEO best practices to boost visibility</li>
          <li>Secure and scalable to grow with your business</li>
          <li>Custom-tailored to reflect your brand identity</li>
        </ul>
      </section>

      {/* Tech Stack Carousel */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">
          Technologies We Use
        </h2>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
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

      {/* Process */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">
          Our Development Process
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "1. Discovery & Planning",
              desc: "We analyze your business goals, target audience, and competitors to create a clear development roadmap.",
            },
            {
              title: "2. UI/UX Design",
              desc: "Our designers create visually appealing, user-friendly interfaces that align with your brand.",
            },
            {
              title: "3. Development",
              desc: "Our developers bring the design to life using modern coding standards and best practices.",
            },
            {
              title: "4. Testing & Quality Assurance",
              desc: "We rigorously test your website for speed, functionality, and security before launch.",
            },
            {
              title: "5. Deployment & Maintenance",
              desc: "We launch your website and provide ongoing support to ensure smooth performance.",
            },
          ].map((step, index) => (
            <div key={index} className="bg-gray-50 p-5 rounded-lg shadow">
              <h3 className="font-bold text-lg">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">
          Why Choose Bimfrox?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Custom solutions tailored to your business needs</li>
          <li>Experienced team of developers and designers</li>
          <li>Transparent communication throughout the project</li>
          <li>Affordable pricing without compromising quality</li>
          <li>Proven track record of successful projects</li>
        </ul>
      </section>

      {/* CTA */}
      <div className="bg-green-800 text-white text-center py-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to Build Your Website?</h2>
        <p className="mb-6">
          Let's bring your ideas to life with a stunning, high-performing
          website that drives growth.
        </p>
        <a
          href="/contact"
          className="bg-white text-green-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Get Started Today
        </a>
      </div>
    </div>
  );
};

export default WebDevelopment;

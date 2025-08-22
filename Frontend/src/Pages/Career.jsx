import React, { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ContectBox from '../Components/ContectBox';
motion;
const CareerPage = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // ✅ Set SEO meta tags manually
  useEffect(() => {
    document.title = "Careers at Bimfrox | Join Our Startup Team";

    const description = document.createElement("meta");
    description.name = "description";
    description.content =
      "Explore career opportunities at Bimfrox, a new-age startup. Learn about our hiring process, benefits, and how you can join our passionate team.";
    document.head.appendChild(description);

    const keywords = document.createElement("meta");
    keywords.name = "keywords";
    keywords.content =
      "Bimfrox careers, startup jobs, tech jobs, work at Bimfrox, join Bimfrox, hiring process";
    document.head.appendChild(keywords);

    return () => {
      document.head.removeChild(description);
      document.head.removeChild(keywords);
    };
  }, []);

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-r from-green-900 to-green-700 text-white">
        <motion.div
          className="max-w-lg"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join our team and be part of something great
          </h1>
          <p className="text-lg mb-6">
            At <span className="font-semibold">BIMFROX</span>, we’re not just building digital solutions — we’re building the future. 
            As a new-age startup fueled by innovation and passion, we create powerful solutions that inspire change and deliver real impact. 
            Be part of our mission to build something extraordinary and grow with us.
          </p>
          <a
            href="https://wa.me/918401809966"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-800 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-100 transition"
          >
            WhatsApp Me
          </a>
        </motion.div>

        <motion.img
          src="https://cdn-icons-png.flaticon.com/512/1087/1087927.png"
          alt="Team collaboration - Careers at Bimfrox"
          className="w-72 mt-8 md:mt-0"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </header>

      {/* Benefits Section */}
      <section className="px-6 md:px-20 py-16 bg-gray-50">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          Benefits of working at <span className="text-green-700">Bimfrox</span>
        </motion.h2>

        <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700 leading-relaxed">
          At BIMFROX, we believe that our people are our greatest strength. We ensure a workplace where innovation meets growth, 
          and every team member thrives. Here’s what you get when you join us:
        </p>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
            alt="Employee benefits illustration"
            className="w-72"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          <motion.ul
            className="space-y-4 text-lg"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            {[
              "Competitive Salaries & Bonuses – rewarding your skills and hard work",
              "Fun & Engaging Work Environment – where creativity and collaboration come alive",
              "Career Growth & Advancement – clear pathways to achieve your goals",
              "Collaborative Team Culture – supportive peers and open communication",
              "Training & Development Programs – continuous learning to upgrade your skills",
              "Access to Cutting-Edge Tools & Technology – work with the latest innovations",
            ].map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <FaCheckCircle className="text-green-700" />
                {benefit}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="px-6 md:px-20 py-16 bg-gradient-to-b from-green-50 to-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Joining <span className="text-green-700">Bimfrox</span> — Our Hiring Process
        </h2>

        <div className="relative flex flex-col md:flex-row items-center justify-between md:space-x-8 space-y-8 md:space-y-0">
          {[
            {
              title: 'Application Screening',
              desc: 'We carefully review every application to understand your skills, experience, and potential fit for our team.',
              icon: '📄',
            },
            {
              title: 'Technical Interview',
              desc: 'An in-depth discussion to evaluate your technical expertise, problem-solving approach, and creativity.',
              icon: '💻',
            },
            {
              title: 'Technical Task',
              desc: 'A short, practical assignment to test your skills in real-world scenarios.',
              icon: '🛠',
            },
            {
              title: 'Offer Letter',
              desc: 'If selected, you’ll receive an official offer letter and become part of the BIMFROX family!',
              icon: '📜',
            },
          ].map((step, index) => (
            <article
              key={index}
              className="relative flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg w-64 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-green-800">{step.title}</h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">{step.desc}</p>

              {index !== 3 && (
                <div className="hidden md:block absolute top-1/2 right-[-64px] w-16 h-1 bg-green-400"></div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <ContectBox />
    </main>
  );
};

export default CareerPage;

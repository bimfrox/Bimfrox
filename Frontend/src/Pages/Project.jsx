import React from "react";
import { Helmet } from "react-helmet-async"; // ✅ SEO
import ContectBox from "../Components/ContectBox";
import pizza from "../assets/Projectimg/salom pizza project.png";
import me from "../assets/Projectimg/me_Project.png";
import namo from "../assets/Projectimg/namobharat_Project.png";
import Trans from "../assets/Projectimg/transport.png";
import vellay from "../assets/Projectimg/vellaypani_project.png";
import banner from "../assets/images/banner_bimfrox.png";

const Projects = () => {
  const projectList = [
    {
      title: "Yellay Pani",
      category: "Web Development",
      img: vellay,
      description:
        "A premium bottled water brand website that blends modern design with brand storytelling to attract customers.",
      link: "https://www.valleypani.com/",
    },
    {
      title: "Salom Pizza",
      category: "Web Development",
      img: pizza,
      description:
        "A modern and responsive pizza ordering website with an intuitive UI and smooth animations, making online ordering effortless.",
      link: "https://goodguyrahuls.github.io/pizza.hub/",
    },
    {
      title: "Nmao Bharat",
      category: "Web Development",
      img: namo,
      description:
        "A dedicated site highlighting key national initiatives, projects, and events with a clean, accessible interface.",
      link: "https://goodguyrahuls.github.io/Namobharat/index.html",
    },
    {
      title: "ME",
      category: "Web Development",
      img: me,
      description:
        "A personal portfolio website showcasing creative design, skills, and professional work in an elegant layout.",
      link: "#",
    },
    {
      title: "Transport Me",
      category: "Web Development",
      img: Trans,
      description:
        "An efficient transport service booking platform designed to provide seamless vehicle management and tracking.",
      link: "#",
    },
  ];

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Projects | Bimfrox Creations</title>
        <meta
          name="description"
          content="Explore our latest web development projects at Bimfrox, including Salom Pizza, Yellay Pani, Namobharat, TransportMe, and portfolio sites."
        />
        <meta
          name="keywords"
          content="Bimfrox projects, web development, portfolio, Salom Pizza, Yellay Pani, Namobharat, TransportMe, business websites"
        />
        <meta property="og:title" content="Our Projects - Bimfrox" />
        <meta
          property="og:description"
          content="Check out Bimfrox's latest web development projects, featuring creative and modern designs."
        />
        <meta property="og:image" content={banner} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Seamless looping banner */}
      <div className="overflow-hidden relative w-full bg-white">
        <div className="flex animate-scroll">
          <img src={banner} alt="banner" className="w-full flex-shrink-" />
          <img src={banner} alt="banner" className="w-full flex-shrink-0" />
        </div>
      </div>

      <div className="p-10 md:p-20 bg-gray-50">
        {/* Heading */}
        <h1 className="text-center text-5xl font-light font-serif mb-3 animate-fade-in">
          Projects
        </h1>
        <h2 className="text-center text-3xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-bold mb-14 animate-fade-in-up">
          Our Latest Creations
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="md:w-1/2 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <span className="text-sm font-medium text-purple-500 tracking-wide uppercase">
                  {project.category}
                </span>
                <h3 className="text-2xl font-semibold text-gray-800 mt-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Gradient Divider */}
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-5"></div>

                {/* Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg shadow-md hover:scale-105 transition-transform duration-300 text-center"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContectBox />
    </>
  );
};

export default Projects;

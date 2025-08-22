import React from "react";
import elon from "../assets/Invasterimages/Elon Mask.png";
import mark from "../assets/Invasterimages/Mark.png";
import ms from "../assets/Invasterimages/1.png";
import ratan from "../assets/Invasterimages/3.png";
import ritesh from "../assets/Invasterimages/2.png";

// Sample team data
const invasters = [
  {
    name: "Elone musk",
    title: "Humour",
    image: elon,
  },
  {
    name: "Mark jukeber",
    title: "Genius",
    image: mark,
  },
  {
    name: "ms Dhoni",
    title: "Discipline",
    image: ms,
  },
  {
    name: "Ratan tata",
    title: "Ethics",
    image: ratan,
  },
  {
    name: "Ritesh Aghrwal",
    title: "Creativity",
    image: ritesh,
  },
];

const Invaster = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-5">
        Our Unseen Partners in<span className="text-green-600"> Success</span>
      </h1>
      <h3 className="text-1xl sm:text-2xl md:text-3xl italic font-semibold text-center text-gray-900 mb-12">
        Working quietly, dreaming boldly, they turn our challenges into opportunities.
      </h3>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 justify-items-center">
        {invasters.map((member, index) => (
          <div key={index} className="flex flex-col items-center group">
            {/* Member Image */}
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transform transition-transform duration-500 grayscale hover:grayscale-0"
              />
            </div>

            {/* Member Title */}
            <h3 className="mt-4 text-lg sm:text-xl md:text-lg font-semibold text-gray-800 text-center">
              {member.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Invaster;

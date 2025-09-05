import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import am from "../assets/Clients/am.jpg";
import jjb from "../assets/Clients/jjb.jpg";
import me from "../assets/Clients/me .jpg";
import tulsi from "../assets/Clients/tulsi.jpg";
import vally from "../assets/Clients/vally.jpg";

const reviews = [
  {
    id: 1,
    name: "Vally",
    joinDate: "July 2025",
    rating: 4,
    reviewDate: "Augest 20, 2025",
    reviewText1:
      "BIMFROX did an outstanding job designing our website! The design is modern, professional, and perfectly matches our brand. Their service is top-notch, very responsive, and they truly understand client needs. Highly recommended for anyone looking for high-quality web development services.",

    helpfulCount: 19,
    avatar: vally,
    feedback: "Thinking to buy another one!",
  },
  {
    id: 2,
    name: "Tulsi",
    joinDate: "July 2025",
    rating: 5,
    reviewDate: "Augest 5, 2025",
    reviewText1:
      "BIMFROX ne hamari brand visibility ko kaafi boost kiya hai unke marketing services ke through. Unki strategies se humein zyada customers mile, engagement badha aur sales grow hui. Team professional, supportive aur result-driven hai. Highly recommended.",
    helpfulCount: 24,
    avatar: tulsi,
    feedback: "Highly recommend!",
  },
  {
    id: 3,
    name: "Mehul Enterprise",
    joinDate: "July 2025",
    rating: 5,
    reviewDate: "July 25, 2025",
    reviewText1:
      "Working with BIMFROX was an excellent experience. They understood our needs well, delivered on time, and maintained smooth communication. Their professional design and development services truly supported our business growth. I highly recommend their team",
    reviewText2: "",
    helpfulCount: 12,
    avatar: me,
    feedback: "Satisfactory experience",
  },
  {
    id: 4,
    name: "JJB Oversize",
    joinDate: "june 2025",
    rating: 5,
    reviewDate: "july 1, 2025",
    reviewText1:
      "BIMFROX did an outstanding job designing our website! The design is modern, professional, and perfectly matches our brand. Their service is top-notch, very responsive, and they truly understand client needs. Highly recommended for anyone looking for high-quality web development services.",
    helpfulCount: 30,
    avatar: jjb,
    feedback: "Love it!",
  },
  {
    id: 5,
    name: "AM",
    joinDate: "June 2025",
    rating: 4,
    reviewDate: "july 15, 2025",
    reviewText1:
    "Absolutely love our new website made by BIMFROX! Looks amazing, works perfectly, and the whole process was smooth. The team is super friendly and helpful. Totally worth it",
    helpfulCount: 8,
    avatar: am,
    feedback: "Good value",
  },
];

const Star = ({ filled }) => (
  <svg
    className={`w-5 h-5 sm:w-6 sm:h-6 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 20"
  >
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
  </svg>
);

const ReviewCarousel = () => {
  const [current, setCurrent] = useState(0);
  const review = reviews[current];

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-green-300 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-400 rounded-full blur-3xl opacity-20"></div>

      <section className="w-full max-w-6xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-10 md:p-14 relative animate-fadeIn">
        <header className="mb-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            🚀 Hear It Straight From Our Clients
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Startups, enterprises, and innovators worldwide choose us for our quality, speed, and commitment. Here’s what they have to say.
          </p>
        </header>

        {/* Review Card */}
        <article className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-10 relative z-10">
          {/* Avatar */}
          <img
            src={review.avatar}
            alt={`${review.name} avatar`}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover shadow-lg border-4 border-green-200 transform hover:scale-105 transition duration-300"
          />

          {/* Review Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{review.name || "Anonymous"}</h3>
            <time className="block text-xs sm:text-sm text-gray-500 mb-3" dateTime={review.joinDate}>
              Joined <span className="font-medium">{review.joinDate}</span>
            </time>

            {/* Rating & Feedback */}
            <div className="flex items-center mb-3 space-x-1 sm:space-x-2 justify-center md:justify-start">
              {[...Array(5)].map((_, i) => (
                <Star key={i} filled={i < review.rating} />
              ))}
              <span className="ml-2 sm:ml-3 font-semibold text-green-700 text-sm sm:text-base">
                {review.feedback}
              </span>
            </div>

            <time className="block mb-3 text-xs sm:text-sm text-gray-700 font-medium" dateTime={review.reviewDate}>
              Reviewed on {review.reviewDate}
            </time>

            {/* Review Text */}
            <p className="text-gray-700 mb-2 text-sm sm:text-base leading-relaxed">{review.reviewText1}</p>
            {review.reviewText2 && (
              <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">{review.reviewText2}</p>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4 mt-4">
              <button
                onClick={() =>
                  setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
                }
                className="px-4 sm:px-6 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold flex items-center gap-2 shadow-md"
                aria-label="Previous review"
              >
                <FaArrowLeft /> <span className="hidden sm:inline">Previous</span>
              </button>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % reviews.length)}
                className="px-4 sm:px-6 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold flex items-center gap-2 shadow-md"
                aria-label="Next review"
              >
                <span className="hidden sm:inline">Next</span> <FaArrowRight />
              </button>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default ReviewCarousel;

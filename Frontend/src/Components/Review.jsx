import React, { useState } from "react";
import am from "../assets/Am Finance & consultancy.png";
import jjb from "../assets/jjb.png";
import me from "../assets/me.png";
import tulsi from "../assets/tulsi.png";
import vally from "../assets/Valley.png";

const reviews = [
  {
    id: 1,
    name: "Anonymous",
    joinDate: "August 2014",
    rating: 4,
    reviewDate: "March 3, 2017",
    reviewText1:
      "This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.",
    reviewText2:
      "It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.",
    helpfulCount: 19,
    avatar: vally,
    feedback: "Thinking to buy another one!",
  },
  {
    id: 2,
    name: "Alice Johnson",
    joinDate: "June 2019",
    rating: 5,
    reviewDate: "January 15, 2023",
    reviewText1:
      "Absolutely love this product! High quality and exceeded my expectations. Customer service was excellent as well.",
    reviewText2: "",
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
      "BIMFROX did an outstanding job designing our website! The design is modern, professional, and perfectly matches our brand. Their service is top-notch, very responsive, and they truly understand client needs. Highly recommended for anyone looking for high-quality web development services.",
    reviewText2: "",
    helpfulCount: 12,
    avatar: me,
    feedback: "Satisfactory experience",
  },
  {
    id: 4,
    name: "Sophia Lee",
    joinDate: "March 2020",
    rating: 5,
    reviewDate: "October 1, 2023",
    reviewText1:
      "Exceptional quality and beautiful design. I get compliments every time I wear it.",
    reviewText2: "Will definitely buy again!",
    helpfulCount: 30,
    avatar: jjb,
    feedback: "Love it!",
  },
  {
    id: 5,
    name: "James Brown",
    joinDate: "November 2018",
    rating: 4,
    reviewDate: "December 20, 2021",
    reviewText1:
      "Very good product with great value. Minor scratches after months but nothing serious.",
    reviewText2: "",
    helpfulCount: 8,
    avatar: am,
    feedback: "Good value",
  },
];

const Star = ({ filled }) => (
  <svg
    className={`w-6 h-6 ${filled ? "text-yellow-400" : "text-gray-300"}`}
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
    <main className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">
      <section className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-10 sm:p-14 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-green-50 via-transparent to-blue-50 pointer-events-none"></div>

        <header className="mb-10 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            🚀 Hear It Straight From the People Who Matter
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Startups, enterprises, and innovators worldwide choose us for our
            quality, speed, and commitment. Here’s what they have to say.
          </p>
        </header>

        {/* Review Card */}
        <article className="flex flex-col sm:flex-row items-center sm:items-start gap-8 relative z-10">
          {/* Avatar */}
          <img
            src={review.avatar}
            alt={`${review.name} avatar`}
            className="w-28 h-28 rounded-full object-cover shadow-xl flex-shrink-0 transform hover:scale-105 transition duration-300"
          />

          {/* Review Content */}
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-2xl font-bold text-gray-900">{review.name || "Anonymous"}</h3>
            <time
              className="block text-sm text-gray-500 mb-4"
              dateTime={review.joinDate}
            >
              Joined <span className="font-medium">{review.joinDate}</span>
            </time>

            {/* Rating & Feedback */}
            <div className="flex items-center mb-4 space-x-2 justify-center sm:justify-start">
              {[...Array(5)].map((_, i) => (
                <Star key={i} filled={i < review.rating} />
              ))}
              <span className="ml-3 font-semibold text-green-700">{review.feedback}</span>
            </div>

            <time
              className="block mb-4 text-sm text-gray-700 font-medium"
              dateTime={review.reviewDate}
            >
              Reviewed on {review.reviewDate}
            </time>

            {/* Review Text */}
            <p className="text-gray-700 mb-3 leading-relaxed">{review.reviewText1}</p>
            {review.reviewText2 && (
              <p className="text-gray-700 mb-5 leading-relaxed">{review.reviewText2}</p>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-center sm:justify-start space-x-4 mt-6">
              <button
                onClick={() =>
                  setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
                }
                className="px-6 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold transition-shadow shadow-md"
                aria-label="Previous review"
              >
                ← Previous
              </button>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % reviews.length)}
                className="px-6 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold transition-shadow shadow-md"
                aria-label="Next review"
              >
                Next →
              </button>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default ReviewCarousel;

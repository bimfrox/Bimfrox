import React, { useEffect, useState } from "react";
import con from "../assets/images/consulting.png";

const Popup = ({ onClose }) => {
  const [timeLeft, setTimeLeft] = useState(12 * 60); // 12 minutes

  // Timer countdown
  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  // Format mm:ss
  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Redirect WhatsApp
  const redirectToWhatsApp = () => {
    let phone = "918401809966"; // your WhatsApp number
    let message = "Hi, I am interested in a free consultation!";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs shadow-xs bg-opacity-60 z-40 px-4">
      {/* Popup container */}
      <div className="relative flex flex-col lg:flex-row rounded-2xl w-full max-w-4xl h-auto lg:h-[480px] shadow-2xl overflow-hidden bg-white">
        {/* Left side with background image */}
        <div
          className="w-full lg:w-1/2 h-48 lg:h-auto bg-cover bg-center"
          style={{
            backgroundImage: `url(${con})`,
          }}
        ></div>

        {/* Right side content */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center text-center text-black relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-2xl sm:text-3xl font-bold text-gray-500 hover:text-gray-800"
          >
            &times;
          </button>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 sm:mb-4 text-gray-900">
            FREE CONSULTATION
          </h2>

          <p className="mb-2 sm:mb-3 text-gray-700 text-sm sm:text-base">
            Jainiye kaise aap apne business ko growth de sakte hai!
          </p>

          <p className="font-semibold mb-6 sm:mb-8 text-green-600 text-base sm:text-lg">
            Only 20 minutes left to claim your spot!
          </p>

          {/* Timer */}
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-green-100 text-green-700 px-6 sm:px-10 py-3 sm:py-4 rounded-xl inline-block mb-6 sm:mb-8 shadow-md">
            {formatTime()}
          </div>

          {/* Button */}
          <button
            onClick={redirectToWhatsApp}
            className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 mb-4 sm:mb-6 shadow-lg w-full"
          >
            Subscribe now for Free Consultation
          </button>

          {/* No thanks */}
          <p
            onClick={onClose}
            className="text-xs sm:text-sm underline cursor-pointer hover:text-gray-700"
          >
            No, thanks. I’d rather pay full price!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Popup;

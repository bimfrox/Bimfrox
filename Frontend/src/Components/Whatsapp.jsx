import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/918401809966" // 👉 Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
    >
      {/* Outer pulsing circle */}
      <div className="relative flex items-center justify-center">
        <span className="absolute inline-flex h-16 w-16 rounded-full bg-green-500 opacity-75 animate-ping"></span>
        <span className="absolute inline-flex h-16 w-16 rounded-full bg-green-500 opacity-20"></span>

        {/* WhatsApp Icon Button */}
        <div className="relative bg-green-500 text-white rounded-full p-4 shadow-lg 
                        hover:bg-green-600 transition duration-300">
          <FaWhatsapp className="text-3xl" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppFloat;

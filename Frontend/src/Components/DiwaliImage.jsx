import React from "react";
import { useNavigate } from "react-router-dom";
import diwaliOffer from "../assets/USES/diwali bimfrox offer.png"; // adjust path as needed

const DiwaliImage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div
      onClick={handleClick}
      className="flex justify-center items-center p-4 bg-gray-50 cursor-pointer transition-transform duration-300 hover:scale-105"
    >
      <img
        src={diwaliOffer}
        alt="Diwali Offer from BIMFROX"
        className="w-full max-w-full rounded-2xl shadow-lg"
      />
    </div>
  );
};

export default DiwaliImage;

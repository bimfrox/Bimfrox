import React from "react";
import diwaliOffer from "../assets/USES/diwali bimfrox offer.png"; // adjust path as needed

const DiwaliImage = () => {
  return (
    <div className="flex justify-center items-center p-4 bg-gray-50">
      <img
        src={diwaliOffer}
        alt="Diwali Offer from BIMFROX"
        className="w-full max-w-full rounded-2xl shadow-lg"
      />
    </div>
  );
};

export default DiwaliImage;

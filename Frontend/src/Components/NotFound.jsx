// src/Pages/NotFound.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import notFoundImage from "../assets/images/404.jpeg"; // your image path

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <img
                src={notFoundImage}
                alt="Page Not Found"
                className="w-72 sm:w-120 mb-6"
            />

            <button
                onClick={() => navigate("/")}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
            >
                Go to Home
            </button>
        </div>
    );
};

export default NotFound;

import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white pt-10 pb-6">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-green-800 rounded-full hover:bg-green-700 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-green-800 rounded-full hover:bg-green-700 transition"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-green-800 rounded-full hover:bg-green-700 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://wa.me/8401809966"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-green-800 rounded-full hover:bg-green-700 transition"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Services</h2>
          <ul className="space-y-2">
            <li className="hover:text-green-300 transition">Web Development</li>
            <li className="hover:text-green-300 transition">Mobile App Development</li>
            <li className="hover:text-green-300 transition">UI/UX Design</li>
            <li className="hover:text-green-300 transition">Digital Marketing</li>
            <li className="hover:text-green-300 transition">SEO Optimization</li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Address</h2>
          <p className="text-gray-200">
            Omkar Plaza,
            104, Jiav Road, Bhestan,<br /> 
            Surat, Gujarat 395023
          </p>
          <p className="mt-3">
            Phone: <a href="tel:+918401809966" className="hover:text-green-300 transition">+91 8401809966</a>
          </p>
          <p>
            Email: <a href="mailto:bimfrox@gmail.com" className="hover:text-green-300 transition">bimfrox@gmail.com</a>
          </p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-8 border-t border-green-700 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Bimfrox. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { NavLink } from "react-router-dom";

import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-green-950 text-white"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo & About */}
        <div>
          <h1 className="text-2xl font-bold mb-4" aria-label="Bimfrox Logo">
            Bimfrox
          </h1>
          <p className="text-gray-300 leading-relaxed">
            We craft modern websites, apps, and digital experiences to help
            businesses grow online. <strong>Let’s build something amazing together.</strong>
          </p>
        </div>

        {/* Services */}
        <nav aria-label="Footer Services">
          <h2 className="text-lg font-semibold mb-4 relative">
            Our Services
            <span className="absolute left-0 bottom-0 w-12 h-[2px] bg-green-400"></span>
          </h2>
          <ul className="space-y-2 list-disc list-inside">
            {[
              { name: "Web Development", link: "/service/web" },
              { name: "Mobile App Development", link: "/service/app" },
              { name: "UI/UX Design", link: "/service/Uiux" },
              { name: "Digital Marketing", link: "//service/Digital" },
              { name: "SEO Optimization", link: "/service/Seo" },
            ].map((service, i) => (
              <li key={i}>
                <NavLink
                  to={service.link}
                  className="hover:text-green-300 transition cursor-pointer"
                >
                  {service.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <address className="not-italic" aria-label="Company Contact Info">
          <h2 className="text-lg font-semibold mb-4 relative">
            Contact Us
            <span className="absolute left-0 bottom-0 w-12 h-[2px] bg-green-400"></span>
          </h2>
          <p className="text-gray-300">
            Omkar Plaza, 104, Jiav Road, Bhestan, Surat, Gujarat 395023, India
          </p>
          <p className="mt-3">
            Phone:{" "}
            <a
              href="tel:+918401809966"
              className="hover:text-green-300 transition"
              aria-label="Phone Number"
            >
              +91 8401809966
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:bimfrox@gmail.com"
              className="hover:text-green-300 transition"
              aria-label="Email Address"
            >
              bimfrox@gmail.com
            </a>
          </p>
        </address>

        {/* Social Links */}
        <div aria-label="Social Media Links">
          <h2 className="text-lg font-semibold mb-4 relative">
            Follow Us
            <span className="absolute left-0 bottom-0 w-12 h-[2px] bg-green-400"></span>
          </h2>
          <div className="flex space-x-4">
            {[
              { icon: <FaInstagram />, link: "https://www.instagram.com/bimfrox?igsh=ZWRlNTdwYWFqaDJo", label: "Instagram" },
              { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/company/bimfrox", label: "LinkedIn" },
              { icon: <FaWhatsapp />, link: "https://wa.me/918401809966", label: "WhatsApp" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${item.label}`}
                className="p-3 bg-green-800 rounded-full hover:bg-green-600 transition transform hover:-translate-y-1"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-green-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-green-400 font-semibold">Bimfrox</span>. All
        Rights Reserved. |{" "}
        <a
          href="/privacy-policy"
          className="hover:text-green-300"
          aria-label="Privacy Policy"
        >
          Privacy Policy
        </a>{" "}
        |{" "}
        <a
          href="/terms"
          className="hover:text-green-300"
          aria-label="Terms and Conditions"
        >
          Terms & Conditions
        </a>

      </div>
    </footer>
  );
};

export default Footer;

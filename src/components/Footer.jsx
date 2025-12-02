

import React from "react";
import {
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaGithub,
} from "react-icons/fa";
import { MdOutlineMail, MdLocationOn } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  // Centralized social media data
  const socials = [
    { href: "https://facebook.com/yourprofile", icon: <FaFacebookF /> },
    { href: "https://x.com/ChrisMarti94875", icon: <FaXTwitter /> },
    { href: "https://linkedin.com/in/yourprofile", icon: <FaLinkedin /> },
    { href: "https://www.instagram.com/martinsomens", icon: <FaInstagram /> },
    { href: "https://github.com/MartinsOmens", icon: <FaGithub /> },
  ];

  const footerLinks = [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full mt-24 pb-12 pt-16 bg-black/20 backdrop-blur-md border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* === TOP GRID === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* BRAND + SOCIAL */}
          <div className="flex flex-col gap-6">
            <h2 className="text-white text-3xl font-bold">Martins</h2>
            <p className="text-gray-400 max-w-sm">
              Crafting clean, efficient, and impactful digital experiences.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-500 transition-all duration-300
                             hover:scale-110 p-2 rounded-full border border-gray-700/50 hover:border-indigo-500/50"
                >
                  {React.cloneElement(social.icon, {
                    className: "w-5 h-5",
                  })}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-gray-300 text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-indigo-500 transition duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-gray-300 text-xl font-semibold mb-4">
              Contact Info
            </h3>

            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition">
              <MdOutlineMail className="w-6 h-6" />
              <p>omenudo5050@gmail.com</p>
            </div>

            <div className="flex items-center gap-3 mt-3 text-gray-400 hover:text-white transition">
              <FaPhoneAlt className="w-4 h-4" />
              <p>+234 905 683 5590</p>
            </div>

            <div className="flex items-center gap-3 mt-3 text-gray-400 hover:text-white transition">
              <MdLocationOn className="w-6 h-6" />
              <p>Minna, Nigeria</p>
            </div>
          </div>
        </div>

        {/* === BOTTOM COPYRIGHT === */}
        <div className="text-center mt-14 border-t border-white/10 pt-6">
          <p className="text-white/60 text-sm tracking-wide">
            © {new Date().getFullYear()} Martins Chibueze — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

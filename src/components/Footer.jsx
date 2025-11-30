import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <section className="mt-24 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-10 py-20 ">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Contact
          </h2>
          <p className="text-md text-white/80 max-w-2xl mx-auto mb-8">
            I'm currently looking to join a cross-functional team that values
            improving people's lives through accessible design, or have a
            project in mind? Let's connect.
          </p>
        </div>

        {/* ----Social icons */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <a
            href="https://www.instagram.com/ibii.memon/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="Instagram"
          >
            <img
              src={assets.Insta}
              alt="Instagram"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </a>

          <a
            href="https://github.com/ibrahimmemonn"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="GitHub"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
                  3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                  0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 
                  -.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.73.084-.73 
                  1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 
                  3.492.997.108-.776.418-1.305.762-1.604-2.665-.305-5.466-1.334-5.466-5.93 
                  0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 
                  0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 
                  1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 
                  3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 
                  1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 
                  1.102.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .319.216.694.825.576 
                  C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/ibrahimmemonn/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-purple-500/30 hover:border-purple-500/50 transition-all"
            aria-label="LinkedIn"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Martins Chibueze. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

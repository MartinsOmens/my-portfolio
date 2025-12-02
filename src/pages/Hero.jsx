import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="min-h-[90vh]">
      {/* === HERO SECTION === */}
      <section
        id="hero"
        className="flex items-center justify-center overflow-hidden pt-24 px-6"
      >
        <div className="flex flex-col md:flex-row items-center gap-14 max-w-7xl w-full">
          {/* === LEFT IMAGE === */}
          <div className="relative flex items-center justify-center">
            <img
              src={assets.User}
              alt="Martins Chibueze Avatar"
              className="w-56 md:w-64 rounded-full shadow-lg"
              loading="lazy"
            />
          </div>

          {/* === RIGHT TEXT === */}
          <div className="text-center md:text-left md:flex-1 max-w-xl">
            <p className="text-lg text-white mb-2">
              Hello! I am{" "}
              <span className="text-indigo-400 font-semibold">
                Martins Chibueze
              </span>
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              A Developer who <br />
              <span className="text-indigo-400 font-display mt-2 block">
                Builds clean, efficient code that brings ideas to life
              </span>
            </h1>

            <p className="mt-4 md:mt-6 text-gray-300 text-sm md:text-base leading-relaxed">
              Your idea. My code. A digital experience crafted to perfection.
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-5">
              <a
                href="#projects"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 transition rounded-lg text-white font-medium shadow-lg text-center"
              >
                Discuss Project
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 transition rounded-lg text-white font-medium shadow-lg text-center"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* === BIO / INFO SECTION === */}
      <section className="mt-16 mb-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-bold text-white mb-4 ">
          I am a Web Developer
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
          A self-taught web developer with 2+ years of experience. I create
          meaningful digital products that strike a balance between user needs
          and business goals, delivering clean, efficient, and delightful web
          experiences.
        </p>
      </section>
    </div>
  );
};

export default Hero;

import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-[90vh]">
      {/* === HERO SECTION === */}
      <section className="relative flex items-center justify-center overflow-hidden pt-24">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-14 px-6 max-w-7xl w-full ">
          
          {/* === LEFT IMAGE === */}
          <div className="relative flex items-center justify-center">
            
            <img
              src={assets.User}
              alt="Avatar"
              className="w-[220px] md:w-[260px] relative z-10 rounded-full"
            />
          </div>

          {/* === RIGHT TEXT === */}
          <div className="text-center md:text-left max-w-xl md:mt-10 lg:mt-20">
            <p className="text-lg text-white mb-2">
              Hello! I am <span className="text-indigo-400 font-semibold">Martins Chibueze</span>
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              A Developer who <br />
              <span className="text-indigo-400 font-display mt-5">
                Builds clean, efficient code that brings ideas to life
              </span>
            </h1>

            <p className="mt-4 md:mt-6 text-gray-300 text-sm md:text-base leading-relaxed">
              Your idea. My code. A digital experience crafted to perfection.
            </p>
            
           <div className="mt-10">
             <Link to= "/project" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 transition rounded-lg text-white font-medium shadow-lg">
                View My Work
            </Link>
           </div>
            
          </div>
        </div>
      </section>

      {/* === BIO / INFO SECTION === */}
      <section className="mt-16 mb-20 px-6 max-w-7xl mx-auto flex flex-col gap-8 text-white font-display">
        <div>
          <h2 className="text-4xl md:text-3xl font-bold mb-2">I am a Web Developer</h2>
          <p className="text-gray-300">
            Currently working at <span className="text-indigo-400 font-medium">NITDA Innovation Hub, Minna</span>
          </p>
        </div>

        <div>
          <p className="text-gray-300 leading-relaxed">
            A self-taught web developer with 3+ years of experience. I create meaningful digital products
            that strike a balance between user needs and business goals, delivering clean, efficient, 
            and delightful web experiences.
          </p>
        </div>
      </section>

      
    </div>
  );
};

export default Hero;

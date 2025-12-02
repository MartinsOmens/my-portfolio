import React from "react";

const About = () => {
  const traits = [
    "Dedicated",
    "Innovative",
    "Curious",
    "Persistent",
    "Adaptable",
    "Collaborative",
  ];

  return (
    <section
      id="about"
      className="mt-20 mx-auto max-w-7xl px-6 sm:px-10 md:px-14 py-16 md:py-24"
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-6">
        ABOUT ME
      </h1>

      {/* Description */}
      <div className="flex justify-center">
        <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-gray-400 max-w-3xl text-center">
          Dedicated and detail-oriented, with a passion for turning ideas into
          clear, impactful results. Skilled at solving problems, learning new
          skills, and creating work that feels thoughtful and intentional. Below
          are my approaches to building products and services.
        </p>
      </div>

      {/* Traits */}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
        {traits.map((trait, index) => (
          <div
            key={index}
            className="
        group 
        bg-white/5 
        backdrop-blur-sm
        rounded-xl 
        px-8 py-6 
        text-white 
        font-medium 
        text-center 
        border border-white/10 
        shadow-sm

        hover:bg-indigo-600/10
        hover:border-indigo-400/60
        hover:shadow-[0_0_12px_rgba(99,102,241,0.3)]
        hover:scale-[1.04]

        transition-all 
        duration-300 
        ease-out
      "
          >
            <span
              className="
          block
          border-t-2 border-indigo-400/60 
          pt-4 
          text-md
          group-hover:text-indigo-300
          transition-colors duration-300
        "
            >
              {trait}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;

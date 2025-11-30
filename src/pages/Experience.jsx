import React from "react";
import { experienceCards } from "../data/experience";


export default function Experience() {
  return (
    <section
      id="experience"
      className="mt-24 mx-auto max-w-7xl px-10 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-display">
        Work Experience
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experienceCards.map((card) => (
          <div
            key={card.id}
            className="bg-linear-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-6 border-t-2 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 transition-shadow duration-300"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Image */}
              <div>
                <img
                  src={card.icon}
                  alt={card.title}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                {card.title}
              </h3>
              <p className="text-gray-300 text-lg mb-4">
                {card.description}
              </p>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-block"
              >
                LEARN MORE →
              </a>
              </div>

               
              </div>
            </div>
          
        ))}
      </div>
    </section>
  );
}

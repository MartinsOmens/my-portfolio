import { FaGithub } from "react-icons/fa";
import { LuGlobe } from "react-icons/lu";

export default function FeaturedProject({
  title,
  description,
  image,
  github,
  live,
}) {
  return (
    <div className="w-full py-20" id="projects">
      <p className="text-3xl sm:text-4xl md:text-5xl uppercase font-bold text-white text-center pb-10">
        Featured Projects
      </p>

      <section
        className="relative mx-auto max-w-7xl bg-[#120A1F] px-4 sm:px-6 md:px-12 py-20 
        flex flex-col lg:flex-row items-center justify-between gap-12 rounded-3xl"
      >
        {/* Left Content */}
        <div className="flex-1 space-y-6 lg:-ml-20 z-10">
          <h2 className="sm:text-xl md:text-3xl font-bold leading-tight text-white max-w-xl">
            {title}
          </h2>

          {/* Glass Card */}
          <div
            className="
            bg-white/10 backdrop-blur-2xl 
            border border-white/20 
            p-6 sm:p-8 rounded-2xl 
            shadow-xl shadow-purple-500/10 
            max-w-xl
          "
          >
            <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
              {description}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 pt-4">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-purple-400 transition-all"
              >
                <LuGlobe />
              </a>
            )}

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-purple-400 transition-all"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:pl-10">
          <div
            className="w-full rounded-3xl overflow-hidden shadow-2xl 
            border border-white/10 bg-black/20 p-2"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

       <section
        className="relative mx-auto max-w-7xl bg-[#120A1F] px-4 sm:px-6 md:px-12 py-10 
        flex flex-col lg:flex-row items-center justify-between gap-12 rounded-3xl"
      >
        {/* Left Content */}
        <div className="flex-1 space-y-6 lg:-ml-20 z-10">
          <h2 className="sm:text-xl md:text-3xl font-bold leading-tight text-white max-w-xl">
            {title}
          </h2>

          {/* Glass Card */}
          <div
            className="
            bg-white/10 backdrop-blur-2xl 
            border border-white/20 
            p-6 sm:p-8 rounded-2xl 
            shadow-xl shadow-purple-500/10 
            max-w-xl
          "
          >
            <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
              {description}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 pt-4">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-purple-400 transition-all"
              >
                <LuGlobe />
              </a>
            )}

            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-purple-400 transition-all"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:pl-10">
          <div
            className="w-full rounded-3xl overflow-hidden shadow-2xl 
            border border-white/10 bg-black/20 p-2"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

    </div>
  );
}

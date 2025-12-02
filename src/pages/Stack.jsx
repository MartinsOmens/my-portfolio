// import React from "react";
// import { assets } from "../assets/assets";

// const Stack = () => {
//   return (
//     <section
//       id="stack"
//       className="mt-20 mx-auto max-w-7xl px-6 sm:px-10 md:px-14 py-16 md:py-24"
//     >
//       <div className="flex flex-col items-center justify-center">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
//           MY STACK
//         </h1>
//         <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-gray-400 text-center">
//           Empowering Innovation with a Robust Tech Stack Now, let's delve into
//           the tools and technologies that fuel my journey of digital
//           transformation.
//         </p>
//       </div>

//       <div className="w-full flex items-center justify-center gap-4 py-15">
//         <img src={assets.HTML} alt="" className="w-25 object-contain" />
//         <img src={assets.CSS} alt="" className="w-25 object-contain" />
//         <img src={assets.Javascript} alt="" className="w-25 object-contain" />
//         <img src={assets.Bootstrap} alt="" className="w-25 object-contain" />
//         <img src={assets.Tailwind} alt="" className="w-25 object-contain" />
//         <img src={assets.React} alt="" className="w-25 object-contain" />
//         <img src={assets.Typescipt} alt="" className="w-25 object-contain" />
//         <img src={assets.Git} alt="" className="w-25 object-contain" />
//         <img src={assets.GitHub} alt="" className="w-25 object-contain" />
//       </div>
//     </section>
//   );
// };

// export default Stack;


import React from "react";
import { assets } from "../assets/assets";

const Stack = () => {
  const techStack = [
    { name: "HTML5", src: assets.HTML },
    { name: "CSS3", src: assets.CSS },
    { name: "JavaScript", src: assets.Javascript },
    { name: "Bootstrap", src: assets.Bootstrap },
    { name: "Tailwind", src: assets.Tailwind },
    { name: "React", src: assets.React },
    { name: "TypeScript", src: assets.Typescipt },
    { name: "Git", src: assets.Git },
    { name: "GitHub", src: assets.GitHub },
  ];

  return (
    <section
      id="stack"
      className="mt-20 mx-auto max-w-7xl px-6 sm:px-10 md:px-14 py-16 md:py-24"
    >
      {/* Heading */}
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          MY STACK
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-gray-400 text-center max-w-3xl">
          Empowering innovation with a robust tech stack. These are the tools
          and technologies that fuel my journey of digital transformation.
        </p>
      </div>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 items-center justify-items-center">
        {techStack.map((tech, index) => (
          <img
            key={index}
            src={tech.src}
            alt={tech.name}
            className="w-16 sm:w-20 md:w-24 lg:w-28 object-contain transition-transform duration-300 hover:scale-110"
            title={tech.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Stack;

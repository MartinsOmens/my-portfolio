import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <section
      id="about"
      className="mt-24 container mx-auto max-w-7xl px-10 py-20"
    >
      <div className="flex flex-col items-center gap-8">
        <div className="text-center">
          <h2 className="text-4xl mb-4 font-semibold">
            I'm currently looking to join a{" "}
            <span className="text-[#A362FF]">cross-functional</span> team
          </h2>
          <p className="text-lg font-medium">
            that values improving people's lives through accessible design{" "}
          </p>
        </div>
        <div className="mt-10">
          <img src={assets.Illustration} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;

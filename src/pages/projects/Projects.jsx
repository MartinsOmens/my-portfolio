import FeaturedProject from "./FeaturedProject";
import { assets } from "../../assets/assets";

export default function Projects() {
  return (
    <FeaturedProject
      title="NeuraWeb — Futuristic AI Website Landing Design"
      description="A sleek, dark-themed AI-powered landing page concept built in Figma. Designed for modern startups and futuristic digital products, it features glowing neon visuals, immersive UI, and a dynamic tone. The design encapsulates the cutting-edge possibilities of AI and tech, offering a glimpse into the future of online experiences for tech-forward companies.."
      image={assets.Project_1}
      github="https://github.com/MartinsOmens/audiophile-app"
      live="https://audiophile-task-3.netlify.app/"
    />
  );
}

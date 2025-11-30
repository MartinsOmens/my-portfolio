import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "hero" },
    { label: "About", to: "about" },
    { label: "Experience", to: "experience" },
    { label: "Projects", to: "projects" },
  ];

  return (
    <nav className="w-full bg-[#1A0B2E] fixed top-0 left-0 z-50 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 md:px-10 py-4">
        {/* Logo */}
        <div>
          <img src={assets.Logo} alt="Martins Logo" className="w-28" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="text-sm font-medium hover:text-purple-400 cursor-pointer"
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden mt-2 flex flex-col items-center gap-4 text-white bg-[#1A0B2E] py-4 rounded-b-xl shadow-lg">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="text-lg font-medium cursor-pointer"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

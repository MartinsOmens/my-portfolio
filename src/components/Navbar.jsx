import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-[#1A0B2E] py-5 px-10 fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 md:px-10">
        {/* Logo */}
        <div>
          <h1>Martins</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-white">
          <Link to="/" className="text-sm font-medium hover:text-purple-400">
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium hover:text-purple-400"
          >
            About
          </Link>
          <Link
            to="/project"
            className="text-sm font-medium hover:text-purple-400"
          >
            Projects
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-6 text-white bg-[#1A0B2E] py-6 rounded-b-xl shadow-lg">
          <Link onClick={() => setOpen(false)} to="/" className="text-lg">
            Home
          </Link>
          <Link onClick={() => setOpen(false)} to="/about" className="text-lg">
            About
          </Link>
          <Link
            onClick={() => setOpen(false)}
            to="/project"
            className="text-lg"
          >
            Projects
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="w-full bg-[#1A0B2E] py-5 fixed top-0 left-0 z-50 shadow-md">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10">
//         {/* Logo */}
//         <div className="text-white text-2xl font-bold">Martins</div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-8 text-white">
//           <Link to="/" className="text-sm font-medium hover:text-purple-400">Home</Link>
//           <Link to="/about" className="text-sm font-medium hover:text-purple-400">About</Link>
//           <Link to="/project" className="text-sm font-medium hover:text-purple-400">Projects</Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden text-white cursor-pointer" onClick={() => setOpen(!open)}>
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {open && (
//         <div className="md:hidden mt-2 flex flex-col items-center gap-4 text-white bg-[#1A0B2E] py-4 rounded-b-xl shadow-lg">
//           <Link onClick={() => setOpen(false)} to="/" className="text-lg font-medium">Home</Link>
//           <Link onClick={() => setOpen(false)} to="/about" className="text-lg font-medium">About</Link>
//           <Link onClick={() => setOpen(false)} to="/project" className="text-lg font-medium">Projects</Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

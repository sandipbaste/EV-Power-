import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full z-50 bg-white shadow-lg transition-all duration-300 ${
        scrolling ? "py-4 shadow-md" : "p-4"
      }`}
    >
      <div className="flex justify-between items-center px-6">
        {/* Logo */}
        <div className={`text-2xl font-extrabold text-blue-600 transition-all duration-300 ${
          scrolling ? "text-xl" : "text-2xl"
        }`}>
          EV POWER
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-base font-semibold text-[#413c69]">
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#" className="hover:text-blue-600">About</a></li>
          <li><a href="#" className="hover:text-blue-600">Job Openings</a></li>
          <li><a href="#" className="hover:text-blue-600">Employee Benefits</a></li>
          <li><a href="#" className="hover:text-blue-600">Joining Process</a></li>
        </ul>

        {/* Login Button */}
        <button className="hidden md:block bg-[#FFD700] text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition-all duration-300">
          Login
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-[#413c69]">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

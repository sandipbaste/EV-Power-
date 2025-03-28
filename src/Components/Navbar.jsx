import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`sticky top-0 w-full z-50 bg-white shadow-lg transition-all duration-300 ${
          scrolling ? "py-4 shadow-md" : "p-4"
        }`}
      >
        <div className="flex justify-between items-center px-6">
          {/* Logo */}
          <div className={`text-2xl font-extrabold text-blue-700 transition-all duration-300 ${
            scrolling ? "text-xl" : "text-2xl"
          }`}>
            EV POWER
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-base font-semibold text-[#413c69]">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link to="/emp-benefits" className="hover:text-blue-600">Employee Benefits</Link></li>
          </ul>

          {/* Login Button */}
          <Link
            to='/join-us' 
            className="hidden md:block bg-[#FFD700] text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500 transition-all duration-300"
          >
            JoinUs
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-blue-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
        mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div 
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <div className="text-xl font-extrabold text-blue-700">EV POWER</div>
              <button 
                className="text-gray-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <ul className="flex flex-col gap-6 text-lg font-semibold text-[#413c69]">
              <li>
                <Link 
                  to="/" 
                  className="block py-2 hover:text-blue-600"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block py-2 hover:text-blue-600"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/emp-benefits" 
                  className="block py-2 hover:text-blue-600"
                  onClick={closeMobileMenu}
                >
                  Employee Benefits
                </Link>
              </li>
            </ul>
            
            <div className="mt-auto">
              <Link
                to='/join-us' 
                className="block w-full text-center bg-[#FFD700] text-black px-4 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition-all duration-300"
                onClick={closeMobileMenu}
              >
                JoinUs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
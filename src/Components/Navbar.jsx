import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Employee Benefits', to: '/emp-benefits' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolling ? 'bg-navy/80 backdrop-blur-md shadow-lg py-2' : 'bg-navy py-3'
        } text-white`}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className={`font-extrabold ${scrolling ? 'text-xl' : 'text-2xl'} tracking-wide`}>
            EV POWER
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-10 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`transition duration-300 hover:text-gold ${
                    isActive(link.to) ? 'text-gold font-semibold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Join Us Button */}
          <Link
            to="/join-us"
            className="hidden md:inline-block bg-gold text-navy font-semibold px-5 py-2 rounded-full shadow-md hover:bg-yellow-500 transition duration-300"
          >
            Join Us
          </Link>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-navy shadow-lg transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-10">
              <div className="text-xl font-bold">EV POWER</div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <ul className="flex flex-col gap-6 text-lg">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`block py-2 px-1 rounded transition hover:text-gold ${
                      isActive(link.to) ? 'text-gold font-semibold' : 'text-white'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-10">
              <Link
                to="/join-us"
                className="block w-full text-center bg-gold text-navy font-bold px-4 py-3 rounded-full shadow hover:bg-yellow-500 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

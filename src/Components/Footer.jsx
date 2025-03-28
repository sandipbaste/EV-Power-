import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-white text-white w-full">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-blue-600">EV POWER</h3>
            <p className="text-gray-500 text-xl">
             "Empowering the future with clean energy solutions and sustainable transportation."
            </p>
          </div>
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-black">Quick Links</h4>
            <ul className="space-y-2 text-[#413c69]">
              <li>
                <Link to="/" className="text-black-300 hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-black-300 hover:text-blue-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/join-us" className="text-black-300 hover:text-blue-600 transition-colors">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Careers */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-black">Careers</h4>
            <ul className="space-y-2 text-[#413c69]">
              <li>
                <Link to="#" className="text-black-300 hover:text-blue-600 transition-colors">
                  Job Openings
                </Link>
              </li>
              <li>
                <Link to="/emp-benefits" className="text-black-300 hover:text-blue-600 transition-colors">
                  Employee Benefits
                </Link>
              </li>
              <li>
                <Link to="/join-us" className="text-black-300 hover:text-blue-600 transition-colors">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-black">Contact Us</h4>
            <address className="text-[#413c69] not-italic ">
              <p className="hover:text-blue-600 ">123 Energy Street</p>
              <p className="hover:text-blue-600 ">San Francisco, CA 94107</p>
              <p  className="mt-2 hover:text-blue-600 ">Email: info@evpower.com</p>
              <p className=" hover:text-blue-600 ">Phone: (+91) 456-7890579</p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mt-12"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <p className="text-blue-600 text-sm">
            &copy; {new Date().getFullYear()} EV POWER.All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-blue-600 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-blue-600 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-blue-600 text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
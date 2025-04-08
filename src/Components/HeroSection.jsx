import React from 'react';
import img from '../assets/slderimg.png'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-white flex items-center justify-center px-6 py-12">
      <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse items-center gap-12 p-6">
        {/* Image Section */}
        <div className="md:w-1/2 w-full mt-12 md:mt-0 flex justify-center">
          <img src={img} alt="Recruitment" className="mr-32" />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Join the Future of <span className="text-yellow-500">EV Battery Innovation</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Your journey to a <span className="font-medium">sustainable career</span> starts here!
          </p>
          <Link
            to="/join-us"
            className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-navy font-bold text-lg rounded-full shadow-lg hover:from-yellow-500 hover:to-yellow-600 transform transition-all duration-300 hover:scale-105"
          >
            🚀 Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

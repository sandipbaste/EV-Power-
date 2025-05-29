import React, {useState} from "react";
import img from "../assets/slderimg.png"; // Adjust the path as necessary
import { Link } from "react-router-dom";
import ApplicationFormModal from "./ApplicationFormModal";

const HeroSection = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-200 to-white flex items-center justify-center px-6 py-12 ">
        <div className="container mx-auto flex flex-col-reverse md:flex-row-reverse items-center gap-12 md:gap-0 md:mb-24">
          {/* Image Section */}
          <div className="md:w-1/2 w-full mt-12 md:mt-0 flex justify-center">
            <img src={img} alt="Recruitment" className="md:mr-32 mr-0" />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center text-center md:text-left p-8 space-y-6">
            <h1 className="text-4xl md:text-5xl text-center font-extrabold text-gray-900 mb-4">
              Join the Future of
              <span className="text-blue-900"> EV Battery Innovation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Your journey to a{" "}
              <span className="font-medium">sustainable career</span> starts
              here!
            </p>
            {/* <Link
              to="/join-us"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-navy font-bold text-lg rounded-full shadow-lg hover:from-blue-500 hover:to-blue-600 transform transition-all duration-300 hover:scale-105"
            >
              🚀 Apply Now
            </Link> */}

             <div className="App">
                        <Link
                          // to='join-us'
                          onClick={() => setIsModalOpen(true)}
                          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-navy font-bold text-lg rounded-full shadow-lg hover:from-blue-500 hover:to-blue-600 transform transition-all duration-300 hover:scale-105"
                        >
                          Apply Now
                        </Link>
                        
                        <ApplicationFormModal 
                          isOpen={isModalOpen} 
                          onClose={() => setIsModalOpen(false)} 
                        />
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

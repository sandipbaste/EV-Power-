import React from 'react'

const HeroSection = () => {
  return (
    <>
      <div className="h-[500px] text-gray-900">
          {/* Hero Section */}
          <div className="bg-blue-600 h-[550px] text-white py-40 text-center">
            <h1 className="text-4xl font-bold">Join the Future of EV Battery Innovation</h1>
            <p className="text-lg mt-4">Your journey to a sustainable career starts here!</p>
            <button className="mt-6 px-6 py-3 bg-[#FFD700] text-black font-semibold rounded-lg shadow-lg">
              Apply Now
            </button>
          </div>
      </div> 
    </>
  )
}

export default HeroSection
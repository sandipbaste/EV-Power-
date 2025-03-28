import React from 'react'

const HeroSection = () => {
  return (
    <>
      <div className="h-[500px] text-gray-900">
          {/* Hero Section */}
          <div className="bg-blue-600 h-[550px] text-white py-40 text-center">
            <h1 className="text-4xl font-bold animate-bounce ">Join the Future of EV Battery Innovation</h1>
            <p className="text-lg mt-4">Your journey to a sustainable career starts here!</p>
            <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  text-white font-semibold rounded-lg shadow-lg">
              Apply Now
            </button>
          </div>
      </div> 
    </>
  )
}

export default HeroSection
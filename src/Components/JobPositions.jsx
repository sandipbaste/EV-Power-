import React from "react";

const JobPositions = () => {
  return (
    <div className="container mx-auto my-12 p-6">
      <h2 className="text-3xl text-center mb-8 text-blue-700 font-bold">
        Current Job Positions
      </h2>

      <div className="flex flex-col space-y-6">
        {/* Job Position 1 */}
        <div className="flex items-center justify-between bg-gray-100 p-6 rounded-lg shadow-md border-l-8 border-blue-700">
          <div>
            <h3 className="text-xl font-bold text-blue-600">Software Engineer</h3>
            <p className="text-gray-700">Experience: 2+ Years | Location: Remote</p>
          </div>
          <button className="bg-[#FFD700] text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500">
            Apply Now
          </button>
        </div>

        {/* Job Position 2 */}
        <div className="flex items-center justify-between bg-gray-100 p-6 rounded-lg shadow-md border-l-8 border-blue-700">
          <div>
            <h3 className="text-xl font-bold text-blue-600">Battery Technician</h3>
            <p className="text-gray-700">Experience: 1+ Years | Location: On-site</p>
          </div>
          <button className="bg-[#FFD700] text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500">
            Apply Now
          </button>
        </div>

        {/* Job Position 3 */}
        <div className="flex items-center justify-between bg-gray-100 p-6 rounded-lg shadow-md border-l-8 border-blue-700">
          <div>
            <h3 className="text-xl font-bold text-blue-600">HR Manager</h3>
            <p className="text-gray-700">Experience: 3+ Years | Location: Hybrid</p>
          </div>
          <button className="bg-[#FFD700] text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500">
            Apply Now
          </button>
        </div>

        {/* Job Position 4 */}
        <div className="flex items-center justify-between bg-gray-100 p-6 rounded-lg shadow-md border-l-8 border-blue-700">
          <div>
            <h3 className="text-xl font-bold text-blue-600">Marketing Specialist</h3>
            <p className="text-gray-700">Experience: 2+ Years | Location: Remote</p>
          </div>
          <button className="bg-[#FFD700] text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500">
            Apply Now
          </button>
        </div>
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-[#FFD700] text-black px-6 py-2 rounded-lg shadow-md hover:bg-yellow-500">
          View More
        </button>
      </div>
    </div>
  );
};

export default JobPositions;

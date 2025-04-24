import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const JobPositions = () => {
  // Initial job positions
  const initialJobs = [
    { id: 1, title: "Software Engineer", details: "Experience: 2+ Years", location: "Remote" },
    { id: 2, title: "Battery Technician", details: "Experience: 1+ Years", location: "On-site" },
    { id: 3, title: "HR Manager", details: "Experience: 3+ Years", location: "Hybrid" },
    { id: 4, title: "Marketing Specialist", details: "Experience: 2+ Years", location: "Remote" },
  ]

  // Additional job positions
  const additionalJobs = [
    { id: 5, title: "Electrical Engineer", details: "Experience: 3+ Years", location: " On-site" },
    { id: 6, title: "Customer Support", details: "Experience: 1+ Years", location: "Remote" },
    { id: 7, title: "Sales Executive", details: "Experience: 2+ Years ", location: " Hybrid" },
    { id: 8, title: "Data Analyst", details: "Experience: 2+ Years ", location: "Remote" },
  ];

  const [showAllJobs, setShowAllJobs] = useState(false);
  const [jobs, setJobs] = useState(initialJobs);

  const navigate = useNavigate()

  const handleApplyNow = (title, details, location) => {
    navigate(`/experience-form/${title}/${details}/${location}`)
  }

  const toggleJobs = () => {
    if (showAllJobs) {
      setJobs(initialJobs);
    } else {
      setJobs([...initialJobs, ...additionalJobs]);
    }
    setShowAllJobs(!showAllJobs);
  };

  return (
    <div className="container mx-auto my-12 p-6">
      <h2 className="text-3xl text-center mb-8 text-blue-700 font-bold">
        Current Job Positions
      </h2>

      <div className="flex flex-col space-y-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex flex-col md:flex-row md:items-center md:justify-between bg-gray-100 p-6 rounded-lg shadow-md border-l-8 border-blue-700"
          >
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-blue-600">{job.title}</h3>
              <p className="text-gray-700">{job.details}</p>
              <p className="text-gray-700">{job.location}</p>
            </div>
            <button
              onClick={() => handleApplyNow(job.title, job.details, job.location)}
              className="bg-gradient-to-r bg-[#FFD700] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-black px-4 py-2 rounded-lg shadow-md w-full md:w-auto"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* View More/Show Less Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={toggleJobs}
          className="px-6 py-2 rounded-lg shadow-md bg-gradient-to-r bg-[#FFD700] focus:ring-4 focus:outline-none transition-colors"
        >
          {showAllJobs ? "Show Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default JobPositions;

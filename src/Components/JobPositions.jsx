import React, { useState } from "react";
import { Briefcase, MapPin, Clock } from "lucide-react";

const JobPositions = () => {
  const initialJobs = [
    {
      id: 1,
      title: "Software Engineer",
      details: "Experience: 2+ Years | Location: Remote",
    },
    {
      id: 2,
      title: "Battery Technician",
      details: "Experience: 1+ Years | Location: On-site",
    },
    {
      id: 3,
      title: "HR Manager",
      details: "Experience: 3+ Years | Location: Hybrid",
    },
    
  ];

  const additionalJobs = [
    {
      id: 4,
      title: "Marketing Specialist",
      details: "Experience: 2+ Years | Location: Remote",
    },
    {
      id: 5,
      title: "Electrical Engineer",
      details: "Experience: 3+ Years | Location: On-site",
    },
    {
      id: 6,
      title: "Customer Support",
      details: "Experience: 1+ Years | Location: Remote",
    },
    {
      id: 7,
      title: "Sales Executive",
      details: "Experience: 2+ Years | Location: Hybrid",
    },
    {
      id: 8,
      title: "Data Analyst",
      details: "Experience: 2+ Years | Location: Remote",
    },
    {
      id: 9,
      title: "Data Analyst",
      details: "Experience: 2+ Years | Location: Remote",
    },
  ];

  const [showAllJobs, setShowAllJobs] = useState(false);
  const [jobs, setJobs] = useState(initialJobs);

  const toggleJobs = () => {
    if (showAllJobs) {
      setJobs(initialJobs);
    } else {
      setJobs([...initialJobs, ...additionalJobs]);
    }
    setShowAllJobs(!showAllJobs);
  };

  return (
    <section className="bg-[#f0f8ff] py-16 text-gray-900">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-center mb-12 text-[#1e3a8a]">
      Current Job Positions
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-white rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl transition duration-300 group"
        >
          <div className="bg-[#1e3a8a] text-white p-4 rounded-t-2xl flex justify-center items-center">
            <Briefcase size={32} />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-[#1e3a8a] group-hover:underline">
              {job.title}
            </h3>
            <div className="text-gray-700 text-sm flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#1e3a8a]" />
                <span>{job.details.split("|")[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#1e3a8a]" />
                <span>{job.details.split("|")[1]}</span>
              </div>
            </div>
            <button className="mt-4 w-full bg-[#2563eb] hover:bg-[#1e3a8a] text-white font-semibold py-2 rounded-lg transition duration-300">
              Apply Now
            </button>
          </div>
        </div>
      ))}
    </div>

    <div className="flex justify-center mt-10">
      <button
        onClick={toggleJobs}
        className="px-6 py-2 bg-[#1e3a8a] hover:bg-[#1d4ed8] text-white font-semibold rounded-lg shadow-md transition duration-300"
      >
        {showAllJobs ? "Show Less" : "View More"}
      </button>
    </div>
  </div>
</section>
  );
}

export default JobPositions;

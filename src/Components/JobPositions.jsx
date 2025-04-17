import React, { useState } from "react";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const JobPositions = () => {
  const navigate = useNavigate()
  const initialJobs = [
    {
      id: 1,
      title: "Software Engineer",
      details: "Experience: 2+ Years",
      location: "Pune"
    },
    {
      id: 2,
      title: "Battery Technician",
      details: "Experience: 1+ Years",
      location: "Chennai"
    },
    {
      id: 3,
      title: "HR Manager",
      details: "Experience: 3+ Years",
      location: "Mumbai"
    },
    
  ];

  const additionalJobs = [
    {
      id: 4,
      title: "Marketing Specialist",
      details: "Experience: 2+ Years" ,
      location: "Banglore",
    },
    {
      id: 5,
      title: "Electrical Engineer",
      details: "Experience: 3+ Years",
       location: "Pune"
    },
    {
      id: 6,
      title: "Customer Support",
      details: "Experience: 1+ Years",
      location: "Nashik"
    },
    {
      id: 7,
      title: "Sales Executive",
      details: "Experience: 2+ Years",
      location: "Nashik"
    },
    {
      id: 8,
      title: "Data Analyst",
      details: "Experience: 2+ Years",
      location: "Pune"
    },
    {
      id: 9,
      title: "Data Analyst",
      details: "Experience: 2+ Years",
      location: "Delhi"
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

  const handleApplyNow = (title, details, location) =>{
    navigate(`/experience-form/${title}/${details}/${location}`)
  }

  return (
    <section className="bg-white py-16 text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#1e293b]">
          Current Job Positions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border-l-8 border-[#1e293b] rounded-xl shadow-md p-6 transition duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-[#1e293b]" />
                <h3 className="text-xl font-bold">{job.title}</h3>
              </div>
              <div className="text-sm text-gray-700 flex flex-col gap-2 mb-6">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-[#1e293b]" />
                  <span>{job.details}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#1e293b]" />
                  <span>{job.location}</span>
                </div>
              </div>
              <button onClick={()=>handleApplyNow(job.title, job.details, job.location)} className="w-full bg-[#1e293b] hover:bg-[#334155] text-[#FFD700] font-semibold py-2 rounded-lg shadow-md transition duration-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={toggleJobs}
            className="px-6 py-2 bg-[#FFD700] hover:bg-yellow-500 text-[#1e293b] font-semibold rounded-lg shadow-md transition duration-300"
          >
            {showAllJobs ? "Show Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobPositions;
import React, { useEffect, useState } from "react";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const JobPositions = () => {
  const navigate = useNavigate();

  const initialJobs = [
    {
      img: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=",
      title: "Software Engineer",
      details: "Experience: 2+ Years",
      location: "Pune",
      description:
        "Responsible for designing, developing, testing, and maintaining software applications.",
    },

    
    {
      img: "https://images.pexels.com/photos/9243229/pexels-photo-9243229.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Battery Technician",
      details: "Experience: 1+ Years",
      location: "Chennai",
      description:
        "Responsible for assembling, testing, and maintaining battery systems.",
    },
    {
      img: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "HR Manager",
      details: "Experience: 3+ Years",
      location: "Mumbai",
      description:
        "Responsible for managing HR functions including recruitment, employee relations, and performance management.",
    },
    {
      img: "https://images.pexels.com/photos/5292195/pexels-photo-5292195.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: " Battery Design Engineer",
      details: "Experience: 3+ Years",
      location: "Bengaluru",
      description:
        "Responsible for designing and prototyping lithium-ion battery packs and modules.",
    },
  ];

  const additionalJobs = [
    {
      img: "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Marketing Specialist",
      details: "Experience: 2+ Years",
      location: "Banglore",
      description:
        "Responsible for developing and executing marketing strategies to promote products and services.",
    },
    {
      img: "https://images.pexels.com/photos/9242289/pexels-photo-9242289.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Electrical Engineer",
      details: "Experience: 3+ Years",
      location: "Pune",
      description:
        "Responsible for designing, developing, and testing electrical systems and components.",
    },
    {
      img: "https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Customer Support",
      details: "Experience: 1+ Years",
      location: "Nashik",
      description:
        "Responsible for providing support to customers via phone, email, and chat.",
    },
    {
      img: "https://images.pexels.com/photos/8463145/pexels-photo-8463145.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Sales Executive",
      details: "Experience: 2+ Years",
      location: "Nashik",
      description:
        "Responsible for selling products and services to customers.",
    },
    {
      img: "https://images.pexels.com/photos/19226354/pexels-photo-19226354/free-photo-of-engineer-fixing-core-swith-in-data-center-room.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Battery Management System (BMS) Engineer",
      details: "Experience: 2+ Years",
      location: "Pune",
      description:
       " Develop and maintain battery monitoring systems, firmware, and algorithms for safety and efficiency.",
    },
    {
      img: "https://images.pexels.com/photos/3862630/pexels-photo-3862630.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Thermal Systems Engineer",
      details: "Experience: 2+ Years",
      location: "Chennai",
      description:
        "Analyze and design thermal management systems for EV batteries to maintain performance and safety.",
    },
    {
      img: "https://images.pexels.com/photos/8940473/pexels-photo-8940473.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Battery Cell Research Scientist",
      details: "Experience: 2+ Years",
      location: "Hyderabad",
      description:
        "Conduct research to develop next-generation battery cell chemistries and improve energy density",
    },
    {
      img: "https://images.pexels.com/photos/19895881/pexels-photo-19895881/free-photo-of-factory-worker-in-a-safety-helmet.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Quality Assurance Engineer",
      details: "Experience: 2+ Years",
      location: "Delhi",
      description:
        "Conduct quality checks, analyze defects, and implement corrective actions in battery production.",
    },
  ];

  const [showAllJobs, setShowAllJobs] = useState(false);
  const allJobs = [...initialJobs, ...additionalJobs];

  const toggleJobs = () => {
    setShowAllJobs(!showAllJobs);
  };

  const handleReadMore = (img, title, details, location, description) => {
    navigate(`/job-details/${img}/${title}/${details}/${location}/${description}`);
  };


  console.log("Jobs:", showAllJobs);
  return (
    <section className="bg-white py-16 text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#1e293b]">
          Current Job Positions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {(showAllJobs ?   allJobs : allJobs.slice(0, initialJobs.length)).map(
            (job, index) => (
              
              <div
                key={`${job.title}-${index}`}
                className="bg-white border-l-2 border-[#1e293b] rounded-xl shadow-md p-6 transition duration-300 hover:scale-[1.02] hover:shadow-2xl w-full flex flex-col justify-between h-[370px] w-[320px] mb-10"
              >
               
                {job.img && (
                  <img
                    src={job.img}
                    alt={job.title}
                    className="h-40 w-full object-cover rounded border"

                  />
                )}
                <div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="text-[#1e293b]" />
                    <h3 className="text-xl font-bold">{job.title}</h3>
                  </div>
                  <div className="text-sm text-gray-700 flex flex-col gap-2 mt-3">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-[#1e293b]" />
                      <span>{job.details}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-[#1e293b]" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() =>
                    handleReadMore(
                      job.img,
                      job.title,
                      job.details,
                      job.location,
                      job.description

                    )
                  }
                  className="text-blue-500 underline hover:text-blue-700 mt-4 text-left"
                >
                  View Job...
                </button>
              </div>
            )
          )}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={toggleJobs}
            className="bg-gradient-to-r from-blue-300 to-blue-400 text-navy font-bold px-4 py-2 rounded-lg shadow-md hover:from-blue-500 hover:to-blue-600 transform transition-all duration-300 hover:scale-105"
          >
            {showAllJobs ? "Show Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobPositions;

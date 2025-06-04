import React, { useEffect, useState } from "react";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const JobPositions = () => {
  const navigate = useNavigate();

  const initialJobs = [
    {
      img: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600",
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
      img: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "HR Manager",
      details: "Experience: 3+ Years",
      location: "Mumbai",
      description:
        "Responsible for managing HR functions including recruitment, employee relations, and performance management.",
    },
  ];

  const additionalJobs = [
    {
      img: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Marketing Specialist",
      details: "Experience: 2+ Years",
      location: "Banglore",
      description:
        "Responsible for developing and executing marketing strategies to promote products and services.",
    },
    {
      img: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Electrical Engineer",
      details: "Experience: 3+ Years",
      location: "Pune",
      description:
        "Responsible for designing, developing, and testing electrical systems and components.",
    },
    {
      img: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Customer Support",
      details: "Experience: 1+ Years",
      location: "Nashik",
      description:
        "Responsible for providing support to customers via phone, email, and chat.",
    },
    {
      img: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Sales Executive",
      details: "Experience: 2+ Years",
      location: "Nashik",
      description:
        "Responsible for selling products and services to customers.",
    },
    {
      img: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Data Analyst",
      details: "Experience: 2+ Years",
      location: "Pune",
      description:
        "Responsible for analyzing data and providing insights to support business decisions.",
    },
    {
      img: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Data Analyst",
      details: "Experience: 2+ Years",
      location: "Delhi",
      description:
        "Responsible for analyzing data and providing insights to support business decisions.",
    },
    {
      img: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Data Analyst",
      details: "Experience: 2+ Years",
      location: "Delhi",
      description:
        "Responsible for analyzing data and providing insights to support business decisions.",
    },
    {
      img: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Data Analyst",
      details: "Experience: 2+ Years",
      location: "Delhi",
      description:
        "Responsible for analyzing data and providing insights to support business decisions.",
    },
  ];

  const [showAllJobs, setShowAllJobs] = useState(false);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const syncJobs = async () => {
      const allJobs = [...initialJobs, ...additionalJobs];
      try {
        const response = await axios.post(
          "http://localhost:5000/api/job-position",
          { jobs: allJobs }
        );
        if (response.status === 200) {
          setJobs(response.data.jobs);
        }
      } catch (error) {
        console.error("Error syncing jobs:", error);
        setJobs(allJobs); // fallback if API fails
      }
    };
    syncJobs();
  }, []);

  const toggleJobs = () => {
    setShowAllJobs(!showAllJobs);
  };

  const handleReadMore = (title, details, location, description, img) => {
    navigate(`/job-details/${img}/${title}/${details}/${location}/${description}`);
  };

  return (
    <section className="bg-white py-16 text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#1e293b]">
          Current Job Positions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {(showAllJobs ? jobs : jobs.slice(0, initialJobs.length)).map(
            (job, index) => (
              <div
                key={`${job.title}-${index}`}
                className="bg-white border-l-2 border-[#1e293b] rounded-xl shadow-md p-6 transition duration-300 hover:scale-[1.02] hover:shadow-2xl w-full flex flex-col justify-between h-[370px] w-[320px] mb-10"
              >
                {job.img && (
                  <img
                    src={job.img}
                    alt={job.title}
                    className="mb-4 rounded object-cover h-40 w-full"
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
                      job.title,
                      job.details,
                      job.location,
                      job.description,
                      job.img
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

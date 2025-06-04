import React, { useEffect, useState }
from "react";
import { Briefcase, MapPin, Clock } from "lucide-react";
// Removed useNavigate as we are using a modal now
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import ExperienceForm from './ExperienceForm'; // Assuming ExperienceForm.js is in the same directory or adjust path

const JobPositions = () => {
  const [jobs, setJobs] = useState([]); // Will hold jobs from backend or initial set
  const [isLoading, setIsLoading] = useState(true); // To show loading state
  const [error, setError] = useState(null); // To show error state

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  // Hardcoded initial and additional jobs (as a fallback or for initial sync)
  const initialJobsList = [
    { title: "Software Engineer", details: "Experience: 2+ Years", location: "Pune" },
    { title: "Battery Technician", details: "Experience: 1+ Years", location: "Chennai" },
    { title: "HR Manager", details: "Experience: 3+ Years", location: "Mumbai" },
  ];

  const additionalJobsList = [
    { title: "Marketing Specialist", details: "Experience: 2+ Years", location: "Banglore" },
    { title: "Electrical Engineer", details: "Experience: 3+ Years", location: "Pune" },
    { title: "Customer Support", details: "Experience: 1+ Years", location: "Nashik" },
    { title: "Sales Executive", details: "Experience: 2+ Years", location: "Nashik" },
    { title: "Data Analyst", details: "Experience: 2+ Years", location: "Pune" },
    { title: "Data Analyst", details: "Experience: 2+ Years", location: "Delhi" },
  ];

  const jobsToSync = [...initialJobsList, ...additionalJobsList];

  useEffect(() => {
    const fetchAndSyncJobs = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Attempt to sync local jobs; backend might create/update/return its list
        // The backend should ideally handle duplicates or decide how to merge.
        // For this example, we assume the backend returns the definitive list of jobs.
        const response = await axios.post('http://localhost:5000/api/job-position', { jobs: jobsToSync });
        if (response.data && Array.isArray(response.data.jobs)) {
          setJobs(response.data.jobs);
        } else {
          // If backend response is not as expected, fall back to local list for display
          console.warn("Backend response for jobs was not as expected. Using local job list.");
          setJobs(jobsToSync);
          // Optionally, set an error message here if strict backend data is required.
          // setError("Could not verify job list with the server.");
        }
      } catch (error) {
        console.error("Error syncing/fetching jobs:", error);
        setError("Failed to load job positions from the server. Displaying a default list.");
        // Fallback to the initial local list if API fails
        setJobs(jobsToSync);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAndSyncJobs();
  }, []); // Empty dependency array: runs once on mount

  const [showAllJobs, setShowAllJobs] = useState(false);
  const jobsToShowInitially = 3; // Number of jobs to show when "Show Less"

  const toggleJobs = () => {
    setShowAllJobs(!showAllJobs);
  };

  const handleOpenModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  if (isLoading) {
    return (
      <section className="bg-white py-16 text-gray-900">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-700">Loading Job Positions...</p>
        </div>
      </section>
    );
  }

  if (error && jobs.length === 0) { // Show error only if no jobs could be loaded at all
    return (
      <section className="bg-white py-16 text-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-xl text-gray-700">{error}</p>
          <p className="mt-4">Please try refreshing the page or contact support.</p>
        </div>
      </section>
    );
  }


  const displayedJobs = showAllJobs ? jobs : jobs.slice(0, jobsToShowInitially);

  return (
    <section className="bg-white py-16 text-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#1e293b]">
          Current Job Positions
        </h2>
        {error && <p className="text-center text-red-500 mb-8">{error} (Displaying cached/default list)</p>}


        {displayedJobs.length === 0 && !isLoading && (
          <p className="text-center text-xl text-gray-600">
            No job positions currently available. Please check back later.
          </p>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedJobs.map((job, index) => (
            <div
              key={`${job.title}-${job.location}-${index}`} // Consider a unique ID from backend if available
              className="bg-white border-l-8 border-[#1e293b] rounded-xl shadow-lg p-6 transition duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-[#1e293b] w-6 h-6" />
                  <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
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
              </div>
              <button
                onClick={() => handleOpenModal(job)} // Pass the whole job object
                className="w-full bg-[#1e293b] hover:bg-[#334155] text-[#FFD700] font-semibold py-3 rounded-lg shadow-md transition duration-300 mt-4"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {jobs.length > jobsToShowInitially && (
          <div className="flex justify-center mt-12">
            <button
              onClick={toggleJobs}
              className="px-8 py-3 bg-[#FFD700] hover:bg-yellow-500 text-[#1e293b] font-semibold rounded-lg shadow-lg transition duration-300 text-lg"
            >
              {showAllJobs ? "Show Less" : "View More"}
            </button>
          </div>
        )}
      </div>

      {selectedJob && (
        <ExperienceForm
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          initialTitle={selectedJob.title}
          initialDetails={selectedJob.details}
          initialLocation={selectedJob.location}
        />
      )}
    </section>
  );
}

export default JobPositions;
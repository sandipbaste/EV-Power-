import React from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
  const { title, details, location, description, img } = useParams();

  return (
    <section className="bg-white py-16 text-gray-900">
      <div className="container mx-auto px-6">
        <img src={img} alt="" />
        <h2 className="text-4xl font-bold text-[#1e293b] mb-6">{title}</h2>
        <div className="text-lg text-gray-800 space-y-4">
          <p><strong>Experience Required:</strong> {details}</p>
          <p><strong>Location:</strong> {location}</p>
          <p className="mt-4">
            <strong>Job Description:</strong> {description}
          </p>
        </div>

         <button
              onClick={() => handleApplyNow(job.img, job.title, job.details, job.location)}
              className="w-[150px] bg-[#1e293b] hover:bg-[#334155] text-[#FFD700] font-semibold py-2 rounded-lg shadow-md transition duration-300 mt-6"
            >
              Apply Now
            </button>
      </div>
    </section>
  );
};

export default JobDetails;
 
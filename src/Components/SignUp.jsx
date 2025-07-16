import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const JobDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { job } = location.state || {};

  if (!job) {
    return (
      <div className="p-8 text-center">
        <p>Job not found.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Jobs
        </button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back
      </button>
      <div className="max-w-3xl mx-auto bg-white p-6 shadow rounded">
        <img
          src={job.image}
          alt={job.title}
          className="w-full h-60 object-cover rounded mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
        <p className="text-gray-600 mb-1">{job.details}</p>
        <p className="text-gray-600 mb-4">{job.location}</p>
        <p className="text-lg text-gray-800">{job.description}</p>
      </div>
    </div>
  );
};

export default JobDetails;

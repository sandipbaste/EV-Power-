import React from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { img, title, details, location, description } = useParams();

  return (
    <section className="py-16 bg-gray-50 text-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-6">
          {img && (
            <img
              src={decodeURIComponent(img)}
              alt={decodeURIComponent(title)}
              className="w-full h-64 object-cover rounded mb-6"
            />
          )}
          <h2 className="text-3xl font-bold mb-2">{decodeURIComponent(title)}</h2>
          <p className="text-gray-600 mb-2">{decodeURIComponent(details)}</p>
          <p className="text-gray-600 mb-4">Location: {decodeURIComponent(location)}</p>
          <p className="text-gray-800">{decodeURIComponent(description)}</p>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;

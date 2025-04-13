import { useState } from 'react';
import { useParams } from 'react-router-dom';
const ExperienceForm = () => {

  const {id,title,details} = useParams()
  const [formData, setFormData] = useState({
    isExperienced: false,
    experiences: [{
      companyName: '',
      position: '',
      durationFrom: '',
      durationTo: '',
      workModule: '',
      experienceFile: null,  // New field for file upload
    }]
  });

  const [fieldFocused, setFieldFocused] = useState({
    position: false
  });

  const handleExperienceChange = (index, e) => {
    const { name, value, files } = e.target;
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[index][name] = files ? files[0] : value;
    setFormData(prev => ({
      ...prev,
      experiences: updatedExperiences
    }));
  };

  const handleExperienceFocus = (index, field) => {
    setFieldFocused(prev => ({
      ...prev,
      [`${field}${index}`]: true
    }));
  };

  const handleExperienceBlur = (index, field) => {
    if (!formData.experiences[index][field]) {
      setFieldFocused(prev => ({
        ...prev,
        [`${field}${index}`]: false
      }));
    }
  };

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        {
          companyName: '',
          position: '',
          durationFrom: '',
          durationTo: '',
          workModule: '',
          experienceFile: null,  // Add empty file input
        }
      ]
    }));
  };

  const removeExperience = (index) => {
    const updatedExperiences = formData.experiences.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      experiences: updatedExperiences
    }));
  };

  // Basic validation for required fields
  const isFormValid = formData.experiences.every(exp => 
    exp.companyName && exp.position && exp.durationFrom
  );

  const handleSubmit = () => {
    console.log(formData);
    // You can handle submission here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
        
        {/* Work Experience Details */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Work Experience Details</h3>
          <h1>{title}</h1>
          <h1>{details}</h1>
          {formData.experiences.map((exp, index) => (
            <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => removeExperience(index)}
                  className="ml-auto block text-red-600 text-sm mb-2"
                >
                  Remove Experience
                </button>
              )}

              {/* Company Name */}
              <div className="relative mb-4">
                <label 
                  htmlFor={`companyName-${index}`} 
                  className={`absolute left-3 transition-all duration-200 ${fieldFocused[`companyName${index}`] || exp.companyName ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2' : 'top-1/2 text-gray-500 -translate-y-1/2'}`}
                >
                  Company Name
                </label>
                <input
                  id={`companyName-${index}`}
                  type="text"
                  name="companyName"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onFocus={() => handleExperienceFocus(index, 'companyName')}
                  onBlur={() => handleExperienceBlur(index, 'companyName')}
                  value={exp.companyName}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>

              {/* Position */}
              <div className="relative mb-4">
                <label 
                  htmlFor={`position-${index}`} 
                  className={`absolute left-3 transition-all duration-200 ${fieldFocused[`position${index}`] || exp.position ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2' : 'top-1/2 text-gray-500 -translate-y-1/2'}`}
                >
                  Position
                </label>
                <input
                  id={`position-${index}`}
                  type="text"
                  name="position"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onFocus={() => handleExperienceFocus(index, 'position')}
                  onBlur={() => handleExperienceBlur(index, 'position')}
                  value={exp.position}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Duration From */}
                <div>
                  <label htmlFor={`durationFrom-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Duration From
                  </label>
                  <input
                    id={`durationFrom-${index}`}
                    type="date"
                    name="durationFrom"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={exp.durationFrom}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                </div>
                
                {/* Duration To */}
                <div>
                  <label htmlFor={`durationTo-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Duration To
                  </label>
                  <input
                    id={`durationTo-${index}`}
                    type="date"
                    name="durationTo"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={exp.durationTo}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                </div>
              </div>

              {/* Work Module */}
              <div className="mb-4">
                <label htmlFor={`workModule-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Work Module/Description
                </label>
                <textarea
                  id={`workModule-${index}`}
                  name="workModule"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={exp.workModule}
                  onChange={(e) => handleExperienceChange(index, e)}
                  placeholder="Describe your work responsibilities and achievements"
                />
              </div>

              {/* File Upload */}
              <div className="mb-4">
                <label htmlFor={`experienceFile-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Experience File (e.g., PDF)
                </label>
                <input
                  id={`experienceFile-${index}`}
                  type="file"
                  name="experienceFile"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={(e) => handleExperienceChange(index, e)}
                  accept=".pdf,.doc,.docx"
                />
                {exp.experienceFile && <span className="text-sm text-gray-500 mt-2">{exp.experienceFile.name}</span>}
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addExperience}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            + Add Another Experience
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid}
          onClick={handleSubmit}
          className={`w-full py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors mb-4 ${isFormValid ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
        >
          Submit Application
        </button>
      </div>
    </div>
  );
};

export default ExperienceForm;

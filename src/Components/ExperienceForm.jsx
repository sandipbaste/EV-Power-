import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ExperienceForm = () => {
  // Get URL parameters
  const { title, details, location } = useParams();

  // Initialize form data from localStorage
  const [experienceFormData, setExperienceFormData] = useState([]);

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const storedExperienceData = localStorage.getItem('experienceFormData');
    if (storedExperienceData) {
      try {
        const parsedData = JSON.parse(storedExperienceData);
        setExperienceFormData(parsedData);
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
  }, []);

  // Initialize form with default values and URL parameters
  const [formData, setFormData] = useState({
    experiences: [{
      location: location || '',  // Include URL parameter
      position: title || '',     // Include URL parameter
      companyName: '',
      durationFrom: '',
      durationTo: '',
      workModule: '',
      firstName: '',
      lastName: '',
      address: '',
      mobile: '',
      email: '',
      oldposition: '',
      experienceFile: null,
      experiance: details || '', // Include URL parameter
    }]
  });

  // Track which fields are focused for floating label effect
  const [fieldFocused, setFieldFocused] = useState({});

  // Handle changes to form fields
  const handleExperienceChange = (index, e) => {
    const { name, value, files } = e.target;
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[index][name] = files ? files[0] : value;
    setFormData(prev => ({
      ...prev,
      experiences: updatedExperiences
    }));
  };

  // Handle field focus for floating label effect
  const handleExperienceFocus = (index, field) => {
    setFieldFocused(prev => ({
      ...prev,
      [`${field}${index}`]: true
    }));
  };

  // Handle field blur for floating label effect
  const handleExperienceBlur = (index, field) => {
    if (!formData.experiences[index][field]) {
      setFieldFocused(prev => ({
        ...prev,
        [`${field}${index}`]: false
      }));
    }
  };

  // Remove an experience section
  const removeExperience = (index) => {
    const updatedExperiences = formData.experiences.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      experiences: updatedExperiences
    }));
  };

  // Basic validation for required fields
  const isFormValid = formData.experiences.every(i =>
    i.firstName && i.lastName && i.mobile && i.email && i.durationFrom && i.durationTo && i.workModule && i.experienceFile
  );

  // Handle form submission
  const handleSubmit = () => {
    // Store form data directly in localStorage
    // No need to add URL parameters separately as they are already in each experience object
    const updatedData = [...experienceFormData, formData];
    localStorage.setItem('experienceFormData', JSON.stringify(updatedData));

    // Update state with new data
    setExperienceFormData(updatedData);
    console.log('Form submitted:', formData);
    console.log('All saved experiences:', updatedData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">

        {/* Work Experience Details */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">Application Form</h3>

          {formData.experiences.map((i, index) => (
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
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                {/* First name */}
                <div className="relative">
                  <label
                    htmlFor={`firstName-${index}`}
                    className={`absolute left-3 transition-all duration-200 ${fieldFocused[`firstName${index}`] || i.firstName ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2' : 'top-1/2 text-gray-500 -translate-y-1/2'}`}
                  >
                    First Name
                  </label>
                  <input
                    id={`firstName-${index}`}
                    type="text"
                    name="firstName"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onFocus={() => handleExperienceFocus(index, 'firstName')}
                    onBlur={() => handleExperienceBlur(index, 'firstName')}
                    value={i.firstName}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                </div>

                {/* Last name */}
                <div className="relative">
                  <label
                    htmlFor={`lastName-${index}`}
                    className={`absolute left-3 transition-all duration-200 ${fieldFocused[`lastName${index}`] || i.lastName ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2' : 'top-1/2 text-gray-500 -translate-y-1/2'}`}
                  >
                    Last Name
                  </label>
                  <input
                    id={`lastName-${index}`}
                    type="text"
                    name="lastName"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onFocus={() => handleExperienceFocus(index, 'lastName')}
                    onBlur={() => handleExperienceBlur(index, 'lastName')}
                    value={i.lastName}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                </div>
              </div>

              {/* Address */}
              <div className="relative mb-6">
                <label
                  htmlFor={`address-${index}`}
                  className={`absolute left-3 transition-all duration-200 ${fieldFocused[`address${index}`] || i.address ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2' : 'top-1/2 text-gray-500 -translate-y-1/2'}`}
                >
                  Address
                </label>
                <input
                  id={`address-${index}`}
                  type="text"
                  name="address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onFocus={() => handleExperienceFocus(index, 'address')}
                  onBlur={() => handleExperienceBlur(index, 'address')}
                  value={i.address}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Mobile Number */}
                <div className="relative">
                  <label
                    htmlFor={`mobile-${index}`}
                    className={`absolute left-3 transition-all duration-200 ${fieldFocused[`mobile${index}`] || i.mobile ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2' : 'top-1/2 text-gray-500 -translate-y-1/2'}`}
                  >
                    Mobile Number
                  </label>
                  <input
                    id={`mobile-${index}`}
                    type="tel"
                    name="mobile"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onFocus={() => handleExperienceFocus(index, 'mobile')}
                    onBlur={() => handleExperienceBlur(index, 'mobile')}
                    value={i.mobile}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label
                    htmlFor={`email-${index}`}
                    className={`absolute left-3 transition-all duration-200 ${fieldFocused[`email${index}`] || i.email ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2' : 'top-1/2 text-gray-500 -translate-y-1/2'}`}
                  >
                    Email Address
                  </label>
                  <input
                    id={`email-${index}`}
                    type="email"
                    name="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onFocus={() => handleExperienceFocus(index, 'email')}
                    onBlur={() => handleExperienceBlur(index, 'email')}
                    value={i.email}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                </div>
              </div>

              {/* Year of Experience from URL params */}
              <div className="relative mb-4">
                <label htmlFor={`experiance-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Experience
                </label>
                <input
                  disabled
                  id={`experiance-${index}`}
                  type="text"
                  name="experiance"
                  value={i.experiance}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>

              {/* Position from URL params */}
              <div className="relative mb-4">
                <label htmlFor={`position-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Job Position
                </label>
                <input
                  disabled
                  id={`position-${index}`}
                  type="text"
                  name="position"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={i.position}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>

              {/* Location from URL params */}
              <div className="relative mb-4">
                <label htmlFor={`location-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  disabled
                  id={`location-${index}`}
                  type="text"
                  name="location"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={i.location}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>

              {/* Company Name */}
              <div className="relative mb-4">
                <label
                  htmlFor={`companyName-${index}`}
                  className={`absolute left-3 transition-all duration-200 ${fieldFocused[`companyName${index}`] || i.companyName ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2' : 'top-1/2 text-gray-500 -translate-y-1/2'}`}
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
                  value={i.companyName}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>

              <div className="relative mb-4">
                <label
                  htmlFor={`oldposition-${index}`}
                  className={`absolute left-3 transition-all duration-200 ${fieldFocused[`oldposition${index}`] || i.oldposition ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2' : 'top-1/2 text-gray-500 -translate-y-1/2'}`}
                >
                  Position
                </label>
                <input
                  id={`oldposition-${index}`}
                  type="text"
                  name="oldposition"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onFocus={() => handleExperienceFocus(index, 'oldposition')}
                  onBlur={() => handleExperienceBlur(index, 'oldposition')}
                  value={i.oldposition}
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
                    value={i.durationFrom}
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
                    value={i.durationTo}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                </div>
              </div>

              {/* Work Module */}
              <div className="mb-4">
                <label htmlFor={`workModule-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Work Description
                </label>
                <textarea
                  id={`workModule-${index}`}
                  name="workModule"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={i.workModule}
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
                {i.experienceFile && <span className="text-sm text-gray-500 mt-2">{i.experienceFile.name}</span>}
              </div>
            </div>
          ))}
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
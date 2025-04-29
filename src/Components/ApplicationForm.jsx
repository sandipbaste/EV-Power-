import { useEffect, useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const ApplicationForm = () => {
  const navigate = useNavigate();
  
  // State to track existing data from localStorage
  const [fresherDataArray, setFresherDataArray] = useState([]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    mobile: '',
    email: '',
    graduation: '',
    cgpa: '',
    position: '',
    resume: null,
  });

  useEffect(() => {
    // Get existing data from localStorage
    const fresherData = localStorage.getItem('fresherDataArray');
    if (fresherData) {
      setFresherDataArray(JSON.parse(fresherData));
    }

  }, []);

  const [fieldFocused, setFieldFocused] = useState({
    firstName: false,
    lastName: false,
    address: false,
    mobile: false,
    email: false,
    graduation: false,
    cgpa: false,
    companyName: false,
    position: false
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };


  const handleFocus = (field) => {
    setFieldFocused(prev => ({
      ...prev,
      [field]: true
    }));
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setFieldFocused(prev => ({
        ...prev,
        [field]: false
      }));
    }
  };

  // Validation for basic required fields (common for both fresher and experienced)
  const isBasicInfoValid = (
    formData.firstName &&
    formData.lastName &&
    formData.address &&
    formData.mobile &&
    formData.email &&
    formData.graduation &&
    formData.cgpa &&
    formData.position 
    // formData.resume
  );

  // Additional validation for experience fields if the user is experienced
  const isExperienceValid = !formData.isExperienced || formData.experiences.every(exp => 
    exp.companyName && exp.position && exp.durationFrom && exp.workModule
  );

  // Overall form validation
  const isFormValid = isBasicInfoValid && isExperienceValid;
  
  const handleSubmit = () => {
    // Create a copy of formData that we can store (remove the File object which can't be JSON stringified)
    const formDataToStore = {
      ...formData,
      resume: formData.resume ? formData.resume.name : null
    };

    if (isBasicInfoValid) {
      if (formData.isExperienced) {
        // Check if experience fields are filled
        const isExperienceComplete = formData.experiences.some(exp => 
          exp.companyName && exp.position && exp.durationFrom
        );
        
        if (isExperienceComplete) {
          // Store in experienceDataArray
          const newExperienceData = [...experienceDataArray, formDataToStore];
          localStorage.setItem('experienceDataArray', JSON.stringify(newExperienceData));
          setExperienceDataArray(newExperienceData);
        }
      } else {
        // Store in fresherDataArray
        const newFresherData = [...fresherDataArray, formDataToStore];
        localStorage.setItem('fresherDataArray', JSON.stringify(newFresherData));
        setFresherDataArray(newFresherData);
      }
      
      // Navigate to the response page
      navigate('/form-respones');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Application Form</h1>
        
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* First Name */}
          <div className="relative">
            <label 
              htmlFor="firstName" 
              className={`absolute left-3 transition-all duration-200 ${
                fieldFocused.firstName || formData.firstName 
                  ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2'
                  : 'top-1/2 text-gray-500 -translate-y-1/2'
              }`}
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onFocus={() => handleFocus('firstName')}
              onBlur={() => handleBlur('firstName')}
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          
          {/* Last Name */}
          <div className="relative">
            <label 
              htmlFor="lastName" 
              className={`absolute left-3 transition-all duration-200 ${
                fieldFocused.lastName || formData.lastName 
                  ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2'
                  : 'top-1/2 text-gray-500 -translate-y-1/2'
              }`}
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onFocus={() => handleFocus('lastName')}
              onBlur={() => handleBlur('lastName')}
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        
        {/* Address */}
        <div className="relative mb-6">
          <label 
            htmlFor="address" 
            className={`absolute left-3 transition-all duration-200 ${
              fieldFocused.address || formData.address 
                ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2'
                : 'top-1/2 text-gray-500 -translate-y-1/2'
            }`}
          >
            Address
          </label>
          <input
            id="address"
            type="text"
            name="address"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onFocus={() => handleFocus('address')}
            onBlur={() => handleBlur('address')}
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Mobile Number */}
          <div className="relative">
            <label 
              htmlFor="mobile" 
              className={`absolute left-3 transition-all duration-200 ${
                fieldFocused.mobile || formData.mobile 
                  ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2'
                  : 'top-1/2 text-gray-500 -translate-y-1/2'
              }`}
            >
              Mobile Number
            </label>
            <input
              id="mobile"
              type="tel"
              name="mobile"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onFocus={() => handleFocus('mobile')}
              onBlur={() => handleBlur('mobile')}
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
          
          {/* Email */}
          <div className="relative">
            <label 
              htmlFor="email" 
              className={`absolute left-3 transition-all duration-200 ${
                fieldFocused.email || formData.email 
                  ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2'
                  : 'top-1/2 text-gray-500 -translate-y-1/2'
              }`}
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        
        {/* Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Graduation */}
          <div className="relative">
            <label 
              htmlFor="graduation" 
              className={`absolute left-3 transition-all duration-200 ${
                fieldFocused.graduation || formData.graduation 
                  ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2'
                  : 'top-1/2 text-gray-500 -translate-y-1/2'
              }`}
            >
              Graduation
            </label>
            <input
              id="graduation"
              type="text"
              name="graduation"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onFocus={() => handleFocus('graduation')}
              onBlur={() => handleBlur('graduation')}
              value={formData.graduation}
              onChange={handleChange}
            />
          </div>
          
          {/* CGPA */}
          <div className="relative">
            <label 
              htmlFor="cgpa" 
              className={`absolute left-3 transition-all duration-200 ${
                fieldFocused.cgpa || formData.cgpa 
                  ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2'
                  : 'top-1/2 text-gray-500 -translate-y-1/2'
              }`}
            >
              CGPA
            </label>
            <input
              id="cgpa"
              type="number"
              name="cgpa"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onFocus={() => handleFocus('cgpa')}
              onBlur={() => handleBlur('cgpa')}
              value={formData.cgpa}
              onChange={handleChange}
            />
          </div>
        </div>
        
        {/* Job Position */}
        <div className="relative mb-6">
          <label 
            htmlFor="position" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Job Position
          </label>
          <select
            id="position"
            name="position"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={formData.position}
            onChange={handleChange}
          >
            <option value="" disabled>Select</option>
            <option value="Electric Engineer">Electric Engineer</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="EV Designer Engineer">EV Designer Engineer</option>
            <option value="Data Analyst">Data Analyst</option>
          </select>
        </div>
        
        {/* Resume Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume</label>
          <div className="flex items-center">
            <label className="flex flex-col items-center px-4 py-6 bg-white rounded-lg border border-dashed border-gray-300 cursor-pointer hover:bg-gray-50">
              <FaUpload className="text-gray-500 text-2xl mb-2" />
              <span className="text-sm text-gray-600">
                {formData.resume ? formData.resume.name : 'Choose a file'}
              </span>
              <input 
                type="file" 
                name="resume"
                className="hidden"
                onChange={handleChange}
                accept=".pdf,.doc,.docx"
              />
            </label>
          </div>
        </div>
        
        {/* Work Experience Details */}
        {formData.isExperienced && (
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Work Experience Details</h3>
            
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
                    className={`absolute left-3 transition-all duration-200 ${
                      fieldFocused[`companyName${index}`] || exp.companyName 
                        ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2'
                        : 'top-1/2 text-gray-500 -translate-y-1/2'
                    }`}
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
                    className={`absolute left-3 transition-all duration-200 ${
                      fieldFocused[`position${index}`] || exp.position 
                        ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2'
                        : 'top-1/2 text-gray-500 -translate-y-1/2'
                    }`}
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
              </div>
            ))}
          </div>
        )}
        
        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid}
          onClick={handleSubmit}
          className={`w-full py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors mb-4 ${
            isFormValid 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Submit Application
        </button>
      </div>
    </div>
  );
};

export default ApplicationForm;
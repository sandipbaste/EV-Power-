import { useEffect, useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const ApplicationForm = () => {
  const navigate = useNavigate();

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
  const handleSubmit = async () => {
    try {
      const { firstName, lastName, address, mobile, email, graduation, cgpa, position } = formData;
  
      const response = await axios.post('http://localhost:5000/api/applicationform', {
        firstName,
        lastName,
        address,
        mobile,
        email,
        graduation,
        cgpa,
        position
      });
  
      console.log(response.data);
      navigate('/form-respones');

    } catch (error) {
      toast.error(error.response?.data?.error || "Submission failed.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      console.error("Error submitting form:", error.response?.data || error.message);
    }
  };
  

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
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
          </>
  );
};

export default ApplicationForm;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const ExperienceForm = () => {

  const { title, details, location } = useParams()

  const [experieanceFormData, setExperieanceFormData] = useState([])


   useEffect(()=>{
    const experieanceForm = localStorage.getItem('experieanceFormData');
    if (experieanceForm) {
      setExperieanceFormData(JSON.parse(experieanceForm));
    }
   },[])



  const [formData, setFormData] = useState({
    experiences: [{
      prevcompanyName:'',
      companyName: '',
      position: '',
      durationFrom: '',
      durationTo: '',
      workModule: '',
      firstName: '',
      lastName: '',
      address: '',
      mobile: '',
      email: '',
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
          prevcompanyName: '',
          companyName: '',
          position: '',
          durationFrom: '',
          durationTo: '',
          workModule: '',
          firstName: '',
          lastName: '',
          address: '',
          mobile: '',
          email: '',
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
    exp.firstName && exp.lastName && exp.mobile && exp.email && exp.durationFrom && exp.durationTo && exp.workModule && exp.experienceFile
  );

  const handleSubmit = () => {
    console.log(formData);
    const updateData = [...experieanceFormData, formData]
    setExperieanceFormData(updateData)
  
    localStorage.setItem('experieanceFormData', JSON.stringify(updateData))

    // You can handle submission here
  };


  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">

        {/* Work Experience Details */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">Application From</h3>

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
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                {/* {fristname} */}
                <div className="relative">
                  <label
                    htmlFor={`firstName-${index}`}
                    className={`absolute left-3 transition-all duration-200 ${fieldFocused[`firstName${index}`] || exp.firstName ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2' : 'top-1/2 text-gray-500 -translate-y-1/2'}`}
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
                    value={exp.firstName}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                </div>

                {/* {lastname} */}
                <div className="relative">
                  <label
                      htmlFor={`lastName-${index}`}
                      className={`absolute left-3 transition-all duration-200 ${fieldFocused[`lastName${index}`] || exp.lastName ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2' : 'top-1/2 text-gray-500 -translate-y-1/2'}`}
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
                    value={exp.lastName}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                </div>
              </div>

              {/* Address */}
              <div className="relative mb-6">
                <label
                   htmlFor={`address-${index}`}
                   className={`absolute left-3 transition-all duration-200 ${fieldFocused[`address${index}`] || exp.address ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2' : 'top-1/2 text-gray-500 -translate-y-1/2'}`}
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
                    value={exp.address}
                    onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Mobile Number */}
                <div className="relative">
                  <label
                     htmlFor={`mobile-${index}`}
                     className={`absolute left-3 transition-all duration-200 ${fieldFocused[`mobile${index}`] || exp.mobile ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2' : 'top-1/2 text-gray-500 -translate-y-1/2'}`}
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
                    value={exp.mobile}
                    onChange={(e) => handleExperienceChange(index, e)}

                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label
                  htmlFor={`email-${index}`}
                  className={`absolute left-3 transition-all duration-200 ${fieldFocused[`email${index}`] || exp.email ? 'top-0 text-xs bg-white px-1 text-blue-500 -translate-y-1/2' : 'top-1/2 text-gray-500 -translate-y-1/2'}`}
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
                    value={exp.email}
                    onChange={(e) => handleExperienceChange(index, e)}
                  />
                </div>
              </div>

              <div className="relative mb-4">
                <label htmlFor={`durationFrom-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Experience details
                </label>
                <input
                  disabled
                  id={`prevcompanyName-${index}`}
                  type="text"
                  name="prevcompanyName"
                  value={details}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>

              {/* Position */}
              <div className="relative mb-4">
                <label htmlFor={`durationFrom-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Job Position
                </label>
                <input
                  disabled
                  id={`position-${index}`}
                  type="text"
                  name="position"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={title}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>
              {/*,location */}
              <div className="relative mb-4">
                <label htmlFor={`durationFrom-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  disabled
                  id={`position-${index}`}
                  type="text"
                  name="position"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={location}

                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>


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
                  Work Description
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

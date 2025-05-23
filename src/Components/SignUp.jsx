import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
    role: 'hr',
  });

  const [fieldFocused, setFieldFocused] = useState({
    firstName: false,
    lastName: false,
    mobile: false,
    email: false,
    address: false,
    password: false,
    confirmPassword: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => {
    setFieldFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setFieldFocused(prev => ({ ...prev, [field]: false }));
    }
  };

  const isFormValid = (
    formData.firstName &&
    formData.lastName &&
    formData.mobile &&
    formData.email &&
    formData.address &&
    formData.password &&
    formData.confirmPassword &&
    formData.password === formData.confirmPassword
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/signup', formData);
      toast.success('Registration successful!');
      navigate('/login');
    } catch (error) {
      toast.error(error.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 mt-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div className="relative">
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="w-full p-3 border-2 border-gray-200 rounded-lg peer focus:border-blue-500 focus:outline-none"
                onChange={handleChange}
                onFocus={() => handleFocus('firstName')}
                onBlur={() => handleBlur('firstName')}
              />
              <label 
                htmlFor="firstName"
                className={`absolute left-3 transition-all duration-200 px-1 bg-white
                  ${(fieldFocused.firstName || formData.firstName) ? 
                    '-top-3 text-sm text-blue-500' : 
                    'top-3.5 text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500'}`}
              >
                First Name
              </label>
            </div>

            {/* Last Name */}
            <div className="relative">
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="w-full p-3 border-2 border-gray-200 rounded-lg peer focus:border-blue-500 focus:outline-none"
                onChange={handleChange}
                onFocus={() => handleFocus('lastName')}
                onBlur={() => handleBlur('lastName')}
              />
              <label 
                htmlFor="lastName"
                className={`absolute left-3 transition-all duration-200 px-1 bg-white
                  ${(fieldFocused.lastName || formData.lastName) ? 
                    '-top-3 text-sm text-blue-500' : 
                    'top-3.5 text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500'}`}
              >
                Last Name
              </label>
            </div>
          </div>

          {/* Mobile */}
          <div className="relative">
            <input
              id="mobile"
              name="mobile"
              type="tel"
              className="w-full p-3 border-2 border-gray-200 rounded-lg peer focus:border-blue-500 focus:outline-none"
              onChange={handleChange}
              onFocus={() => handleFocus('mobile')}
              onBlur={() => handleBlur('mobile')}
            />
            <label 
              htmlFor="mobile"
              className={`absolute left-3 transition-all duration-200 px-1 bg-white
                ${(fieldFocused.mobile || formData.mobile) ? 
                  '-top-3 text-sm text-blue-500' : 
                  'top-3.5 text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500'}`}
            >
              Mobile Number
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              className="w-full p-3 border-2 border-gray-200 rounded-lg peer focus:border-blue-500 focus:outline-none"
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
            />
            <label 
              htmlFor="email"
              className={`absolute left-3 transition-all duration-200 px-1 bg-white
                ${(fieldFocused.email || formData.email) ? 
                  '-top-3 text-sm text-blue-500' : 
                  'top-3.5 text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500'}`}
            >
              Email Address
            </label>
          </div>

          {/* Address */}
          <div className="relative">
            <input
              id="address"
              name="address"
              type="text"
              className="w-full p-3 border-2 border-gray-200 rounded-lg peer focus:border-blue-500 focus:outline-none"
              onChange={handleChange}
              onFocus={() => handleFocus('address')}
              onBlur={() => handleBlur('address')}
            />
            <label 
              htmlFor="address"
              className={`absolute left-3 transition-all duration-200 px-1 bg-white
                ${(fieldFocused.address || formData.address) ? 
                  '-top-3 text-sm text-blue-500' : 
                  'top-3.5 text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500'}`}
            >
              Address
            </label>
          </div>

          {/* Password */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                className="w-full p-3 border-2 border-gray-200 rounded-lg peer focus:border-blue-500 focus:outline-none"
                onChange={handleChange}
                onFocus={() => handleFocus('password')}
                onBlur={() => handleBlur('password')}
              />
              <label 
                htmlFor="password"
                className={`absolute left-3 transition-all duration-200 px-1 bg-white
                  ${(fieldFocused.password || formData.password) ? 
                    '-top-3 text-sm text-blue-500' : 
                    'top-3.5 text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500'}`}
              >
                Password
              </label>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="w-full p-3 border-2 border-gray-200 rounded-lg peer focus:border-blue-500 focus:outline-none"
                onChange={handleChange}
                onFocus={() => handleFocus('confirmPassword')}
                onBlur={() => handleBlur('confirmPassword')}
              />
              <label 
                htmlFor="confirmPassword"
                className={`absolute left-3 transition-all duration-200 px-1 bg-white
                  ${(fieldFocused.confirmPassword || formData.confirmPassword) ? 
                    '-top-3 text-sm text-blue-500' : 
                    'top-3.5 text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500'}`}
              >
                Confirm Password
              </label>
            </div>
          </div>

          {/* Role Selection */}
          <div className="relative">
            <select
              id="role"
              name="role"
              className="w-full p-3 border-2 border-gray-200 rounded-lg appearance-none"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="hr">HR Professional</option>
              <option value="admin">Administrator</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center px-2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3.5 text-lg font-semibold rounded-lg transition-all
              ${isFormValid ? 
                'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg' : 
                'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">
            Login here
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
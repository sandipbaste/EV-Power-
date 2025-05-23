import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [fieldFocused, setFieldFocused] = useState({
    email: false,
    password: false,
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

  const isFormValid = formData.email && formData.password;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);
      localStorage.setItem('token', response.data.token);
      toast.success('Login successful!');
      navigate(response.data.role === 'admin' ? '/admin/dashboard' : '/hr/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 mt-12">
        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 rounded-full">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              className="w-full p-3 border-2 border-gray-200 rounded-lg peer focus:border-blue-500 focus:outline-none"
              value={formData.email}
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

          {/* Password Input */}
          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              className="w-full p-3 border-2 border-gray-200 rounded-lg peer focus:border-blue-500 focus:outline-none"
              value={formData.password}
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

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3.5 text-lg font-semibold rounded-lg transition-all
              ${isFormValid ? 
                'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg' : 
                'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center space-y-4">
          <Link to="/forgot-password" className="text-blue-600 text-sm hover:underline block">
            Forgot Password?
          </Link>
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
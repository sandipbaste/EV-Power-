import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { FaEye, FaEyeSlash, FaLock, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import SignUp from './SignUp';

const Login = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [fieldFocused, setFieldFocused] = useState({ email: false, password: false });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => setFieldFocused(prev => ({ ...prev, [field]: true }));
  const handleBlur = (field) => {
    if (!formData[field]) setFieldFocused(prev => ({ ...prev, [field]: false }));
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const isFormValid = formData.email && formData.password;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`http://localhost:5000/api/login`, formData);
      toast.success('Login successful!');
      localStorage.setItem('token', res.data.token);
      onClose();
      navigate(res.data.role === 'admin' ? '/admin/dashboard' : '/hr/dashboard');
    } catch (err) {
      const errorMsg = err.response?.data?.error || 'Login failed. Check credentials.';
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUpClick = () => {
    onClose(); // Close login modal first
    setShowSignUp(true); // Then open signup modal
  };

  if (!isOpen && !showSignUp) return null;

  return (
    <>
      <ToastContainer />
      
      {/* Login Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
              onClick={onClose}
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div className="relative">
                <div className="absolute left-3 top-3.5 text-gray-400">
                  <FaEnvelope />
                </div>
                <label htmlFor="email"
                  className={`absolute left-10 px-1 bg-white transition-all duration-200 ${
                    fieldFocused.email || formData.email
                      ? 'top-0 text-sm text-blue-500 -translate-y-1/2'
                      : 'top-3.5 text-gray-400'
                  }`}>
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full py-3 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onFocus={() => handleFocus('email')}
                  onBlur={() => handleBlur('email')}
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
              </div>

              {/* Password */}
              <div className="relative">
                <div className="absolute left-3 top-3.5 text-gray-400">
                  <FaLock />
                </div>
                <label htmlFor="password"
                  className={`absolute left-10 px-1 bg-white transition-all duration-200 ${
                    fieldFocused.password || formData.password
                      ? 'top-0 text-sm text-blue-500 -translate-y-1/2'
                      : 'top-3.5 text-gray-400'
                  }`}>
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  className="w-full py-3 pl-10 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onFocus={() => handleFocus('password')}
                  onBlur={() => handleBlur('password')}
                  onChange={handleChange}
                  value={formData.password}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-3.5 text-gray-400"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!isFormValid || loading}
                className={`w-full py-3 font-semibold rounded-lg transition-all ${
                  isFormValid && !loading
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>

              {/* Switch to Signup */}
              <p className="text-sm text-center text-gray-600 mt-4">
                Don't have an account?{' '}
                <button
                  type="button"
                  className="text-blue-500 hover:underline"
                  onClick={handleSignUpClick}
                >
                  Create one
                </button>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* SignUp Modal */}
      <SignUp 
        isOpen={showSignUp} 
        onClose={() => setShowSignUp(false)} 
        switchToLogin={() => {
          setShowSignUp(false);
          // If you want to reopen login modal after signup closes:
          // onClose();
        }}
      />
    </>
  );
};

export default Login;
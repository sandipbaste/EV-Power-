import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [role, setRole] = useState('HR');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPage, setShowPage] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(`Signing up as ${role} with`, { email, password });
    // Add API call here
  };

  useEffect(() => {
    setTimeout(() => setShowPage(true), 100);
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-gray-100 transition-opacity duration-700 ${
        showPage ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h2 className="text-2xl mb-4 transition-transform duration-700 ease-out translate-y-0">
        Sign Up as {role}
      </h2>

      <div className="mb-4 flex transition-transform duration-500 ease-in-out scale-100">
        <button
          onClick={() => setRole('HR')}
          className={`px-4 py-2 mr-2 rounded text-white transition-all duration-300 ${
            role === 'HR' ? 'bg-blue-700' : 'bg-blue-500'
          }`}
        >
          HR
        </button>
        <button
          onClick={() => setRole('Admin')}
          className={`px-4 py-2 rounded text-white transition-all duration-300 ${
            role === 'Admin' ? 'bg-green-700' : 'bg-green-500'
          }`}
        >
          Admin
        </button>
      </div>

      <form
        onSubmit={handleSignUp}
        className="bg-white p-6 rounded shadow-md h-[300px] w-[400px] flex flex-col items-center justify-center transition-transform duration-700 scale-100"
      >
        <input type="text" placeholder='Name' className='block mb-4 w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300' />
        <input
          type="email"
          placeholder="Email"
          className="block mb-4 w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="block mb-4 w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 active:scale-95 transition-transform duration-200"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-4 text-gray-700 transition-opacity duration-1000 delay-500 opacity-100">
        Already have an account?{' '}
        <Link to="/signin" className="text-blue-600 hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
}

export default SignUp;

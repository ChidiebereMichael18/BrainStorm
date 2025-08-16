import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Simulate signup success
    navigate('/dashboard');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 bg-gray-900/80 rounded-2xl shadow-xl p-8 border border-gray-800"
    >
      <h2 className="text-2xl font-bold text-green-500 text-center mb-4">
        Create Your Account
      </h2>
      <div className="space-y-5">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
          className="w-full bg-black text-green-400 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full bg-black text-green-400 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full bg-black text-green-400 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-500"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
          className="w-full bg-black text-green-400 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-all duration-200 placeholder-gray-500"
        />
      </div>
      {error && (
        <div className="bg-red-900/80 text-red-400 text-center rounded-lg py-2 px-4 mb-2 font-semibold border border-red-700">
          {error}
        </div>
      )}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-green-500 to-green-700 text-black font-bold py-3 px-4 rounded-xl hover:from-green-400 hover:to-green-600 shadow-lg transition-all duration-200"
      >
        Sign Up
      </button>
      <div className="text-center text-gray-400 text-sm mt-4">
        Already have an account?{' '}
        <span
          className="text-green-500 font-semibold cursor-pointer hover:underline"
          onClick={() => navigate('/login')}
        >
          Log In
        </span>
      </div>
    </form>
  );
}

export default Signup;

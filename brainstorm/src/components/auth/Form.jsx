import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      navigate('/dashboard');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full bg-gray-900 text-green-400 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500"
          value={formData.fullName}
          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-gray-900 text-green-400 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-gray-900 text-green-400 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full bg-gray-900 text-green-400 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-500 text-black font-semibold py-3 px-4 rounded-xl hover:bg-green-400 transition-all duration-200"
      >
        Create Account
      </button>
    </form>
  );
}

export default Form;

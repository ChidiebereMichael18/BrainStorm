import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../../services/api';
import { showToast } from '../../utils/toast';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      const response = await authAPI.login(form);
      localStorage.setItem('token', response.data.token);
      showToast.success('Successfully logged in!');
      navigate('/dashboard');
    } catch (err) {
      showToast.error(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full bg-gray-900 text-green-400 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
        className="w-full bg-gray-900 text-green-400 border border-gray-800 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500"
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button
        type="submit"
        className="w-full bg-green-500 text-black font-semibold py-3 px-4 rounded-xl hover:bg-green-400 transition-all duration-200"
      >
        Log In
      </button>
      <div className="text-center text-gray-400 text-sm mt-2">
        Don't have an account?{' '}
        <span
          className="text-green-500 cursor-pointer"
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </span>
      </div>
    </form>
  );
}

export default Login;

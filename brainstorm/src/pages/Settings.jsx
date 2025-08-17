import React, { useState, useEffect } from 'react';
import { authAPI } from '../services/api';
import { showToast } from '../utils/toast';

function Settings() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    name: '',
    bio: '',
    skills: '',
    interests: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (!userId) {
          throw new Error('User not authenticated');
        }
        console.log('Fetching profile for userId:', userId);
        const response = await authAPI.getUser(userId);
        setForm({
          username: response.data.username || '',
          email: response.data.email || '',
          name: response.data.name || '',
          bio: response.data.bio || '',
          skills: response.data.skills?.join(', ') || '',
          interests: response.data.interests?.join(', ') || '',
          password: '',
          confirmPassword: '',
        });
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch profile');
        showToast.error(err.response?.data?.message || 'Failed to fetch profile');
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async e => {
    e.preventDefault();
    setError('');

    if (form.password && form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      showToast.error('Passwords do not match');
      return;
    }

    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        throw new Error('User not authenticated');
      }

      const userData = {
        username: form.username,
        email: form.email,
        name: form.name,
        bio: form.bio,
        skills: form.skills ? form.skills.split(',').map(skill => skill.trim()).filter(skill => skill) : [],
        interests: form.interests ? form.interests.split(',').map(interest => interest.trim()).filter(interest => interest) : [],
      };

      if (form.password) {
        userData.password = form.password;
      }

      const response = await authAPI.updateUser(userId, userData);
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        showToast.success('Settings saved successfully!');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to save settings';
      setError(errorMessage);
      showToast.error(errorMessage);
    }
  };

  if (loading) {
    return <div className="text-gray-400 text-center py-12">Loading...</div>;
  }

  return (
    <div className="min-h-screen py-10 px-4 bg-black">
      <div className="max-w-2xl mx-auto bg-gray-900/80 rounded-2xl shadow-xl p-8 border border-gray-800">
        <h2 className="text-3xl font-bold text-green-500 mb-6 text-center">Settings</h2>
        
        <form onSubmit={handleSave} className="space-y-6">
          <div>
            <label className="block text-gray-400 mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
              className="w-full bg-black text-green-400 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-black text-green-400 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-black text-green-400 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Bio</label>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              rows={3}
              className="w-full bg-black text-green-400 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Skills (comma-separated)</label>
            <input
              type="text"
              name="skills"
              value={form.skills}
              onChange={handleChange}
              placeholder="e.g., React, Python"
              className="w-full bg-black text-green-400 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Interests (comma-separated)</label>
            <input
              type="text"
              name="interests"
              value={form.interests}
              onChange={handleChange}
              placeholder="e.g., Gaming, Research"
              className="w-full bg-black text-green-400 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">New Password (optional)</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full bg-black text-green-400 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Confirm New Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full bg-black text-green-400 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 transition-all duration-200"
            />
          </div>
          {error && (
            <div className="bg-red-900/80 text-red-400 text-center rounded-lg py-2 px-4 mb-2 font-semibold border border-red-700">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-700 text-black font-bold py-3 px-4 rounded-xl hover:from-green-400 hover:to-green-600 shadow-lg transition-all duration-200 mt-8"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Settings;
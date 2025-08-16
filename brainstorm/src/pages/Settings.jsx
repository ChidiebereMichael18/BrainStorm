import React, { useState } from 'react';

function Settings() {
  const [form, setForm] = useState({
    username: 'JohnDoe',
    email: 'john@example.com',
    bio: 'Full-stack developer & gamer'
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = e => {
    e.preventDefault();
    // Simulate save
    alert('Settings saved!');
  };

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
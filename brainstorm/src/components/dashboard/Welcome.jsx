import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../../services/api';
import { showToast } from '../../utils/toast';

function Welcome() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }
        console.log('Fetching user data via /api/users/me');
        const response = await authAPI.getUser();
        setUser(response.data);
        localStorage.setItem('userId', response.data._id); // Ensure userId for MyPosts
      } catch (error) {
        console.error('Error fetching user:', error.response?.data || error.message);
        showToast.error('Failed to load user data');
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
      {user ? (
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-green-500">
            Welcome back, {user.username || 'User'}! 👋
          </h1>
          <p className="text-gray-400">
            Ready to collaborate on some amazing projects?
          </p>
        </div>
      ) : (
        <div className="text-gray-400">Loading...</div>
      )}
    </div>
  );
}

export default Welcome;
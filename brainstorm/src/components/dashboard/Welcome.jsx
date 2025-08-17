import React, { useEffect, useState } from "react";
import { authAPI } from '../../services/api';
import { showToast } from '../../utils/toast';

function Welcome() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }
        const response = await authAPI.getUser();
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
        showToast.error('Failed to load user data');
      }
    };

    fetchUserData();
  }, []);

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

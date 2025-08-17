import React, { useState, useEffect } from 'react';
import { FiEdit2, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../services/api';
import { showToast } from '../utils/toast';

function Profile() {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (!userId) {
          throw new Error('User not authenticated');
        }
        console.log('Fetching profile for userId:', userId);
        const response = await authAPI.getUser(userId);
        setUserProfile(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch profile');
        setLoading(false);
        showToast.error(err.response?.data?.message || 'Failed to fetch profile');
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <div className="text-gray-400 text-center py-12">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-400 text-center py-12">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-green-500/20 rounded-full flex items-center justify-center text-3xl text-green-500 font-bold">
                {userProfile.name?.charAt(0) || userProfile.username.charAt(0)}
              </div>
              <h2 className="mt-4 text-2xl font-bold text-white">{userProfile.name || userProfile.username}</h2>
              <p className="text-green-500">@{userProfile.username}</p>
              <p className="mt-2 text-gray-400">{userProfile.bio || 'No bio provided'}</p>
            </div>

            <div className="mt-6 flex justify-center space-x-4">
              <FiGithub className="text-gray-400 hover:text-green-500 cursor-pointer" size={20} />
              <FiLinkedin className="text-gray-400 hover:text-green-500 cursor-pointer" size={20} />
              <FiTwitter className="text-gray-400 hover:text-green-500 cursor-pointer" size={20} />
            </div>

            <button
              className="mt-6 w-full flex items-center justify-center gap-2 bg-green-500/10 text-green-500 py-2 rounded-lg hover:bg-green-500/20 transition-all"
              onClick={() => navigate('./settings')}
            >
              <FiEdit2 size={16} />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {userProfile.stats ? (
              Object.entries(userProfile.stats).map(([key, value]) => (
                <div key={key} className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                  <div className="text-2xl font-bold text-green-500">{value}</div>
                  <div className="text-gray-400 capitalize">{key}</div>
                </div>
              ))
            ) : (
              <div className="text-gray-400">No stats available</div>
            )}
          </div>

          {/* Skills & Interests */}
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {userProfile.skills?.length ? (
                userProfile.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                    {skill}
                  </span>
                ))
              ) : (
                <span className="text-gray-400">No skills listed</span>
              )}
            </div>
            <h3 className="text-xl font-bold text-white mt-6 mb-4">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {userProfile.interests?.length ? (
                userProfile.interests.map((interest) => (
                  <span key={interest} className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                    {interest}
                  </span>
                ))
              ) : (
                <span className="text-gray-400">No interests listed</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
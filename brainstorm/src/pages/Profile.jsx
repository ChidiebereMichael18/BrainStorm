import React from 'react';
import { FiEdit2, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const userProfile = {
    name: "John Doe",
    username: "@johndoe",
    bio: "Full-stack developer | Gaming enthusiast | AI Researcher",
    skills: ["React", "Node.js", "Python", "Machine Learning"],
    interests: ["Gaming", "Development", "Research"],
    stats: {
      posts: 12,
      collaborations: 8,
      contributions: 45
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-green-500/20 rounded-full flex items-center justify-center text-3xl text-green-500 font-bold">
                {userProfile.name.charAt(0)}
              </div>
              <h2 className="mt-4 text-2xl font-bold text-white">{userProfile.name}</h2>
              <p className="text-green-500">{userProfile.username}</p>
              <p className="mt-2 text-gray-400">{userProfile.bio}</p>
            </div>

            <div className="mt-6 flex justify-center space-x-4">
              <FiGithub className="text-gray-400 hover:text-green-500 cursor-pointer" size={20} />
              <FiLinkedin className="text-gray-400 hover:text-green-500 cursor-pointer" size={20} />
              <FiTwitter className="text-gray-400 hover:text-green-500 cursor-pointer" size={20} />
            </div>

            <button className="mt-6 w-full flex items-center justify-center gap-2 bg-green-500/10 text-green-500 py-2 rounded-lg hover:bg-green-500/20 transition-all" onClick={()=> {navigate('./settings')}}>
              <FiEdit2 size={16} />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(userProfile.stats).map(([key, value]) => (
              <div key={key} className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                <div className="text-2xl font-bold text-green-500">{value}</div>
                <div className="text-gray-400 capitalize">{key}</div>
              </div>
            ))}
          </div>

          {/* Skills & Interests */}
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {userProfile.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
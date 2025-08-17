import React, { useState, useEffect } from 'react';
import { postsAPI } from '../services/api';

function Research() {
  const [researchProjects, setResearchProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResearchPosts = async () => {
      try {
        const response = await postsAPI.getResearchPosts();
        setResearchProjects(response.data);
      } catch (err) {
        setError('Failed to fetch research posts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchResearchPosts();
  }, []);

  const getContactLink = (method, info) => {
    switch (method) {
      case 'phone': return `tel:${info}`;
      case 'email': return `mailto:${info}`;
      case 'whatsapp': return `https://wa.me/${info}`;
      case 'discord': return `discord://${info}`;
      default: return '#';
    }
  };

  if (loading) return <div className="text-green-500 text-center py-12">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-12">{error}</div>;

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-green-500 mb-2 text-center">Research Collaborations</h1>
        <p className="text-gray-400 mb-8 text-center">Connect with researchers and innovators</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {researchProjects.map((project, index) => (
            <div key={index} 
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg 
                        border border-gray-800 hover:border-green-500
                        transition-all duration-300 overflow-hidden group">
              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-green-400 group-hover:text-green-300">
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">
                    {project.deadline}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                  <span className="flex items-center gap-1">
                    <span className="text-green-400">👥</span> {project.teamSize}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-green-400">🎯</span> {project.skillLevel}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} 
                      className="px-2 py-1 bg-green-500/5 text-green-400 text-xs 
                               rounded-md border border-green-900/50">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex items-center justify-between">
                    <div className="text-gray-400 text-sm">
                      Contact via: <span className="text-green-400 capitalize">{project.contactMethod}</span>
                    </div>
                    <button
                      onClick={() => window.open(getContactLink(project.contactMethod, project.contactInfo))}
                      className="bg-green-500/10 hover:bg-green-500/20 
                               text-green-400 px-4 py-2 rounded-lg text-sm 
                               font-medium transition-colors border border-green-500/20"
                    >
                      Join Research
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Research
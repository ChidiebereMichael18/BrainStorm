import React from 'react'

function Research() {
  const researchProjects = [
    {
      title: 'AI Ethics Research',
      description: 'Investigating ethical implications of AI in healthcare decision-making',
      teamSize: '3 researchers needed',
      skillLevel: 'Advanced',
      deadline: '6 months',
      tags: ['AI', 'Ethics', 'Healthcare'],
      contactMethod: 'email',
      contactInfo: 'ai.ethics@research.com'
    },
    {
      title: 'Climate Data Analysis',
      description: 'Statistical analysis of climate patterns using Python and R',
      teamSize: '2 analysts needed',
      skillLevel: 'Intermediate',
      deadline: '3 months',
      tags: ['Data Science', 'Python', 'Climate'],
      contactMethod: 'discord',
      contactInfo: 'climate_research#1234'
    },
    {
      title: 'Psychology Study',
      description: 'Research on social media impact on mental health',
      teamSize: '4 researchers',
      skillLevel: 'Graduate level',
      deadline: 'Ongoing',
      tags: ['Psychology', 'Social Media', 'Mental Health'],
      contactMethod: 'email',
      contactInfo: 'psych.study@research.com'
    },
    {
      title: 'Blockchain Research',
      description: 'Exploring sustainable blockchain solutions for supply chain',
      teamSize: '3 developers',
      skillLevel: 'Expert',
      deadline: '4 months',
      tags: ['Blockchain', 'Sustainability', 'Development'],
      contactMethod: 'discord',
      contactInfo: 'blockchain_research#5678'
    },
    {
      title: 'Quantum Computing',
      description: 'Research on quantum algorithms for optimization problems',
      teamSize: '2-3 researchers',
      skillLevel: 'PhD level',
      deadline: '1 year',
      tags: ['Quantum', 'Algorithms', 'Physics'],
      contactMethod: 'email',
      contactInfo: 'quantum@research.com'
    },
    {
      title: 'Renewable Energy',
      description: 'Study on efficient solar cell materials',
      teamSize: '4 researchers',
      skillLevel: 'Graduate+',
      deadline: '8 months',
      tags: ['Energy', 'Materials', 'Engineering'],
      contactMethod: 'discord',
      contactInfo: 'renewable_energy#9012'
    }
  ];

  const getContactLink = (method, info) => {
    switch (method) {
      case 'phone': return `tel:${info}`;
      case 'email': return `mailto:${info}`;
      case 'whatsapp': return `https://wa.me/${info}`;
      case 'discord': return `discord://${info}`;
      default: return '#';
    }
  };

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
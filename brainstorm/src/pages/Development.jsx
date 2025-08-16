import React from 'react'

function Development() {
  const devProjects = [
    {
      title: 'E-commerce Platform',
      description: 'Building a modern e-commerce platform using Next.js and GraphQL',
      teamSize: '4 developers',
      skillLevel: 'Intermediate-Senior',
      deadline: '4 months',
      tags: ['Next.js', 'GraphQL', 'TypeScript']
    },
    {
      title: 'Mobile Health App',
      description: 'Developing a React Native app for mental health tracking',
      teamSize: '3 developers needed',
      skillLevel: 'Intermediate',
      deadline: '3 months',
      tags: ['React Native', 'Mobile', 'Healthcare']
    },
    {
      title: 'AI Chat Assistant',
      description: 'Creating an AI-powered chat assistant using Python and TensorFlow',
      teamSize: '2 ML engineers',
      skillLevel: 'Advanced',
      deadline: '6 months',
      tags: ['Python', 'AI', 'Machine Learning']
    },
    {
      title: 'DevOps Pipeline',
      description: 'Setting up automated CI/CD pipeline for microservices',
      teamSize: '2 DevOps engineers',
      skillLevel: 'Senior',
      deadline: '2 months',
      tags: ['DevOps', 'Docker', 'Kubernetes']
    },
    {
      title: 'Web3 DApp',
      description: 'Developing a decentralized application on Ethereum',
      teamSize: '3 developers',
      skillLevel: 'Advanced',
      deadline: '5 months',
      tags: ['Solidity', 'Web3', 'Ethereum']
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Building real-time analytics dashboard using MERN stack',
      teamSize: '3-4 developers',
      skillLevel: 'Intermediate',
      deadline: '3 months',
      tags: ['MongoDB', 'Express', 'React', 'Node']
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-green-500 mb-2 text-center">Development Projects</h1>
        <p className="text-gray-400 mb-8 text-center">Join innovative coding projects</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {devProjects.map((project, index) => (
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
              </div>

              <button className="w-full bg-black/40 hover:bg-green-500/20 
                              text-green-400 font-medium py-3 px-4
                              transition-all duration-200 border-t border-green-900/50">
                Join Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Development
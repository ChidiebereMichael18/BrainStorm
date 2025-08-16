import React from 'react'

function Gaming() {
  const gamingActivities = [
    {
      title: 'Valorant Tournament Team',
      description: 'Looking for competitive players to form a Valorant team for upcoming tournament',
      teamSize: '5 players needed',
      skillLevel: 'Diamond+',
      deadline: '2 weeks',
      tags: ['FPS', 'Competitive', 'Tournament']
    },
    {
      title: 'Minecraft Build Project',
      description: 'Creative builders wanted for massive fantasy world project',
      teamSize: '3-4 builders',
      skillLevel: 'Intermediate',
      deadline: 'Ongoing',
      tags: ['Creative', 'Building', 'Long-term']
    },
    {
      title: 'Game Development Squad',
      description: 'Unity developers and artists needed for indie game project',
      teamSize: '4 developers',
      skillLevel: 'Beginner friendly',
      deadline: '3 months',
      tags: ['Development', 'Unity', 'Indie']
    },
    {
      title: 'League of Legends Team',
      description: 'Recruiting for amateur LoL tournament. Need support and jungle roles',
      teamSize: '2 players needed',
      skillLevel: 'Gold+',
      deadline: '1 week',
      tags: ['MOBA', 'Team', 'Competitive']
    },
    {
      title: 'Fortnite Squad',
      description: 'Building a consistent squad for competitive play and tournaments',
      teamSize: '3 players needed',
      skillLevel: 'Advanced',
      deadline: 'ASAP',
      tags: ['Battle Royale', 'Competitive', 'Active']
    },
    {
      title: 'Streaming Team',
      description: 'Looking for content creators to form a streaming team',
      teamSize: '4-5 streamers',
      skillLevel: 'Any',
      deadline: 'Ongoing',
      tags: ['Content', 'Streaming', 'Casual']
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-green-500 mb-2 text-center">Gaming Collaborations</h1>
        <p className="text-gray-400 mb-8 text-center">Find your perfect gaming crew here!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {gamingActivities.map((activity, index) => (
            <div key={index} 
              className="bg-gray-900/50 backdrop-blur-sm rounded-lg 
                        border border-gray-800 hover:border-green-500
                        transition-all duration-300 overflow-hidden group">
              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-green-400 group-hover:text-green-300">
                    {activity.title}
                  </h3>
                  <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">
                    {activity.deadline}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{activity.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                  <span className="flex items-center gap-1">
                    <span className="text-green-400">👥</span> {activity.teamSize}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-green-400">🎯</span> {activity.skillLevel}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {activity.tags.map((tag, i) => (
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
                Join Team
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gaming
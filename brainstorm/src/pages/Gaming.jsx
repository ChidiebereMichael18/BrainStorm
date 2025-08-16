import React from 'react'

function Gaming() {
  const gamingActivities = [
    {
      title: 'Valorant Tournament Team',
      description: 'Looking for competitive players to form a Valorant team for upcoming tournament',
      teamSize: '5 players needed',
      skillLevel: 'Diamond+',
      deadline: '2 weeks',
      tags: ['FPS', 'Competitive', 'Tournament'],
      contactMethod: 'discord',
      contactInfo: 'valorant_team#1234'
    },
    {
      title: 'Minecraft Build Project',
      description: 'Creative builders wanted for massive fantasy world project',
      teamSize: '3-4 builders',
      skillLevel: 'Intermediate',
      deadline: 'Ongoing',
      tags: ['Creative', 'Building', 'Long-term'],
      contactMethod: 'discord',
      contactInfo: 'minecraft_builds#5678'
    },
    {
      title: 'Game Development Squad',
      description: 'Unity developers and artists needed for indie game project',
      teamSize: '4 developers',
      skillLevel: 'Beginner friendly',
      deadline: '3 months',
      tags: ['Development', 'Unity', 'Indie'],
      contactMethod: 'email',
      contactInfo: 'devsquad@example.com'
    },
    {
      title: 'League of Legends Team',
      description: 'Recruiting for amateur LoL tournament. Need support and jungle roles',
      teamSize: '2 players needed',
      skillLevel: 'Gold+',
      deadline: '1 week',
      tags: ['MOBA', 'Team', 'Competitive'],
      contactMethod: 'whatsapp',
      contactInfo: '1234567890'
    },
    {
      title: 'Fortnite Squad',
      description: 'Building a consistent squad for competitive play and tournaments',
      teamSize: '3 players needed',
      skillLevel: 'Advanced',
      deadline: 'ASAP',
      tags: ['Battle Royale', 'Competitive', 'Active'],
      contactMethod: 'phone',
      contactInfo: '9876543210'
    },
    {
      title: 'Streaming Team',
      description: 'Looking for content creators to form a streaming team',
      teamSize: '4-5 streamers',
      skillLevel: 'Any',
      deadline: 'Ongoing',
      tags: ['Content', 'Streaming', 'Casual'],
      contactMethod: 'discord',
      contactInfo: 'streamteam#0001'
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

              <div className="mt-4 pt-4 border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <div className="text-gray-400 text-sm">
                    Contact via: <span className="text-green-400 capitalize">{activity.contactMethod}</span>
                  </div>
                  <button
                    onClick={() => window.open(getContactLink(activity.contactMethod, activity.contactInfo))}
                    className="bg-green-500/10 hover:bg-green-500/20 
                               text-green-400 px-4 py-2 rounded-lg text-sm 
                               font-medium transition-colors border border-green-500/20"
                  >
                    Join Team
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gaming
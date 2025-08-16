import React, { useEffect, useState } from "react";
import Welcome from "../components/dashboard/Welcome";
import { Link } from "react-router-dom";

function Dashboard() {
  const featuredProjects = {
    gaming: [
      {
        title: "Valorant Tournament Team",
        tags: ["FPS", "Competitive"],
        deadline: "2 weeks",
        contactMethod: "discord",
        contactInfo: "valorant_team#1234"
      },
      {
        title: "Minecraft Build Project",
        tags: ["Creative", "Building"],
        deadline: "Ongoing",
        contactMethod: "discord",
        contactInfo: "minecraft_builds#5678"
      }
    ],
    research: [
      {
        title: "AI Ethics Research",
        tags: ["AI", "Ethics"],
        deadline: "6 months",
        contactMethod: "email",
        contactInfo: "ai.ethics@research.com"
      },
      {
        title: "Climate Data Analysis",
        tags: ["Data Science", "Climate"],
        deadline: "3 months",
        contactMethod: "discord",
        contactInfo: "climate_research#1234"
      }
    ],
    development: [
      {
        title: "E-commerce Platform",
        tags: ["Next.js", "GraphQL"],
        deadline: "4 months",
        contactMethod: "discord",
        contactInfo: "ecommerce_team#1234"
      },
      {
        title: "Mobile Health App",
        tags: ["React Native", "Healthcare"],
        deadline: "3 months",
        contactMethod: "email",
        contactInfo: "health.app@example.com"
      }
    ]
  };

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
        <Welcome />
        
        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {Object.entries(featuredProjects).map(([category, projects]) => (
            <div key={category} 
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 
                       hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-green-400 capitalize">{category}</h2>
                <Link 
                  to={`/dashboard/${category}`}
                  className="text-green-400 text-sm hover:text-green-300 flex items-center gap-2"
                >
                  View All →
                </Link>
              </div>
              
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} 
                    className="group bg-black/40 p-4 rounded-xl hover:bg-green-500/5 
                             transition-all cursor-pointer border border-transparent 
                             hover:border-green-500/20"
                  >
                    <h3 className="text-white font-medium mb-3 group-hover:text-green-400">
                      {project.title}
                    </h3>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} 
                            className="px-2 py-1 bg-green-500/10 text-green-400 
                                     text-xs rounded-full border border-green-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-800 flex justify-between items-center">
                      <span className="text-gray-400 text-xs">
                        Via: <span className="text-green-400 capitalize">{project.contactMethod}</span>
                      </span>
                      <button
                        onClick={() => window.open(getContactLink(project.contactMethod, project.contactInfo))}
                        className="text-green-400 text-sm hover:text-green-300 flex items-center gap-1"
                      >
                        Join →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
            <div className="text-2xl font-bold text-green-400">24</div>
            <div className="text-gray-400 text-sm">Active Projects</div>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
            <div className="text-2xl font-bold text-green-400">156</div>
            <div className="text-gray-400 text-sm">Collaborators</div>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
            <div className="text-2xl font-bold text-green-400">12</div>
            <div className="text-gray-400 text-sm">Completed Projects</div>
          </div>
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
            <div className="text-2xl font-bold text-green-400">8</div>
            <div className="text-gray-400 text-sm">New Today</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

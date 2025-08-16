import React, { useEffect, useState } from "react";
import Welcome from "../components/dashboard/Welcome";
import { Link } from "react-router-dom";

function Dashboard() {
  const featuredProjects = {
    gaming: [
      {
        title: "Valorant Tournament Team",
        tags: ["FPS", "Competitive"],
        deadline: "2 weeks"
      },
      {
        title: "Minecraft Build Project",
        tags: ["Creative", "Building"],
        deadline: "Ongoing"
      }
    ],
    research: [
      {
        title: "AI Ethics Research",
        tags: ["AI", "Ethics"],
        deadline: "6 months"
      },
      {
        title: "Climate Data Analysis",
        tags: ["Data Science", "Climate"],
        deadline: "3 months"
      }
    ],
    development: [
      {
        title: "E-commerce Platform",
        tags: ["Next.js", "GraphQL"],
        deadline: "4 months"
      },
      {
        title: "Mobile Health App",
        tags: ["React Native", "Healthcare"],
        deadline: "3 months"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <Welcome />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {Object.entries(featuredProjects).map(([category, projects]) => (
            <div key={category} className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-green-400 capitalize">{category}</h2>
                <Link to={`/dashboard/${category}`} className="text-green-400 text-sm hover:text-green-300">
                  View All →
                </Link>
              </div>
              
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="bg-black/40 p-3 rounded-lg hover:bg-green-500/5 transition-all">
                    <h3 className="text-white font-medium mb-2">{project.title}</h3>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">{project.deadline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

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

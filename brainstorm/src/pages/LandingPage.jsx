import React from "react";
import Navbar from "../components/landingpage/Navbar";
import { assets } from "../assets/assets";
import Avatar from "../components/landingpage/Avatar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/landingpage/Footer";
import GetStarted from "../components/landingpage/GetStarted";

function LandingPage() {
  const navigate = useNavigate();

  const features = [
    { title: "Gaming", icon: "🎮", desc: "Find your perfect gaming squad" },
    { title: "Development", icon: "💻", desc: "Connect with fellow developers" },
    { title: "Research", icon: "🔬", desc: "Collaborate on research projects" }
  ];

  return (
    <div className="relative overflow-hidden scroll-smooth">
      <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
        <div className="absolute inset-0 bg-[url('/src/assets/background.jpg')] opacity-20 bg-cover bg-center"/>
        <div className="relative">
          <Navbar />

          {/* Hero Section */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="flex flex-col xl:flex-row items-center justify-between gap-12">
              <div className="text-white w-full xl:w-3/5 space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                  BrainStorm – Find Your Crew, Build Cool Stuff! 🚀
                </h1>
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
                  Need teammates for a game, project, or research? BrainStorm lets you post, connect, and collaborate—fast.
                </p>
                <div className="flex gap-4">
                    <button onClick={() => navigate("/signup")}
                      className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-3 rounded-lg transform transition hover:scale-105">
                      Get Started
                    </button>
                </div>
              </div>
              <div className="w-full xl:w-2/5">
                <Avatar />
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-20">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-green-500 transition-all">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-green-400 text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works Section - Updated */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                How It Works
              </h2>
              <p className="text-gray-300 text-lg">
                Tired of searching for the perfect team? BrainStorm connects you with like-minded collaborators instantly.
              </p>
            </div>
          </div>

          {/* Rest of the sections */}
          <div className="mt-20">
            <GetStarted />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

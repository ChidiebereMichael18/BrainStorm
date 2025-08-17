import React from "react";
import { assets } from "../assets/assets";
import Signup from "../components/auth/Signup";

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black" />
      <div className="container mx-auto max-w-6xl flex flex-col xl:flex-row items-center gap-8 relative z-10">
        <div className="w-full xl:w-1/2 backdrop-blur-sm bg-gray-900/30 rounded-3xl p-8 border border-gray-800">
          <h2 className="text-4xl font-bold text-green-500 mb-8 text-center">
            Join BrainStorm
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Connect with like-minded creators and build amazing projects together
          </p>
          <Signup />
        </div>
        <div className="hidden xl:block xl:w-1/2">
          <img
            src={assets.illustration}
            alt="Signup Illustration"
            className="w-full h-full max-w-md mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

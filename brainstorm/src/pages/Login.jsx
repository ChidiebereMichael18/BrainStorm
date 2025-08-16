import React from "react";
import { assets } from "../assets/assets";
import Login from "../components/auth/Login";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black" />
      <div className="container mx-auto max-w-6xl flex flex-col xl:flex-row items-center gap-8 relative z-10">
        <div className="w-full xl:w-1/2 backdrop-blur-sm bg-gray-900/30 rounded-3xl p-8 border border-gray-800">
          <h2 className="text-4xl font-bold text-green-500 mb-8 text-center">
            Welcome Back
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Continue building amazing projects with your team
          </p>
          <Login />
        </div>
        <div className="hidden xl:block xl:w-1/2">
          <img
            src={assets.illustration}
            alt="Login Illustration"
            className="w-full max-w-md mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

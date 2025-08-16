import React from "react";
import { assets } from "../assets/assets";
import Form from "../components/auth/Form";

const Signup = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black">
      <div className="w-full xl:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-green-500 mb-8 text-center">
            Join BrainStorm
          </h2>
          <Form />
        </div>
      </div>
      <div className="hidden md:hidden xl:flex xl:w-1/2 items-center justify-center bg-light">
        <img
          src={assets.illustration}
          alt="Signup Illustration"
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default Signup;

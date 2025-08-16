import React from 'react'

function GetStarted() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        <div className="hover:scale-110 hover:z-10 bg-textGreen bg-opacity-50 p-5 sm:p-6 md:p-8 lg:p-10 rounded-4xl sm:rounded-xl md:rounded-2xl transition duration-700 hover:bg-textHover">
          <h3 className="text-white text-center text-sm sm:text-base md:text-lg lg:text-xl font-bold">
            Sign Up & Create Your Profile
          </h3>
          <p className="pt-2 text-textGray text-xs sm:text-sm md:text-base text-center">
            Join BrainStorm with a quick signup. Set up your profile with your interests—gaming, 
            coding, or research.
          </p>
        </div>
        
        <div className="hover:scale-110 hover:z-10 bg-textGreen bg-opacity-50 p-5 sm:p-6 md:p-8 lg:p-10 rounded-4xl sm:rounded-xl md:rounded-2xl transition duration-700 hover:bg-textHover">
          <h3 className="text-white text-center text-sm sm:text-base md:text-lg lg:text-xl font-bold">
            Post or Explore Projects
          </h3>
          <p className="pt-2 text-textGray text-xs sm:text-sm md:text-base text-center">
            Post your own project or gaming session, OR Browse existing posts to find 
            something that interests you
          </p>
        </div>
        
        <div className=" hover:scale-110 hover:z-10 bg-textGreen bg-opacity-50 p-5 sm:p-6 md:p-8 lg:p-10 rounded-4xl sm:rounded-xl md:rounded-2xl transition duration-700 hover:bg-textHover">
          <h3 className="text-white text-center text-sm sm:text-base md:text-lg lg:text-xl font-bold">
            Connect & Get Started..
          </h3>
          <p className="pt-2 text-textGray text-xs sm:text-sm md:text-base text-center">
            Start working together—no distractions, just collaboration!
          </p>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
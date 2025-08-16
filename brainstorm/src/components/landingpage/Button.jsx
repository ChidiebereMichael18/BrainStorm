import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth"; // Import Firebase auth

function Button() {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser; // ✅ Get the logged-in user

  return (
    <div>
      {user ? (
        <button
          onClick={() => navigate("/dashboard")}
          className=" text-white text-base bg-textGreen px-6 py-1 md:px-8 md:py-1.5 rounded-xl hover:bg-textHover "
        >
          Find Your Team
        </button>
      ) : (
        <button
          onClick={() => navigate("/signup")}
          className=" text-white text-base bg-textGreen px-6 py-1 md:px-8 md:py-1.5 rounded-xl hover:bg-textHover "
        >
          Sign Up
        </button>
      )}
    </div>
  );
}

export default Button;

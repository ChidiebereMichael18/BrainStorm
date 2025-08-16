import React from "react";
import { useNavigate } from "react-router-dom";

function Button() {
  const navigate = useNavigate();


  return (
    <div>
        <button
          onClick={() => navigate("/signup")}
          className=" text-white text-base bg-textGreen px-6 py-1 md:px-8 md:py-1.5 rounded-xl hover:bg-textHover "
        >
          Find Your Team
        </button>
    </div>
  );
}

export default Button;

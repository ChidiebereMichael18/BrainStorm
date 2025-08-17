import React from "react";
import { FaBars, FaUser, FaSearch, FaPlusCircle } from "react-icons/fa";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onMenuToggle }) => {
  const navigate = useNavigate();
  return (
    <nav className="bg-gray-900 shadow-md p-2 flex justify-between items-center">
      <div className="flex items-center  font-montserrat">
        <button className="lg:hidden mr-4 " onClick={onMenuToggle}>
          <FaBars className="text-xl text-white" />
        </button>
        <div className=" ">
          {/* <img
            src={assets.green}
            alt="logo"
            className="w-8 pr-0.5 h-8 pt-1.1 md:pt-1 rounded-2xl"
          /> */}
          <h2 className="text-green-500 text-xl md:text-2xl font-bold">
            BrainStorm
          </h2>
        </div>
      </div>
      <div className="flex items-center  font-montserrat  space-x-4">
        <div className="w-8 h-8 hover:animate-pulse bg-green-400  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-textHover cursor-pointer rounded-full flex items-center justify-center">
          <FaPlusCircle className="text-white" size={20} onClick={()=> {navigate('./myposts')}} />
        </div>
        <div className="w-8 h-8 bg-green-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-textHover cursor-pointer rounded-full flex items-center justify-center">
          <FaSearch className=" text-white" size={18} onClick={()=> {navigate('./search')}}/>
        </div>
        <div className="w-8 h-8 bg-green-400 hover:animate-pulse cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-textHover rounded-full flex items-center justify-center">
          <FaUser className="text-white" size={18} onClick={()=> {navigate("./profile")}}/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

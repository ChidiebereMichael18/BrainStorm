import React from "react";
import { assets } from "../../assets/assets";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-5 pt-5 w-full">
      <div className="flex ">
        <img src={assets.green} alt="logo"className="w-8 pr-0.5 h-8 pt-1 rounded-2xl"  />
        <h2 className="text-textGreen  font-montserrat text-xl md:text-2xl font-extrabold">BrainStorm</h2>
      </div>
      <Button/>
    </nav>
  );
};

export default Navbar;

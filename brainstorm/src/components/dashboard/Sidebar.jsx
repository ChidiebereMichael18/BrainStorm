import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaBookmark,
  FaBook,
  FaUsers,
  FaComments,
  FaCog,
  FaGamepad,
  FaTimes,
} from "react-icons/fa";
import { assets } from "../../assets/assets";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`
        fixed top-0 left-0 w-50 h-full
        ${isOpen ? "bg-gray-900" : "bg-transparent"}
        text-white p-4 z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:relative lg:translate-x-0 lg:bg-transparent
      `}
    >
      <div className="flex justify-between items-center  font-montserrat mb-4">
        {/* <div className="flex ">
          <img
            src={assets.green}
            alt="logo"
            className="w-8 pr-0.5 h-8 pt-1 rounded-2xl"
          />
          <h2 className="text-textGreen text-xl md:text-2xl font-bold">
            BrainStorm
          </h2>
        </div> */}
        <button onClick={onClose} className="text-white lg:hidden">
          <FaTimes />
        </button>
      </div>

      <nav>
        <ul className="space-y-4">
          <SidebarItem
            to="/dashboard"
            icon={<FaHome />}
            label="Home"
            onClose={onClose}
          />
          <SidebarItem
            to="/dashboard/gaming"
            icon={<FaGamepad size={20} />}
            label="Gaming"
            onClose={onClose}
          />
          <SidebarItem
            to="/dashboard/development"
            icon={<FaUsers size={20} />}
            label="Development"
            onClose={onClose}
          />
          <SidebarItem
            to="/dashboard/research"
            icon={<FaBook size={20} />}
            label="Research"
            onClose={onClose}
          />
          <SidebarItem
            to={'/dashboard/myposts'}
            icon={<FaBookmark size={20} />}
            label="My Posts"
            onClose={onClose}
          />
          <SidebarItem
            to="/dashboard/settings"
            icon={<FaCog size={20} />}
            label="Settings"
            onClose={onClose}
          />
        </ul>
      </nav>
    </div>
  );
};

const SidebarItem = ({ to, icon, label, onClose }) => {
  const handleClick = () => {
    if (onClose) onClose();
  };

  return (
    <li>
      <Link
        to={to}
        className="flex items-center  font-montserrat p-2 hover:text-textGray focus:text-textGreen rounded transition duration-200"
        onClick={handleClick}
      >
        {React.cloneElement(icon, { className: "mr-3" })}
        {label}
      </Link>
    </li>
  );
};

export default Sidebar;

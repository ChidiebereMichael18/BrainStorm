import React from "react";
import { assets } from "../../assets/assets";

const avatars = [
  { img: `${assets.avatar}`, },
  { img: `${assets.avatar6}`, }, 
  { img: `${assets.avatar3}`, },
  { img: `${assets.avatar2}`, }, 
];

const positions = [
  "top-0 left-1/2 -translate-x-1/2",
  "bottom-0 left-1/2 -translate-x-1/2",
  "top-1/2 left-0 -translate-y-1/2",
  "top-1/2 right-0 -translate-y-1/2",
];

const Avatar = () => {
  return (
    <div className="mt-10 mb-20 flex justify-center bg-transparent mr-5">
      <div className="relative w-120 h-95 hidden xl:flex">
        {avatars.map((avatar, index) => (
          <div key={index} className={`absolute ${positions[index]}`}>
            <div
              className="w-45 h-20 rounded-full  items-center  shadow-lg"
              style={{ backgroundColor: avatar.bgColor }}
            >
              <img src={avatar.img} alt="Avatar" className="w-100 h-auto rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Avatar;

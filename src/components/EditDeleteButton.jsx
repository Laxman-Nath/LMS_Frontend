/* eslint-disable react/prop-types */
import {  useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export const EditDeleteButton = ({ name, onClick }) => {
  
  

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseHover = () => {
    setIsHovered(!isHovered);
  };
  return (
    <div>
      <button
        onClick={onClick}
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseHover}
        className="cursor-pointer text-2xl hover:text-slate-400"
      >
        {name === "edit" ? <MdOutlineEdit /> : <MdDelete />}
      </button>
      {isHovered && (
        <span
          className={`absolute z-20  text-1xl ${
            name === "edit" ? "text-green-600 right-1" : "text-red-600 right-10"
          }`}
        >
          {name === "edit" ? "Edit" : "Delete"}
        </span>
      )}
    </div>
  );
};

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { cloneElement } from "react";
import { HiXMark } from "react-icons/hi2";

export const Modal = ({ children ,onClick}) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full z-40 backdrop-blur-sm transition-all">
      <div className="fixed max-h-[95vh] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-lg shadow-lg px-14 py-10 overflow-auto">
        {/* Close button */}
       
        <div>
       
          {React.isValidElement(children)
            ? cloneElement(children) // Pass close function to the children
            : children}
        </div>
      </div>
    </div>
  );
};



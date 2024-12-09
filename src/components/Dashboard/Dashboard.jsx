import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

export const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const toggleSideBar = () => {
    setOpen(!open);
  };
  return (
    <>
      <div
        className={`${
          open ? "lg:w-72 md:w-50 sm:w-30" : "w-20"
        } fixed top-0 left-0 h-screen  flex flex-col bg-primary shadow-lg `}
      >
       
        <div className="text-white mt-2 mr-2" onClick={toggleSideBar}>
          {open ? (
            <FaTimes className="h-8 w-8 transition duration-1200 ease-in-out hover:cursor-pointer hover:text-red-600 hover:scale-105" />
          ) : (
            <FaBars className="h-8 w-8 transition duration-1200 ease-in-out hover:cursor-pointer hover:text-red-600 hover:scale-105" />
          )}
        </div>
        <h1 className="text-white text-center">LMS</h1>
        {open && (
          <ul className="text-white mt-4 px-4 text-1xl">
            <li className="mb-4 text-center cursor-pointer hover:text-gray-400">
              Menu Item 1
            </li>
            <li className="mb-4 text-center cursor-pointer hover:text-gray-400">
              Menu Item 1
            </li>
            <li className="mb-4 text-center cursor-pointer hover:text-gray-400">
              Menu Item 1
            </li>
            
          </ul>
        )}
      </div>
    </>
  );
};

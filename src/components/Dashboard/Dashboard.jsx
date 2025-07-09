import { useEffect, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { DashboardItem } from "./DashBoardItem";
import { SiBookstack } from "react-icons/si";
import { RxAvatar } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
import { Spinner } from "../Spinner";
import { CiLogout } from "react-icons/ci";
import { removeToken } from "../../utils/Token";
import { replace, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { IoMdAdd } from "react-icons/io";
import { MdOutlinePersonAdd } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useAuth } from "../../context/AuthProvider";

import { FcDepartment } from "react-icons/fc";
import { useGetLoggedInUserApi } from "../../hooks/queries/auth/UseGetLoggedInUserApi";

export const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const [showOption, setShowOption] = useState(false);
  const toggleSideBar = () => {
    setOpen(!open);
  };
  const handleOptions = () => {
    setShowOption(!showOption);
  };

  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate("/viewprofile", { replace: "true" }, { state: { user: user } });
  };
   const handleViewBorrowedBooks = () => {
    navigate("/viewborrowedbooks", { replace: "true" });
  };
  const logout = () => {
    removeToken();
    navigate("/login", { replace: true });
    toast.success("Successfully logged out!");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const { user, isPending, isError, error } = useGetLoggedInUserApi();
  const { userRole } = useAuth();

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    console.log(error);
  }

  const isUserPresent = user;
  const isLibrarian = userRole && userRole === "ROLE_LIBRARIAN";

  return (
    <>
      <div
        className={`${
          open ? "lg:w-72 md:w-50 sm:w-30" : "w-20"
        } fixed top-0 left-0 h-screen flex flex-col bg-[#1F2937] shadow-lg`}
        onClick={() => {
          if (showOption) setShowOption(false);
        }}
      >
        {/* Open/Close Button */}
        <div className="text-white mt-2 mr-2" onClick={toggleSideBar}>
          {open ? (
            <FaTimes className="h-8 w-8 transition duration-1200 ease-in-out hover:cursor-pointer hover:text-red-600 hover:scale-105" />
          ) : (
            <FaBars className="h-8 w-8 transition duration-1200 ease-in-out hover:cursor-pointer hover:text-red-600 hover:scale-105" />
          )}
        </div>

        <h1
          className={`${
            !open ? "text-xs" : "text-xl sm:text-2xl md:text-3xl font-semibold"
          }  text-blue-600 text-center mb-4 uppercase tracking-tight border-b-2 border-blue-600 pb-1 transition-all duration-200 hover:text-blue-400 text-center`}
        >
          Library Management Dashboard
        </h1>

        {/* Scrollable Content Section */}
        <div
          className="flex-1 overflow-y-auto mt-4 px-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
          style={{
            maxHeight: `calc(100vh - 260px)`, // Adjusted height
            overflowX: "hidden", // Prevent horizontal scrollbar
          }}
        >
          <ul className="text-white text-1xl space-y-2">
            <DashboardItem
              icon={<FaHome />}
              title="Home"
              path="/"
              role={user && user.roleName}
            />

            {isLibrarian && (
              <DashboardItem
                icon={<IoMdAdd />}
                title="Add Book"
                path="addbook"
                role={user && user.roleName}
              />
            )}

            <DashboardItem icon={<SiBookstack />} title="Books" path="books" />

            {isLibrarian && (
              <>
                <DashboardItem
                  icon={<MdOutlinePersonAdd />}
                  title="Add Student"
                  path="addstudent"
                  role={user && user.roleName}
                />
                <DashboardItem
                  icon={<IoPeopleSharp />}
                  title="Students"
                  path="students"
                />
                <DashboardItem
                  icon={<FaChalkboardTeacher />}
                  title="Add Teacher"
                  path="addteacher"
                />
                <DashboardItem
                  icon={<GiTeacher />}
                  title="Teachers"
                  path="teachers"
                />
                <DashboardItem
                  icon={<IoMdAdd />}
                  title="Add Department"
                  path="adddepartment"
                />
                <DashboardItem
                  icon={<FcDepartment />}
                  title="Departments"
                  path="departments"
                />
              </>
            )}
          </ul>
        </div>

        {/* Avatar and User Info Section (Fixed at the bottom) */}
        {open && (
          <div
            className="absolute bottom-0 w-full px-4 z-10"
            style={{
              backgroundColor: "#2D3748",
              borderTop: "1px solid #4A5568",
              paddingTop: "10px",
            }}
          >
            <div className="flex items-center text-white justify-between">
              {/* Avatar Section */}
              <div className="flex items-center">
                <RxAvatar
                  size={60}
                  className="rounded-full border-2 border-white"
                />
                <div className="ml-4 flex flex-col gap-1">
                  <span className="lg:text-2xl md:text-xl sm:text-lg font-semibold">
                    {isUserPresent && user.firstName}{" "}
                    {isUserPresent && user.lastName}
                  </span>
                  <span className="text-sm text-gray-400 text-center">
                    {isUserPresent && user.firstName}{" "}
                    {isUserPresent && user.lastName}
                  </span>
                </div>
              </div>

              {/* Three Dots (Options) */}
              <div
                className="hover:cursor-pointer hover:text-gray-400 transition duration-300"
                onClick={handleOptions}
              >
                <BsThreeDots size={30} />
              </div>
              {/* showing options on click of three dot */}
              {showOption && (
                <div className="absolute bottom-5 right-0  w-48 bg-white text-black shadow-lg rounded-md">
                  <ul>
                    <li
                      className="px-4 py-2 cursor-pointer hover:bg-gray-300"
                      onClick={handleViewProfile}
                    >
                      View Profile
                    </li>
                     <li
                      className="px-4 py-2 cursor-pointer hover:bg-gray-300"
                      onClick={handleViewBorrowedBooks}
                    >
                      View BorrowedBooks
                    </li>
                    <li
                      className="px-4 py-2 cursor-pointer hover:bg-gray-300"
                      onClick={logout}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

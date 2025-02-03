import { useEffect, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { DashboardItem } from "./DashBoardItem";
import { SiBookstack } from "react-icons/si";
import { RxAvatar } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
import { UseGetLoggedInUserApi } from "../../Queries/UseGetLoggedInUserApi";
import { Spinner } from "../../uiutils/Spinner";
import { CiLogout } from "react-icons/ci";
import { removeToken } from "../../utils/Token";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { IoMdAdd } from "react-icons/io";
import { MdOutlinePersonAdd } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useAuth } from "../../context/AuthProvider";


export const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const toggleSideBar = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();

  const logout = () => {
    removeToken();

    navigate("/login", { replace: true });
    toast.success("Successfully logged out!");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  const { user, isPending, isError, error } = UseGetLoggedInUserApi();
  // const {firstName,lastName}=user;
  const { userRole } = useAuth();
  if (isPending) {
    return <Spinner />;
  }
  if (isError) {
    console.log(error);
  }
  // console.log(user);
  const isUserPresent = user;
  const isLibrarian = userRole && userRole === "ROLE_LIBRARIAN";
  return (
    <>
      <div
        className={`${
          open ? "lg:w-72 md:w-50 sm:w-30" : "w-20"
        } fixed top-0 left-0 h-screen  flex flex-col bg-primary shadow-lg  `}
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
              <DashboardItem
                icon={<MdOutlinePersonAdd />}
                title="Add Student"
                path="addstudent"
                role={user && user.roleName}
              />
            )}
            {isLibrarian &&(
            <DashboardItem
              icon={<IoPeopleSharp />}
              title="Students"
              path="students"
            />)}

            {isLibrarian && (
              <DashboardItem
                icon={<FaChalkboardTeacher />}
                title="Add Teacher"
                path="addteacher"
              />
            )}
            {isLibrarian && (
              <DashboardItem
                icon={<GiTeacher />}
                title="Teachers"
                path="teachers"
              />
            )}

            <li
              className="flex justify-start mb-4 text-center cursor-pointer hover:text-gray-400"
              onClick={logout}
            >
              <CiLogout className="text-3xl mr-2" />
              <span className=" text-2xl hover:scale-90 text-red-500 rounded-md transition-all duration-1000 ease-in-out">
                Logout
              </span>
            </li>
          </ul>
        )}

        {open && (
          <div className="flex   items-center absolute bottom-5 text-white w-full">
            <div>
              <RxAvatar size={60} />
            </div>
            <div className="flex flex-col gap-0">
              <span className={"lg:text-3xl md:text-2xl sm:text-1xl m-0"}>
                {isUserPresent && user.firstName}{" "}
                {isUserPresent && user.lastName}
              </span>
              <span className="text-1xl m-0 text-center">
                {isUserPresent && user.firstName}{" "}
                {isUserPresent && user.lastName}
              </span>
            </div>
            <div className="absolute right-2 hover:cursor-pointer">
              <BsThreeDots size={30} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

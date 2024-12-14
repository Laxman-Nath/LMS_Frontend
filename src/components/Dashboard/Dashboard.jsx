import { useEffect, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { DashboardItem } from "./DashBoardItem";
import { SiBookstack } from "react-icons/si";
import { RxAvatar } from "react-icons/rx";
import { BsThreeDots } from "react-icons/bs";
import { UseGetLoggedInUserApi } from "../../Queries/UseGetLoggedInUserApi";
export const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const toggleSideBar = () => {
    setOpen(!open);
  };

  const { user, isLoading, isError, error } = UseGetLoggedInUserApi();
  // const {firstName,lastName}=user;
  if (isLoading) {
    console.log("loading........");
  }
  if (isError) {
    console.log(error);
  }
  useEffect(() => {
    // if(user)
        console.log(user);
  },[user]);

  const isUserPresent=user?true:false;
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
            <DashboardItem icon={<FaHome />} title="Home" path="/" />
           {isUserPresent && user.roleName=="ROLE_LIBRARIAN" && <DashboardItem
              icon={<IoPeopleSharp />}
              title="Students"
              path="students"
            /> }
          {isUserPresent && user.roleName=="ROLE_LIBRARIAN" &&  <DashboardItem
              icon={<IoPeopleSharp />}
              title="Teachers"
              path="teachers"
            />
          }
            <DashboardItem icon={<SiBookstack />} title="Books" path="books" />
          </ul>
        )}

        {open && (
          <div className="flex   items-center absolute bottom-5 text-white w-full">
            <div>
              <RxAvatar size={60}/>
            </div>
            <div className="flex flex-col gap-0">
              <span className={"lg:text-3xl md:text-2xl sm:text-1xl m-0"}>{isUserPresent && user.firstName} {isUserPresent && user.lastName}</span>
              <span className="text-1xl m-0 text-center">{isUserPresent && user.firstName} {isUserPresent && user.lastName}</span>
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

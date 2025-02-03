import { useEffect, useState } from "react";
import { Navigate, NavLink, useLocation } from "react-router-dom";
import { Spinner } from "../../uiutils/Spinner";

export const DashboardItem = ({ icon, title, path, role }) => {
  const location = useLocation();
  const userRole = role || "";

  
  // const [loading, setIsLoading] = useState(true);

  
  // const restrictedPaths = ["/students", "/teachers", "/addstudent", "/addteacher", "/addbook"];
  // const isNotAccessible = userRole !== "ROLE_LIBRARIAN" && restrictedPaths.includes(location.pathname);

  
  // useEffect(() => {
  //   const timer = setTimeout(() => setIsLoading(false), 500); 
  //   return () => clearTimeout(timer); 
  // }, []);

  
  // if (loading) {
  //   return <Spinner />;
  // }

  
  // if (isNotAccessible) {
  //   return <Navigate to="/unauthorized" replace />;
  // }

  return (
    <li className="flex justify-start mb-4 text-center cursor-pointer hover:text-gray-400">
      <span className="text-3xl mr-2">{icon}</span>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `text-2xl ${
            isActive
              ? "scale-110 text-green-500 rounded-md transition-all duration-1000 ease-in-out"
              : ""
          }`
        }
      >
        {title}
      </NavLink>
    </li>
  );
};

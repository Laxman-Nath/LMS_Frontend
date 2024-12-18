import { Navigate, NavLink, useLocation } from "react-router-dom";

export const DashboardItem = ({ icon, title, path, role }) => {
  const location = useLocation();
  const userRole = role || "";

  // console.log(location.pathname);

  // console.log(
  //   "first",
  //   location.pathname === "/students" || location.pathname === "/teachers"
  // );
  // console.log("second", userRole !== "ROLE_LIBRARIAN");

 console.log("Role",role);
  const isNotAccessible =
   role && userRole !== "ROLE_LIBRARIAN" &&
    (location.pathname === "/students" || location.pathname === "/teachers");

    console.log(isNotAccessible);

    if (isNotAccessible) {
      return <Navigate to="/unauthorized" replace />;
    }
    
  return (
    <li className="flex justify-start mb-4 text-center cursor-pointer hover:text-gray-400">
      <span className="text-3xl mr-2">{icon}</span>
      <NavLink
        to={ path }
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

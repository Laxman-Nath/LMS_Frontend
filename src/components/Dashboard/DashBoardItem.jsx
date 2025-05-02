import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const DashboardItem = ({ icon, title, path, role }) => {
  const location = useLocation();
  const userRole = role || "";

  return (
    <li className="mb-3">
      <NavLink
        to={path}
        className={({ isActive }) =>
          `flex items-center gap-10 p-3 rounded-lg transition-all duration-300 ${
            isActive
              ? "bg-[#374151] scale-[1.02] text-blue-400"
              : "text-[#F9FAFB] hover:bg-[#374151] hover:scale-[1.02]"
          }`
        }
      >
        <span className="text-2xl">{icon}</span>
        <span className="text-lg">{title}</span>
      </NavLink>
    </li>
  );
};

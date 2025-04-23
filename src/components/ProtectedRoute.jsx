/* eslint-disable react/prop-types */
// components/ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const ProtectedRoute = ({ element, allowedRoles }) => {
  const { userRole } = useAuth();
  console.log("Role inside protected route", userRole);

  if (!userRole || !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return element;
};

export default ProtectedRoute;

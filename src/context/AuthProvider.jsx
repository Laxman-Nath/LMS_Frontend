import { createContext, useContext, useEffect, useState } from "react";
import { getRole, getToken } from "../utils/Token"; // Utility functions to get role and token
import { UseGetLoggedInUserApi } from "../hooks/queries/UseGetLoggedInUserApi"; // Custom hook to fetch user data
import { Spinner } from "../components/Spinner"; // Loader component

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState("");
  const [loading, setLoading] = useState(true); // Loading state for initial role fetching

  // You can use an API or token to fetch user role
  const { user, isPending, isError, error } = UseGetLoggedInUserApi();
  const token = getToken();
  const role = getRole();

  useEffect(() => {
    console.log("Role:", role);
    console.log("User:", user);
  
    if (role) {
      setUserRole(role);
    } else if (user) {
      setUserRole(user.role);
    }
    setLoading(false);
  }, [role, user]);


  if (loading || isPending) {
    return <Spinner />; // Show spinner if role is being fetched or API is pending
  }

  if (isError) {
    console.error(error); // Handle error properly
    return <div>Error fetching role!</div>;
  }

  return (
    <AuthContext.Provider value={{ userRole }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access user role
export const useAuth = () => {
  return useContext(AuthContext);
};

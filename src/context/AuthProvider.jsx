import { createContext, useContext, useEffect, useState } from "react";
import { getRole, getToken } from "../utils/Token"; // Utility functions to get role and token
import { Spinner } from "../components/Spinner"; // Loader component
import { useNavigate } from "react-router-dom";
import { useGetLoggedInUserApi } from "../hooks/queries/auth/UseGetLoggedInUserApi";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState("");
  const [loading, setLoading] = useState(true); // Loading state for initial role fetching

  // You can use an API or token to fetch user role
  const { user, isPending, isError, error } =useGetLoggedInUserApi();
  const token = getToken();
  const role = getRole();
  const navigate = useNavigate();
  console.log("User inside context:",user);
  

  useEffect(() => {
    if(!token){
      console.log("Inside !token");
      navigate("/login");
      return;
    }
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

import { createContext, useContext, useEffect, useState } from "react";
import { getRole, getToken } from "../utils/Token";
import { UseGetLoggedInUserApi } from "../hooks/queries/UseGetLoggedInUserApi";
import { Spinner } from "../components/Spinner";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState("");

  const role = getRole();
  console.log("Role inside context:", role);

  useEffect(() => {
    if (role) {
      setUserRole(role);
    }
  }, [role]);

  console.log("Role inside context2:",userRole);
  return (
    <AuthContext.Provider value={ {userRole }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

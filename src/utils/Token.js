import { redirect } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const setToken = (token) => {
  localStorage.setItem("token", token);
};
export const getToken = () => {
 const token= localStorage.getItem("token");
 if(isTokenExpired(token) || !token){
  return null;
 }
 return token;
};

export const removeToken = () => {
  return localStorage.removeItem("token");
};

export function checkAuth() {
  const token = getToken();
  if (!token) {
    return redirect("/login");
  }
  return null;
}

export function addRole(roleName) {
  if (roleName) {
    console.log("Role name:", roleName);
    localStorage.setItem("userRole", roleName);
  }
}

export function getRole() {
  const token = getToken();
  if (!token) return null;

  const decodedToken = jwtDecode(token);
  console.log("Decoded", decodedToken);
  console.log("Roles:", decodedToken.roles);
  return decodedToken.roles;
}

export function isTokenExpired(token) {
  if(!token) return true;
  const decodedToken = jwtDecode(token);
  return decodedToken.expiry*1000 < Date.now();
}

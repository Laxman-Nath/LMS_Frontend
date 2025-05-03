import { redirect } from "react-router-dom";
import { UseGetLoggedInUserApi } from "../hooks/queries/UseGetLoggedInUserApi";
import { jwtDecode } from "jwt-decode";

export const setToken = (token) => {
  localStorage.setItem("token", token);
};
export const getToken = () => {
  return localStorage.getItem("token");
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

  const decoded = jwtDecode(token);
  console.log("Decoded",decoded);
  console.log("Roles:",decoded.roles);
  return decoded.roles;
}

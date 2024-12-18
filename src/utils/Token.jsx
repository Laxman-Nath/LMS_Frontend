import { redirect } from "react-router-dom";

export const setToken=(token)=>{
    localStorage.setItem("token",token);
}
export const getToken=()=>{
   return localStorage.getItem("token");
}

export const removeToken=()=>{
    return localStorage.removeItem("token");
}

export function checkAuth() {
    const token = getToken();
    if (!token) {
      return redirect("/login");
    }
    return null;
  }
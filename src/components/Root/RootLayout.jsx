import { Outlet } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";

export const RootLayout = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="z-30">
        <Dashboard />
      </div>
      <div className="bg-secondary h-screen w-screen text-center z-[]  text-white flex flex-wrap justify-center">
        <Outlet />
      </div>
    </div>
  );
};

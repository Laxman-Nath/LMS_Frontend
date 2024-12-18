import { Outlet, useNavigation } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
import { Spinner } from "../Spinner/Spinner";

export const RootLayout = () => {
  // const navigation=useNavigation();
  // if(navigation.state==="loading"){
  //   return <Spinner/>
  // }
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

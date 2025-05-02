import { Outlet, useNavigation } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
import { AuthContext, AuthProvider } from "../../context/AuthProvider";

export const RootLayout = () => {
  // const navigation=useNavigation();
  // if(navigation.state==="loading"){
  //   return <Spinner/>
  // }
  return (
    <AuthProvider>
    <div className="flex justify-center items-center h-screen ">
      <div className="z-30">
        
         <Dashboard />
        
      </div>
      <div className="bg-login h-screen w-screen text-center z-[23]  flex flex-wrap justify-center items-center">
        <Outlet />
      </div>
    </div>
    </AuthProvider>
  );
};

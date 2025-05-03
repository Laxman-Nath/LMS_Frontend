import { Spinner } from "../components/Spinner";
import { UseGetLoggedInUserApi } from "../hooks/queries/UseGetLoggedInUserApi";

export const Home=()=>{
     const { user, isPending, isError, error } = UseGetLoggedInUserApi();
     if(isPending){
        return <Spinner/>
     }
    return (
        // <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-xl text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to LearnHub LMS {user.firstName} {user.lastName}</h1>
            <p className="text-lg text-gray-600 mb-6">
              Your gateway to seamless, smart and interactive learning.<br />
              Start your journey of knowledge and skills today!
            </p>
            
          </div>
        // </div>
      );
}